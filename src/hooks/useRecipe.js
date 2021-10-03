import { useState, useEffect } from "react";
import * as PATHS from "../constants/paths";

export default function useRecipe(slug) {
  const [recipe, setRecipe] = useState({});
  const [loading, setLoading] = useState(true);
  const [found, setFound] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      const data = await fetch(PATHS.RECIPE_URL);
      const { recipes } = await data.json();
      const res = recipes.filter((recipe) => recipe.slug === slug);
      if (res.length > 0) {
        setRecipe(res[0]);
        setFound(true);
        setLoading(false);
      } else if (res.length === 0) {
        setFound(false);
      }
    };
    setLoading(true);
    fetchRecipes();
    return () => {
      setRecipe([]);
    };
  }, [slug]);

  return {
    recipe,
    found,
    loading,
  };
}
