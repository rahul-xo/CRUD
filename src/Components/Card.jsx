import React from "react";

const Card = ({ currEle }) => {
  return (
    <div className="w-sm bg-gray-800 rounded-lg shadow-lg p-6">
      {/* Content Section */}
      <div className="space-y-4">
        {/* Title */}
        <p className="text-xl text-white">
          <strong className="font-bold text-cyan-400">{currEle.id}. Title:</strong>
          <span className="ml-2 font-semibold">{currEle.title}</span>
        </p>

        {/* News Content */}
        <p className="text-gray-400">
          <strong className="font-bold text-cyan-400">News:</strong>
          <span className="ml-2">
            This is the paragraph where the main news content will be displayed.
            It can be a few sentences long, providing a summary or the full text
            of the news article.
          </span>
        </p>
      </div>

      {/* Action Buttons Section */}
      <div className="mt-6 flex justify-end space-x-4">
        {/* Edit Button */}
        <button
          className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md 
                       hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75
                       transition-colors duration-300 cursor-pointer"
        >
          Edit
        </button>

        {/* Delete Button */}
        <button
          className="px-4 py-2 bg-red-600 text-white font-semibold rounded-lg shadow-md 
                       hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75
                       transition-colors duration-300 cursor-pointer"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Card;
