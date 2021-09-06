import React from "react";
import HomePage from "../modules/HomePage";
import useRecipes from "../hooks/useRecipes";
import { filterRecipes } from "../utils/filter-recipes";

export default function Home() {
  const { recipes: data } = useRecipes();
  const recipes = filterRecipes(data);
  return <HomePage recipes={recipes} />;
}
