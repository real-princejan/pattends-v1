import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="text-2xl font-semibold flex-1 h-screen">
          <div className="col p-0 m-0">
            <div className="p-2 flex justify-center shadow bg-primaryColor text-gray-100">
              <h4>Pattends - Attendance System</h4>
            </div>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
