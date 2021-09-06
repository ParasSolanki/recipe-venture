import React, { useEffect } from "react";
import useRecipes from "../hooks/useRecipes";
import CuisinesPage from "../modules/CuisinesPage";
import { filterCuisines } from "../utils/filter-cuisines";

export default function Cuisines() {
  const { recipes: data } = useRecipes();
  const cuisines = filterCuisines(data);

  useEffect(() => {
    document.title = "Cuisines | Recipe Venture";
  }, []);

  return <CuisinesPage cuisines={cuisines} />;
}
