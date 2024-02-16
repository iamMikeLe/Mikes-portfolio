import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import MainScreen from "./MainScreen/MainScreen";

class Layout extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={MainScreen} />
          <Route render={() => <h1>Page Not Found</h1>} />
        </Switch>
      </div>
    );
  }
}

export default Layout;
