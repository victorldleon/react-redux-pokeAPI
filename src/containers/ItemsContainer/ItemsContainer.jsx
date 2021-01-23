import React, { Component } from "react";
import "./ItemsContainer.css";

import { connect } from "react-redux";

import SearchBar from "../../components/SearchBar/SearchBar";
import ItemCard from "../../components/ItemCard/ItemCard";

class ItemsContainer extends Component {
  render() {
    const favItems = this.props.itemsList.map((item) => {
      return <ItemCard item={item} key={item.id} />;
    });
    return (
      <div className="ItemsContainer">
        <SearchBar />
        <h2>Fav Pokémons</h2>
        {favItems}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    itemsList: state.favoritePokemons.favItems,
  };
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemsContainer);
