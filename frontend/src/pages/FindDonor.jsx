import React, { useState } from "react";
import SearchForm from "../components/SearchForm";
import DonorCard from "../components/DonorCard";
import Loading from "../components/loading";
import { searchDonors } from "../services/donorApi";

function FindDonor() {
  // Store search results
  const [donors, setDonors] = useState([]);

  // Page states
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  // Store the last search
  const [lastSearch, setLastSearch] = useState({
    bloodGroup: "",
    city: "",
  });

  // Search donors
  const handleSearch = async ({ bloodGroup, city }) => {
    try {
      setLoading(true);
      setError("");
      setHasSearched(true);

      // Save search values for retry
      setLastSearch({ bloodGroup, city });

      // Call backend API
      const data = await searchDonors(bloodGroup, city);

      setDonors(Array.isArray(data) ? data : []);
    } catch (error) {
      setError("Unable to find donors. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Try the previous search again
  const handleRetry = () => {
    handleSearch(lastSearch);
  };

  return (
    <div className="max-w-5xl mx-auto py-8 px-4">

      {/* Page Heading */}
      <div className="mb-8">

        <h1 className="text-3xl font-bold">
          Find a Blood Donor
        </h1>

        <p className="text-gray-600 mt-2">
          Search for blood donors by blood group and city.
        </p>

      </div>

      {/* Search Form */}
      <SearchForm onSearch={handleSearch} />

      {/* Loading */}
      {loading && (
        <div className="py-8">
          <Loading message="Finding donors..." />
        </div>
      )}

      {/* Error */}
      {!loading && error && (
        <div className="text-center py-8">

          <p className="text-red-600 mb-4">
            {error}
          </p>

          <button
            onClick={handleRetry}
            className="bg-red-600 text-white px-5 py-2 rounded-lg"
          >
            Try Again
          </button>

        </div>
      )}

      {/* Before Search */}
      {!loading && !error && !hasSearched && (
        <div className="text-center py-10">

          <h2 className="text-xl font-bold">
            Search for a Donor
          </h2>

          <p className="text-gray-600 mt-2">
            Select a blood group and enter a city to find donors.
          </p>

        </div>
      )}

      {/* Search Results */}
      {!loading && !error && hasSearched && (
        <div className="mt-8">

          <h2 className="text-xl font-bold mb-5">
            {donors.length} Donor(s) Found
          </h2>

          {/* No Results */}
          {donors.length === 0 ? (
            <div className="text-center py-10">

              <h3 className="text-lg font-bold">
                No donors found
              </h3>

              <p className="text-gray-600 mt-2">
                Try another blood group or city.
              </p>

            </div>
          ) : (
            /* Results */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

              {donors.map((donor) => (
                <DonorCard
                  key={donor._id || donor.id}
                  donor={donor}
                />
              ))}

            </div>
          )}

        </div>
      )}

    </div>
  );
}

export default FindDonor;