// import { useState } from "react";
import "./App.css";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import Pokedex from "./components/Pokedex";
import { Pokemon } from "../src/Poketype";

const PokemonArray: Pokemon[] = [
  { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
  { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
  { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
  { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
  { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
  { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
  { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
  { id: 133, name: "Eevee", type: "normal", base_experience: 65 },
];

const shuffleArray = PokemonArray.sort(() => Math.random() - 0.5);

const pokedex1 = shuffleArray.slice(0, 4);
const totalexp1 = pokedex1.reduce(
  (acc, pokemon: Pokemon) => acc + pokemon.base_experience,
  0
);
const pokedex2 = shuffleArray.slice(4, 8);
const totalexp2 = pokedex2.reduce(
  (acc, pokemon: Pokemon) => acc + pokemon.base_experience,
  0
);

function App() {
  return (
    <>
      <Pokedex
        pokemons={pokedex1}
        total={totalexp1}
        iswinner={totalexp1 > totalexp2}
      />
      <Pokedex
        pokemons={pokedex2}
        total={totalexp2}
        iswinner={totalexp1 < totalexp2}
      />
    </>
  );
}

export default App;
