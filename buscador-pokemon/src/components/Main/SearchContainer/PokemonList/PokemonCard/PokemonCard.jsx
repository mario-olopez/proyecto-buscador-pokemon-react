import React from "react";
import "./PokemonCard.css"

const PokemonCard = ({pokemon}) => {
  const { id, name, img } = pokemon

  return (
    <div className="pokemon-card">
      <p>#{id} <b>{name.toUpperCase()}</b></p>
      <img src={img} alt={name}/>
    </div>
  )
};

export default PokemonCard;
