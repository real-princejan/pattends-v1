import React, { useState } from "react";
import patIcon from "../assets/images/pattends-logo.svg";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [selectedMenu, setSelectedMenu] = useState(0); // Initialize with the first menu item selected
  const Menus = [
    { Link: "/", title: "Dashboard", src: "Dashboard", gap: true },
    { Link: "/teacher", title: "Teachers", src: "Show-User" },
    { Link: "/student", title: "Students", src: "Add-User" },
    { Link: "/attendance", title: "Attendance", src: "Attendance", gap: true },
    { Link: "/profile", title: "Profile", src: "Settings" },
    { Link: "/login", title: "Sign Out", src: "Logout" },
  ];

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  return (
    <>
      <div className="flex">
        <div
          className={`${
            open ? "w-72" : "w-20"
          } duration-300 h-screen p-4 pt-2 bg-secondaryColor relative`}
        >
          <i
            className={`ri-arrow-left-s-line absolute cursor-pointer rounded-full 
          -right-3 top-9 w-7 border-2 border-secondaryColor bg-white px-1 
          ${!open && "rotate-180"}`}
            onClick={() => setOpen(!open)}
          />

          {/* Logo */}
          <div className="flex gap-x-4 items-center">
            <img
              src={patIcon}
              className={`cursor-pointer duration-500 
            ${open && "rotate-[360deg]"}`}
            />

            <h1
              className={`text-gray-900 font-[700] origin-left text-2xl 
          duration-300 ${!open && "scale-0"}`}
            >
              Admin Dashboard
            </h1>
          </div>
          {/* End Logo */}

          <ul className="pt-6">
            {Menus.map((menu, index) => (
              <Link to={menu.Link} key={index}>
                <li
                  onClick={() => handleMenuClick(index)} // Handle menu item click
                  className={`text-gray-800 text-lg flex items-center
              gap-x-4 cursor-pointer p-2 rounded-md 
              ${menu.gap ? "mt-9" : "mt-2"} ${
                    index === selectedMenu ? "bg-yellow-200 bg-opacity-70" : ""
                  } hover:bg-yellow-200 hover:bg-opacity-50 hover:text-black`}
                >
                  <img
                    src={`./src/assets/images/${menu.src}.png`}
                    alt={menu.title}
                  />
                  <span
                    className={`${
                      !open && "hidden"
                    } origin-left duration-200 font-[500]`}
                  >
                    {menu.title}
                  </span>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
