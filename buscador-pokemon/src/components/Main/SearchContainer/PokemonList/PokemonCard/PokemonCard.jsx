import React from "react";
import "./PokemonCard.css"

const PokemonCard = ({pokemon}) => {
  const { id, name, img, type } = pokemon

  return (
    <div className="pokemon-card">
      <p>#{id} <b>{name.toUpperCase()}</b></p>
      <img src={img} alt={name}/>
      <p>Tipo: <b>{type}</b></p>
    </div>
  )
};

export default PokemonCard;
