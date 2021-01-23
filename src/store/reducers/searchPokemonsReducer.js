import * as actionTypes from "../actions/actionTypes";

const initialState = {
  searchResults: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_POKEMON_SUCCESS:
      return {
        ...state,
        searchResults: action.pokemon,
      };
    case actionTypes.CLEAR_ITEMS:
      return {};
    default:
      return state;
  }
};

export default reducer;
