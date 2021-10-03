import React, { useState, useContext } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { RecipeContext } from "../contexts/recipe";
import useDebounce from "../hooks/useDebounce";
import SearchIcon from "../icons/SearchIcon";
import CancelIcon from "../icons/CancelIcon";

export default function SearchBar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRecipes, setFilterRecipes] = useState([]);
  const [isFound, setIsFound] = useState(null);

  const { recipes } = useContext(RecipeContext);

  const toggleOpen = () => {
    setSearchOpen((prevOpen) => !prevOpen);
    setFilterRecipes([]);
    setSearchTerm("");
  };

  const filter = () => {
    setIsFound(null);
    if (searchTerm === "") {
      setFilterRecipes([]);
    }
    if (searchTerm !== "") {
      const regex = new RegExp(searchTerm, "gi");
      const matchRecipes = recipes
        .filter((recipe) => {
          return recipe.name.match(regex) || recipe.cuisine.match(regex);
        })
        .map((recipe) => {
          return {
            slug: recipe.slug,
            recipeName: recipe.name.replace(
              regex,
              `<mark>${searchTerm}</mark>`
            ),
            cuisineName: recipe.cuisine.replace(
              regex,
              `<mark>${searchTerm}</mark>`
            ),
          };
        });
      matchRecipes.length > 0 ? setIsFound(true) : setIsFound(false);
      setFilterRecipes(matchRecipes);
    }
  };
  useDebounce(filter, 800, [searchTerm]);

  return (
    <div>
      <button
        className="h-6 w-6 flex justify-center items-center text-lg cursor-pointer text-gray-900 rounded dark:text-white focus:outline-none focus:ring-2 focus:ring-offest-white dark:focus:ring-offset-gray-800 focus:ring-gray-900 dark:focus:ring-white"
        onClick={toggleOpen}
      >
        <SearchIcon />
      </button>
      {searchOpen
        ? ReactDOM.createPortal(
            <div className="flex-grow fixed inset-0 w-full h-full p-5 z-50 flex flex-col isolate">
              <div
                className="absolute inset-0 bg-black opacity-30 dark:opacity-50"
                style={{ zIndex: "-1" }}
                onClick={toggleOpen}
              ></div>
              <div className="w-full max-w-2xl mx-auto bg-white dark:bg-gray-700 rounded-md flex flex-col px-4 pt-2 pb-5 divide-y-2 dark:divide-gray-500">
                <header className="flex items-center py-2 mb-1">
                  <span className="text-purple-500">
                    <SearchIcon />
                  </span>
                  <input
                    type="text"
                    className="h-full w-full flex-grow focus:outline-none mx-3 py-1 text-gray-800 dark:text-white bg-white dark:bg-gray-700"
                    placeholder="Search recipes"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <button
                    className="text-gray-700 dark:text-gray-200"
                    onClick={toggleOpen}
                  >
                    <CancelIcon />
                  </button>
                </header>
                <footer className="w-full py-2 mt-1">
                  <div className="space-y-4 overflow-y-auto h-80">
                    {!searchTerm ? (
                      <div className="py-8">
                        <p className="text-center text-gray-500 dark:text-gray-200 text-2xl">
                          Search your favorite recipes
                        </p>
                      </div>
                    ) : filterRecipes.length > 0 ? (
                      filterRecipes.map((recipe, index) => (
                        <Link
                          key={index}
                          to={`/recipes/${recipe.slug}`}
                          className="bg-gray-200 dark:bg-gray-500 py-2 px-3 rounded shadow block hover:bg-purple-500 group dark:hover:bg-purple-500"
                        >
                          <p
                            className="text-base text-gray-700 dark:text-white group-hover:text-white font-semibold"
                            dangerouslySetInnerHTML={{
                              __html: recipe.recipeName,
                            }}
                          ></p>
                          <p
                            className="text-sm text-purple-500 dark:text-gray-300 group-hover:text-gray-800"
                            dangerouslySetInnerHTML={{
                              __html: recipe.cuisineName,
                            }}
                          ></p>
                        </Link>
                      ))
                    ) : (
                      isFound === false && (
                        <div className="p-2">
                          <p className="text-gray-500 dark:text-gray-400">
                            No Results for
                            <span className="text-gray-700 dark:text-gray-300">{` "${searchTerm}"`}</span>
                          </p>
                        </div>
                      )
                    )}
                  </div>
                </footer>
              </div>
            </div>,
            document.body
          )
        : null}
    </div>
  );
}
