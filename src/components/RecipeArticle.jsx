import React from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function RecipeArticle({ recipe }) {
  const { name, slug, cuisine, image, prepTime, cuisineSlug } = recipe;
  return (
    <article>
      <h2 className="text-3xl sm:text-4xl text-gray-800 dark:text-white font-bold mb-6">
        {name}
      </h2>
      <div className="flex flex-start mb-4">
        <Link
          to={`/cuisines/${cuisineSlug}/recipes`}
          className="inline-block text-sm px-2 py-1 bg-gray-200 text-purple-600 dark:text-gray-200 dark:bg-purple-500 hover:bg-gray-300 dark:hover:bg-purple-400 rounded"
          title={cuisine}
        >
          <span>#</span>
          {cuisine}
        </Link>
      </div>
      <div className="mb-6 w-full h-64 sm:h-96">
        <LazyLoadImage
          src={image}
          alt={slug}
          width="100%"
          height="100%"
          effect="blur"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="mb-4">
        <p className="text-2xl text-gray-500 dark:text-gray-300 mb-4">
          <span className="font-semibold text-gray-700 dark:text-gray-200">
            Cuisine:{" "}
          </span>
          {cuisine}
        </p>
        <p className="text-2xl text-gray-500 dark:text-gray-300 mb-4">
          <span className="font-semibold text-gray-700 dark:text-gray-200">
            Preparation Time:{" "}
          </span>
          <time>{prepTime} mins</time>
        </p>
      </div>
      <div className="recipe-body">
        <h3>Ingredients</h3>
        <ul>
          {recipe.ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <h3>Instructions</h3>
        <ol>
          {recipe.instructions.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      </div>
    </article>
  );
}
