import { useState, useEffect } from "react";
import * as PATHS from "../constants/paths";

export default function useRecipe(slug) {
  const [recipe, setRecipe] = useState([]);
  const [found, setFound] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      const data = await fetch(PATHS.RECIPE_URL);
      const { recipes } = await data.json();
      const res = recipes.filter((recipe) => recipe.slug === slug);
      if (res.length > 0) {
        setFound(true);
        setRecipe(res[0]);
      } else if (res.length === 0) {
        setFound(false);
      }
    };
    fetchRecipes();
    return () => {
      setRecipe([]);
    };
  }, [slug]);

  return {
    recipe,
    found,
  };
}
