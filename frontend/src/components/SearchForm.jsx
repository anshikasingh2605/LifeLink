import React, { useState } from 'react';
import BloodGroupSelector from './BloodGroupSelector';
import Button from './Button';
import { Search, MapPin } from 'lucide-react';

export function SearchForm({ onSearch, initialBloodGroup = 'All', initialCity = '' }) {
  const [bloodGroup, setBloodGroup] = useState(initialBloodGroup);
  const [city, setCity] = useState(initialCity);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch({ bloodGroup, city });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-xl space-y-6 text-left"
    >
      {/* Select Blood Group */}
      <BloodGroupSelector
        selectedGroup={bloodGroup}
        onSelectGroup={(bg) => setBloodGroup(bg)}
        includeAll={true}
      />

      {/* City Input & Search Button */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-end pt-2 border-t border-gray-100 dark:border-gray-800">
        <div className="sm:col-span-8">
          <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
            City
          </label>
          <div className="relative">
            <MapPin className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
            <input
              type="text"
              placeholder="Enter city name (e.g. Lucknow, New Delhi, Mumbai)..."
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 text-xs focus:ring-2 focus:ring-red-500 focus:outline-none"
            />
          </div>
        </div>

        <div className="sm:col-span-4">
          <Button
            type="submit"
            variant="primary"
            className="w-full py-2.5 space-x-2 shadow-md"
          >
            <Search className="w-4 h-4" />
            <span>Find Donors</span>
          </Button>
        </div>
      </div>
    </form>
  );
}

export default SearchForm;
