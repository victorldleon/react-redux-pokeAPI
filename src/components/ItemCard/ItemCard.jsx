import React from "react";
import "./ItemCard.css";

import { NavLink } from "react-router-dom";

const ItemCard = (props) => (
  <div className="ItemCard">
    <div className="LeftContainer">
      <img src={props.item.imgUrl} alt={props.name} />
      <p>{props.item.name}</p>
    </div>
    <div className="RightContainer">
      <NavLink to="item">
        <button>View</button>
      </NavLink>

      <button onClick={() => props.removePokemonHandler(props.item.id)}>
        Remove
      </button>
    </div>
  </div>
);

export default ItemCard;
