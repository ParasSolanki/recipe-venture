import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useHistory, useParams } from "react-router-dom";
import Loader from "../components/Loader";
import useRecipe from "../hooks/useRecipe";
import RecipePage from "../modules/RecipePage";

export default function Recipe() {
  const { slug } = useParams();
  const history = useHistory();
  const { recipe, found, loading } = useRecipe(slug);

  useEffect(() => {
    if (found === false) {
      history.push("/*");
    }
  }, [found, history]);

  return !loading ? (
    <>
      <Helmet>
        <title>Recipe | Recipe Venture</title>
        <meta property="og:title" content={recipe.name}></meta>
        <meta property="og:description" content={recipe.excerpt}></meta>
        <meta property="og:image" content={recipe.image}></meta>
        <meta
          property="og:url"
          content={`http://recipe-venture.com/recipes/${recipe.slug}`}
        ></meta>
        <meta name="twitter:title" content={recipe.name}></meta>
        <meta name="twitter:description" content={recipe.excerpt}></meta>
        <meta name="twitter:image" content={recipe.image}></meta>
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta property="og:site_name" content="Recipe Venture"></meta>
        <meta name="twitter:image:alt" content="Recipe Venture"></meta>
      </Helmet>
      <RecipePage recipe={recipe} />
    </>
  ) : (
    <Loader />
  );
}
