export const filterCuisines = (recipes = []) => {
  return [...new Set(recipes.map((recipe) => recipe.cuisine))];
};
