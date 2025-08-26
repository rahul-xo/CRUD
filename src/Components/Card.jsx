import React from "react";
import { deletePost } from "../Services/GetData";

const Card = ({ currEle ,Data ,setData ,idx}) => {
  const handleDelete= async (id)=>{
    try {
      const res=await deletePost(id);
      if(res.status!=200) console.log("error while deleting..");
      const newData=Data.filter((curData)=> {
        if(curData.id!=id) return curData;
        })
      setData(newData);  
      console.log(res);
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <li className="w-sm bg-gray-800 rounded-lg shadow-lg p-6">
      {/* Content Section */}
      <div className="space-y-4">
        {/* Title */}
        <p className="text-xl text-white">
          <strong className="font-bold text-cyan-400">
            {idx+1}. Title:
          </strong>
          <span className="ml-2 font-semibold">{currEle.title}</span>
        </p>

        {/* News Content */}
        <p className="text-gray-400">
          <strong className="font-bold text-cyan-400">News:</strong>
          <span className="ml-2">{currEle.body}</span>
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
          onClick={()=> handleDelete(currEle.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default Card;
