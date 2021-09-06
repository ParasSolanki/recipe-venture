const lessThanThirty = (recipes, random) => {
  return recipes
    .reduce((temp, recipe) => {
      if (
        parseInt(recipe.prepTime) !== undefined &&
        parseInt(recipe.prepTime) < 30 &&
        temp.length < 500
      ) {
        temp.push(recipe);
      }
      return temp;
    }, [])
    .splice(random, 15);
};

const lessThanSixty = (recipes, random) => {
  return recipes
    .reduce((temp, recipe) => {
      if (
        parseInt(recipe.prepTime) !== undefined &&
        parseInt(recipe.prepTime) > 30 &&
        parseInt(recipe.prepTime) < 60 &&
        temp.length < 500
      ) {
        temp.push(recipe);
      }
      return temp;
    }, [])
    .splice(random, 15);
};
const lessThanOneTwenty = (recipes, random) => {
  return recipes
    .reduce((temp, recipe) => {
      if (
        parseInt(recipe.prepTime) !== undefined &&
        parseInt(recipe.prepTime) > 60 &&
        parseInt(recipe.prepTime) < 120 &&
        temp.length < 500
      ) {
        temp.push(recipe);
      }
      return temp;
    }, [])
    .splice(random, 15);
};
const lessThanFourHundred = (recipes, random) => {
  return recipes
    .reduce((temp, recipe) => {
      if (
        parseInt(recipe.prepTime) !== undefined &&
        parseInt(recipe.prepTime) > 120 &&
        parseInt(recipe.prepTime) < 240 &&
        temp.length < 300
      ) {
        temp.push(recipe);
      }
      return temp;
    }, [])
    .splice(random, 15);
};

const remainingRecipes = (recipes) => {
  return recipes.reduce((temp, recipe) => {
    if (
      parseInt(recipe.prepTime) !== undefined &&
      parseInt(recipe.prepTime) > 240 &&
      parseInt(recipe.prepTime) < 500 &&
      temp.length < 15
    ) {
      temp.push(recipe);
    }
    return temp;
  }, []);
};

export const filterRecipesByTime = (recipes = []) => {
  const random = Math.floor(Math.random() * 450);
  const smallRandom = Math.floor(Math.random() * 280);
  return [
    {
      title: "Recipes Under 30 Minutes",
      data: lessThanThirty(recipes, random),
    },
    {
      title: "Recipes Under 1 Hour",
      data: lessThanSixty(recipes, random),
    },
    {
      title: "Recipes Under 2 Hours",
      data: lessThanOneTwenty(recipes, random),
    },
    {
      title: "Recipes Under 4 Hours",
      data: lessThanFourHundred(recipes, smallRandom),
    },
    {
      title: "Time tacking recipes",
      data: remainingRecipes(recipes),
    },
  ];
};
