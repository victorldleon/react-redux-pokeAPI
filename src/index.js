import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { BrowserRouter } from "react-router-dom";
import thunk from "redux-thunk";

import favoriteItemsReducer from "./store/reducers/favoriteItemsReducer";
import searchItemsReducer from "./store/reducers/searchItemsReducer";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const rootReducer = combineReducers({
  favoriteItems: favoriteItemsReducer,
  seachItems: searchItemsReducer,
});

// const store = createStore(
//   rootReducer,
//   composeEnhancers(applyMiddleware(thunk))
// );

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
