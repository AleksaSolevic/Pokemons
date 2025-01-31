import { Pokemon } from "@/Poketype";

export default function Pokecard({ name, id, type, base_experience } : Pokemon)
{
  return (
    <div className="pokecard">
      <h1>{ name }</h1>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        alt="Charmander"
        width={96}
        height={96}
      />
      <p> {type}:</p>
      <p> { base_experience }</p>
    </div>
  );
}
