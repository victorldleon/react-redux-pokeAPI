import React, { Component } from "react";
import "./ItemsFavContainer.css";

import ItemCard from "../../components/ItemCard/ItemCard";

class ItemsFavContainer extends Component {
  render() {
    return (
      <div className="ItemsFavContainer">
        <h1>Items Fav Container</h1>
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </div>
    );
  }
}

export default ItemsFavContainer;
