import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { RecipeContext } from "../contexts/recipe";
import CuisinesPage from "../modules/CuisinesPage";
import { filterCuisines } from "../utils/filter-cuisines";

export default function Cuisines() {
  const { recipes: data } = useContext(RecipeContext);
  const cuisines = filterCuisines(data);

  return (
    <>
      <Helmet>
        <title>Cuisines | Recipe Venture</title>
        <meta
          name="description"
          content="Find the best recipes for you."
        ></meta>
        <meta property="og:title" content="Cuisines | Recipe Venture"></meta>
        <meta
          property="og:description"
          content="Your number one source for all types of recipes. We're dedicated to giving you the varity of best categories."
        ></meta>
        <meta
          property="og:image"
          content="https://recipe-venture.com/images/recipe-image.jpg"
        ></meta>
        <meta property="og:url" content="https://recipe-venture.com/"></meta>
        <meta name="twitter:title" content="Cuisines | Recipe Venture"></meta>
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
      <CuisinesPage cuisines={cuisines} />
    </>
  );
}
