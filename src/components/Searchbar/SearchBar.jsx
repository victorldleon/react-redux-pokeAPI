import React, { Component, Fragment } from "react";
import "./SearchBar.css";

import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

class SearchBar extends Component {
  state = {
    searchValue: "",
  };

  inputChangeHandler = (event) => {
    this.setState({
      searchValue: event.target.value,
    });
  };

  searchHandler = () => {
    this.props.onSearch(this.state.searchValue);
  };

  addToFavHandler = (props) => {
    this.props.addToFav(props);
  };

  render() {
    let searchResultItem;
    if (this.props.srchItem && this.props.srchItem.name) {
      searchResultItem = (
        <div className="SearchResultContainer">
          <div className="LeftContainer">
            <img
              src={this.props.srchItem.sprites.back_default}
              alt={this.props.srchItem.name}
            />
            <div className="col">
              <h2>{this.props.srchItem.name}</h2>
              <p>Height: {this.props.srchItem.height}</p>
              <p>Weight: {this.props.srchItem.weight}</p>
              <p>Experience: {this.props.srchItem.base_experience}</p>
            </div>
          </div>
          <div className="RightContainer">
            <button onClick={() => this.addToFavHandler(this.props.srchItem)}>
              + Add To Favorites
            </button>
          </div>
        </div>
      );
    } else {
    }
    return (
      <React.Fragment>
        <div className="SearchBar">
          <input
            className="SearchInput"
            type="text"
            placeholder="Search Pokemons"
            value={this.state.searchValue}
            onChange={this.inputChangeHandler}
          />
          <button type="submit" onClick={this.searchHandler}>
            search
          </button>
        </div>
        {searchResultItem}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    srchItem: state.searchPokemons.searchResults,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearch: (searchValue) => dispatch(actions.searchPokemon(searchValue)),
    addToFav: (pokemon) => dispatch(actions.addPokemonToFavorites(pokemon)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
