import React, { Component } from "react";
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

  render() {
    let searchResultItem;
    if (this.props.srchItem && this.props.srchItem.name) {
      searchResultItem = <h2>{this.props.srchItem.name}</h2>;
    } else {
    }
    return (
      <div>
        <div className="SearchBar">
          <input
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
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("searchItems", state.searchPokemons.searchResults);
  return {
    srchItem: state.searchPokemons.searchResults,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearch: (searchValue) => dispatch(actions.searchPokemon(searchValue)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
