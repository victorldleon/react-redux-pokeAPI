import React, { Component } from "react";
import "./App.css";

import Topbar from "./components/Topbar/Topbar";
// import { ItemViewContainer } from "./containers/ItemViewContainer/ItemViewContainer";
import ItemsContainer from "./containers/ItemsContainer/ItemsContainer";
import ItemsFavContainer from "./containers/ItemsFavContainer/ItemsFavContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Topbar />
        <div className="Main">
          <ItemsContainer />
          <ItemsFavContainer />
        </div>
      </div>
    );
  }
}

export default App;
