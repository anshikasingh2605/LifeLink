
import Donor from "../models/Donor.js";

// Get platform statistics
const getStats = async (req, res) => {
  try {
    const totalDonors = await Donor.countDocuments();
    const citiesCovered = (await Donor.distinct('city')).length;
    const bloodGroups = (await Donor.distinct('bloodGroup')).length;

    res.status(200).json({
      totalDonors,
      citiesCovered,
      bloodGroups,
    });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch statistics', error: error.message });
  }
};

// Get single donor by ID
export const getDonorById = async (req, res) => {
  try {
    const donor = await Donor.findById(req.params.id);

    if (!donor) {
      return res.status(404).json({ message: 'Donor not found' });
    }

    res.status(200).json(donor);
  } catch (error) {
    res.status(404).json({ message: 'Donor not found', error: error.message });
  }
};

export default getStats