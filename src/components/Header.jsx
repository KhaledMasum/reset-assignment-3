import React from "react";
import Logo from "../assets/optimizely_symbol_full-color.svg";
import { Link, NavLink } from "react-router";
import { FaGithub } from "react-icons/fa";

const Header = () => {
  const links = (
    <>
      <NavLink to="/">
        <li>Home</li>
      </NavLink>
      <NavLink to="/apps">
        <li>Apps</li>
      </NavLink>
      <NavLink to="/installation">
        <li>Installation</li>
      </NavLink>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm md:px-12">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-4"
          >
            {links}
          </ul>
        </div>
        <Link to="/" className="flex items-center">
          <img className="h-10 w-10" src={Logo} alt="" />
          <h3 className="text-xl font-bold bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
            Optimizely
          </h3>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4">{links}</ul>
      </div>
      <div className="navbar-end">
        <a
          href="https://github.com/KhaledMasum"
          className="btn btn-sm text-white bg-linear-to-r from-[#632EE3] to-[#9F62F2]"
        >
          <FaGithub className="me-1" />
          Contribute
        </a>
      </div>
    </div>
  );
};

export default Header;
