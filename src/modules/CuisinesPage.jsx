import React from "react";
import { Link } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";

export default function CuisinesPage({ cuisines }) {
  return (
    <AppLayout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <div className="bg-purple-600 w-24 h-1 rounded mb-3"></div>
            <h1 className="text-4xl text-gray-900 dark:text-white font-semibold">
              Cuisines
            </h1>
          </div>
          <ul className="">
            {cuisines.map((cuisine, index) => (
              <li
                key={index}
                className="inline-block"
                style={{ margin: ".35em" }}
              >
                <Link
                  to={`/cuisines/${cuisine
                    .split(" ")
                    .join("-")
                    .toLowerCase()}/recipes`}
                  className="inline-block text-base px-3 py-1 bg-gray-200 text-gray-800 dark:text-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500 rounded"
                  title={cuisine}
                >
                  {cuisine}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </AppLayout>
  );
}
