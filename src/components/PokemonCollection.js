import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemon}) {
  return (
    <Card.Group itemsPerRow={6}>
      {pokemon.map((p) => <PokemonCard key={p.id} name={p.name} hp={p.hp} fSprite={p.sprites.front} bSprite={p.sprites.back} />)}
    </Card.Group>
  );
}

export default PokemonCollection;
