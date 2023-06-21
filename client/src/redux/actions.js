import {
    GET_POKEMONS,
} from "./actions_types";
import axios from "axios";

const URL = "http://localhost:5005"

export const getPokemons = (page = 1, limit = 12) => {
  return async function (dispatch) {
    const pokemons = (await axios.get(`${URL}/pokemons?limit=${limit}&page=${page}`)).data;
      dispatch({
        type: GET_POKEMONS,
        payload: {
          pageData:pokemons.pageData,
          countPages:pokemons.countPages
        },
    })
  }
}
        
