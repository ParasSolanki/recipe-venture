import { HashRouter, Switch, Route } from "react-router-dom";
import { RecipeContext } from "./contexts/recipe";
import useRecipes from "./hooks/useRecipes";
import * as ROUTES from "./constants/routes";
import "react-lazy-load-image-component/src/effects/blur.css";

import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import About from "./pages/About";
import Cuisines from "./pages/Cuisines";
import Privacy from "./pages/Privacy";
import Recipe from "./pages/Recipe";
import Cuisine from "./pages/Cuisine";
import NotFound from "./pages/NotFound";

// const Home = lazy(() => import("./pages/Home"));
// const Recipes = lazy(() => import("./pages/Recipes"));
// const About = lazy(() => import("./pages/About"));
// const Cuisines = lazy(() => import("./pages/Cuisines"));
// const Recipe = lazy(() => import("./pages/Recipe"));
// const Cuisine = lazy(() => import("./pages/Cuisine"));
// const NotFound = lazy(() => import("./modules/errors/404Page"));

export default function App() {
  const { recipes } = useRecipes();
  return (
    <HashRouter>
      <RecipeContext.Provider value={{ recipes }}>
        <Switch>
          <Route path={ROUTES.HOME} exact component={Home} />
          <Route path={ROUTES.RECIPES} exact component={Recipes} />
          <Route path={ROUTES.ABOUT_US} exact component={About} />
          <Route path={ROUTES.CUISINES} exact component={Cuisines} />
          <Route path={ROUTES.PRIVACY} exact component={Privacy} />
          <Route path={ROUTES.RECIPE} exact component={Recipe} />
          <Route path={ROUTES.CUISINE} exact component={Cuisine} />
          <Route component={NotFound} />
        </Switch>
      </RecipeContext.Provider>
    </HashRouter>
  );
}
