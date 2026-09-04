import React, { useState } from "react";
import { Link } from "react-router-dom";
import BloodGroupSelector from "../components/BloodGroupSelector";
import Button from "../components/Button";
import ErrorMessage from "../components/ErrorMessage";
import { addDonor } from "../services/donorApi";

export default function BecomeDonor() {
  const [formData, setFormData] = useState({
    name: "",
    bloodGroup: "",
    city: "",
    mobile: "",
    email: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleBloodGroupSelect = (bloodGroup) => {
    setFormData((previous) => ({
      ...previous,
      bloodGroup,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!formData.name.trim()) {
      setError("Please enter your full name.");
      return;
    }

    if (!formData.bloodGroup) {
      setError("Please select your blood group.");
      return;
    }

    if (!formData.city.trim()) {
      setError("Please enter your city.");
      return;
    }

    if (!formData.mobile.trim()) {
      setError("Please enter your mobile number.");
      return;
    }

    setLoading(true);

    try {
      await addDonor(formData);
      setSuccess(true);
    } catch (err) {
      console.error("Error registering donor:", err);
      setError("Unable to register as a donor. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="max-w-2xl mx-auto py-16 px-4 text-center">
        <div className="bg-green-50 border border-green-200 rounded-2xl p-8">
          <div className="text-5xl mb-4">❤️</div>

          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            Thank You for Becoming a Donor!
          </h1>

          <p className="text-gray-600 mb-8">
            Your donor registration has been submitted successfully.
            Your contribution can help save lives.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/find-donor">
              <Button variant="primary">
                Find Donors
              </Button>
            </Link>

            <Link to="/">
              <Button variant="outline">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <div className="text-center mb-10">
        <p className="text-red-600 font-semibold mb-2">
          Voluntary Registration
        </p>

        <h1 className="text-4xl font-bold text-gray-900">
          Become a Blood Donor ❤️
        </h1>

        <p className="text-gray-600 mt-3">
          Register yourself as a voluntary donor and help someone in need.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8">
        {error && (
          <div className="mb-6">
            <ErrorMessage
              message={error}
              onRetry={() => setError("")}
            />
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <BloodGroupSelector
            selectedGroup={formData.bloodGroup}
            onSelectGroup={handleBloodGroupSelect}
            includeAll={false}
          />

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              City
            </label>

            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Enter your city"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Mobile Number
            </label>

            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Enter your mobile number"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <Button
            type="submit"
            variant="primary"
            disabled={loading}
            className="w-full"
          >
            {loading ? "Registering..." : "Register as Voluntary Donor"}
          </Button>
        </form>
      </div>
    </div>
  );
}