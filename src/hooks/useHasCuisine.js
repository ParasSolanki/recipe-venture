import { useState, useEffect } from "react";
import * as PATHS from "../constants/paths";

export default function useHasCuisine(slug) {
  const [cuisine, setCuisine] = useState("");
  const [found, setFound] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      const data = await fetch(PATHS.RECIPE_URL);
      const { recipes } = await data.json();
      const res = [...new Set(recipes.map((recipe) => recipe.cuisineSlug))];

      if (res.includes(slug)) {
        setFound(true);
        setCuisine(slug);
      } else {
        setFound(false);
      }
    };
    fetchRecipes();
    return () => {
      setCuisine("");
    };
  }, [slug]);

  return {
    cuisine,
    found,
  };
}
