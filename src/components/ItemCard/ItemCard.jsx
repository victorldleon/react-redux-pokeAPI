import React from "react";
import "./ItemCard.css";

const ItemCard = () => (
  <a href="#" className="ItemCard">
    <div className="LeftContainer">
      <img src="https://via.placeholder.com/150" alt="" srcset="" />
      <p>Pokemon Name</p>
    </div>
    <div className="RightContainer">
      <button>+</button>
    </div>
  </a>
);

export default ItemCard;
