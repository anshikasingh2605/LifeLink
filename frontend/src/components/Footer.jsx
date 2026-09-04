import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-200 bg-white text-gray-600 py-12 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-xl bg-red-600 flex items-center justify-center text-white shadow-md">
              <Heart className="w-4 h-4 fill-white" />
            </div>
            <span className="text-lg font-black text-gray-900">
              Life<span className="text-red-600">Link</span>
            </span>
          </div>
          <p className="text-xs leading-relaxed text-gray-500 max-w-sm">
            Connecting people who want to help. A simple community platform connecting voluntary blood donors with people searching for blood support.
          </p>
        </div>

        {/* Links */}
        <div className="space-y-3">
          <h4 className="text-xs font-extrabold uppercase tracking-wider text-gray-900">
            Navigation
          </h4>
          <ul className="space-y-2 text-xs font-semibold text-gray-600">
            <li>
              <Link to="/" className="hover:text-red-600 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/find-donor" className="hover:text-red-600 transition-colors">
                Find Donor
              </Link>
            </li>
            <li>
              <Link to="/donors" className="hover:text-red-600 transition-colors">
                Donor Community
              </Link>
            </li>
            <li>
              <Link to="/become-donor" className="hover:text-red-600 transition-colors">
                Become a Donor
              </Link>
            </li>
          </ul>
        </div>

        {/* Medical Disclaimer */}
        <div className="space-y-2">
          <h4 className="text-xs font-extrabold uppercase tracking-wider text-gray-900">
            Important Notice
          </h4>
          <p className="text-[11px] leading-relaxed text-gray-500 p-3 rounded-xl bg-red-50 border border-red-100">
            «LifeLink is a community coordination platform. Donor eligibility, blood compatibility, screening, collection and transfusion must be confirmed through qualified medical professionals or authorized blood banks.»
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 mt-8 border-t border-gray-200 text-xs text-center text-gray-400">
        © 2026 LifeLink
      </div>
    </footer>
  );
}

export default Footer;
