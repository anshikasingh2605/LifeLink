import React, { useEffect, useState } from "react";
import DonorCard from "../components/DonorCard";
import Loading from "../components/loading";
import { getDonors } from "../services/donorApi";
import { Users } from "lucide-react";

function Donors() {
  // Store all donors
  const [donors, setDonors] = useState([]);

  // Store loading and error states
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Get donors when page loads
  useEffect(() => {
    const fetchDonors = async () => {
      try {
        setLoading(true);
        setError("");

        // Get donors from backend
        const data = await getDonors();

        setDonors(Array.isArray(data) ? data : []);
      } catch (error) {
        setError("Unable to load donors. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchDonors();
  }, []);

  // Loading state
  if (loading) {
    return (
      <div className="text-center py-10">
        <Loading message="Loading donor community..." />
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="max-w-xl mx-auto py-10 text-center">
        <h2 className="text-2xl font-bold mb-3">
          Unable to Load Donors
        </h2>

        <p className="text-red-600 mb-4">
          {error}
        </p>

        <button
          onClick={() => window.location.reload()}
          className="bg-red-600 text-white px-5 py-2 rounded-lg"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto py-8 px-4">

      {/* Page Header */}
      <div className="mb-8">

        <div className="flex items-center gap-2 text-red-600 mb-2">
          <Users size={20} />

          <span className="font-semibold">
            Voluntary LifeSavers
          </span>
        </div>

        <h1 className="text-3xl font-bold">
          Our Donor Community
        </h1>

        <p className="text-gray-600 mt-2">
          Explore registered blood donors who are ready to help.
        </p>

      </div>

      {/* No donors */}
      {donors.length === 0 ? (
        <div className="text-center py-10">
          <h2 className="text-xl font-bold">
            No Donors Found
          </h2>

          <p className="text-gray-600 mt-2">
            No donors have registered yet.
          </p>
        </div>
      ) : (
        <div>

          {/* Donor Count */}
          <p className="text-gray-600 mb-4">
            Showing{" "}
            <span className="font-bold text-red-600">
              {donors.length}
            </span>{" "}
            donors
          </p>

          {/* Donor Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {donors.map((donor) => (
              <DonorCard
                key={donor._id || donor.id}
                donor={donor}
              />
            ))}

          </div>

        </div>
      )}

    </div>
  );
}

export default Donors;