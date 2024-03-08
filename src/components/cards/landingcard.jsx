import React from 'react';

const Card = () => {
  return (
    <div className=" w-72 bg-gray-50 p-3 h-96 rounded-md overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-110">
      <img src="https://via.placeholder.com/300" alt="Placeholder" className="w-full h-56 object-cover" />
      <div className="px-6 py-4 flex flex-col items-center">
        <div className="font-bold text-xl font-mono mb-2">Sample Title</div>
        <p className="text-gray-700 text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </div>
  );
};

export default Card;
