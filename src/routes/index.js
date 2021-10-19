import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "../views/Home";
import Start from "../views/Start";

export default function Routes() {
  return (
    <Router>
      <Switch>
        
        <Route path="/" exact>
          <Start/>
        </Route>
        
        <Route path="/home" exact>
          <Home/>
        </Route>

        <Route path="/category/:id" exact>

        </Route>

        <Route path="/search/:name" exact>

        </Route>

        <Route path="/movie/:id" exact>

        </Route>

        <Route>

        </Route>

      </Switch>
    </Router>
  )
}