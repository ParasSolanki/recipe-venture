export const filterRecipe = (recipes = [], slug = "") => {
  return recipes.filter((recipe) => recipe.slug === slug);
};
