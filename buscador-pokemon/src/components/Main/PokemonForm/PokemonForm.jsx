import React from "react";
import "./PokemonForm.css"

const PokemonForm = () => {
  return <div className="form-container">
    <form className="poke-form">

      <label>Introduce el id del Pokémon</label>
      <input></input>

      <label>Introduce el nombre del nuevo Pokémon</label>
      <input></input>

      <label>Introduce una foto</label>
      <input></input>

      <label>Tipo de Pokémon</label>
      <input></input>

      <label>Segundo tipo</label>
      <input></input>

      <button>Crear</button>
    </form>
  </div>;
};

export default PokemonForm;
