import express from 'express'
import getStats, { getDonorById } from '../controllers/getStats.js';
import getDonors from '../controllers/getDonors.js';
import registerDonor from '../controllers/registerDonor.js';
const donorRoutes = express.Router();




// Route to get community statistics (must be before /:id)
donorRoutes.get('/stats', getStats);

// Route to get all donors (with optional ?bloodGroup=&city=)
donorRoutes.get('/', getDonors);

// Route to get a single donor by ID
donorRoutes.get('/:id', getDonorById);

// Route to register a new voluntary donor
donorRoutes.post('/', registerDonor);

export default donorRoutes;
