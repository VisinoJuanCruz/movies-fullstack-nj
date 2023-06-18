import axios from 'axios';
import { useEffect, useState } from 'react';
import './PokemonCard.css'

export const PokemonCard = (pokemon) =>  {


    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
      }
      
   
    
    const className = `pokemon-card-container ${pokemon.pokemon.types[0].type.name}`

    return (
        <div className={className}>
            <div className="pokemon-card">
                <div className="background">
                    <img className="pokemon-image img-fluid" src={pokemon.pokemon.sprites.other.dream_world.front_default} alt="" /> 
                </div>


              <div className="content">
                <h1 className="pokemon-name">
                    <strong>
                        { capitalize(pokemon.pokemon.name) }
                        </strong>
                </h1>
              
                <span className="pokemon-type">
                    <strong>
                        {pokemon.pokemon.types[0].type.name}
                    </strong>
                </span>
              
                <div className="pokemon-stats row">
                        {
                        pokemon.pokemon.stats.map(stat => {
                            return(
                                <p className="stat col-6 " key={stat.stat.name}>
                                    <strong>{capitalize(stat.stat.name)}: {stat.base_stat}</strong>
                                    
                                    </p>
                            )})
                        }
                </div>

              </div>
            </div>
            
            
            
        </div>
    )

}