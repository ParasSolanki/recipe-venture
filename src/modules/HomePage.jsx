import React from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import AppLayout from "../modules/layouts/AppLayout";
import RecipeCard from "../components/RecipeCard";
import ArrowNarrowRightIcon from "../icons/ArrowNarrowRightIcon";
import * as ROUTES from "../constants/routes";

export default function HomePage({ recipes }) {
  return (
    <AppLayout>
      <section className="py-28">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row-reverse justify-between items-start">
            <div className="w-full lg:w-6/12 mb-10 lg:mb-0">
              <div className="h-64 sm:h-72 rounded shadow-md overflow-hidden">
                <LazyLoadImage
                  src="images/banner.jpg"
                  alt="Banner"
                  width="100%"
                  height="100%"
                  effect="blur"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="w-full max-w-lg lg:w-6/12">
              <h1 className="text-4xl font-semibold text-gray-900 dark:text-white mb-6">
                Find best recipes for your meal or dinner
              </h1>
              <p className="text-lg text-gray-500 dark:text-gray-400 mb-6">
                We offers a mixture of traditional and modern recipes, ranging
                from a succulent steak to a classic ‘Mexican’.
              </p>
              <Link
                to={ROUTES.RECIPES}
                className="inline-flex items-center justify-between text-white text-base px-3 py-2 bg-purple-500 hover:bg-purple-400 dark:hover:bg-purple-400  rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800 focus:ring-purple-500"
              >
                Explore Recipes
                <span className="ml-1">
                  <ArrowNarrowRightIcon />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex md:justify-between md:items-center flex-col md:flex-row mb-5 md:mb-0">
            <div className="mb-8">
              <div className="bg-purple-600 w-36 h-1 rounded mb-3"></div>
              <h2 className="text-4xl text-gray-900 dark:text-white font-semibold">
                Recipes you would love to cook today
              </h2>
            </div>
            <div className="">
              <Link
                to={ROUTES.RECIPES}
                className="inline-block text-sm text-purple-500 md:text-base cursor-pointer hover:underline"
              >
                View More
              </Link>
            </div>
          </div>
          <div className="grid gap-x-4 gap-y-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {recipes.map((recipe, index) => (
              <RecipeCard key={index} recipe={recipe} />
            ))}
          </div>
        </div>
      </section>
    </AppLayout>
  );
}
