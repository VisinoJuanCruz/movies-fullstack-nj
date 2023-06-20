import {
    GET_POKEMONS,
} from "./actions_types";
import axios from "axios";

const URL = "http://localhost:5005"

export const getPokemons = (offset = 0, limit = 24, page = 1) => {
  return async function (dispatch) {
    const pokemons = (await axios.get(`${URL}/pokemons?pffset=${offset}&limit=${limit}&page=${page}`)).data;
      dispatch({
        type: GET_POKEMONS,
        payload: {
          pageData:pokemons.pageData,
          countPages:pokemons.countPages
        },
    })
  }
}
        
