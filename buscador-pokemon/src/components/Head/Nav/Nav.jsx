import React from "react";
import { Link } from "react-router-dom"
import "./Nav.css"

const Nav = () => {
  return (
    <nav>
      <h1>PokeBuscador 🔍</h1>
      <ul className="nav-bar">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/new">Crear nuevo Pokémon</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;