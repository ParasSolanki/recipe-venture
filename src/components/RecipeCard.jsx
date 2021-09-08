import React from "react";
import { Link } from "react-router-dom";
import ArrowNarrowRightIcon from "../icons/ArrowNarrowRightIcon";

export default function RecipeCard({ recipe }) {
  return (
    <div className="max-w-sm mx-auto sm:mx-0 bg-gray-100 dark:bg-gray-700 rounded-md shadow-lg overflow-hidden">
      <div className="w-full h-44">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h2 className="text-2xl line-clamp-2 font-semibold text-gray-800 dark:text-white mb-3 leading-tight">
          {recipe.name}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
          {recipe.excerpt}
        </p>
        <Link
          to={`/recipes/${recipe.slug}`}
          className="inline-flex items-center justify-between text-white text-sm px-3 py-1 bg-purple-500 hover:bg-purple-400 dark:hover:bg-purple-400  rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 dark:focus:ring-offset-gray-700 focus:ring-purple-500"
        >
          Read More
          <span className="ml-1">
            <ArrowNarrowRightIcon />
          </span>
        </Link>
      </div>
    </div>
  );
}
