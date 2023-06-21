import { getPokemons } from "../../redux/actions";
import { useEffect, useState } from "react";
import { PokemonCard } from "../pokemonCard/PokemonCard";
import { useDispatch, useSelector } from "react-redux";
import { Paginate } from '../paginate/Paginate'
import './PokemonCardContainer.css'

export const PokemonCardContainer = () => {
 
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState()

  const dispatch = useDispatch();
  
  useEffect(() => {
    setLoading(true)
    dispatch(getPokemons(currentPage));
  setLoading(false)
  },[currentPage])

  const pokemons = useSelector(state => state.pokemons);
  const pokemonsPageNumber = useSelector(state => state.pokemonsPageNumber);
  if(loading){
    return <h1>🌀Loading🌀</h1>
  }

  return (
    <div className="pokedex-container" >
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


        <Paginate pageNumber={pokemonsPageNumber} currentPage={currentPage} setCurrentPage={setCurrentPage}/>

    </div>
)

};

