import * as actionTypes from "../actions/actionTypes";

const initialState = {
  favItems: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_POKEMON_TO_FAVORITES:
      console.log("action", action);
      return {
        ...state,
        favItems: state.favItems.concat({
          id: action.pokemon.id,
          name: action.pokemon.name,
          imgUrl: action.pokemon.sprites.back_default,
        }),
      };
    case actionTypes.REMOVE_POKEMON_FROM_FAVORITES:
      const updatedArray = state.favItems.filter(
        (pokemon) => pokemon.id !== action.pokemonId
      );
      return {
        ...state,
        favItems: updatedArray,
      };
    default:
      return state;
  }
};

export default reducer;
