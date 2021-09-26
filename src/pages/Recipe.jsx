import React, { useEffect, useState } from "react";

import { useHistory, useParams } from "react-router-dom";
import Loader from "../components/Loader";
import useRecipe from "../hooks/useRecipe";
import RecipePage from "../modules/RecipePage";

export default function Recipe() {
  const [loading, setLoading] = useState(true);
  const { slug } = useParams();
  const { recipe, found } = useRecipe(slug);
  const history = useHistory();

  useEffect(() => {
    document.title = "Recipe | Recipe Venture";
  }, []);

  useEffect(() => {
    if (found === true) {
      setLoading(false);
    } else if (found === false) {
      history.push("/*");
    }
  }, [recipe, found, history]);

  return !loading ? <RecipePage recipe={recipe} /> : <Loader />;
}
