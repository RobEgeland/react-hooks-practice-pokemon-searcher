import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage({handleSubmit, pokemon, searchTerm, handleChange, name, changeName, hp, changeHp, frontImg, changeFrontImg, backImg, changeBackImg}) {
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm handleSubmit={handleSubmit} changeBackImg={changeBackImg} backImg={backImg} changeFrontImg={changeFrontImg} frontImg={frontImg} changeHp={changeHp} hp={hp} name={name} changeName={changeName} />
      <br />
      <Search handleChange={handleChange} searchTerm={searchTerm} />
      <br />
      <PokemonCollection pokemon={pokemon} />
    </Container>
  );
}

export default PokemonPage;
