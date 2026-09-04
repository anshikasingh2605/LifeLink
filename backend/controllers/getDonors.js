
import Donor from "../models/Donor.js";


// Get all donors with optional filters (bloodGroup, city)
 const getDonors = async (req, res) => {
  try {
    const { bloodGroup, city } = req.query;
    const filter = {};

    if (bloodGroup && bloodGroup !== 'All') {
      filter.bloodGroup = bloodGroup;
    }

    if (city && city.trim() !== '') {
      filter.city = { $regex: new RegExp(city.trim(), 'i') };
    }

    const donors = await Donor.find(filter).sort({ createdAt: -1 });
    res.status(200).json(donors);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch donors', error: error.message });
  }
};


export default getDonors