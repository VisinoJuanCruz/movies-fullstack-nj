import {PokemonCard} from "../pokemonCard/PokemonCard";
import { useSelector } from "react-redux";

export const PokemonCardContainer = () => {
  const pokemons = useSelector((state) => state.pokemons);

  return (
    <div className="pokemon">
      {pokemons.map((pokemon) => {
        return (
          <div className="pokemon" key={pokemon.id}>
            <div className="cardPokemon">
            <PokemonCard 
              id={pokemon.id}
              name={pokemon.name}
              type={pokemon.type}
            />
            </div>
          </div>
        );
      })}
    </div>
  );
};

