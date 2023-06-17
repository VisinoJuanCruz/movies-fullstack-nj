import { getPokemons } from "../../redux/actions";
import { useEffect, useState } from "react";
import { PokemonCard } from "../pokemonCard/PokemonCard";
import { useDispatch, useSelector } from "react-redux";
import './PokemonCardContainer.css'

export const PokemonCardContainer = () => {
 
  const [loading, setLoading] = useState(false);
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    setLoading(true)
    dispatch(getPokemons());
  setLoading(false)
  },[])

  const pokemons = useSelector(state => state.pokemons);
  
  if(loading){
    return <h1>🌀Loading🌀</h1>
  }

  return (
    <div className="pokedex-container" >
        
        <h1>Pokedex</h1>
        <ul className='pokemoncards-container row'>
        {
            pokemons.map(pokemon => {
                return(
                  
                    <li key={pokemon.id} className="col-sm-12 col-md-6 col-lg-4">
                          <PokemonCard pokemon={pokemon}/>
                    </li>
              
                )
            })
        }
        </ul>

    </div>
)

};

