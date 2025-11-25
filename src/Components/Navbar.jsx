import { useState } from "react";
import { NavLink  } from "react-router-dom";
export default function Navbar() {
  const [showNav, setShowNav] = useState(false);
  return (
    <>
    <nav className="p-4 md:px-28 px-3 flex justify-between items-center text-sm shadow-md fixed w-full top-0 left-0 z-30 bg-white">
      <h1 className="text-xl font-bold text-[#387718]" onClick={() => setShowNav(!showNav)}>Agromate</h1>
      <ul className="md:flex gap-10 text-center hidden">
        <li><NavLink to="/" end className={({ isActive }) => isActive ? "font-bold " : ""}>Home</NavLink ></li>
        <li><NavLink  to="/shop" end className={({ isActive }) => isActive ? "font-bold " : ""} >Shop</NavLink ></li>
        <li><NavLink  to="/about" end className={({ isActive }) => isActive ? "font-bold " : ""}>About</NavLink ></li>
        <li><NavLink  to="/contact" end className={({ isActive }) => isActive ? "font-bold " : ""}>Contact Us</NavLink ></li>
      </ul>
      <NavLink to="/login"><button className="bg-[#387718] p-2 rounded-sm text-sm  hidden md:flex text-white">Register Now </button></NavLink>
    </nav>

      <nav className={`${showNav ? "flex":"hidden"} p-4 px-3 flex flex-col justify-between items-center text-sm shadow-md fixed top-24 z-30 bg-white backdrop-blur-2xl`}>
      <h1 className="text-xl font-bold text-[#387718]">Agromate</h1>
      <ul className="md:flex gap-10 text-center hidden">
        <li><NavLink to="/" end className={({ isActive }) => isActive ? "font-bold " : ""}>Home</NavLink ></li>
        <li><NavLink  to="/shop" end className={({ isActive }) => isActive ? "font-bold " : ""} >Shop</NavLink ></li>
        <li><NavLink  to="/about" end className={({ isActive }) => isActive ? "font-bold " : ""}>About</NavLink ></li>
        <li><NavLink  to="/contact" end className={({ isActive }) => isActive ? "font-bold " : ""}>Contact Us</NavLink ></li>
      </ul>
      <NavLink to="/login"><button className="bg-[#387718] p-2 rounded-sm text-sm  hidden md:flex text-white">Register Now </button></NavLink>
    </nav>
    </>
  );
}
