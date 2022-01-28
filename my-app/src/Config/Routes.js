import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login, Signup, Home } from "../Components";
import allPaths from "./path";
const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path={allPaths.Login} exact component={Login} />
        <Route path={allPaths.Signup} exact component={Signup} />
        <Route path={allPaths.Home} exact component={Home} />
      </Switch>
    </Router>
  );
};
export default Routes;
