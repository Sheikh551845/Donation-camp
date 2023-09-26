import React from 'react'
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (

    <div className="bg-base-100 flex justify-between items-center mt-3 justify-items-center shadow-md p-3">
     <div className="">
   
    <img src="https://i.ibb.co/09YVWDL/Logo.png" alt="" />
   </div>
   <div>
   <div className="hidden lg:block">
    <ul className="mt-5 flex gap-7 mr-7 text-lg">
      <li>
        <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
              }
            >
              Home
            </NavLink>
      </li>
      <li><NavLink
              to="/Donation"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
              }
            >
              Donation
            </NavLink></li>

    <li>
    <NavLink
              to="/Statistics"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
              }
            >
              Statistics
            </NavLink>
    </li>
    </ul>
  </div>
  <div className="dropdown mr-6">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-[87px]">
      <li>
        <NavLink
              to="/Home"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
              }
            >
              Home
            </NavLink>
      </li>
      <li><NavLink
              to="/Donation"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
              }
            >
              Donation
            </NavLink></li>

    <li>
    <NavLink
              to="/Statistics"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
              }
            >
              Statistics
            </NavLink>
    </li>
      </ul>
      </div>
      
    </div>
   </div>
 
</div>
    
  )
}
