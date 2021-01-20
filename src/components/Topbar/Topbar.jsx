import React from "module";
import "./Topbar.css";

import { NavLink } from "react-router-dom";

const Topbar = () => (
  <div className="Topbar">
    <NavLink to="/" exact="/">
      PokéAPI
    </NavLink>
  </div>
);

export default Topbar;
