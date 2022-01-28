import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login, Signup } from "../Components";
import allPaths from "./path";
const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path={allPaths.Login} exact component={Login} />
        <Route path={allPaths.Signup} exact component={Signup} />
      </Switch>
    </Router>
  );
};
export default Routes;
