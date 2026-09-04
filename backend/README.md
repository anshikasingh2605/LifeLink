# 🩸 LifeLink Backend - Complete Beginner's Guide & Project Documentation

Welcome to the **LifeLink Backend** project guide! This guide has been crafted specifically for **students and absolute beginners**. It explains everything from the fundamentals of backend development to the exact, modern architecture implemented in this codebase.

---

## 📑 Table of Contents
1. [What is a Backend? (The Restaurant Analogy)](#1-what-is-a-backend-the-restaurant-analogy)
2. [What Does This LifeLink Backend Do?](#2-what-does-this-lifelink-backend-do)
3. [Technology Stack Explained](#3-technology-stack-explained)
4. [Modern ES Modules (`import` / `export`)](#4-modern-es-modules-import--export)
5. [Actual Project Folder Structure](#5-actual-project-folder-structure)
6. [How a Request Flows (The Request-Response Cycle)](#6-how-a-request-flows-the-request-response-cycle)
7. [Step-by-Step Code Walkthrough (From Scratch)](#7-step-by-step-code-walkthrough-from-scratch)
   - [Step 1: Configuration & Database (`config/connectMongoDB.js`)](#step-1-configuration--database-configconnectmongodbjs)
   - [Step 2: Data Model (`models/Donor.js`)](#step-2-data-model-modelsdonorjs)
   - [Step 3: Modular Controllers (`controllers/`)](#step-3-modular-controllers-controllers)
     - [A. Fetch Donors (`controllers/getDonors.js`)](#a-fetch-donors-controllersgetdonorsjs)
     - [B. Stats & Single Donor (`controllers/getStats.js`)](#b-stats--single-donor-controllersgetstatsjs)
     - [C. Register Donor (`controllers/registerDonor.js`)](#c-register-donor-controllersregisterdonorjs)
   - [Step 4: Route Definitions (`routes/donorRoutes.js`)](#step-4-route-definitions-routesdonorroutesjs)
   - [Step 5: Main Server Entry Point (`index.js`)](#step-5-main-server-entry-point-indexjs)
   - [Step 6: Environment Configuration (`.env`)](#step-6-environment-configuration-env)
8. [API Endpoints Reference](#8-api-endpoints-reference)
9. [How to Run and Test the Backend](#9-how-to-run-and-test-the-backend)
10. [Common Beginner Gotchas & How to Solve Them](#10-common-beginner-gotchas--how-to-solve-them)

---

## 1. What is a Backend? (The Restaurant Analogy)

Imagine you are eating at a restaurant:
- **The Dining Room (Frontend / React)**: You sit down, look at a beautifully formatted menu, and push a button or tell the waiter what you want. This is what users see in their web browser.
- **The Waiter (HTTP Request / API)**: Takes your order from the dining table to the kitchen, and later brings the plate back to you.
- **The Kitchen (Backend / Node.js & Express)**: Takes the order, verifies if it's valid, cooks the food, and formats the result.
- **The Refrigerator / Store Room (Database / MongoDB Atlas)**: Where all the ingredients (data like donor names, blood groups, phone numbers) are permanently stored.

---

## 2. What Does This LifeLink Backend Do?

LifeLink connects voluntary blood donors with people in emergency medical need. The backend provides four core features:
1. **Donor Discovery**: Allows searching for blood donors filtered by **blood group** (e.g. `O+`, `A+`) and **city** (e.g. `Mumbai`, `New Delhi`).
2. **Community Statistics**: Calculates real-time platform metrics (total donors, cities covered, blood types available) for the homepage dashboard.
3. **Donor Profile Lookup**: Retrieves a single donor's full profile by their unique database ID so users can contact them.
4. **Donor Registration**: Validates and saves new voluntary donor registrations securely into the cloud database.

---

## 3. Technology Stack Explained

| Technology | What it is | Why we use it |
|---|---|---|
| **Node.js** | JavaScript Runtime | Allows JavaScript to run on the computer or server rather than just in a browser. |
| **Express.js** | Web Application Framework | Provides simple routing, request parsing, and server creation without complex boilerplate. |
| **MongoDB Atlas** | Cloud NoSQL Database | A managed cloud database that stores data in JSON-like documents. |
| **Mongoose** | Object Data Modeling (ODM) | Enforces schema validation and provides built-in query helper methods (like `.find()`, `.create()`). |
| **cors** | Security Middleware | Allows the frontend React app (running on a different port like 5173) to fetch data from this server (port 5000). |
| **dotenv** | Environment Manager | Reads sensitive credentials (database passwords, port numbers) from a private `.env` file into `process.env`. |

---

## 4. Modern ES Modules (`import` / `export`)

This project uses modern **ECMAScript (ES) Modules** rather than older CommonJS (`require`).

- In CommonJS (Old style):
  ```javascript
  const express = require('express');
  module.exports = app;
  ```
- In ES Modules (Modern style used in this codebase):
  ```javascript
  import express from 'express';
  export default app;
  ```

> 💡 **Important rule in ES Modules**: When importing local files in Node.js, you **must include the `.js` extension** (e.g., `import Donor from "../models/Donor.js"`).

---

## 5. Actual Project Folder Structure

This backend organizes code using modular separation of concerns:

```text
LifeLinkBackend/
├── config/
│   └── connectMongoDB.js     # Dedicated database connection logic
├── controllers/
│   ├── getDonors.js          # Handles fetching & filtering all donors
│   ├── getStats.js           # Handles stats calculation & single donor lookup
│   └── registerDonor.js      # Handles validating and saving a new donor
├── models/
│   └── Donor.js              # Mongoose schema blueprint for donor data
├── routes/
│   └── donorRoutes.js        # Maps API endpoints to their controller functions
├── .env                      # Secret configuration & MongoDB Atlas URI (git-ignored)
├── .env.example              # Template showing what variables are needed
├── index.js                  # Main server entry file (middlewares & port listener)
├── package.json              # Project dependencies, scripts, and module type
└── README.md                 # This documentation
```

---

## 6. How a Request Flows (The Request-Response Cycle)

When someone clicks "Search Donors" on the website:

```text
[ React Frontend ]
       │
       │ 1. HTTP GET /api/donors?bloodGroup=O+&city=Mumbai
       ▼
[ index.js ]
       │ 2. Express receives request, applies cors() and express.json()
       ▼
[ routes/donorRoutes.js ]
       │ 3. Matches route '/' and routes to getDonors controller
       ▼
[ controllers/getDonors.js ]
       │ 4. Extracts query parameters: bloodGroup & city
       │ 5. Creates Mongoose query filter
       ▼
[ models/Donor.js ] ─── queries ───► [ MongoDB Atlas (Cloud) ]
       │
       │ 6. MongoDB returns matching donor records
       ▼
[ controllers/getDonors.js ]
       │ 7. Sends response: res.status(200).json(donors)
       ▼
[ React Frontend ]
       8. Browser displays donor cards on the screen!
```

---

## 7. Step-by-Step Code Walkthrough (From Scratch)

Here is every file in the project, with full code and explanations of every line.

---

### Step 1: Configuration & Database (`config/connectMongoDB.js`)

Instead of writing database connection logic directly inside `index.js`, we keep it in its own file under `config/`. This keeps our server entry file clean and readable.

```javascript
import mongoose from "mongoose";

// Read the database URI from the environment variables
const MONGO_URI = process.env.MONGO_URI || process.env.MONGODB_URI;

const connectMongoDB = () => {
  mongoose
    .connect(MONGO_URI)
    .then(() => {
      console.log('Successfully connected to MongoDB Atlas');
    })
    .catch((err) => {
      console.error('Failed to connect to MongoDB Atlas:', err.message);
      console.log('Please ensure your MONGO_URI in .env has your valid MongoDB Atlas credentials.');
    });
};

export default connectMongoDB;
```

#### What beginners need to understand:
- `mongoose.connect(MONGO_URI)`: Asynchronously connects to MongoDB Atlas.
- `.then(...)`: Runs only when the connection succeeds.
- `.catch(err => ...)`: Catches connection errors (e.g. wrong password or IP whitelist issue) and prints an easy-to-read error message.

---

### Step 2: Data Model (`models/Donor.js`)

In MongoDB, data is stored in **documents** inside **collections**. Mongoose uses a **Schema** as a blueprint to guarantee every donor has valid data.

```javascript
import mongoose from "mongoose";

// Donor Schema definition
const donorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,       // Automatically removes leading/trailing spaces
    },
    bloodGroup: {
      type: String,
      required: true,
      trim: true,       // e.g. "O+", "A-", "AB+"
    },
    city: {
      type: String,
      required: true,
      trim: true,       // e.g. "Mumbai", "Lucknow"
    },
    mobile: {
      type: String,
      required: true,
      trim: true,       // Phone number for contact
    },
    email: {
      type: String,
      trim: true,
      default: '',      // Email is optional, defaults to blank string
    },
  },
  {
    timestamps: true,   // Automatically creates 'createdAt' and 'updatedAt' fields
  }
);

// Create the model from the schema
const Donor = mongoose.model('Donor', donorSchema);
export default Donor;
```

#### What beginners need to understand:
- `required: true`: MongoDB will reject saving any donor if this field is missing.
- `trim: true`: If someone enters `"  Rahul Sharma  "`, it gets cleaned up to `"Rahul Sharma"`.
- `timestamps: true`: Adds date timestamps automatically when a donor is created or updated.

---

### Step 3: Modular Controllers (`controllers/`)

Instead of cramming every endpoint into one giant file, the controllers are split into distinct, single-responsibility files.

#### A. Fetch Donors (`controllers/getDonors.js`)
Handles `GET /api/donors` with optional query parameters `?bloodGroup=...` and `?city=...`.

```javascript
import Donor from "../models/Donor.js";

// Get all donors with optional filters (bloodGroup, city)
const getDonors = async (req, res) => {
  try {
    const { bloodGroup, city } = req.query;
    const filter = {};

    // If bloodGroup is given and isn't "All", add it to filter
    if (bloodGroup && bloodGroup !== 'All') {
      filter.bloodGroup = bloodGroup;
    }

    // If city is given, do a case-insensitive search (regex)
    if (city && city.trim() !== '') {
      filter.city = { $regex: new RegExp(city.trim(), 'i') };
    }

    // Query MongoDB and sort newest first
    const donors = await Donor.find(filter).sort({ createdAt: -1 });
    res.status(200).json(donors);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch donors', error: error.message });
  }
};

export default getDonors;
```

**Key concept:**
- `req.query`: Reads query parameters from the URL. Example: in `/api/donors?bloodGroup=O+`, `req.query.bloodGroup` is `"O+"`.
- `$regex: new RegExp(city.trim(), 'i')`: Makes the city search case-insensitive so searching `"delhi"` matches `"New Delhi"`.

---

#### B. Stats & Single Donor (`controllers/getStats.js`)
Handles `GET /api/donors/stats` and `GET /api/donors/:id`.

```javascript
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

export default getStats;
```

**Key concept:**
- `Donor.countDocuments()`: Returns the total count of donors in the database.
- `Donor.distinct('city')`: Finds all unique cities without duplicates.
- `req.params.id`: Extracts the dynamic `:id` portion from the URL (e.g., `/api/donors/66d0123...`).

---

#### C. Register Donor (`controllers/registerDonor.js`)
Handles `POST /api/donors` to register a new voluntary donor.

```javascript
import Donor from "../models/Donor.js";

// Register a new donor
const registerDonor = async (req, res) => {
  try {
    const { name, bloodGroup, city, mobile, email } = req.body;

    // Validate that required fields are provided
    if (!name || !bloodGroup || !city || !mobile) {
      return res.status(400).json({
        message: 'Please provide all required fields: name, bloodGroup, city, mobile',
      });
    }

    // Create and save new document in MongoDB
    const newDonor = await Donor.create({
      name,
      bloodGroup,
      city,
      mobile,
      email: email || '',
    });

    // Return status 201 (Created) with the saved donor
    res.status(201).json(newDonor);
  } catch (error) {
    res.status(400).json({ message: 'Failed to register donor', error: error.message });
  }
};

export default registerDonor;
```

**Key concept:**
- `req.body`: Contains the JSON object submitted by the React registration form.
- `res.status(201)`: In HTTP standards, `201` means "Resource Created Successfully".
- `res.status(400)`: Means "Bad Request" (e.g., user forgot to fill in their phone number).

---

### Step 4: Route Definitions (`routes/donorRoutes.js`)

Routes connect incoming HTTP request paths to their corresponding controller functions.

```javascript
import express from 'express';
import getStats, { getDonorById } from '../controllers/getStats.js';
import getDonors from '../controllers/getDonors.js';
import registerDonor from '../controllers/registerDonor.js';

const donorRoutes = express.Router();

// ⚠️ CRITICAL LESSON FOR BEGINNERS:
// Route ordering matters! /stats MUST be placed before /:id
// If /:id was first, Express would treat "stats" as an ID and fail!
donorRoutes.get('/stats', getStats);

// Route to get all donors (with optional ?bloodGroup=&city=)
donorRoutes.get('/', getDonors);

// Route to get a single donor by ID
donorRoutes.get('/:id', getDonorById);

// Route to register a new voluntary donor
donorRoutes.post('/', registerDonor);

export default donorRoutes;
```

---

### Step 5: Main Server Entry Point (`index.js`)

This is the starting file that ties everything together and launches the web server.

```javascript
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import donorRoutes from './routes/donorRoutes.js';
import connectMongoDB from './config/connectMongoDB.js';

// Load variables from .env
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());          // Allows requests from frontend origin (e.g. port 5173)
app.use(express.json());  // Parses incoming JSON data in req.body

// Routes
// Mounts all donor routes under the /api/donors prefix
app.use('/api/donors', donorRoutes);

// Health check endpoint to quickly test if server is responding
app.get('/', (req, res) => {
  res.send('LifeLink API is running');
});

// Connect to MongoDB Atlas
connectMongoDB();

// Start listening for requests on PORT
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```

#### What happens during startup:
1. `dotenv.config()` loads your database credentials.
2. `app.use(cors())` enables cross-origin communication.
3. `app.use(express.json())` enables parsing JSON bodies.
4. `app.use('/api/donors', donorRoutes)` binds all donor routes to `/api/donors`.
5. `connectMongoDB()` initiates the connection to MongoDB Atlas.
6. `app.listen(PORT)` opens the port and starts listening for HTTP traffic!

---

### Step 6: Environment Configuration (`.env`)

In the root of `LifeLinkBackend/`, create a file named `.env`:

```env
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/lifelink?retryWrites=true&w=majority
```

> 🔒 **Security Notice**: Never upload `.env` to GitHub. The password inside allows full access to your cloud database. Always include `.env` in your `.gitignore` file.

---

## 8. API Endpoints Reference

Base URL: `http://localhost:5000/api/donors`

| HTTP Method | Endpoint | Query / Body Parameters | Response | Purpose |
|---|---|---|---|---|
| `GET` | `/api/donors` | `?bloodGroup=A+&city=Mumbai` *(optional)* | `200 OK` (Array of donors) | Lists donors matching filters, or all donors if no filter |
| `GET` | `/api/donors/stats` | None | `200 OK` (`{ totalDonors, citiesCovered, bloodGroups }`) | Dashboard statistics |
| `GET` | `/api/donors/:id` | `:id` in URL path | `200 OK` (Single donor object) or `404 Not Found` | Retrieves donor profile |
| `POST` | `/api/donors` | Body: `{ name, bloodGroup, city, mobile, email }` | `201 Created` (Saved donor object) | Registers a new donor |

---

## 9. How to Run and Test the Backend

### 1. Install Dependencies
Open your terminal in `LifeLinkBackend/` and run:
```bash
npm install
```

### 2. Verify `.env` File
Make sure your `.env` contains your valid MongoDB Atlas connection string.

### 3. Start the Server
- Normal run:
  ```bash
  npm start
  ```
- Development run (with auto-reload on code change):
  ```bash
  npm run dev
  ```

You should see in your terminal:
```text
Server is running on port 5000
Successfully connected to MongoDB Atlas
```

### 4. Quick Testing in Your Browser
Open your browser and test these URLs directly:
- `http://localhost:5000/` &rarr; Displays `"LifeLink API is running"`
- `http://localhost:5000/api/donors` &rarr; Displays JSON list of all donors
- `http://localhost:5000/api/donors/stats` &rarr; Displays platform counts

---

## 10. Common Beginner Gotchas & How to Solve Them

### Gotcha 1: Missing `.js` in Local Imports
- **Symptom**: `Cannot find module './routes/donorRoutes'`
- **Reason**: In ES Modules (`"type": "module"`), Node.js requires explicit file extensions for local relative imports.
- **Fix**: Always write `import donorRoutes from './routes/donorRoutes.js'`.

### Gotcha 2: Route Order Collision (`/stats` vs `/:id`)
- **Symptom**: `Cast to ObjectId failed for value "stats"`
- **Reason**: In Express, routes are matched in order. If `/:id` is declared above `/stats`, Express assumes `"stats"` is a database ID!
- **Fix**: Always declare fixed routes (`/stats`) **before** dynamic parameter routes (`/:id`).

### Gotcha 3: CORS Error in Browser Console
- **Symptom**: `Access to fetch has been blocked by CORS policy`
- **Reason**: The browser prevents a website on `http://localhost:5173` from accessing an API on `http://localhost:5000` without permission.
- **Fix**: Ensure `app.use(cors())` is placed before any routes in `index.js`.

### Gotcha 4: MongoDB Atlas Bad Authentication
- **Symptom**: `MongoServerError: bad auth : Authentication failed`
- **Reason**: The username or password in `MONGO_URI` inside `.env` is incorrect.
- **Fix**: Go to MongoDB Atlas &rarr; Database Access &rarr; Update password &rarr; Paste new password into `.env`.

### Gotcha 5: Port Already in Use
- **Symptom**: `Error: listen EADDRINUSE: address already in use :::5000`
- **Reason**: Another terminal or background process is already running on port 5000.
- **Fix**: Kill the running process or change `PORT=5001` in your `.env`.

---

🎓 **Happy Coding!** You now have a complete understanding of how this modern Node.js + Express + MongoDB Atlas backend works from top to bottom.
