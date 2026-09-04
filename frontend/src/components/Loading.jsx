import React from 'react';
import { HeartPulse } from 'lucide-react';

export function Loading({ message = 'Loading...' }) {
  return (
    <div className="flex flex-col items-center justify-center p-12 text-center my-6 rounded-2xl bg-red-50 border border-red-200">
      <div className="relative flex items-center justify-center w-16 h-16 mb-4">
        <div className="absolute inset-0 rounded-full bg-red-600/30 animate-ping" />
        <div className="relative z-10 flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-red-600 to-rose-500 shadow-lg shadow-red-500/40">
          <HeartPulse className="w-8 h-8 text-white animate-pulse" />
        </div>
      </div>
      <p className="text-base font-semibold text-gray-800 dark:text-gray-200 animate-pulse">
        {message}
      </p>
      <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">
        Fetching data from LifeLink API...
      </span>
    </div>
  );
}

export default Loading;
