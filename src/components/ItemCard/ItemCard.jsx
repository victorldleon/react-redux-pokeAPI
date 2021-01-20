import React from "react";
import "./ItemCard.css";

import { NavLink } from "react-router-dom";

const ItemCard = () => (
  <NavLink to="/item" exact="/item" className="ItemCard">
    <div className="LeftContainer">
      <img src="https://via.placeholder.com/150" alt="" srcset="" />
      <p>Pokemon Name</p>
    </div>
    <div className="RightContainer">
      <button>+</button>
    </div>
  </NavLink>
);

export default ItemCard;
