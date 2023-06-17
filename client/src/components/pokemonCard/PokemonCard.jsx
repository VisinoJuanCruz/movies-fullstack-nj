import axios from 'axios';
import { useEffect, useState } from 'react';
import './PokemonCard.css'

export const PokemonCard = ({pokemonUrl}) =>  {

    const [pokemon, setPokemon] = useState([])
    const [loading, setLoading] = useState(true)

    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
      }

    useEffect(() => {
        axios.get(`${pokemonUrl}`)
        .then(res => { const newPokemon = res.data
        setPokemon(newPokemon)
    setLoading(false)})
    }, [])
    
    console.log(pokemon)

    if(loading) return <h1>Loading...</h1>

    const className = `pokemon-card-container ${pokemon.types[0].type.name}`

    return (
        <div className={className}>
            <div className="pokemon-card">
                <div className="background">
                    <img className="pokemon-image img-fluid" src={pokemon.sprites.other.dream_world.front_default} alt="" /> 
                </div>


              <div className="content">
                <h1 className="pokemon-name">
                    { capitalize(pokemon.name) }
                </h1>
              
                <span className="pokemon-type">
                    {pokemon.types[0].type.name}
                </span>
              
                <div className="pokemon-stats row">
                        {
                        pokemon.stats.map(stat => {
                            return(
                                <p className="stat col-6 " key={stat.stat.name}>{capitalize(stat.stat.name)}: {stat.base_stat}</p>
                            )})
                        }
                </div>

              </div>
            </div>
            
            
            
        </div>
    )

}