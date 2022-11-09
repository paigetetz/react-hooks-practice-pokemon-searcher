import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon}) {
  const [showFront, setShowFront] = useState(true)
  console.log(pokemon)

  function handleCard (){
    setShowFront(showFront => !showFront)
    
  }
  return (
    <Card>
      <div>
        <div onClick = {handleCard} className="image">
          <img src = {showFront ? pokemon.sprites.front: pokemon.sprites.back} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
