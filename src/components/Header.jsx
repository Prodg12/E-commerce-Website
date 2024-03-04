// src/components/Navbar.js
import React, { useState } from "react";
import LogoImg from "../assets/Home-img/icon-img/logo-img.png";
import PhoneIcon from "../assets/Home-img/icon-img/phone-icon.png";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="">
      <div className="flex items-center justify-between text-gray300 bg-gray900 pb-4 pt-2 px-10 md:hidden">
        <div className="flex items-center">
          <span className="text-xl mr-1">
            <ion-icon name="location-outline"></ion-icon>
          </span>

          <h2 className="text-sm">
            Store Location: Lincoln- 344, Illinois, Chicago, USA
          </h2>
        </div>

        <div className="flex items-center">
          <select className="outline-none cursor-pointer mx-2 hover:text-success duration-75 ease-in-out text-sm bg-gray900 text-gray300">
            <option value="">Eng</option>
            <option value="">Esp</option>
          </select>

          <select className="outline-none cursor-pointer mx-2 hover:text-success duration-75 ease-in-out text-sm bg-gray900 text-gray300">
            <option value="">USD</option>
            <option value="">EUR</option>
            <option value="">GBP</option>
          </select>

          <h2 className="mx-2">|</h2>

          <span className="flex">
            <button className="ml-2 hover:text-success duration-75 ease-in-out text-sm">
              Sign In
            </button>
            <h2 className="mx-1">/</h2>
            <button className="mx-1 hover:text-success duration-75 ease-in-out text-sm">
              Sign Up
            </button>
          </span>
        </div>
      </div>

      <hr className="text-gray200" />

      <div className="my-8 flex items-center justify-between px-12 lg:px-5 font-[poppins] xs:px-4">
        <span className="flex items-center">
          <img src={LogoImg} alt="logo-img" className="lg:w-6 md:w-5" />

          <h2 className="text-3xl font-medium ml-1 lg:text-2xl sm:text-xl">
            Ecobazar
          </h2>
        </span>

        <div className="w-[40%] flex items-center sm:w-[60%]">
          <span className="relative w-[85%] sm:w-[100%]">
            <input
              type="text"
              className="w-full h-8 px-3 pl-7 py-[1.2rem] outline-none border border-gray300 rounded-bl-md rounded-tl-md placeholder:font-normal text-sm lg:py-[0.5rem] xs:py-[0.3rem] sm:text-xs"
              placeholder="Search"
            />

            <span className="absolute left-2 top-2 text-lg text-gray900 lg:text-base md:text-sm">
              <ion-icon name="search"></ion-icon>
            </span>
          </span>

          <button className="bg-success py-[0.5rem] px-4 text-white rounded-br-md rounded-tr-md lg:py-[0.3rem] lg:px-3 lg:text-sm xs:px-2 xs:text-[0.75rem]">
            Search
          </button>
        </div>

        <div className="flex items-center md:hidden">
          <span className="text-3xl text-gray900 border-r-2 border-gray200 pr-3 py-0 cursor-pointer hover:text-success duration-100 ease-in-out lg:text-xl lg:pr-2">
            <ion-icon name="heart-outline"></ion-icon>
          </span>

          <div className="flex items-center ml-3 lg:ml-2">
            <span className="text-3xl text-gray900 cursor-pointer hover:text-success duration-100 ease-in-out lg:text-xl">
              <ion-icon name="bag-outline"></ion-icon>
            </span>

            <div className="ml-1">
              <p className="text-[0.65rem] text-gray700">Shopping cart:</p>

              <p className="text-xs font-semibold text-gray900">$57.00</p>
            </div>
          </div>
        </div>
      </div>

      <hr className="text-gray200" />

      <div className="container mx-auto flex justify-between items-center py-5 px-12 lg:px-8 md:px-0 border-b border-gray200">
        <div className={`block md:hidden ${isMobileMenuOpen ? "hidden" : ""}`}>
          <NavLink to="/" className="hover:text-success px-2 py-1 navlink lg:text-sm">
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="hover:text-success px-2 py-1 mx-2 navlink lg:text-sm"
          >
            About Us
          </NavLink>
          <NavLink
            to="/blog"
            className="hover:text-success px-2 py-1 mx-2 navlink lg:text-sm"
          >
            Blog
          </NavLink>
          <NavLink
            to="/contacts"
            className="hover:text-success px-2 py-1 mx-2 navlink lg:text-sm"
          >
            Contact Us
          </NavLink>
        </div>

        <div className="flex items-center pl-4 md:hidden">
          <img
            src={PhoneIcon}
            alt="phone-icon"
            className="w-5 bg-success rounded-full mr-2"
          />
          <p className="xs:text-sm">(219) 555-0114</p>
        </div>

        <div className="hidden items-center ml-6 md:flex">
          <span className="text-3xl text-gray900 border-r-2 border-gray200 pr-3 py-0 cursor-pointer hover:text-success duration-100 ease-in-out lg:text-xl lg:pr-2 sm:text-lg sm:pr-1">
            <ion-icon name="heart-outline"></ion-icon>
          </span>

          <div className="flex items-center ml-3 lg:ml-2 sm:ml-1">
            <span className="text-3xl text-gray900 cursor-pointer hover:text-success duration-100 ease-in-out lg:text-xl sm:text-lg">
              <ion-icon name="bag-outline"></ion-icon>
            </span>

            <div className="ml-1">
              <p className="text-[0.65rem] text-gray700">Shopping cart:</p>

              <p className="text-xs font-semibold text-gray900">$57.00</p>
            </div>
          </div>
        </div>

        <div className="hidden md:flex pr-4">
          <button className="text-white" onClick={toggleMobileMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              color="black"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        {isMobileMenuOpen && (
          <div className="hidden md:flex justify-center items-center flex-col absolute lg:top-[31%] right-4 bg-gray100 w-1/2 h-1/2 p-2 space-y-2 sm:w-[92.5%] z-50">
            <NavLink to="/" className="hover:text-success py-1 mx-2 navlink">
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="hover:text-success py-1 mx-2 navlink"
            >
              About Us
            </NavLink>
            <NavLink
              to="/blog"
              className="hover:text-success py-1 mx-2 navlink"
            >
              Blog
            </NavLink>
            <NavLink
              to="/contacts"
              className="hover:text-success py-1 mx-2 navlink"
            >
              Contact Us
            </NavLink>

            <div className="md:flex flex-col items-center justify-between text-gray300 bg-gray900 pb-4 pt-2 px-2 sm:px-1 w-full">
              <div className="flex items-center">
                <span className="text-xl mr-1 sm:text-sm">
                  <ion-icon name="location-outline"></ion-icon>
                </span>

                <h2 className="text-xs">
                  Store Location: Lincoln- 344, Illinois, Chicago, USA
                </h2>
              </div>

              <div className="flex items-center sm:text-xs sm:mt-3">
                <div className="flex">
                  <select className="outline-none cursor-pointer mx-2 hover:text-success duration-75 ease-in-out text-sm bg-gray900 text-gray300 sm:mx-1 sm:text-xs">
                    <option value="">Eng</option>
                    <option value="">Esp</option>
                  </select>

                  <select className="outline-none cursor-pointer mx-2 hover:text-success duration-75 ease-in-out text-sm bg-gray900 text-gray300 sm:mx-1 sm:text-xs">
                    <option value="">USD</option>
                    <option value="">EUR</option>
                    <option value="">GBP</option>
                  </select>
                </div>

                <h2 className="mx-2 xs:hidden sm:mx-1">|</h2>

                <hr className="text-gray200" />

                <span className="flex sm:text-sm">
                  <button className="ml-2 hover:text-success duration-75 ease-in-out text-sm sm:text-xs">
                    Sign In
                  </button>
                  <h2 className="mx-1">/</h2>
                  <button className="mx-1 hover:text-success duration-75 ease-in-out text-sm sm:text-xs">
                    Sign Up
                  </button>
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
