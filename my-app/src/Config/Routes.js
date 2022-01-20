import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Login } from "../Components";
import allPaths from "./path";
const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path={allPaths.Home} exact component={Home} />
        <Route path={allPaths.Login} exact component={Login} />
      </Switch>
    </Router>
  );
};
export default Routes;
