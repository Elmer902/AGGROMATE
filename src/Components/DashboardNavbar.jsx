import React from "react";
import { NavLink } from "react-router-dom";

const DashboardNavbar = ({ showNav, setShowNav }) => {
  return (
    <>
      {/* Top Navbar */}
      <nav className="p-4 md:px-28 px-3 flex justify-between items-center text-sm fixed w-full top-0 left-0 z-30 bg-white">
        {/* Hamburger SVG */}
        <button onClick={() => setShowNav(!showNav)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="w-7 h-7 text-gray-700"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <h1 className="text-2xl font-bold text-[#387718]">Agromate</h1>

        <div className="flex items-center justify-center space-x-3">
          <img src="" alt="" className="rounded-full h-10 w-10 bg-amber-200" />
          <span>Foryouong Junior Ngu</span>
        </div>

      </nav>

      {/* Sidebar */}
      <aside
        className={`${
          showNav ? "block" : "hidden"
        } bg-gray-50 text-xl p-16 py-32 h-full w-60 shadow-sm fixed top-0 left-0 mt-10`}
      >
        <ul className="flex flex-col space-y-3">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/orders">Orders</NavLink>
          <NavLink to="/messages">Messages</NavLink>
          <NavLink to="/notifications">Notifications</NavLink>
        </ul>
      </aside>
    </>
  );
};

export default DashboardNavbar;
