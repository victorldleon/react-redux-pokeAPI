import * as actionTypes from "./actionTypes";
import axios from "../../axios/axios-pokeapi";

export const fetchPokemonsStart = () => {
  return {
    type: actionTypes.FETCH_POKEMONS_START,
  };
};

export const searchPokemon = (props) => {
  return (dispatch) => {
    dispatch(fetchPokemonsStart());
    axios
      .get("pokemon/" + props)
      .then((response) => {
        console.log("response", response.data.sprites);
        // dispatch(setIngredients(response.data));
      })
      .catch((error) => {
        // dispatch(fetchIngredientsFailed());
      });
  };
};
