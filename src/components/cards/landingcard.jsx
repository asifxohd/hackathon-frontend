import React from 'react';

const Card = ({prop}) => {
  return (
    <div className="max-sm:w-[70%] w-72 bg-gray-50 p-3 h-96 rounded-md overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-110">
      <img src={prop.img} alt="Placeholder" className="w-full h-56 object-cover" />
      <div className="px-6 py-4 flex flex-col items-center">
        <div className="font-bold text-xl font-mono mb-2">{prop.header}</div>
        <p className="text-gray-700 text-xs">{prop.content}</p>
      </div>
    </div>
  );
};

export default Card;
