import React from "react";
import "./ItemCard.css";

import { NavLink } from "react-router-dom";

const ItemCard = (props) => (
  <NavLink to="/item" className="ItemCard">
    <div className="LeftContainer">
      <img src={props.item.imgUrl} alt={props.name} />
      <p>{props.item.name}</p>
    </div>
    <div className="RightContainer">
      <button>+</button>
    </div>
  </NavLink>
);

export default ItemCard;
