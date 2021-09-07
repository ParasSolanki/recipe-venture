import { lazy, Suspense } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import Loader from "./components/Loader";

const Home = lazy(() => import("./pages/Home"));
const Recipes = lazy(() => import("./pages/Recipes"));
const About = lazy(() => import("./pages/About"));
const Cuisines = lazy(() => import("./pages/Cuisines"));
const Recipe = lazy(() => import("./pages/Recipe"));
const Cuisine = lazy(() => import("./pages/Cuisine"));
const NotFound = lazy(() => import("./modules/errors/404Page"));

export default function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path={ROUTES.HOME} exact component={Home} />
          <Route path={ROUTES.RECIPES} exact component={Recipes} />
          <Route path={ROUTES.ABOUT_US} exact component={About} />
          <Route path={ROUTES.CUISINES} exact component={Cuisines} />
          <Route path={ROUTES.RECIPE} exact component={Recipe} />
          <Route path={ROUTES.CUISINE} exact component={Cuisine} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </HashRouter>
  );
}
