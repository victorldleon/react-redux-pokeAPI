import { act } from "react-dom/test-utils";
import * as actionTypes from "../actions/actionTypes";

const initialState = {
  searchResults: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_FOR_ITEM:
      return {};
    case actionTypes.CLEAR_ITEMS:
      return {};
    default:
      return state;
  }
};

export default reducer;
