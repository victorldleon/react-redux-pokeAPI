import React, { Component } from "react";
import "./ItemsContainer.css";

import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

import SearchBar from "../../components/SearchBar/SearchBar";
import ItemCard from "../../components/ItemCard/ItemCard";

class ItemsContainer extends Component {
  removePokemonHandler = (id) => {
    console.log("id", id);
    this.props.rmvPokemon(id);
  };
  render() {
    const favItems = this.props.itemsList.map((item) => {
      return (
        <ItemCard
          item={item}
          key={item.id}
          removePokemonHandler={this.removePokemonHandler}
        />
      );
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

const mapDispatchToProps = (dispatch) => {
  return {
    rmvPokemon: (id) => dispatch(actions.removePokemonFromFavorites(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemsContainer);
