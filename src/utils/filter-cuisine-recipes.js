export const filterCuisineRecipes = (recipes = [], slug = "") => {
  return recipes.reduce((temp, recipe) => {
    if (recipe.cuisineSlug === slug && temp.length < 150) {
      temp.push(recipe);
    }
    return temp;
  }, []);
};
