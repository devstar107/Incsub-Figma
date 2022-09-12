import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Plan from "./components/Product/Plan";
import { REACTPATH } from "./constants/config";
import store from "./store";

function ReactApp() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Switch>
            <Route path={REACTPATH.Plan} component={Plan} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

if (document.getElementById("main")) {
  ReactDOM.render(<ReactApp />, document.getElementById("main"));
}
