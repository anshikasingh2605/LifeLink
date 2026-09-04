

import Donor from "../models/Donor.js";


// Register a new donor
 const registerDonor = async (req, res) => {
  try {
    const { name, bloodGroup, city, mobile, email } = req.body;

    if (!name || !bloodGroup || !city || !mobile) {
      return res.status(400).json({
        message: 'Please provide all required fields: name, bloodGroup, city, mobile',
      });
    }

    const newDonor = await Donor.create({
      name,
      bloodGroup,
      city,
      mobile,
      email: email || '',
    });

    res.status(201).json(newDonor);
  } catch (error) {
    res.status(400).json({ message: 'Failed to register donor', error: error.message });
  }
};

export default registerDonor;