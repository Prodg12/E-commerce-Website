import React from "react";
import StyledSection from "./StyledSection";
import AppstoreImg from "../assets/Footer-img/App Store.png";
import PlaystoreImg from "../assets/Footer-img/Google Play.png";
import ApplepayImg from "../assets/Footer-img/Method-ApplePay.png";
import VisapayImg from "../assets/Footer-img/Method-Visa.png";
import DiscoverpayImg from "../assets/Footer-img/Method-Discover.png";
import MasterCardImg from "../assets/Footer-img/Method-Mastercard.png";
import CartImg from "../assets/Footer-img/Cart.png";

const Footer = () => {
  return (
    <StyledSection className="bg-gray900 text-white pt-16 pb-8 md:pt-10">
      <div className="grid grid-cols-12 gap-8 lg:gap-5 lg:grid-cols-10 md:gap-2 sm:gap-0">
        <div className="col-span-3 lg:col-span-4 md:col-span-10 md:mb-8 md:flex md:items-center md:justify-center md:flex-col md:text-center">
          <h2 className="text-lg font-semibold sm:text-base">About Shopery</h2>

          <p className="mt-3 text-sm w-[95%] text-gray500 xs:text-xs">
            Connect with Shopery for culinary delights. Reach out for reservations, events, or any inquiries anytime!
          </p>

          <span className="flex items-center gap-3 mt-4 text-sm lg:text-xs">
            <p className="border-b-2 border-solid border-successDark pb-1">
              (219) 555-0114
            </p>

            <p className="text-gray500">or</p>

            <p className="border-b-2 border-solid border-successDark pb-1">
              Proxy@gmail.com
            </p>
          </span>
        </div>

        <div className="col-span-2 md:col-span-4">
          <ul className="flex flex-col gap-3 md:gap-2">
            <li className="font-semibold mb-1 md:font-normal md:text-sm md:mb-0">My Account</li>
            <li className="text-sm text-gray400 cursor-pointer hover:text-white sm:text-xs">
              Order History
            </li>
            <li className="text-sm text-gray400 cursor-pointer hover:text-white sm:text-xs">
              Shopping Cart
            </li>
            <li className="text-sm text-gray400 cursor-pointer hover:text-white sm:text-xs">
              Wishlist
            </li>
            <li className="text-sm text-gray400 cursor-pointer hover:text-white sm:text-xs">
              Settings
            </li>
          </ul>
        </div>

        <div className="col-span-2 md:col-span-4">
          <ul className="flex flex-col gap-3 md:gap-2">
            <li className="font-semibold mb-1 md:font-normal md:text-sm md:mb-0">Helps</li>
            <li className="text-sm text-gray400 cursor-pointer hover:text-white sm:text-xs">
              Contact
            </li>
            <li className="text-sm text-gray400 cursor-pointer hover:text-white sm:text-xs">
              Faqs
            </li>
            <li className="text-sm text-gray400 cursor-pointer hover:text-white sm:text-xs">
              Terms & Condition
            </li>
            <li className="text-sm text-gray400 cursor-pointer hover:text-white sm:text-xs">
              Privacy Policy
            </li>
          </ul>
        </div>

        <div className="col-span-2 md:col-span-4">
          <ul className="flex flex-col gap-3 md:gap-2">
            <li className="font-semibold mb-1 md:font-normal md:text-sm md:mb-0">Proxy</li>
            <li className="text-sm text-gray400 cursor-pointer hover:text-white sm:text-xs">
              About
            </li>
            <li className="text-sm text-gray400 cursor-pointer hover:text-white sm:text-xs">
              Shop
            </li>
            <li className="text-sm text-gray400 cursor-pointer hover:text-white sm:text-xs">
              Product
            </li>
            <li className="text-sm text-gray400 cursor-pointer hover:text-white sm:text-xs">
              Product Details
            </li>
            <li className="text-sm text-gray400 cursor-pointer hover:text-white sm:text-xs">
              Track Order
            </li>
          </ul>
        </div>

        <div className="col-span-3 lg:col-span-12 md:flex md:items-center md:justify-center md:flex-col md:mt-8">
          <h1 className="md:text-sm xs:text-xs">Download our Mobile App</h1>

          <span className="flex items-center gap-2 mt-4">
            <img
              src={AppstoreImg}
              alt="app-store-img"
              className="w-24 md:w-20 xs:w-16"
            />
            <img
              src={PlaystoreImg}
              alt="play-store-img"
              className="w-24 md:w-20 xs:w-16"
            />
          </span>
        </div>
      </div>

      <div className="border-t border-solid border-gray400 mt-12 flex items-center justify-between pt-8">
        <div className="flex items-center gap-2 sm:gap-1">
          <div className="hover:bg-success text-white py-2 px-3 rounded-full text-sm flex items-center justify-center cursor-pointer duration-100 ease-in-out sm:text-xs sm:text-[0.6rem] sm:px-2">
            <i className="fa-brands fa-facebook-f"></i>
          </div>

          <div className="hover:bg-success text-white py-2 px-2 rounded-full text-sm flex items-center justify-center cursor-pointer duration-100 ease-in-out sm:text-xs sm:text-[0.6rem]">
            <i className="fa-brands fa-x-twitter"></i>
          </div>

          <div className="hover:bg-success text-white py-2 px-2 rounded-full text-sm flex items-center justify-center cursor-pointer duration-100 ease-in-out sm:text-xs sm:text-[0.6rem]">
            <i className="fa-brands fa-pinterest-p"></i>
          </div>

          <div className="hover:bg-success text-white py-2 px-2 rounded-full text-sm flex items-center justify-center cursor-pointer duration-100 ease-in-out sm:text-xs sm:text-[0.6rem]">
            <i className="fa-brands fa-instagram"></i>
          </div>
        </div>

        <span className="text-xs sm:text-[0.6rem] xs:text-[0.52rem]">
          Ecobazar eCommerce © 2023. All Rights Reserved
        </span>

        <div className="flex items-center gap-2 md:hidden">
          <img
            src={ApplepayImg}
            alt="apple-pay"
            className="w-8"
          />
          <img
            src={VisapayImg}
            alt="method-visa"
            className="w-8"
          />
          <img
            src={DiscoverpayImg}
            alt="discover"
            className="w-8"
          />
          <img
            src={MasterCardImg}
            alt="mastercard"
            className="w-8"
          />
          <img
            src={CartImg}
            alt="cart"
            className="w-8"
          />
        </div>
      </div>
      
      {/* Display only on tabs and mobile phones */}
      <div className="md:flex md:items-center gap-2 justify-center mt-5 hidden">
          <img
            src={ApplepayImg}
            alt="apple-pay"
            className="w-7"
          />
          <img
            src={VisapayImg}
            alt="method-visa"
            className="w-7"
          />
          <img
            src={DiscoverpayImg}
            alt="discover"
            className="w-7"
          />
          <img
            src={MasterCardImg}
            alt="mastercard"
            className="w-7"
          />
          <img
            src={CartImg}
            alt="cart"
            className="w-7"
          />
        </div>
    </StyledSection>
  );
};

export default Footer;
