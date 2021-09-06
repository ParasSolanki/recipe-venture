import { useState, useEffect } from "react";
import * as PATHS from "../constants/paths";

export default function useRecipes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const data = await fetch(PATHS.RECIPE_URL);
      const { recipes } = await data.json();
      setRecipes(recipes);
    };
    fetchRecipes();
    return () => {
      setRecipes([]);
    };
  }, []);
  return {
    recipes,
  };
}
