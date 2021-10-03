import React, { useContext } from "react";
import RecipesPage from "../modules/RecipesPage";
import { filterRecipesByTime } from "../utils/filter-recipes-by-time";
import { RecipeContext } from "../contexts/recipe";
import { Helmet } from "react-helmet";

export default function Recipes() {
  const { recipes: data } = useContext(RecipeContext);
  const recipes = filterRecipesByTime(data);

  return (
    <>
      <Helmet>
        <title>Recipes | Recipe Venture</title>
        <meta
          name="description"
          content="Find the best recipes for you."
        ></meta>
        <meta property="og:title" content="Recipes | Recipe Venture"></meta>
        <meta
          property="og:description"
          content="Your number one source for all types of recipes. We're dedicated to giving you the varity of best categories."
        ></meta>
        <meta
          property="og:image"
          content="https://recipe-venture.com/images/recipe-image.jpg"
        ></meta>
        <meta property="og:url" content="https://recipe-venture.com/"></meta>
        <meta name="twitter:title" content="Recipes | Recipe Venture"></meta>
        <meta
          name="twitter:description"
          content="Your number one source for all types of recipes. We're dedicated to giving you the varity of best categories."
        ></meta>
        <meta
          name="twitter:image"
          content="https://recipe-venture.com/images/recipe-image.jpg"
        ></meta>
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta property="og:site_name" content="Recipe Venture"></meta>
        <meta name="twitter:image:alt" content="Recipe Venture"></meta>
      </Helmet>
      <RecipesPage recipes={recipes} />
    </>
  );
}
