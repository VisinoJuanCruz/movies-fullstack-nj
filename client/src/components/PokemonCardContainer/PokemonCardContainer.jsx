import { getPokemons } from "../../redux/actions";
import { useEffect, useState } from "react";
import { PokemonCard } from "../pokemonCard/PokemonCard";
import { useDispatch, useSelector } from "react-redux";
import './PokemonCardContainer.css'

export const PokemonCardContainer = () => {
 
  
  const dispatch = useDispatch();
  
  useEffect(() => {
  dispatch(getPokemons());
  },[])

  const pokemons = useSelector(state => state.pokemons);
 

  if(pokemons.length === 0){
    return <h1>🌀Loading🌀</h1>
  }

 
  return (
    <div className="pokedex-container" >
        
        <h1>Pokedex</h1>
        <ul className='pokemoncards-container row'>
        {
            pokemons.results.map(pokemon => {
                return(
                    <li key={pokemon.id} className="col-3">
                          <PokemonCard pokemonUrl={pokemon.url}/>
                    </li>
              
                )
            })
        }
        </ul>

    </div>
)

};

