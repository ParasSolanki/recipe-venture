import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import useRecipes from "../hooks/useRecipes";
import CuisinesSlugRecipesPage from "../modules/CuisinesSlugRecipesPage";
import { filterCuisineRecipes } from "../utils/filter-cuisine-recipes";

export default function Cuisine() {
  const [loading, setLoading] = useState(true);
  const [cuisine, setCuisine] = useState("");
  const { recipes: data } = useRecipes();
  const { slug } = useParams();
  // const history = useHistory();
  const recipes = filterCuisineRecipes(data, slug);

  // uppercase first letter
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  useEffect(() => {
    document.title = "Cuisine | Recipe Venture";
  }, []);

  useEffect(() => {
    if (recipes.length > 0) {
      setCuisine(capitalizeFirstLetter(slug.replaceAll("-", " ")));
      setLoading(false);
    }
  }, [recipes, slug]);

  return !loading ? (
    <CuisinesSlugRecipesPage cuisine={cuisine} recipes={recipes} />
  ) : (
    <Loader />
  );
}
