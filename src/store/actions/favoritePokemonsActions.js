import * as actionTypes from "./actionTypes";

export const addPokemonToFavorites = (pokemon) => {
  return {
    type: actionTypes.ADD_POKEMON_TO_FAVORITES,
    pokemon: pokemon,
  };
};

export const removePokemonFromFavorites = (pokemonId) => {
  return {
    type: actionTypes.REMOVE_POKEMON_FROM_FAVORITES,
    pokemonId: pokemonId,
  };
};
