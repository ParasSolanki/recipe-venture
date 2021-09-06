import React, { useEffect, useState } from "react";

import { useHistory, useParams } from "react-router-dom";
import Loader from "../components/Loader";
import useRecipes from "../hooks/useRecipes";
import RecipePage from "../modules/RecipePage";

import { filterRecipe } from "../utils/filter-recipe";

export default function Recipe() {
  const [loading, setLoading] = useState(true);
  const { recipes: data } = useRecipes();
  const { slug } = useParams();
  const history = useHistory();
  const recipe = filterRecipe(data, slug);

  useEffect(() => {
    document.title = "Recipe | Recipe Venture";
  }, []);

  useEffect(() => {
    if (recipe.length > 0) {
      setLoading(false);
    }
  }, [recipe, history]);

  return !loading ? <RecipePage recipe={recipe[0]} /> : <Loader />;
}
