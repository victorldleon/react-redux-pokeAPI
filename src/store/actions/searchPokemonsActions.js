import * as actionTypes from "./actionTypes";
import axios from "../../axios/axios-pokeapi";

export const fetchPokemonStart = () => {
  return {
    type: actionTypes.FETCH_POKEMON_START,
  };
};

export const fetchPokemonSuccess = (pokemon) => {
  return {
    type: actionTypes.FETCH_POKEMON_SUCCESS,
    pokemon: pokemon,
  };
};

export const fetchPokemonFail = (error) => {
  return {
    type: actionTypes.FETCH_POKEMON_FAIL,
    error: error,
  };
};

export const searchPokemon = (props) => {
  return (dispatch) => {
    dispatch(fetchPokemonStart());
    axios
      .get("pokemon/" + props)
      .then((response) => {
        dispatch(fetchPokemonSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchPokemonFail(error));
      });
  };
};
