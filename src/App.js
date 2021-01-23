import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import Topbar from "./components/Topbar/Topbar";
import ItemViewContainer from "./containers/ItemViewContainer/ItemViewContainer";
import ItemsContainer from "./containers/ItemsContainer/ItemsContainer";
// import ItemsFavContainer from "./containers/ItemsFavContainer/ItemsFavContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Topbar />
        <div className="Main">
          <Switch>
            <Route path="/item" component={ItemViewContainer} />
            <Route path="/">
              <ItemsContainer />
            </Route>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
