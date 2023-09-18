import React from "react";
import { Link } from "react-router-dom";

const Student = () => {
  return (
    <div className="px-5 py-3">
      <div className="flex justify-center">
        <h3>Student List</h3>
      </div>
      <button
        className="rounded-xl border-solid border-2 border-primaryColor border-opacity-30 shadow-lg bg-transparent font-[500] 
  text-sm w-24 py-2 hover:bg-primaryColor hover:text-white"
      >
        <Link to="/add-student">Add Student</Link>
      </button>
    </div>
  );
};

export default Student;
