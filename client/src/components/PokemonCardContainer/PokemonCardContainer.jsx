import { getPokemons } from "../../redux/actions";
import { useEffect, useState } from "react";
import { PokemonCard } from "../pokemonCard/PokemonCard";
import { useDispatch, useSelector } from "react-redux";

export const PokemonCardContainer = () => {
 
  
  const dispatch = useDispatch();
  
  useEffect(() => {
  dispatch(getPokemons());
  },[])
  
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

