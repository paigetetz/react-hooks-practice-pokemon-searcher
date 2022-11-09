import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemons}) {
  return (

    <Card.Group itemsPerRow={6}>
      {pokemons.map(pokemon => <PokemonCard pokemon = {pokemon} key = {pokemon.id}/>)}
      <h1>Hello From Pokemon Collection</h1>
    </Card.Group>
  );
}

export default PokemonCollection;
