import React from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "../ThemeToggle";
import { links, socialLinks } from "../../fixtures/links";
import * as ROUTES from "../../constants/routes";

export default function Footer() {
  return (
    <footer className="w-full py-16 bg-gray-200 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col justify-center items-center">
          <div className="max-w-2xl mx-auto grid gap-y-2 grid-cols-2 sm:grid-cols-5 text-center mb-6">
            {links.map((link, index) => (
              <Link
                to={link.href}
                key={index}
                className="inline-block text-gray-800 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 
                  focus:ring-offset-gray-200 focus:ring-gray-700 dark:focus:ring-offset-gray-800 rounded dark:focus:ring-gray-300"
                title={link.title}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="mb-6">
            <Link
              to={ROUTES.HOME}
              className="w-40 h-16 block text-gray-900 text-xl dark:text-white rounded focus:outline-none"
              title="Recipe Venture"
            >
              <span className="w-full h-full block">
                <img src="logo.png" alt="logo" className="w-full h-full" />
              </span>
            </Link>
          </div>
          <div className="mb-6">
            <ThemeToggle />
          </div>
          <div className="grid gap-3 grid-cols-5 sm:grid-cols-5">
            {socialLinks.map((item, index) => (
              <a
                className="w-11 h-11 flex justify-center items-center bg-gray-300 text-purple-500 hover:bg-purple-500 hover:text-white cursor-pointer rounded-full dark:bg-gray-700 dark:text-white dark:hover:bg-purple-500"
                key={index}
                href={item.href}
                title={item.name}
                target="_blank"
                rel="noreferrer"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
