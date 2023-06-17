import {
    GET_POKEMONS,
} from "./actions_types";
import axios from "axios";

const URL = "http://localhost:5005"

export const getPokemons = (offset = 0, limit = 24) => {
  return async function (dispatch) {
    const pokemons = (await axios.get(`${URL}/pokemons?offset=${offset}&limit=${limit}`)).data;
      dispatch({
        type: GET_POKEMONS,
        payload: pokemons,

    })
  }
}
        
