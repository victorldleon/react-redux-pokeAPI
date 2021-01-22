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
    return (
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
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearch: (searchValue) => dispatch(actions.searchPokemon(searchValue)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
