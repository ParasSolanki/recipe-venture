import React, { useEffect } from "react";
import RecipesPage from "../modules/RecipesPage";
import useRecipes from "../hooks/useRecipes";
import { filterRecipesByTime } from "../utils/filter-recipes-by-time";

export default function Recipes() {
  const { recipes: data } = useRecipes();
  const recipes = filterRecipesByTime(data);

  console.log(recipes);

  useEffect(() => {
    document.title = "Recipes | Recipe Venture";
  }, []);

  return <RecipesPage recipes={recipes} />;
}
