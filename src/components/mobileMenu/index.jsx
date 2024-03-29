import React from "react";
import { Link, useLocation } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import CancelIcon from "../../icons/CancelIcon";

export default function MobileMenu({ links, mobileMenu, setMobileMenu }) {
  const location = useLocation();
  return (
    <div className="z-50">
      <div
        className="absolute w-full h-screen top-0 left-0 bg-black opacity-30 dark:bg-black"
        onClick={() => setMobileMenu(!mobileMenu)}
      ></div>
      <div className="absolute py-8 top-0 left-0 h-screen w-80 overflow-hidden bg-white dark:bg-gray-700 shadow-2xl">
        <div className="flex items-center justify-between px-5 mb-10">
          <div className="">
            <Link
              to={ROUTES.HOME}
              className="w-40 h-16 block text-gray-900 text-xl dark:text-white rounded focus:outline-none"
              title="Recipe Venture"
            >
              <span className="w-full h-full block">
                {/* <Logo /> */}
                <img src="logo.png" alt="logo" className="w-full h-full" />
              </span>
            </Link>
          </div>
          <button
            className="text-gray-900 p-1 cursor-pointer dark:text-gray-200 hover:bg-gray-100 hover:text-gray-600 dark:hover:text-gray-300 dark:hover:bg-gray-600 rounded-full"
            onClick={() => setMobileMenu(!mobileMenu)}
            title="Close"
          >
            <CancelIcon />
          </button>
        </div>
        <div className="px-5 mb-10">
          <p className="text-base text-gray-800 dark:text-gray-300">
            Your number one source for all types of recipes. We're dedicated to
            giving you the varity of best categories.
          </p>
        </div>
        <nav>
          <ul className="">
            {links.map((link) => (
              <li key={link.id} className="">
                <Link
                  to={link.href}
                  className={`${
                    link.href === location.pathname
                      ? "text-purple-500 font-semibold dark:text-purple-500"
                      : "text-gray-800 dark:text-white"
                  } block text-base px-5 py-3 hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-purple-500`}
                  title={link.title}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
