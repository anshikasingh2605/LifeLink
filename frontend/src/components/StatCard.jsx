import React from 'react';

export function StatCard({ title, value, subtitle, emoji }) {
  return (
    <div className="rounded-2xl p-6 border border-gray-200 bg-white shadow-sm hover:shadow-md hover:border-red-300 transition-all duration-300">
      <div className="flex items-center justify-between">
        <div>
          <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block">
            {title}
          </span>
          <h3 className="text-3xl font-extrabold mt-2 text-gray-900 tracking-tight">
            {value !== undefined && value !== null ? value : "---"}
          </h3>
          {subtitle && (
            <p className="text-xs text-red-600 font-medium mt-1">
              {subtitle}
            </p>
          )}
        </div>

        <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-red-600 to-rose-500 text-white flex items-center justify-center text-xl shadow-md shadow-red-500/30">
          <span>{emoji || '🩸'}</span>
        </div>
      </div>
    </div>
  );
}

export default StatCard;
