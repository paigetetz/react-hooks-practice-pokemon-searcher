import React, {useEffect, useState} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";



const API = 'http://localhost:3001/pokemon'

function PokemonPage() {
  const [pokemons, setPokemons] = useState([])
  const [search, setSearch] = useState('')

  const filteredPokemon = pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(search.toLowerCase()))
  const newPokemons = (newPokemon) => {setPokemons([...pokemons, newPokemon])}
  useEffect(() => {
    fetch(API)
    .then(resp => resp.json())
    .then(data => {setPokemons(data)})
    }, [])
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm newPokemons = {newPokemons}/> 
      <br />
      <Search search = {search} setSearch = {setSearch}/>
      <br />
      <PokemonCollection pokemons = {filteredPokemon}/>
    </Container>
  );
}

export default PokemonPage
