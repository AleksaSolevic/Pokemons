import Pokecard from "./Pokecard";
import { PokedexProps, Pokemon } from "../Poketype";

export default function Pokedex({ pokemons, total, iswinner }: PokedexProps) {
  return (
    <div>
      <h1>Pokedex</h1>
      <div className="pokemondiv">
        {pokemons.map((pokemon: Pokemon) => (
          <Pokecard
            key={pokemon.id}
            name={pokemon.name}
            id={pokemon.id}
            type={pokemon.type}
            base_experience={pokemon.base_experience}
          />
        ))}
      </div>
      <p> total: {total}</p>
      {iswinner && (

        <p>
          Winner!
        </p>

      )}

    </div>
  );
}
