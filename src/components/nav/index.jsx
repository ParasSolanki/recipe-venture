import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Nav({ links }) {
  const location = useLocation();
  return (
    <nav>
      <ul className="flex justify-between items-center space-x-7">
        {links.map((link) => (
          <li key={link.id}>
            <Link
              to={link.href}
              className={`${
                link.href === location.pathname
                  ? "text-purple-600 font-semibold dark:text-purple-600"
                  : "text-gray-900 dark:text-white"
              } text-base hover:text-purple-500 dark:hover:text-purple-500`}
              title={link.title}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
