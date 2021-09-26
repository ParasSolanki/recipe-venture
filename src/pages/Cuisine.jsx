import React, { useEffect, useState } from "react";

import { useParams, useHistory } from "react-router-dom";
import Loader from "../components/Loader";
import useHasCuisine from "../hooks/useHasCuisine";
import useRecipes from "../hooks/useRecipes";
import CuisinesSlugRecipesPage from "../modules/CuisinesSlugRecipesPage";
import { filterCuisineRecipes } from "../utils/filter-cuisine-recipes";

export default function Cuisine() {
  const { slug } = useParams();
  const [loading, setLoading] = useState(true);
  const [cuisine, setCuisine] = useState("");
  const { recipes: data } = useRecipes();
  const { found } = useHasCuisine(slug);

  const history = useHistory();
  const recipes = filterCuisineRecipes(data, slug);

  // uppercase first letter
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  useEffect(() => {
    document.title = "Cuisine | Recipe Venture";
  }, []);

  useEffect(() => {
    if (found === true) {
      setCuisine(capitalizeFirstLetter(slug.replaceAll("-", " ")));
      setLoading(false);
    } else if (found === false) {
      history.push("/*");
    }
  }, [recipes, slug, found, history]);

  return !loading ? (
    <CuisinesSlugRecipesPage cuisine={cuisine} recipes={recipes} />
  ) : (
    <Loader />
  );
}
