# LifeLink -- Blood Donor Finder

> **Find a donor. Offer help. Save a life.**

LifeLink is a beginner-friendly MERN project designed to demonstrate how
a React frontend communicates with a backend API to manage blood-donor
information.

This document explains how to create the **LifeLink frontend from
scratch**, what each step does, why we do it, how the folders work, how
React pages and components work, and how the frontend will communicate
with the backend.

The documentation is intentionally written for students who are learning
MERN for the first time.

------------------------------------------------------------------------

# Table of Contents

1.  [What is LifeLink?](#1-what-is-lifelink)
2.  [What is MERN?](#2-what-is-mern)
3.  [What are we building first?](#3-what-are-we-building-first)
4.  [Prerequisites](#4-prerequisites)
5.  [Installing Node.js](#5-installing-nodejs)
6.  [Checking Node.js and npm](#6-checking-nodejs-and-npm)
7.  [Creating the React Project with
    Vite](#7-creating-the-react-project-with-vite)
8.  [Understanding the Vite Command](#8-understanding-the-vite-command)
9.  [Opening the Project](#9-opening-the-project)
10. [Understanding the Initial Vite
    Project](#10-understanding-the-initial-vite-project)
11. [Installing Project
    Dependencies](#11-installing-project-dependencies)
12. [Starting the Development
    Server](#12-starting-the-development-server)
13. [Understanding localhost](#13-understanding-localhost)
14. [Understanding React](#14-understanding-react)
15. [Understanding JSX](#15-understanding-jsx)
16. [Understanding Components](#16-understanding-components)
17. [Creating the LifeLink Folder
    Structure](#17-creating-the-lifelink-folder-structure)
18. [Components vs Pages](#18-components-vs-pages)
19. [Creating the Navbar](#19-creating-the-navbar)
20. [Creating the Footer](#20-creating-the-footer)
21. [Creating Reusable Buttons](#21-creating-reusable-buttons)
22. [Creating the Blood Group
    Selector](#22-creating-the-blood-group-selector)
23. [Creating Donor Cards](#23-creating-donor-cards)
24. [Creating Loading, Error, and Empty
    States](#24-creating-loading-error-and-empty-states)
25. [Creating Pages](#25-creating-pages)
26. [Home Page](#26-home-page)
27. [Find Donor Page](#27-find-donor-page)
28. [Donor Community Page](#28-donor-community-page)
29. [Donor Details Page](#29-donor-details-page)
30. [Become a Donor Page](#30-become-a-donor-page)
31. [404 / Not Found Page](#31-404--not-found-page)
32. [React Router](#32-react-router)
33. [Understanding `App.jsx`](#33-understanding-appjsx)
34. [Understanding `main.jsx`](#34-understanding-mainjsx)
35. [Understanding State with
    `useState`](#35-understanding-state-with-usestate)
36. [Understanding `useEffect`](#36-understanding-useeffect)
37. [Understanding Props](#37-understanding-props)
38. [Understanding Forms](#38-understanding-forms)
39. [Understanding API Calls](#39-understanding-api-calls)
40. [Creating the API Service](#40-creating-the-api-service)
41. [Why We Do Not Keep Dummy Donor
    Data](#41-why-we-do-not-keep-dummy-donor-data)
42. [Environment Variables](#42-environment-variables)
43. [Frontend and Backend
    Communication](#43-frontend-and-backend-communication)
44. [LifeLink API Contract](#44-lifelink-api-contract)
45. [How Donor Registration Works](#45-how-donor-registration-works)
46. [How Donor Search Works](#46-how-donor-search-works)
47. [How Statistics Work](#47-how-statistics-work)
48. [Error Handling](#48-error-handling)
49. [Git and GitHub](#49-git-and-github)
50. [Recommended `.gitignore`](#50-recommended-gitignore)
51. [Running the Project](#51-running-the-project)
52. [Common Beginner Errors](#52-common-beginner-errors)
53. [Project Flow](#53-project-flow)
54. [What Students Learn from This
    Project](#54-what-students-learn-from-this-project)
55. [Backend – What We Build Next](#55-backend--what-we-build-next)
56. [Creating the Backend Folder](#56-creating-the-backend-folder)
57. [Initializing the Node.js Backend](#57-initializing-the-nodejs-backend)
58. [Installing Backend Packages](#58-installing-backend-packages)
59. [Understanding the Backend Packages](#59-understanding-the-backend-packages)
60. [Backend Folder Structure](#60-backend-folder-structure)
61. [Understanding the Backend Request Flow](#61-understanding-the-backend-request-flow)
62. [Creating `server.js`](#62-creating-serverjs)
63. [Understanding `express()`](#63-understanding-express)
64. [Understanding Middleware](#64-understanding-middleware)
65. [Creating the Backend Environment File](#65-creating-the-backend-environment-file)
66. [Understanding MongoDB](#66-understanding-mongodb)
67. [MongoDB Database and Collection](#67-mongodb-database-and-collection)
68. [Connecting Mongoose to MongoDB](#68-connecting-mongoose-to-mongodb)
69. [Creating the Donor Model](#69-creating-the-donor-model)
70. [What is a Schema?](#70-what-is-a-schema)
71. [Creating Donor Routes](#71-creating-donor-routes)
72. [Connecting Donor Routes to Express](#72-connecting-donor-routes-to-express)
73. [Creating Donor Controllers](#73-creating-donor-controllers)
74. [Getting All Donors](#74-getting-all-donors)
75. [Searching Donors with Query Parameters](#75-searching-donors-with-query-parameters)
76. [Understanding Query Parameters](#76-understanding-query-parameters)
77. [Getting One Donor](#77-getting-one-donor)
78. [Understanding Route Parameters](#78-understanding-route-parameters)
79. [Creating the Statistics Endpoint](#79-creating-the-statistics-endpoint)
80. [How Statistics Can Be Calculated](#80-how-statistics-can-be-calculated)
81. [The Five LifeLink APIs](#81-the-five-lifelink-apis)
82. [API #1 – POST `/api/donors`](#82-api-1--post-apidonors)
83. [API #2 – GET `/api/donors`](#83-api-2--get-apidonors)
84. [API #3 – Search Donors](#84-api-3--search-donors)
85. [API #4 – GET `/api/donors/:id`](#85-api-4--get-apidonorsid)
86. [API #5 – GET `/api/donors/stats`](#86-api-5--get-apidonorsstats)
87. [Backend Validation](#87-backend-validation)
88. [Frontend Validation vs Backend Validation](#88-frontend-validation-vs-backend-validation)
89. [HTTP Status Codes](#89-http-status-codes)
90. [Testing the Backend Before Connecting React](#90-testing-the-backend-before-connecting-react)
91. [Testing APIs with Postman](#91-testing-apis-with-postman)
92. [Testing the Complete Application](#92-testing-the-complete-application)
93. [What Happens When a Student Adds a Donor?](#93-what-happens-when-a-student-adds-a-donor)
94. [What Happens When a Student Searches?](#94-what-happens-when-a-student-searches)
95. [What Happens When a Student Opens Donor Details?](#95-what-happens-when-a-student-opens-donor-details)
96. [Why the Frontend Should Not Connect Directly to MongoDB](#96-why-the-frontend-should-not-connect-directly-to-mongodb)
97. [CORS in LifeLink](#97-cors-in-lifelink)
98. [Backend `.gitignore`](#98-backend-gitignore)
99. [Backend `package.json` Scripts](#99-backend-packagejson-scripts)
100. [Frontend and Backend Are Separate npm Projects](#100-frontend-and-backend-are-separate-npm-projects)
101. [Complete LifeLink Repository](#101-complete-lifelink-repository)
102. [The Full MERN Architecture](#102-the-full-mern-architecture)
103. [Beginner CRUD Concept](#103-beginner-crud-concept)
104. [Why API Services Are Useful](#104-why-api-services-are-useful)
105. [Separation of Concerns in LifeLink](#105-separation-of-concerns-in-lifelink)
106. [Recommended Learning Order for Students](#106-recommended-learning-order-for-students)
107. [Beginner Debugging Strategy](#107-beginner-debugging-strategy)
108. [Common Backend Errors](#108-common-backend-errors)
109. [Frontend 404 vs Backend 404](#109-frontend-404-vs-backend-404)
110. [Development Ports](#110-development-ports)
111. [Final Backend Checklist](#111-final-backend-checklist)
112. [Final Student Exercise](#112-final-student-exercise)
113. [Final Project Goal](#113-final-project-goal)
114. [Final Checklist](#56-final-checklist)

------------------------------------------------------------------------

# 1. What is LifeLink?

LifeLink is a blood-donor discovery application.

The main idea is simple:

1.  A person can register as a blood donor.
2.  The donor information is stored by the backend.
3.  Another person can search for donors.
4.  The frontend displays donors received from the backend.
5.  A user can open a donor's details.
6.  The home page can display statistics received from the backend.

The application focuses only on blood donation.

It does **not** require:

-   Login
-   Registration accounts
-   JWT authentication
-   Online payments
-   Chat
-   Maps
-   AI
-   Medical compatibility calculations
-   Admin dashboards

This makes LifeLink suitable as a first MERN project.

------------------------------------------------------------------------

# 2. What is MERN?

MERN is a technology stack commonly used to build full-stack web
applications.

MERN stands for:

  Letter   Technology   Purpose
  -------- ------------ ------------------------------------
  M        MongoDB      Database
  E        Express.js   Backend web framework
  R        React        Frontend user interface
  N        Node.js      JavaScript runtime for the backend

The complete application will eventually look like this:

``` text
User
 |
 v
React Frontend
 |
 v
Express API
 |
 v
Node.js
 |
 v
MongoDB
```

### React

React is responsible for what the user sees and interacts with.

Examples:

-   Buttons
-   Forms
-   Cards
-   Navigation
-   Pages
-   Search results

### Node.js

Node.js allows JavaScript to run outside the browser.

We use it to run our backend.

### Express.js

Express makes it easier to create backend API routes.

For example:

``` text
GET /api/donors
```

can return donor information.

### MongoDB

MongoDB stores application data.

For LifeLink, donor records will eventually be stored in MongoDB.

------------------------------------------------------------------------

# 3. What are we building first?

We are starting with the **frontend**.

The frontend is built using:

-   React
-   Vite
-   JavaScript
-   React Router
-   Fetch API
-   Lucide React icons
-   CSS/classes already used by the project

The frontend is intentionally separated from the backend.

Later, the repository can have:

``` text
LifeLink/
├── frontend/
└── backend/
```

This is called a **monorepo-style project structure**, because the
frontend and backend can live in one GitHub repository while remaining
separate applications.

------------------------------------------------------------------------

# 4. Prerequisites

Before starting, install:

1.  Node.js
2.  npm
3.  VS Code
4.  Git
5.  A GitHub account

You do not need to know advanced JavaScript before starting, but basic
knowledge of:

-   variables
-   functions
-   arrays
-   objects
-   `if`
-   loops
-   basic HTML
-   basic CSS

will make React easier to understand.

------------------------------------------------------------------------

# 5. Installing Node.js

Node.js is required because tools such as Vite and npm run through
Node.js.

Install the **LTS version** of Node.js.

After installation, restart VS Code if it was already open.

------------------------------------------------------------------------

# 6. Checking Node.js and npm

Open the VS Code terminal.

Run:

``` bash
node -v
```

This checks the installed Node.js version.

Then:

``` bash
npm -v
```

This checks the installed npm version.

If both commands return version numbers, Node.js and npm are installed
correctly.

Example:

``` text
node -v
v22.x.x

npm -v
10.x.x
```

The exact version numbers may be different.

------------------------------------------------------------------------

# 7. Creating the React Project with Vite

Navigate to the folder where you want to create the project.

Run:

``` bash
npm create vite@latest frontend -- --template react
```

This command creates a React project named:

``` text
frontend
```

After running the command, Vite creates the project structure.

------------------------------------------------------------------------

# 8. Understanding the Vite Command

The command:

``` bash
npm create vite@latest frontend -- --template react
```

looks complicated at first, so let's break it down.

### `npm`

npm is Node Package Manager.

It is used to install and manage JavaScript packages.

### `create`

This tells npm that we want to create a project using a project
generator.

### `vite@latest`

This tells npm to use the latest Vite project creator.

### `frontend`

This is the name of the folder that will be created.

### `--`

The double dash separates npm's arguments from Vite's arguments.

### `--template react`

This tells Vite to create a React project.

So the whole command means:

> Create a new Vite project called `frontend` using the React template.

------------------------------------------------------------------------

# 9. Opening the Project

Move into the project:

``` bash
cd frontend
```

Then open it in VS Code:

``` bash
code .
```

If `code .` is not available, open VS Code manually and choose:

**File → Open Folder → frontend**

------------------------------------------------------------------------

# 10. Understanding the Initial Vite Project

A new Vite React project initially contains files similar to:

``` text
frontend/
├── public/
├── src/
│   ├── assets/
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

Some files may differ depending on the Vite version and template.

We will remove unnecessary starter code and create our own LifeLink
structure.

------------------------------------------------------------------------

# 11. Installing Project Dependencies

Inside the `frontend` directory, first install the dependencies:

``` bash
npm install
```

Then install the packages required by LifeLink:

``` bash
npm install react-router-dom lucide-react
```

### `react-router-dom`

This allows us to create multiple pages/routes in a React application.

For example:

``` text
/
 /find-donor
 /donors
 /donors/:id
 /become-donor
```

### `lucide-react`

This provides reusable icons such as:

-   Search
-   Heart
-   MapPin
-   Phone
-   User
-   ArrowRight

------------------------------------------------------------------------

# 12. Starting the Development Server

Run:

``` bash
npm run dev
```

Vite will start a development server.

You will normally see an address similar to:

``` text
http://localhost:5173
```

Open that address in your browser.

------------------------------------------------------------------------

# 13. Understanding localhost

`localhost` means:

> This computer.

For example:

``` text
http://localhost:5173
```

means the React development server is running on your own computer.

The number:

``` text
5173
```

is the port used by the Vite development server in a typical setup.

Later, our backend can run on another port, for example:

``` text
http://localhost:5000
```

So we can have:

``` text
Frontend:
http://localhost:5173

Backend:
http://localhost:5000
```

These are two different servers running on the same computer.

------------------------------------------------------------------------

# 14. Understanding React

React is a JavaScript library for building user interfaces.

Instead of creating one huge HTML file, React allows us to divide the UI
into reusable pieces called **components**.

For example:

``` text
Website
├── Navbar
├── Home
│   ├── Hero
│   └── Statistics
└── Footer
```

Each part can be represented by React components.

------------------------------------------------------------------------

# 15. Understanding JSX

React commonly uses JSX.

JSX looks similar to HTML:

``` jsx
<h1>Welcome to LifeLink</h1>
```

But JSX is written inside JavaScript files.

Example:

``` jsx
function Welcome() {
  return <h1>Welcome to LifeLink</h1>;
}
```

This is a React component.

JSX allows us to combine:

-   JavaScript
-   HTML-like markup
-   expressions
-   component logic

------------------------------------------------------------------------

# 16. Understanding Components

A component is a reusable piece of UI.

Example:

``` jsx
function Button() {
  return <button>Click Me</button>;
}
```

We can use it elsewhere:

``` jsx
<Button />
```

Instead of writing the same button HTML repeatedly.

This is one of the most important ideas in React:

> Build small reusable components and combine them to create pages.

------------------------------------------------------------------------

# 17. Creating the LifeLink Folder Structure

Our final frontend structure is:

``` text
frontend/
├── public/
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── DonorCard.jsx
│   │   ├── StatCard.jsx
│   │   ├── BloodGroupSelector.jsx
│   │   ├── SearchForm.jsx
│   │   ├── Loading.jsx
│   │   ├── ErrorMessage.jsx
│   │   ├── EmptyState.jsx
│   │   └── Button.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── FindDonor.jsx
│   │   ├── Donors.jsx
│   │   ├── DonorDetails.jsx
│   │   ├── BecomeDonor.jsx
│   │   └── NotFound.jsx
│   │
│   ├── services/
│   │   └── donorApi.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .env
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

------------------------------------------------------------------------

# 18. Components vs Pages

This distinction is very important.

## Components

Components are reusable UI pieces.

Examples:

``` text
Navbar
Footer
Button
DonorCard
Loading
ErrorMessage
```

A `DonorCard` can be displayed multiple times:

``` text
Donor Community

[Donor Card]
[Donor Card]
[Donor Card]
[Donor Card]
```

We don't need to create four different components.

We reuse one component with different data.

## Pages

Pages represent complete screens/routes.

Examples:

``` text
Home
FindDonor
Donors
DonorDetails
BecomeDonor
NotFound
```

A page can contain multiple components.

For example:

``` text
FindDonor
├── SearchForm
├── Loading
├── ErrorMessage
├── EmptyState
└── DonorCard
```

------------------------------------------------------------------------

# 19. Creating the Navbar

The Navbar is displayed at the top of the application.

It contains links such as:

``` text
Home
Find Donor
Donor Community
Become a Donor
```

The navigation links are **frontend configuration**.

They are not donor data and therefore it is completely normal for them
to be written in the frontend.

Example:

``` jsx
const navLinks = [
  { name: "Home", path: "/" },
  { name: "Find Donor", path: "/find-donor" },
  { name: "Donor Community", path: "/donors" },
  { name: "Become a Donor", path: "/become-donor" }
];
```

This is not database data.

------------------------------------------------------------------------

# 20. Creating the Footer

The Footer is another reusable component.

It can contain:

-   LifeLink information
-   Project information
-   navigation
-   copyright text

The Footer does not need backend data for its static content.

------------------------------------------------------------------------

# 21. Creating Reusable Buttons

Instead of writing many different buttons, we create one reusable Button
component.

For example:

``` jsx
<Button variant="primary">
  Find Donor
</Button>
```

The component can support different variants:

``` text
primary
secondary
outline
ghost
```

These styles are frontend configuration.

They do not need to come from MongoDB.

------------------------------------------------------------------------

# 22. Creating the Blood Group Selector

LifeLink supports the standard blood groups:

``` text
A+
A-
B+
B-
O+
O-
AB+
AB-
```

These values are static application choices.

They are not donor records.

Therefore it is acceptable to define them in the frontend:

``` jsx
const BLOOD_GROUPS = [
  "A+",
  "A-",
  "B+",
  "B-",
  "O+",
  "O-",
  "AB+",
  "AB-"
];
```

The selected blood group is then sent to the backend when searching.

------------------------------------------------------------------------

# 23. Creating Donor Cards

A DonorCard displays donor information received from the backend.

For example, the backend might return:

``` json
{
  "id": "123",
  "name": "Example Donor",
  "bloodGroup": "O+",
  "city": "Lucknow",
  "mobile": "9876543210",
  "email": "example@email.com"
}
```

The React component receives that object through props:

``` jsx
<DonorCard donor={donor} />
```

The component can then display:

``` jsx
donor.name
donor.bloodGroup
donor.city
```

The important principle is:

> The DonorCard does not create donor information. It displays
> information received from the application data source.

------------------------------------------------------------------------

# 24. Creating Loading, Error, and Empty States

A real application needs to handle different states.

## Loading

When the frontend is waiting for the backend:

``` text
Loading...
```

## Error

If the API request fails:

``` text
Unable to connect
Please try again.
```

## Empty

If the backend successfully responds but there are no matching donors:

``` text
No donors found
```

These are different situations:

``` text
Loading ≠ Error ≠ Empty
```

This makes the application easier to understand for users.

------------------------------------------------------------------------

# 25. Creating Pages

LifeLink contains the following pages:

``` text
/
```

Home page.

``` text
/find-donor
```

Search for donors.

``` text
/donors
```

View the donor community.

``` text
/donors/:id
```

View one donor's details.

``` text
/become-donor
```

Register as a donor.

Any unknown URL displays:

``` text
404 Not Found
```

------------------------------------------------------------------------

# 26. Home Page

The Home page introduces LifeLink.

It contains:

-   Hero section
-   Call-to-action buttons
-   Community statistics
-   How It Works section

The statistics should come from the backend.

For example:

``` json
{
  "totalDonors": 245,
  "bloodGroups": 8,
  "citiesCovered": 12
}
```

The frontend should not invent these values.

------------------------------------------------------------------------

# 27. Find Donor Page

The Find Donor page allows a user to search.

The user selects:

``` text
Blood Group
```

and enters:

``` text
City
```

The frontend sends these values to the backend.

For example:

``` text
GET /api/donors?bloodGroup=O+&city=Lucknow
```

The backend performs the search and returns matching donors.

The frontend then displays the results.

------------------------------------------------------------------------

# 28. Donor Community Page

The Donor Community page requests all donors:

``` text
GET /api/donors
```

The backend returns donor records.

React maps over the response:

``` jsx
donors.map((donor) => (
  <DonorCard
    key={donor.id}
    donor={donor}
  />
))
```

If there are 20 donors, React can create 20 cards from the same
component.

------------------------------------------------------------------------

# 29. Donor Details Page

The URL contains the donor ID:

``` text
/donors/123
```

React Router gives the page access to the ID.

The frontend then calls:

``` text
GET /api/donors/123
```

The backend returns that donor.

The page displays the donor details.

------------------------------------------------------------------------

# 30. Become a Donor Page

This page contains a form.

Example fields:

``` text
Full Name
Blood Group
City
Mobile Number
Email Address
```

When the user submits the form, the frontend sends the form data to:

``` text
POST /api/donors
```

The backend is responsible for storing the donor.

The frontend should not store donor records in localStorage as the
application's permanent data source.

------------------------------------------------------------------------

# 31. 404 / Not Found Page

If a user enters an unknown URL:

``` text
/example-page
```

React Router can display the NotFound page.

This is a frontend-only concern and does not require backend data.

------------------------------------------------------------------------

# 32. React Router

React Router allows a React application to show different pages based on
the URL.

Conceptually:

``` text
URL
 |
 +-- /                  -> Home
 |
 +-- /find-donor        -> FindDonor
 |
 +-- /donors            -> Donors
 |
 +-- /donors/:id        -> DonorDetails
 |
 +-- /become-donor      -> BecomeDonor
 |
 +-- *                  -> NotFound
```

The `:id` part is a dynamic route parameter.

For example:

``` text
/donors/123
/donors/456
/donors/789
```

all use the same DonorDetails page, but with different IDs.

------------------------------------------------------------------------

# 33. Understanding `App.jsx`

`App.jsx` is where the application's main routes and common layout can
be connected.

A simplified example:

``` jsx
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/find-donor" element={<FindDonor />} />
      <Route path="/donors" element={<Donors />} />
      <Route path="/donors/:id" element={<DonorDetails />} />
      <Route path="/become-donor" element={<BecomeDonor />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
```

The exact project may also include Navbar and Footer around these
routes.

------------------------------------------------------------------------

# 34. Understanding `main.jsx`

`main.jsx` is the entry point of the React application.

The browser loads the application through this file.

A typical setup uses:

``` jsx
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

### What happens?

1.  `index.html` contains the root element.
2.  `main.jsx` finds that root element.
3.  React starts the application.
4.  `BrowserRouter` enables routing.
5.  `App` renders the application.

------------------------------------------------------------------------

# 35. Understanding State with `useState`

React state stores information that can change while the application is
running.

Example:

``` jsx
const [loading, setLoading] = useState(false);
```

There are two parts:

``` text
loading
```

Current value.

``` text
setLoading
```

Function used to change the value.

For example:

``` jsx
setLoading(true);
```

means:

> The page is now loading.

Later:

``` jsx
setLoading(false);
```

means:

> Loading has finished.

Another example:

``` jsx
const [donors, setDonors] = useState([]);
```

Initially there are no donor records in the React state.

After the backend responds:

``` jsx
setDonors(data);
```

the state contains the data returned by the backend.

------------------------------------------------------------------------

# 36. Understanding `useEffect`

`useEffect` is commonly used when something should happen after a
component renders.

One common use is loading data from an API.

Example:

``` jsx
useEffect(() => {
  fetchDonors();
}, []);
```

The empty dependency array:

``` jsx
[]
```

means the effect normally runs when the component is mounted.

Conceptually:

``` text
Page opens
   ↓
useEffect runs
   ↓
API request
   ↓
Backend response
   ↓
setDonors(data)
   ↓
React updates UI
```

------------------------------------------------------------------------

# 37. Understanding Props

Props allow a parent component to send data to a child component.

Example:

``` jsx
<DonorCard donor={donor} />
```

Here:

``` text
donor
```

is a prop.

Inside DonorCard:

``` jsx
function DonorCard({ donor }) {
  return <h2>{donor.name}</h2>;
}
```

Props allow components to remain reusable.

------------------------------------------------------------------------

# 38. Understanding Forms

A form collects information from the user.

For example:

``` jsx
<input
  name="name"
  value={formData.name}
  onChange={handleChange}
/>
```

The React state stores the current value.

When the user types:

``` text
Anshika
```

the state changes.

When the form is submitted:

``` jsx
<form onSubmit={handleSubmit}>
```

the submit handler sends the data to the API service.

------------------------------------------------------------------------

# 39. Understanding API Calls

An API is a way for two applications or systems to communicate.

Our frontend is one application.

Our backend is another application.

The frontend can send an HTTP request:

``` text
Frontend
   |
   | GET /api/donors
   v
Backend
```

The backend responds:

``` text
Backend
   |
   | JSON data
   v
Frontend
```

JavaScript's `fetch()` can make these requests.

Example:

``` jsx
const response = await fetch(
  "http://localhost:5000/api/donors"
);

const data = await response.json();
```

------------------------------------------------------------------------

# 40. Creating the API Service

Instead of putting `fetch()` code throughout every page, LifeLink keeps
API communication in:

``` text
src/services/donorApi.js
```

This creates a separation between:

``` text
UI code
```

and:

``` text
API communication
```

The service provides functions such as:

``` text
getDonors()
searchDonors()
getDonorById()
registerDonor()
addDonor()
getStats()
```

The pages call these functions rather than writing the complete API URL
repeatedly.

------------------------------------------------------------------------

# 41. Why We Do Not Keep Dummy Donor Data

A beginner project often starts with data such as:

``` js
const donors = [
  {
    name: "Aarav Sharma",
    bloodGroup: "O+"
  }
];
```

This is useful for a temporary UI prototype, but it is not appropriate
once the backend is the real source of data.

For LifeLink, we want:

``` text
Database
   ↓
Backend
   ↓
API
   ↓
donorApi.js
   ↓
React
   ↓
UI
```

Therefore we do **not** keep:

``` text
INITIAL_DONORS
```

in the frontend.

We also do not use:

``` text
localStorage
```

as the permanent donor database.

### What is okay to hard-code?

Static frontend configuration is okay.

Examples:

``` text
Navigation routes
Blood group choices
Button style variants
Static headings
Static explanatory text
```

These are not donor records.

### What should come from the backend?

Examples:

``` text
Donor names
Donor IDs
Donor cities
Donor phone numbers
Donor emails
Number of donors
Number of cities
Statistics
```

These should come from the backend/database.

------------------------------------------------------------------------

# 42. Environment Variables

The frontend needs to know where the backend is running.

Create:

``` text
frontend/.env
```

Add:

``` env
VITE_API_URL=http://localhost:5000/api
```

Vite exposes frontend environment variables only when they begin with:

``` text
VITE_
```

Therefore:

``` text
VITE_API_URL
```

can be read in JavaScript as:

``` js
import.meta.env.VITE_API_URL
```

For example:

``` js
const API_URL = import.meta.env.VITE_API_URL;
```

Then:

``` js
fetch(`${API_URL}/donors`);
```

becomes:

``` text
http://localhost:5000/api/donors
```

Do not put passwords, database credentials, private keys, or backend
secrets into frontend environment variables. Frontend environment
variables are not secret once included in a browser application.

------------------------------------------------------------------------

# 43. Frontend and Backend Communication

The final architecture is:

``` text
                    LIFE LINK

              React Frontend
              localhost:5173
                     |
                     |
                     v
              donorApi.js
                     |
                     |
              HTTP requests
                     |
                     v
              Express Backend
              localhost:5000
                     |
                     v
                  MongoDB
```

The frontend does not directly access MongoDB.

This is extremely important.

The correct flow is:

``` text
React
 ↓
API
 ↓
Backend
 ↓
Database
```

Not:

``` text
React
 ↓
MongoDB
```

------------------------------------------------------------------------

# 44. LifeLink API Contract

The frontend is designed to communicate with these backend endpoints.

## 1. Get all donors

``` text
GET /api/donors
```

Purpose:

> Return all donors.

------------------------------------------------------------------------

## 2. Search donors

``` text
GET /api/donors?bloodGroup=O+&city=Lucknow
```

Purpose:

> Return donors matching the selected blood group and city.

------------------------------------------------------------------------

## 3. Get one donor

``` text
GET /api/donors/:id
```

Example:

``` text
GET /api/donors/123
```

Purpose:

> Return one donor.

------------------------------------------------------------------------

## 4. Register donor

``` text
POST /api/donors
```

The request body contains donor information.

Example:

``` json
{
  "name": "Example Donor",
  "bloodGroup": "O+",
  "city": "Lucknow",
  "mobile": "9876543210",
  "email": "example@email.com"
}
```

The backend stores the donor.

------------------------------------------------------------------------

## 5. Get statistics

``` text
GET /api/donors/stats
```

Expected statistics format for the current frontend:

``` json
{
  "totalDonors": 245,
  "bloodGroups": 8,
  "citiesCovered": 12
}
```

The exact values must come from the backend.

------------------------------------------------------------------------

# 45. How Donor Registration Works

Suppose a user enters:

``` text
Name: Rahul
Blood Group: O+
City: Lucknow
Mobile: 9876543210
Email: rahul@example.com
```

The process is:

``` text
User fills form
       ↓
React stores form values in state
       ↓
User clicks Register
       ↓
BecomeDonor.jsx
       ↓
addDonor(formData)
       ↓
donorApi.js
       ↓
POST /api/donors
       ↓
Backend
       ↓
MongoDB
```

The donor is now stored in the database.

When another page requests donors:

``` text
GET /api/donors
```

the backend returns that donor.

React then displays the returned data.

This means the donor does not have to be manually added to the frontend
code.

------------------------------------------------------------------------

# 46. How Donor Search Works

Suppose the user selects:

``` text
Blood Group: O+
City: Lucknow
```

The frontend creates a request:

``` text
GET /api/donors?bloodGroup=O+&city=Lucknow
```

The backend receives the request.

The backend searches the database.

The backend returns matching donors.

React displays the returned donors.

The flow is:

``` text
Search Form
    ↓
searchDonors()
    ↓
donorApi.js
    ↓
GET /api/donors?bloodGroup=O+&city=Lucknow
    ↓
Backend
    ↓
MongoDB
    ↓
Matching donors
    ↓
React
    ↓
DonorCard
```

------------------------------------------------------------------------

# 47. How Statistics Work

The Home page calls:

``` text
GET /api/donors/stats
```

The backend calculates statistics from the database.

For example:

``` json
{
  "totalDonors": 25,
  "bloodGroups": 5,
  "citiesCovered": 4
}
```

React stores the response:

``` jsx
setStats(data);
```

The UI displays:

``` text
Total Donors       25
Blood Groups       5
Cities Covered     4
```

The frontend should not use fake fallback values such as:

``` jsx
stats?.bloodGroups || 8
```

if the requirement is that statistics must come from the backend.

Instead:

``` jsx
stats?.bloodGroups
```

should display the backend value.

------------------------------------------------------------------------

# 48. Error Handling

API requests can fail.

Possible reasons include:

-   Backend is not running.
-   Wrong API URL.
-   Wrong endpoint.
-   Server error.
-   Network problem.
-   CORS configuration problem.

The frontend should handle these situations.

Example:

``` jsx
try {
  const data = await getDonors();
  setDonors(data);
} catch (error) {
  setError("Unable to load donors.");
}
```

The UI can then show an ErrorMessage component.

### Important beginner lesson

A `404` means:

> The requested URL/route was not found.

A `500` usually means:

> The server encountered an error while processing the request.

A network connection error can mean:

> There is no server listening at the requested address/port.

------------------------------------------------------------------------

# 49. Git and GitHub

Git is a version-control system.

It keeps track of changes to your project.

GitHub is a platform where Git repositories can be stored online.

Typical workflow:

``` bash
git init
```

Initializes a Git repository.

Then:

``` bash
git add .
```

Stages files.

Then:

``` bash
git commit -m "Initial LifeLink frontend"
```

Creates a commit.

Then:

``` bash
git remote add origin <repository-url>
```

connects the local repository to GitHub.

Then:

``` bash
git push -u origin main
```

uploads the commits to GitHub.

------------------------------------------------------------------------

# 50. Recommended `.gitignore`

Create a `.gitignore` file.

For the frontend:

``` gitignore
node_modules/
dist/
.env
```

### Why ignore `node_modules`?

`node_modules` can contain thousands of installed files.

We do not need to upload them to GitHub.

Anyone can recreate them using:

``` bash
npm install
```

### Why ignore `.env`?

Environment files may contain configuration or secrets.

For a public repository, do not upload sensitive credentials.

A safe example file can be:

``` text
.env.example
```

with:

``` env
VITE_API_URL=http://localhost:5000/api
```

------------------------------------------------------------------------

# 51. Running the Project

Every time you clone the project on a new computer:

``` bash
cd frontend
npm install
npm run dev
```

Then open the Vite URL.

Typical development workflow:

``` text
1. Open terminal
2. cd frontend
3. npm install        (needed after cloning)
4. npm run dev
5. Open localhost
```

If dependencies are already installed, you normally only need:

``` bash
npm run dev
```

------------------------------------------------------------------------

# 52. Common Beginner Errors

## Error 1: `npm is not recognized`

Cause:

Node.js/npm is not installed correctly or is not available in the
terminal PATH.

Solution:

Install Node.js and restart the terminal.

------------------------------------------------------------------------

## Error 2: `Failed to fetch`

Possible causes:

-   Backend is not running.
-   API URL is wrong.
-   Network connection failed.

Check:

``` env
VITE_API_URL=http://localhost:5000/api
```

and check whether the backend is running.

------------------------------------------------------------------------

## Error 3: `404 Not Found`

This means the requested route does not exist on the server.

For example:

``` text
GET /api/donors/stats
```

will return 404 if the backend does not implement that route.

------------------------------------------------------------------------

## Error 4: `does not provide an export named 'default'`

Example:

``` text
The requested module does not provide an export named 'default'
```

This usually means the import and export do not match.

For example:

``` jsx
import BecomeDonor from "./pages/BecomeDonor";
```

expects a default export:

``` jsx
export default function BecomeDonor() {
}
```

------------------------------------------------------------------------

## Error 5: Blank white screen

A blank React page often means a JavaScript error stopped the
application from rendering.

Open:

``` text
Browser
→ Right Click
→ Inspect
→ Console
```

Look for the red error.

Do not randomly change multiple files.

Find the first meaningful error and fix it.

------------------------------------------------------------------------

## Error 6: `Failed to load resource`

Open:

``` text
Inspect
→ Network
```

Find the failed request.

Check:

``` text
Request URL
Status Code
```

For example:

``` text
404
```

means the route was not found.

------------------------------------------------------------------------

## Error 7: Backend works but browser says CORS

This usually means the backend has not allowed the frontend's origin.

The backend needs appropriate CORS configuration.

This is a backend configuration issue rather than a React component
issue.

------------------------------------------------------------------------

# 53. Project Flow

The most important thing students should understand is the complete
flow.

## When opening the Home page

``` text
Browser
   ↓
React
   ↓
Home.jsx
   ↓
getStats()
   ↓
donorApi.js
   ↓
GET /api/donors/stats
   ↓
Backend
   ↓
MongoDB
   ↓
Statistics
   ↓
React state
   ↓
StatCard
   ↓
User sees statistics
```

------------------------------------------------------------------------

## When searching for a donor

``` text
User
 ↓
SearchForm
 ↓
FindDonor.jsx
 ↓
searchDonors()
 ↓
donorApi.js
 ↓
GET /api/donors?bloodGroup=...&city=...
 ↓
Backend
 ↓
MongoDB
 ↓
Matching donors
 ↓
React
 ↓
DonorCard
 ↓
User sees results
```

------------------------------------------------------------------------

## When registering a donor

``` text
User
 ↓
BecomeDonor form
 ↓
formData
 ↓
addDonor()
 ↓
donorApi.js
 ↓
POST /api/donors
 ↓
Backend
 ↓
MongoDB
 ↓
Donor stored
```

Later:

``` text
GET /api/donors
 ↓
Backend
 ↓
MongoDB
 ↓
New donor returned
 ↓
React
 ↓
DonorCard
```

------------------------------------------------------------------------

# 54. What Students Learn from This Project

After completing the frontend, students should understand:

## JavaScript

-   Variables
-   Functions
-   Objects
-   Arrays
-   Array methods
-   Destructuring
-   Async/await
-   Promises
-   Modules
-   `try/catch`

## React

-   Components
-   JSX
-   Props
-   State
-   `useState`
-   `useEffect`
-   Event handling
-   Forms
-   Conditional rendering
-   Lists
-   Reusable components

## React Router

-   Routes
-   Links
-   Dynamic routes
-   Route parameters
-   404 routes

## API Concepts

-   HTTP requests
-   GET
-   POST
-   Query parameters
-   URL parameters
-   JSON
-   API responses
-   Error responses
-   Loading states

## Project Architecture

Students learn to separate:

``` text
UI
Components
Pages
API Services
Backend
Database
```

This separation is extremely important in real applications.

------------------------------------------------------------------------

# 55. Next Step: Backend

Once the frontend is complete, create:

``` text
LifeLink/
├── frontend/
└── backend/
```

The backend will use:

``` text
Node.js
Express.js
MongoDB
```

The backend will provide:

``` text
POST /api/donors
GET /api/donors
GET /api/donors/:id
GET /api/donors/stats
```

The frontend has already been prepared to communicate with these
endpoints.

The backend will become responsible for:

-   receiving donor information
-   validating donor information
-   storing donors
-   retrieving donors
-   searching donors
-   calculating statistics

The database becomes the permanent source of donor data.

------------------------------------------------------------------------

# 114. Final Checklist

Before considering the frontend complete, verify:

## Installation

-   [ ] Node.js installed
-   [ ] npm working
-   [ ] Vite project created
-   [ ] React running
-   [ ] React Router installed
-   [ ] Lucide React installed

## Structure

-   [ ] `components/` created
-   [ ] `pages/` created
-   [ ] `services/` created
-   [ ] `donorApi.js` created

## Pages

-   [ ] Home
-   [ ] Find Donor
-   [ ] Donor Community
-   [ ] Donor Details
-   [ ] Become Donor
-   [ ] Not Found

## Components

-   [ ] Navbar
-   [ ] Footer
-   [ ] Button
-   [ ] DonorCard
-   [ ] StatCard
-   [ ] BloodGroupSelector
-   [ ] SearchForm
-   [ ] Loading
-   [ ] ErrorMessage
-   [ ] EmptyState

## API

-   [ ] `getDonors()`
-   [ ] `searchDonors()`
-   [ ] `getDonorById()`
-   [ ] `registerDonor()`
-   [ ] `addDonor()`
-   [ ] `getStats()`

## Data

-   [ ] No `INITIAL_DONORS`
-   [ ] No fake donor records
-   [ ] No donor records in localStorage
-   [ ] No fake statistics
-   [ ] No fake donor IDs
-   [ ] Donor data comes from backend
-   [ ] Statistics come from backend

## Environment

-   [ ] `.env` created locally
-   [ ] `VITE_API_URL` configured
-   [ ] `.env` ignored by Git

## GitHub

-   [ ] Project committed
-   [ ] Repository connected
-   [ ] Frontend stored inside `frontend/`
-   [ ] `node_modules` not pushed
-   [ ] Sensitive credentials not pushed

------------------------------------------------------------------------



---

# 55. Backend – What We Build Next

The frontend is only one part of LifeLink.

The complete application needs a backend that receives requests from React, processes them, and stores donor information in a database.

Our final repository can look like:

```text
LifeLink/
├── frontend/
└── backend/
```

The two applications have different responsibilities.

```text
FRONTEND
React
 ↓
Displays UI
Collects user input
Sends API requests
Displays API responses

BACKEND
Node.js + Express
 ↓
Receives API requests
Validates data
Runs application logic
Communicates with database
Returns JSON responses

DATABASE
MongoDB
 ↓
Permanently stores donor records
```

---

# 56. Creating the Backend Folder

Go to the LifeLink project root:

```bash
cd ..
```

You should be outside the `frontend` folder.

Your structure should be:

```text
LifeLink/
└── frontend/
```

Create the backend folder:

```bash
mkdir backend
```

Move into it:

```bash
cd backend
```

Now the terminal should be inside:

```text
LifeLink/backend
```

---

# 57. Initializing the Node.js Backend

Run:

```bash
npm init -y
```

This creates:

```text
package.json
```

The `package.json` file describes the backend project and its dependencies.

It also contains scripts used to start the server.

---

# 58. Installing Backend Packages

Install Express:

```bash
npm install express
```

Express is the framework we use to create our API.

Install Mongoose:

```bash
npm install mongoose
```

Mongoose allows Node.js/Express to communicate with MongoDB using JavaScript objects and schemas.

Install CORS:

```bash
npm install cors
```

CORS allows the frontend and backend running on different local origins to communicate.

For example:

```text
Frontend: http://localhost:5173
Backend:  http://localhost:5000
```

Install dotenv:

```bash
npm install dotenv
```

`dotenv` loads configuration values from a `.env` file.

For development, install Nodemon:

```bash
npm install --save-dev nodemon
```

Nodemon automatically restarts the backend when we change backend files.

---

# 59. Understanding the Backend Packages

| Package | Purpose |
|---|---|
| `express` | Creates the HTTP server and API routes |
| `mongoose` | Connects Node.js to MongoDB |
| `cors` | Allows frontend-backend communication |
| `dotenv` | Loads environment variables |
| `nodemon` | Restarts server automatically during development |

Students do not need to memorize every package.

The important idea is:

```text
Express → API
Mongoose → MongoDB
CORS → Frontend/Backend communication
dotenv → Configuration
Nodemon → Development convenience
```

---

# 60. Backend Folder Structure

A beginner-friendly LifeLink backend can use:

```text
backend/
├── controllers/
│   └── donorController.js
│
├── models/
│   └── Donor.js
│
├── routes/
│   └── donorRoutes.js
│
├── .env
├── .gitignore
├── package.json
└── server.js
```

Each folder has a responsibility.

### `server.js`

Starts the backend server and connects the major parts.

### `models/`

Defines the structure of database documents.

### `controllers/`

Contains the logic for handling requests.

### `routes/`

Defines API URLs.

This separation makes the project easier to understand and maintain.

---

# 61. Understanding the Backend Request Flow

Suppose a user registers as a donor.

The complete flow is:

```text
User
 ↓
React Form
 ↓
donorApi.js
 ↓
POST /api/donors
 ↓
Express Route
 ↓
Donor Controller
 ↓
Mongoose Model
 ↓
MongoDB
```

The response then travels back:

```text
MongoDB
 ↓
Mongoose
 ↓
Controller
 ↓
Express
 ↓
donorApi.js
 ↓
React
 ↓
UI
```

This is the most important backend concept in this project.

---

# 62. Creating `server.js`

A basic Express server starts with:

```js
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "LifeLink API is running"
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

This code creates an Express server.

---

# 63. Understanding `express()`

This:

```js
const app = express();
```

creates the Express application.

The `app` object is then used to:

- add middleware
- create routes
- start the server

For example:

```js
app.get("/", ...);
```

creates a GET endpoint.

---

# 64. Understanding Middleware

Middleware is code that runs during the request-response process.

For example:

```js
app.use(cors());
```

enables CORS.

And:

```js
app.use(express.json());
```

allows Express to read JSON request bodies.

Without JSON parsing, a request such as:

```json
{
  "name": "Rahul",
  "bloodGroup": "O+"
}
```

would not be available through:

```js
req.body
```

in the expected way.

---

# 65. Creating the Backend Environment File

Create:

```text
backend/.env
```

Example:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

Do not put real passwords or private credentials into GitHub.

The backend reads these values through:

```js
process.env.PORT
```

and:

```js
process.env.MONGODB_URI
```

---

# 66. Understanding MongoDB

MongoDB is the database used by the MERN stack.

Unlike traditional relational databases that commonly organize data into tables and rows, MongoDB stores data as documents.

A donor document can look conceptually like:

```json
{
  "_id": "some-generated-id",
  "name": "Rahul",
  "bloodGroup": "O+",
  "city": "Lucknow",
  "mobile": "9876543210",
  "email": "rahul@example.com"
}
```

MongoDB generates an `_id` for documents unless another identifier strategy is explicitly used.

The frontend should not create fake IDs.

---

# 67. MongoDB Database and Collection

A MongoDB database can contain collections.

For LifeLink:

```text
Database
└── donors collection
```

The `donors` collection contains donor documents.

Conceptually:

```text
LifeLink Database
└── donors
    ├── donor document
    ├── donor document
    ├── donor document
    └── ...
```

---

# 68. Connecting Mongoose to MongoDB

A separate database connection file can be used in a larger backend.

For a beginner project, the connection can initially be placed in `server.js`.

Example:

```js
const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });
```

The connection string should come from:

```text
MONGODB_URI
```

and not be hard-coded in source code.

---

# 69. Creating the Donor Model

Create:

```text
backend/models/Donor.js
```

A Mongoose model defines the expected structure of donor documents.

Example:

```js
const mongoose = require("mongoose");

const donorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },

    bloodGroup: {
      type: String,
      required: true
    },

    city: {
      type: String,
      required: true,
      trim: true
    },

    mobile: {
      type: String,
      required: true,
      trim: true
    },

    email: {
      type: String,
      trim: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Donor", donorSchema);
```

The exact schema should match the fields required by the frontend and backend design.

---

# 70. What is a Schema?

A schema describes the structure of a MongoDB document when using Mongoose.

For example:

```js
name: {
  type: String,
  required: true
}
```

means:

- `name` should be a string.
- `name` is required.

Another field:

```js
bloodGroup: {
  type: String,
  required: true
}
```

means every donor should have a blood group.

Schemas help keep database data consistent.

---

# 71. Creating Donor Routes

Create:

```text
backend/routes/donorRoutes.js
```

The route file defines the URLs used by the frontend.

For example:

```js
const express = require("express");
const router = express.Router();

const {
  createDonor,
  getDonors,
  getDonorById,
  getStats
} = require("../controllers/donorController");

router.post("/", createDonor);
router.get("/", getDonors);
router.get("/stats", getStats);
router.get("/:id", getDonorById);

module.exports = router;
```

The order of the `/stats` route before `/:id` is intentional.

The request:

```text
/api/donors/stats
```

should be recognized as the statistics route rather than treating `"stats"` as an ID.

---

# 72. Connecting Donor Routes to Express

In `server.js`:

```js
const donorRoutes = require("./routes/donorRoutes");

app.use("/api/donors", donorRoutes);
```

This means:

```text
router.get("/")
```

becomes:

```text
GET /api/donors
```

and:

```text
router.post("/")
```

becomes:

```text
POST /api/donors
```

This is how route prefixes work.

---

# 73. Creating Donor Controllers

Create:

```text
backend/controllers/donorController.js
```

Controllers contain the logic for handling requests.

For example, creating a donor:

```js
const Donor = require("../models/Donor");

const createDonor = async (req, res) => {
  try {
    const donor = await Donor.create(req.body);

    res.status(201).json(donor);
  } catch (error) {
    res.status(500).json({
      message: "Failed to create donor"
    });
  }
};
```

The basic flow is:

```text
req.body
 ↓
Donor.create()
 ↓
MongoDB
 ↓
created donor
 ↓
JSON response
```

---

# 74. Getting All Donors

A controller can retrieve donors using:

```js
const getDonors = async (req, res) => {
  try {
    const donors = await Donor.find();

    res.json(donors);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch donors"
    });
  }
};
```

The frontend request:

```text
GET /api/donors
```

causes the backend to query MongoDB.

---

# 75. Searching Donors with Query Parameters

The frontend can send:

```text
GET /api/donors?bloodGroup=O+&city=Lucknow
```

The backend receives query parameters through:

```js
req.query
```

For example:

```js
const { bloodGroup, city } = req.query;
```

The backend can build a database filter from these values.

Conceptually:

```text
URL
 ↓
req.query
 ↓
database filter
 ↓
MongoDB
 ↓
matching donors
```

This is better than storing all donor records in React and filtering fake/local data there.

---

# 76. Understanding Query Parameters

A query parameter is extra information included after `?` in a URL.

Example:

```text
/api/donors?bloodGroup=O+&city=Lucknow
```

Here:

```text
bloodGroup = O+
city = Lucknow
```

Multiple parameters are separated with:

```text
&
```

Query parameters are useful for filtering and searching.

---

# 77. Getting One Donor

The frontend uses:

```text
GET /api/donors/:id
```

For example:

```text
GET /api/donors/64abc123
```

Express provides the value through:

```js
req.params.id
```

A controller can use:

```js
const getDonorById = async (req, res) => {
  try {
    const donor = await Donor.findById(req.params.id);

    if (!donor) {
      return res.status(404).json({
        message: "Donor not found"
      });
    }

    res.json(donor);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch donor"
    });
  }
};
```

---

# 78. Understanding Route Parameters

A route parameter is a dynamic value in a URL.

Example:

```text
/api/donors/:id
```

If the actual URL is:

```text
/api/donors/123
```

then:

```js
req.params.id
```

contains:

```text
123
```

This is useful for retrieving one specific record.

---

# 79. Creating the Statistics Endpoint

LifeLink's frontend expects:

```text
GET /api/donors/stats
```

The backend should calculate the statistics from the actual database.

The response should follow the agreed contract:

```json
{
  "totalDonors": 245,
  "bloodGroups": 8,
  "citiesCovered": 12
}
```

The numbers above are only an example response shape. The backend must calculate the actual values.

The important rule is:

> Do not hard-code these numbers in the frontend.

---

# 80. How Statistics Can Be Calculated

The backend needs to calculate:

### Total donors

Count all donor documents.

Conceptually:

```text
MongoDB
 ↓
Count donors
 ↓
totalDonors
```

### Blood groups

Count the distinct blood groups represented by donors.

For example, if the database contains:

```text
O+
O+
A+
B+
```

there are:

```text
3
```

distinct blood groups.

### Cities covered

Count the distinct cities represented by donors.

For example:

```text
Lucknow
Lucknow
Delhi
Pune
```

means:

```text
3
```

cities.

The exact MongoDB/Mongoose implementation can be introduced after students understand basic CRUD.

---

# 81. The Five LifeLink APIs

The current frontend is designed around five main API operations.

| Method | Endpoint | Purpose |
|---|---|---|
| POST | `/api/donors` | Create/register donor |
| GET | `/api/donors` | Get all donors |
| GET | `/api/donors?bloodGroup=...&city=...` | Search/filter donors |
| GET | `/api/donors/:id` | Get one donor |
| GET | `/api/donors/stats` | Get community statistics |

These five endpoints are enough for the current LifeLink frontend.

---

# 82. API #1 – POST `/api/donors`

Purpose:

> Register a new donor.

Request:

```http
POST /api/donors
Content-Type: application/json
```

Example body:

```json
{
  "name": "Rahul",
  "bloodGroup": "O+",
  "city": "Lucknow",
  "mobile": "9876543210",
  "email": "rahul@example.com"
}
```

The backend should:

1. Receive the request.
2. Validate required fields.
3. Create a donor document.
4. Store it in MongoDB.
5. Return the created donor.

---

# 83. API #2 – GET `/api/donors`

Purpose:

> Get all donors.

Request:

```text
GET /api/donors
```

Response example:

```json
[
  {
    "_id": "123",
    "name": "Rahul",
    "bloodGroup": "O+",
    "city": "Lucknow",
    "mobile": "9876543210",
    "email": "rahul@example.com"
  }
]
```

The exact number of records depends on the database.

---

# 84. API #3 – Search Donors

Request:

```text
GET /api/donors?bloodGroup=O+&city=Lucknow
```

The backend should filter database records.

Example:

```text
Database
├── O+ Lucknow
├── A+ Delhi
├── O+ Delhi
└── O+ Lucknow

Search:
O+ + Lucknow

Result:
├── O+ Lucknow
└── O+ Lucknow
```

The frontend does not need a fake donor list to perform this search.

---

# 85. API #4 – GET `/api/donors/:id`

Purpose:

> Get one donor's details.

Example:

```text
GET /api/donors/123
```

The backend finds the document with that ID.

If it exists:

```text
200 OK
```

If it does not exist:

```text
404 Not Found
```

---

# 86. API #5 – GET `/api/donors/stats`

Purpose:

> Return statistics calculated from the database.

Example response shape:

```json
{
  "totalDonors": 25,
  "bloodGroups": 5,
  "citiesCovered": 4
}
```

Again, these values are examples only.

The real values must be calculated from the current database.

---

# 87. Backend Validation

The backend should validate incoming donor data.

For example, the backend should make sure required fields are present.

Possible required fields:

```text
name
bloodGroup
city
mobile
```

If a required field is missing, the backend should return an appropriate client error such as:

```text
400 Bad Request
```

Example:

```json
{
  "message": "Name, blood group, city and mobile are required"
}
```

The exact validation rules should match the project requirements.

---

# 88. Frontend Validation vs Backend Validation

These are different.

### Frontend validation

Provides immediate feedback to the user.

Example:

```text
Please enter your name.
```

### Backend validation

Protects the actual API/database.

Even if frontend validation exists, the backend should still validate the request.

The backend must never assume that the frontend always sends correct data.

The flow is:

```text
Frontend validation
       ↓
Backend validation
       ↓
Database
```

---

# 89. HTTP Status Codes

Students should understand a few common HTTP status codes.

| Status | Meaning |
|---|---|
| `200` | Request successful |
| `201` | Resource successfully created |
| `400` | Bad request |
| `404` | Resource/route not found |
| `500` | Server-side error |

For example:

Creating a donor successfully:

```text
201 Created
```

Getting donors successfully:

```text
200 OK
```

Donor not found:

```text
404 Not Found
```

Unexpected backend error:

```text
500 Internal Server Error
```

---

# 90. Testing the Backend Before Connecting React

It is useful to test the backend separately.

Start the backend:

```bash
npm run dev
```

Then test:

```text
http://localhost:5000/
```

You should receive a response such as:

```json
{
  "message": "LifeLink API is running"
}
```

After that, test:

```text
GET /api/donors
```

Once the backend works independently, connect the frontend.

This makes debugging much easier.

---

# 91. Testing APIs with Postman

Postman is a tool for testing APIs.

You can create a request:

```text
POST http://localhost:5000/api/donors
```

Choose:

```text
Body
→ raw
→ JSON
```

Then send:

```json
{
  "name": "Rahul",
  "bloodGroup": "O+",
  "city": "Lucknow",
  "mobile": "9876543210",
  "email": "rahul@example.com"
}
```

If successful, the backend should return the created donor.

Then test:

```text
GET http://localhost:5000/api/donors
```

The donor you created should be returned.

This proves that:

```text
POST
 ↓
Database
 ↓
GET
```

is working.

---

# 92. Testing the Complete Application

Once both servers are running:

### Terminal 1 – Frontend

```bash
cd frontend
npm run dev
```

Typical URL:

```text
http://localhost:5173
```

### Terminal 2 – Backend

```bash
cd backend
npm run dev
```

Typical URL:

```text
http://localhost:5000
```

The complete system is now:

```text
Browser
   ↓
localhost:5173
   ↓
React
   ↓
donorApi.js
   ↓
localhost:5000
   ↓
Express
   ↓
Mongoose
   ↓
MongoDB
```

---

# 93. What Happens When a Student Adds a Donor?

Suppose the student enters:

```text
Name: Anshika
Blood Group: O+
City: Lucknow
Mobile: 9876543210
Email: anshika@example.com
```

### Step 1

React stores the values in form state.

### Step 2

The user clicks:

```text
Register as Voluntary Donor
```

### Step 3

React calls:

```js
addDonor(formData);
```

### Step 4

`donorApi.js` sends:

```text
POST /api/donors
```

### Step 5

Express receives the request.

### Step 6

The controller validates and creates the donor.

### Step 7

Mongoose stores it in MongoDB.

### Step 8

The backend returns the created donor.

### Step 9

The frontend shows the success state.

Later, when the Donor Community page loads:

```text
GET /api/donors
```

retrieves the donor from MongoDB.

Therefore the donor appears in the UI without being written into React source code.

---

# 94. What Happens When a Student Searches?

Suppose the student selects:

```text
Blood Group: O+
City: Lucknow
```

The frontend sends:

```text
GET /api/donors?bloodGroup=O+&city=Lucknow
```

The backend:

```text
receives query
 ↓
builds database filter
 ↓
queries MongoDB
 ↓
returns matching donors
```

React then renders the returned records.

---

# 95. What Happens When a Student Opens Donor Details?

Suppose the donor ID is:

```text
64abc123
```

The user clicks:

```text
View Details
```

React navigates to:

```text
/donors/64abc123
```

The page gets the ID and calls:

```text
GET /api/donors/64abc123
```

The backend finds that donor and returns it.

React displays the details.

---

# 96. Why the Frontend Should Not Connect Directly to MongoDB

A beginner may wonder:

> If MongoDB contains the data, why can't React connect directly to MongoDB?

The frontend runs in the user's browser.

Putting database credentials or direct database access in browser code would expose sensitive information and bypass the application's server-side control.

The backend acts as a controlled middle layer.

Correct:

```text
React
 ↓
Backend API
 ↓
MongoDB
```

Incorrect:

```text
React
 ↓
MongoDB
```

The backend protects and controls access to the database.

---

# 97. CORS in LifeLink

During development, the frontend and backend normally run on different ports:

```text
Frontend:
http://localhost:5173

Backend:
http://localhost:5000
```

Browsers apply cross-origin security rules.

CORS middleware allows the backend to specify which frontend origins are permitted.

A simple development setup may use:

```js
app.use(cors());
```

For production, CORS should normally be configured more specifically.

---

# 98. Backend `.gitignore`

The backend should have its own `.gitignore`:

```gitignore
node_modules/
.env
```

Do not commit:

```text
backend/node_modules/
backend/.env
```

The `.env` file may contain:

```text
MONGODB_URI
```

which may contain credentials.

---

# 99. Backend `package.json` Scripts

A useful development setup is:

```json
{
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  }
}
```

Then:

```bash
npm run dev
```

starts the backend using Nodemon.

For a normal start:

```bash
npm start
```

---

# 100. Frontend and Backend Are Separate npm Projects

This is important.

The frontend has its own:

```text
frontend/package.json
```

The backend has its own:

```text
backend/package.json
```

Therefore commands depend on which directory you are in.

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend
npm install
npm run dev
```

Do not run frontend commands from the backend folder or vice versa.

---

# 101. Complete LifeLink Repository

After both sides are built:

```text
LifeLink/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   │   └── donorApi.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── .env
│   ├── .gitignore
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
└── backend/
    ├── controllers/
    │   └── donorController.js
    ├── models/
    │   └── Donor.js
    ├── routes/
    │   └── donorRoutes.js
    ├── .env
    ├── .gitignore
    ├── package.json
    └── server.js
```

---

# 102. The Full MERN Architecture

Now we can see why the stack is called MERN.

```text
M = MongoDB
    ↓
    Stores donor data

E = Express
    ↓
    Provides backend API routes

R = React
    ↓
    Provides frontend UI

N = Node.js
    ↓
    Runs the backend JavaScript application
```

Complete flow:

```text
                    USER
                     |
                     v
                  REACT
                     |
                     v
                donorApi.js
                     |
                HTTP Request
                     |
                     v
                EXPRESS
                     |
                     v
              CONTROLLER
                     |
                     v
                MONGOOSE
                     |
                     v
                MONGODB
                     |
                Database Data
                     |
                     v
                MONGOOSE
                     |
                     v
               CONTROLLER
                     |
                     v
                EXPRESS
                     |
                JSON Response
                     |
                     v
                REACT
                     |
                     v
                    UI
```

---

# 103. Beginner CRUD Concept

LifeLink also introduces the basic CRUD idea.

CRUD means:

| Letter | Meaning | LifeLink example |
|---|---|---|
| C | Create | Register a donor |
| R | Read | Get donors |
| U | Update | Update donor information |
| D | Delete | Remove donor |

The current basic LifeLink scope mainly requires:

```text
Create donor
Read donors
Read one donor
Search donors
Read statistics
```

If update/delete operations are added later, they can follow the same API architecture.

---

# 104. Why API Services Are Useful

Without a service file, pages might contain code such as:

```js
fetch("http://localhost:5000/api/donors")
```

in many places.

That becomes difficult to maintain.

Instead:

```text
Page
 ↓
donorApi.js
 ↓
Backend
```

For example:

```js
const donors = await getDonors();
```

The page does not need to know every detail of the HTTP request.

This separation is called **separation of concerns**.

---

# 105. Separation of Concerns in LifeLink

Each part has a job.

```text
Component
→ Displays reusable UI

Page
→ Combines UI and page-level logic

donorApi.js
→ Communicates with backend

Route
→ Defines API URL

Controller
→ Handles backend logic

Model
→ Defines database structure

MongoDB
→ Stores data
```

A beginner does not need to understand this perfectly on day one.

The important goal is to gradually recognize why each file exists.

---

# 106. Recommended Learning Order for Students

Do not try to learn the entire MERN stack simultaneously.

A good learning order is:

### Step 1 – HTML/CSS basics

Understand:

```text
elements
attributes
forms
classes
layout
```

### Step 2 – JavaScript basics

Learn:

```text
variables
functions
arrays
objects
conditions
loops
array methods
async/await
```

### Step 3 – React basics

Learn:

```text
components
JSX
props
state
events
forms
useState
useEffect
```

### Step 4 – React Router

Learn:

```text
routes
links
dynamic routes
```

### Step 5 – API basics

Learn:

```text
HTTP
GET
POST
JSON
query parameters
status codes
```

### Step 6 – Node.js

Understand:

```text
Node runtime
npm
package.json
modules
```

### Step 7 – Express

Learn:

```text
server
routes
middleware
request
response
```

### Step 8 – MongoDB

Learn:

```text
database
collection
document
_id
queries
```

### Step 9 – Mongoose

Learn:

```text
schema
model
find
create
findById
```

### Step 10 – Connect everything

Finally:

```text
React
 +
Express
 +
Node.js
 +
MongoDB
```

becomes the MERN application.

---

# 107. Beginner Debugging Strategy

When something does not work, do not immediately change multiple files.

Use this order.

### Step 1 – Check the browser Console

Look for JavaScript errors.

### Step 2 – Check Network

Look for the API request.

Check:

```text
Request URL
Status code
Response
```

### Step 3 – Check backend terminal

Look for:

```text
server errors
database errors
route errors
```

### Step 4 – Check the API directly

Use the browser or Postman.

For example:

```text
http://localhost:5000/api/donors
```

### Step 5 – Check MongoDB

Confirm whether the donor actually exists in the database.

This gives a useful debugging chain:

```text
UI
 ↓
API request
 ↓
Backend route
 ↓
Controller
 ↓
Database
```

Find the first layer where the expected result stops.

---

# 108. Common Backend Errors

## `EADDRINUSE`

Example:

```text
Error: listen EADDRINUSE
```

Meaning:

> Another process is already using the port.

Possible solution:

- Stop the existing backend.
- Use another port.
- Check which application is using port 5000.

---

## MongoDB connection error

Possible causes:

- Incorrect connection string.
- MongoDB server is not running.
- Atlas network access is not configured.
- Incorrect username/password.

Check:

```env
MONGODB_URI=...
```

---

## `Cannot find module`

Example:

```text
Cannot find module 'express'
```

Usually means dependencies are not installed.

Run:

```bash
npm install
```

inside the backend folder.

---

## 404 API error

Example:

```text
GET /api/donors 404
```

Possible cause:

The route has not been registered correctly.

Check:

```js
app.use("/api/donors", donorRoutes);
```

and the route definition.

---

## 500 API error

A `500` usually means an error occurred inside the backend.

Check the backend terminal for the actual error.

---

# 109. Frontend 404 vs Backend 404

Students should distinguish these.

### Frontend route

```text
http://localhost:5173/donors
```

A React Router problem can cause a frontend routing issue.

### Backend route

```text
http://localhost:5000/api/donors
```

A 404 here means the backend route is missing or the request URL is incorrect.

The port helps identify which application is involved.

---

# 110. Development Ports

A typical LifeLink development setup uses:

```text
Frontend
http://localhost:5173

Backend
http://localhost:5000
```

These are only local development addresses.

When the application is deployed, the URLs will be different.

---

# 111. Final Backend Checklist

Before connecting the backend to React:

- [ ] Node.js installed
- [ ] Backend folder created
- [ ] `npm init -y` completed
- [ ] Express installed
- [ ] Mongoose installed
- [ ] CORS installed
- [ ] dotenv installed
- [ ] Nodemon installed
- [ ] `server.js` created
- [ ] `.env` created
- [ ] MongoDB connection configured
- [ ] Donor model created
- [ ] Donor routes created
- [ ] Donor controller created
- [ ] `/api/donors` implemented
- [ ] `/api/donors/:id` implemented
- [ ] `/api/donors/stats` implemented
- [ ] POST donor implemented
- [ ] Search query implemented
- [ ] Backend tested independently
- [ ] Frontend API URL configured
- [ ] Frontend connected to backend

---

# 112. Final Student Exercise

After the basic application works, students should be able to explain this scenario without looking at the code:

> A user registers as a blood donor. Where does the information go?

Expected answer:

```text
Form
 ↓
React state
 ↓
donorApi.js
 ↓
POST /api/donors
 ↓
Express route
 ↓
Controller
 ↓
Mongoose
 ↓
MongoDB
```

Then:

> How does another user see that donor?

```text
React page
 ↓
GET /api/donors
 ↓
Express
 ↓
Controller
 ↓
MongoDB
 ↓
JSON response
 ↓
React state
 ↓
DonorCard
```

And:

> Where is the donor permanently stored?

```text
MongoDB
```

Not:

```text
React source code
```

and not:

```text
localStorage
```

---

# 113. Final Project Goal

The finished LifeLink application should work like this:

```text
                    LIFE LINK

                  ┌───────────┐
                  │   USER    │
                  └─────┬─────┘
                        │
                        v
                ┌───────────────┐
                │ React Frontend│
                └───────┬───────┘
                        │
                  HTTP / JSON
                        │
                        v
                ┌───────────────┐
                │ Express + Node │
                └───────┬───────┘
                        │
                        v
                ┌───────────────┐
                │    MongoDB    │
                └───────────────┘
```

The frontend is responsible for the experience.

The backend is responsible for the API and application logic.

The database is responsible for permanent data.

That separation is the foundation of the MERN architecture.


# Final Mental Model

If students remember only one thing from this project, remember this:

``` text
                    LIFE LINK

                       USER
                        |
                        v
                 REACT FRONTEND
                        |
              +---------+---------+
              |                   |
              v                   v
           PAGES              COMPONENTS
              |
              v
        donorApi.js
              |
              | HTTP Request
              v
       EXPRESS BACKEND
              |
              v
           MONGODB
              |
              | Data
              v
       EXPRESS BACKEND
              |
              | JSON Response
              v
        donorApi.js
              |
              v
       REACT STATE
              |
              v
              UI
```

The key principle is:

> **React is responsible for the user interface. The backend is
> responsible for application logic and APIs. MongoDB is responsible for
> permanent data storage.**

For LifeLink:

``` text
React
→ displays the donors

Backend
→ manages the donors

MongoDB
→ stores the donors
```

That is the foundation of a MERN application.
