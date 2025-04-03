import React from 'react';

function Academic() {
  return (
    <div className="bg-gray-900 text-white mt-10 p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6">
        Academic{' '}
        <span className="bg-gradient-to-r from-orange-600 to-white bg-clip-text text-transparent">
          Qualification
        </span>
      </h2>
      
      <div className="space-y-6">
        {/* B.Tech Section */}
        <div className="p-4 bg-gray-800 rounded-lg shadow-md">
          <p className="text-lg font-semibold">B.Tech in Data Science</p>
          <p className="text-gray-400">SDITS Khandwa</p>
        </div>

        {/* Higher Secondary Section */}
        <div className="p-4 bg-gray-800 rounded-lg shadow-md">
          <p className="text-lg font-semibold">Higher Secondary Certificate</p>
          <p className="text-gray-400">CM Rise Chhaigaon Makhan</p>
        </div>
      </div>
    </div>
  );
}

export default Academic;
