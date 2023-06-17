import {
    GET_POKEMONS,
} from "./actions_types";
import axios from "axios";

const URL = "https://pokeapi.co/api/v2"

export const getPokemons = () => {
  return async function (dispatch) {
    const pokemons = (await axios.get(`${URL}/pokemon`)).data;
    const arrPokUrls = pokemons.results.map((pokemon) => pokemon.url);
    const arrPok = await Promise.all(
      arrPokUrls.map(async (url) => {
        const pokemon = (await axios.get(url)).data;
        return pokemon;
      }))
      dispatch({
        type: GET_POKEMONS,
        payload: arrPok,

    })
  }
}
        
