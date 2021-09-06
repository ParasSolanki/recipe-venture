import React from "react";
import AppLayout from "./layouts/AppLayout";
import RecipeCard from "../components/RecipeCard";

export default function RecipesPage({ recipes }) {
  return (
    <AppLayout>
      {recipes.map((item, index) => (
        <section className="py-20" key={index}>
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <div className="bg-purple-600 w-36 h-1 rounded mb-3"></div>
              <h2 className="text-4xl text-gray-900 dark:text-white font-semibold">
                {item.title}
              </h2>
            </div>
            <div className="grid gap-x-4 gap-y-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
              {item.data.map((recipe, index) => (
                <RecipeCard key={index} recipe={recipe} />
              ))}
            </div>
          </div>
        </section>
      ))}
    </AppLayout>
  );
}
