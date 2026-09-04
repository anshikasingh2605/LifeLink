import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import FindDonor from './pages/FindDonor';
import Donors from './pages/Donors';
import DonorDetails from './pages/DonorDetails';
import BecomeDonor from './pages/BecomeDonor';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900 selection:bg-red-500 selection:text-white">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/find-donor" element={<FindDonor />} />
          <Route path="/donors" element={<Donors />} />
          <Route path="/donors/:id" element={<DonorDetails />} />
          <Route path="/become-donor" element={<BecomeDonor />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
