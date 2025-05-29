import React from 'react';

function SkillComp({ icon, Name, des }) {
  return (
    <div className="bg-[#222222] rounded-2xl px-5 py-6 text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-300">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="text-5xl sm:text-6xl">{icon}</div>
        <p className="text-lg sm:text-xl">{Name}</p>
        <p className="text-sm font-light text-gray-300 max-w-xs">{des}</p>
      </div>
    </div>
  );
}

export default SkillComp;
