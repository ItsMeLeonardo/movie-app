import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Detail from "../views/Details";
import Home from "../views/Home";
import SearchResults from "../views/SearchResults";
import Start from "../views/Start";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Start />
        </Route>

        <Route path="/home" exact>
          <Home />
        </Route>

        <Route path="/byCategory/:idCategory/:nameCategory" exact>
          <SearchResults />
        </Route>

        <Route path="/byName/:name" exact>
          <SearchResults />
        </Route>

        <Route path="/movie/:id" exact>
          <Detail />
        </Route>
      </Switch>
    </Router>
  );
}
