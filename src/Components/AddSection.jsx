import React from "react";

const AddSection = () => {
  return (
    <div className="w-full mx-auto p-4 mb-8 flex flex-col sm:flex-row items-center gap-4 bg-gray-800 rounded-lg">
      <input
        type="text"
        placeholder="Title here"
        className="w-full sm:w-auto flex-grow px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
      />
      <input
        type="text"
        placeholder="Post here"
        className="w-full sm:w-auto flex-grow px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
      />
      <button className="w-full sm:w-auto px-6 py-2 bg-green-600 text-white font-bold rounded-lg shadow-md hover:bg-green-700 transition-colors duration-300">
        ADD
      </button>
    </div>
  );
};

export default AddSection;
