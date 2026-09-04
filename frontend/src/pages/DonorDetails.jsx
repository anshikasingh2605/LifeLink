import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MapPin, Phone } from "lucide-react";
import { getDonorById } from "../services/donorApi";

function DonorDetails() {
  // Get donor ID from URL
  const { id } = useParams();

  // Store donor information
  const [donor, setDonor] = useState(null);

  // Store loading and error states
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Get donor details when page loads
  useEffect(() => {
    const fetchDonor = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await getDonorById(id);

        setDonor(data);
      } catch (error) {
        setError("Unable to load donor details.");
      } finally {
        setLoading(false);
      }
    };

    fetchDonor();
  }, [id]);

  // Loading state
  if (loading) {
    return (
      <div className="text-center py-10">
        <p>Loading donor details...</p>
      </div>
    );
  }

  // Error or donor not found
  if (error || !donor) {
    return (
      <div className="max-w-xl mx-auto py-10 text-center">
        <h2 className="text-2xl font-bold mb-3">
          Donor Not Found
        </h2>

        <p className="text-gray-600 mb-5">
          {error || "The donor profile could not be found."}
        </p>

        <Link
          to="/donors"
          className="inline-flex items-center gap-2 bg-gray-200 px-4 py-2 rounded-lg"
        >
          <ArrowLeft size={18} />
          Back to Donors
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto py-8 px-4">

      {/* Back button */}
      <Link
        to="/donors"
        className="inline-flex items-center gap-2 text-gray-600 hover:text-red-600 mb-6"
      >
        <ArrowLeft size={18} />
        Back to Donors
      </Link>

      {/* Donor Card */}
      <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center gap-5 border-b pb-6">

          {/* Blood Group */}
          <div className="w-20 h-20 rounded-full bg-red-600 text-white flex items-center justify-center text-2xl font-bold">
            {donor.bloodGroup}
          </div>

          {/* Donor Name and City */}
          <div>
            <h1 className="text-3xl font-bold">
              {donor.name}
            </h1>

            <div className="flex items-center gap-2 text-gray-600 mt-2">
              <MapPin size={18} />
              <span>{donor.city}</span>
            </div>
          </div>

        </div>

        {/* Donor Information */}
        <div className="grid sm:grid-cols-2 gap-4 mt-6">

          {/* Blood Group */}
          <div className="bg-gray-50 p-4 rounded-xl">
            <p className="text-sm text-gray-500">
              Blood Group
            </p>

            <p className="text-xl font-bold text-red-600">
              {donor.bloodGroup}
            </p>
          </div>

          {/* City */}
          <div className="bg-gray-50 p-4 rounded-xl">
            <p className="text-sm text-gray-500">
              City
            </p>

            <p className="text-lg font-semibold">
              {donor.city}
            </p>
          </div>

          {/* Mobile */}
          <div className="bg-gray-50 p-4 rounded-xl">
            <p className="text-sm text-gray-500">
              Mobile Number
            </p>

            <p className="font-semibold">
              {donor.mobile || "Not available"}
            </p>
          </div>

          {/* Email */}
          <div className="bg-gray-50 p-4 rounded-xl">
            <p className="text-sm text-gray-500">
              Email
            </p>

            <p className="font-semibold break-words">
              {donor.email || "Not available"}
            </p>
          </div>

        </div>

        {/* Contact Button */}
        <div className="mt-6">

          {donor.mobile ? (
            <a
              href={`tel:${donor.mobile}`}
              className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg flex items-center justify-center gap-2 font-semibold"
            >
              <Phone size={18} />
              Contact Donor
            </a>
          ) : (
            <button
              disabled
              className="w-full bg-gray-300 text-gray-600 py-3 rounded-lg flex items-center justify-center gap-2 font-semibold"
            >
              <Phone size={18} />
              Contact Not Available
            </button>
          )}

        </div>

      </div>
    </div>
  );
}

export default DonorDetails;