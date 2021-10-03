import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
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
    if (found === true) {
      setCuisine(capitalizeFirstLetter(slug.replaceAll("-", " ")));
      setLoading(false);
    } else if (found === false) {
      history.push("/*");
    }
  }, [recipes, slug, found, history]);

  return !loading ? (
    <>
      <Helmet>
        <title>Cuisine | Recipe Venture</title>
        <meta
          name="description"
          content="Find the best recipes for you."
        ></meta>
        <meta property="og:title" content="Cuisine | Recipe Venture"></meta>
        <meta
          property="og:description"
          content="Your number one source for all types of recipes. We're dedicated to giving you the varity of best categories."
        ></meta>
        <meta
          property="og:image"
          content="https://recipe-venture.com/images/veg-recipe.jpg"
        ></meta>
        <meta property="og:url" content="https://recipe-venture.com/"></meta>
        <meta name="twitter:title" content="Cuisine | Recipe Venture"></meta>
        <meta
          name="twitter:description"
          content="Your number one source for all types of recipes. We're dedicated to giving you the varity of best categories."
        ></meta>
        <meta
          name="twitter:image"
          content="https://recipe-venture.com/images/veg-recipe.jpg"
        ></meta>
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta property="og:site_name" content="Recipe Venture"></meta>
        <meta name="twitter:image:alt" content="Recipe Venture"></meta>
      </Helmet>
      <CuisinesSlugRecipesPage cuisine={cuisine} recipes={recipes} />
    </>
  ) : (
    <Loader />
  );
}
