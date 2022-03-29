import React, {useState, useEffect} from "react";
import PokemonPage from "./PokemonPage";

function App() {
  const [pokemon, setPokemon] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  const [name, setName] = useState("")
  const [hp, setHp] = useState("")
  const [frontImg, setFrontImg] = useState("")
  const [backImg, setBackImg] = useState("")

  function handleChange(e) {
    setSearchTerm(e.target.value)
    const updatedPokemon = pokemon.filter((pokemon) => {
      if(searchTerm === "") {
        return pokemon
      }else {
        return pokemon.name.includes(searchTerm)
      }
    })
    setPokemon(updatedPokemon)
  }

  function changeName(e) {
    setName(e.target.value)
  }

  function changeHp(e) {
    setHp(e.target.value)
  }

  function changeFrontImg(e) {
    setFrontImg(e.target.value)
  }

  function changeBackImg(e) {
    setBackImg(e.target.value)
  }

  function handleSubmit() {
    const newPokemon = {
      "id": "",
      "name": name,
      "hp": parseInt(hp),
      "sprites": {
        "front": frontImg,
        "back": backImg
      }
    }

    fetch('http://localhost:3001/pokemon', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPokemon)
    })
    .then(res => res.json())
    .then(res => console.log(res))
    setPokemon([...pokemon, newPokemon])
  }

  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
    .then(res => res.json())
    .then(poke => setPokemon(poke))

  }, [])
  return (
    <div className="App">
      <PokemonPage 
      handleSubmit={handleSubmit}
      changeBackImg={changeBackImg}
      backImg={backImg}
      changeFrontImg={changeFrontImg}
      frontImg={frontImg}
      changeHp={changeHp}
      hp={hp}
      changeName={changeName}
      name={name}
      handleChange={handleChange} 
      searchTerm={searchTerm} 
      pokemon={pokemon} 
      />
    </div>
  );
}

export default App;
