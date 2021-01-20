import React, { Component } from "react";
import "./ItemsContainer.css";

import SearchBar from "../../components/SearchBar/SearchBar";
import ItemCard from "../../components/ItemCard/ItemCard";

class ItemsContainer extends Component {
  render() {
    return (
      <div className="ItemsContainer">
        <SearchBar />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </div>
    );
  }
}

export default ItemsContainer;
