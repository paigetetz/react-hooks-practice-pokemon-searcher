import React, {useState} from "react";
import { Form } from "semantic-ui-react";
const API = 'http://localhost:3001/pokemon'

function PokemonForm({newPokemons}) {
  const [name, setName] = useState('')
  const [hp, setHp] = useState('')
  const [fronturl, setFrontUrl] = useState('')
  const [backurl, setBackUrl] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault();
    let newPokemon = {
      name: name,
      hp: hp,
      sprites:{
      fronturl: fronturl,
      backurl: backurl}
  }
  fetch (API,{
    method: 'POST',
    headers: {'Content-type' : 'application/json'},
    body: JSON.stringify(newPokemon)
    })
    .then(res => res.json())
    .then(newPokemons (newPokemon)) 
  }


  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" value = {name} onChange = {(e) => setName (e.target.value)} />
          <Form.Input fluid label="hp" placeholder="hp" name="hp"value ={hp} onChange = {(e) => setHp (e.target.value)}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value ={fronturl} onChange = {(e) => setFrontUrl (e.target.value)}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value ={backurl} onChange = {(e) => setBackUrl (e.target.value)}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
