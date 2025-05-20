import React, {useState , useEffect} from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import PokemonCard from "../PokemonList/PokemonCard"
import "./Search.css"

const Search = () => {

  const [value, setValue] = useState("")
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    if(!value) return;

    async function fetchPokemonData() {
      try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${value}`)
        const pokemon = res.data;

        setPokemons([{
          uuid: uuidv4(),
          id: pokemon.id,
          name: pokemon.name,
          img: pokemon.sprites.other.dream_world.front_default,
          type: pokemon.types[0].type.name
        }])
      } catch (error){
        console.log(error)
        setPokemons([])
      }
    }
    fetchPokemonData()
  }, [value]);

  const handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.pokemon.value)
    setValue(e.target.pokemon.value)
  };


  return (
    <section className="poke-searcher">
      <form onSubmit={handleSubmit}>
        <input name="pokemon" placeholder="Introduce el nombre de un Pokémon" />
        <button>Buscar</button>
      </form>

      {pokemons.length !== 0 && (
        <div className="pokemon-list">
          {pokemons.map((poke) => (
            <PokemonCard key={poke.uuid} pokemon={poke} />
          ))}
        </div>
      )}
    </section>
  )
};

export default Search;
