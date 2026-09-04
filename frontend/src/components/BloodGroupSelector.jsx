import React from 'react';

const BLOOD_GROUPS = [
  'A+',
  'A-',
  'B+',
  'B-',
  'O+',
  'O-',
  'AB+',
  'AB-'
];

function BloodGroupSelector({
  selectedGroup,
  onSelectGroup,
  includeAll = true
}) {
  const options = includeAll
    ? ['All', ...BLOOD_GROUPS]
    : BLOOD_GROUPS;

  return (
    <div className="space-y-2">

      <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
        Select Blood Group:
      </label>

      <div className="grid grid-cols-4 sm:grid-cols-9 gap-2">

        {options.map((group) => {

          const isSelected =
            selectedGroup === group ||
            (group === 'All' && !selectedGroup);

          return (
            <button
              key={group}
              type="button"
              onClick={() => onSelectGroup(group)}
              className={`py-2.5 px-2 rounded-xl text-xs font-extrabold transition-all duration-200 cursor-pointer shadow-sm border ${isSelected
                  ? 'bg-gradient-to-r from-red-600 to-rose-600 text-white border-red-600 ring-2 ring-red-500/40 shadow-red-500/30 scale-[1.03]'
                  : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
            >
              {group}
            </button>
          );
        })}

      </div>
    </div>
  );
}

export default BloodGroupSelector;