export function filterRecipes(recipes = []) {
  return recipes
    .map((recipe) => recipe.image !== undefined && recipe)
    .splice(Math.floor(Math.random() * 1000), 8);
}
