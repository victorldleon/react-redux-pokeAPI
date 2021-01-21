import * as actionTypes from "../actions";

const initialState = {
  favItems: [
    {
      id: "1",
      name: "Poke one",
      imgUrl: "https://via.placeholder.com/150",
    },
    {
      id: "2",
      name: "Poke two",
      imgUrl: "https://via.placeholder.com/150",
    },
    {
      id: "3",
      name: "Poke three",
      imgUrl: "https://via.placeholder.com/150",
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ITEM:
      return {};
    case actionTypes.REMOVE_ITEM:
      return {};
    default:
      return state;
  }
};

export default reducer;
