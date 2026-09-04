import React from 'react';
import { MapPin, Heart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function DonorCard({ donor }) {
  if (!donor) {
    return null;
  }

  const donorId = donor._id || donor.id;

  return (
    <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-red-300 transition-all duration-300 flex flex-col justify-between text-left">

      {/* Top accent */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-red-50 rounded-full blur-xl pointer-events-none" />

      <div>

        {/* Header */}
        <div className="flex items-center justify-between mb-4">

          <div className="flex items-center space-x-3">

            <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 to-rose-600 text-white font-extrabold text-xl shadow-md shadow-red-600/30">

              <span>{donor.bloodGroup}</span>

              <Heart className="absolute -bottom-1 -right-1 w-3.5 h-3.5 text-rose-200 fill-rose-300" />

            </div>

            <div>

              <h3 className="text-base font-bold text-gray-900">
                {donor.name}
              </h3>

              <div className="flex items-center space-x-1 text-xs text-gray-500 mt-0.5">

                <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0" />

                <span className="font-medium">
                  {donor.city}
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Action Button */}
      <div className="pt-2">

        <Link
          to={`/donors/${donorId}`}
          className="w-full py-2.5 px-4 rounded-xl border border-gray-300 text-gray-700 hover:border-red-500 hover:bg-red-50 hover:text-red-600 text-xs font-bold transition-all flex items-center justify-center space-x-1.5"
        >
          <span>View Details</span>

          <ArrowRight className="w-3.5 h-3.5" />
        </Link>

      </div>

    </div>
  );
}

export default DonorCard;