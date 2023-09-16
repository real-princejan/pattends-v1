import React from "react";
import { Link } from "react-router-dom";

const Teacher = () => {
  return (
    <div className="px-5 py-3">
      <div className="flex justify-center">
        <h3>Teacher List</h3>
      </div>
      <button
        className="rounded-xl border-solid border-2 border-primaryColor border-opacity-30 shadow-lg bg-transparent font-[500] 
    text-sm w-24 py-2 hover:bg-primaryColor hover:text-white"
      >
        <Link to="/add-teachers">Add Teacher</Link>
      </button>
    </div>
  );
};

export default Teacher;
