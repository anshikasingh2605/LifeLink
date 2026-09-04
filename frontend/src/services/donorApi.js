const API_URL = import.meta.env.VITE_API_URL;

/**
 * Get all donors
 * Optional filters:
 * - bloodGroup
 * - city
 */
export const getDonors = async (filters = {}) => {
  const params = new URLSearchParams();

  if (filters.bloodGroup && filters.bloodGroup !== "All") {
    params.append("bloodGroup", filters.bloodGroup);
  }

  if (filters.city && filters.city.trim() !== "") {
    params.append("city", filters.city.trim());
  }

  const query = params.toString();

  const response = await fetch(
    `${API_URL}/donors${query ? `?${query}` : ""}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch donors");
  }

  return response.json();
};

/**
 * Search donors by blood group and city
 */
export const searchDonors = async (bloodGroup, city) => {
  return getDonors({
    bloodGroup,
    city,
  });
};

/**
 * Get a single donor by ID
 */
export const getDonorById = async (id) => {
  const response = await fetch(`${API_URL}/donors/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch donor");
  }

  return response.json();
};

/**
 * Register a new donor
 */
export const registerDonor = async (donorData) => {
  const response = await fetch(`${API_URL}/donors`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(donorData),
  });

  if (!response.ok) {
    throw new Error("Failed to register donor");
  }

  return response.json();
};

/**
 * Alias for pages that use addDonor()
 */
export const addDonor = async (donorData) => {
  return registerDonor(donorData);
};

/**
 * Get platform statistics
 */
export const getStats = async () => {
  const response = await fetch(`${API_URL}/donors/stats`);

  if (!response.ok) {
    throw new Error("Failed to fetch statistics");
  }

  return response.json();
};