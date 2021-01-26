import * as actionTypes from "./actionTypes";

export const addPokemonToFavorites = (pokemon) => {
  return {
    type: actionTypes.ADD_POKEMON_TO_FAVORITES,
    pokemon: pokemon,
  };
};
