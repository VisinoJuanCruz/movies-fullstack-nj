import {
    GET_POKEMONS,
} from "./actions_types";
import axios from "axios";

const URL = "https://pokeapi.co/api/v2"

export const getPokemons = () => {
  return async function (dispatch) {
    const pokemons = (await axios.get(`${URL}/pokemon`)).data;
    console.log(pokemons)
      dispatch({
        type: GET_POKEMONS,
        payload: pokemons,
      });
    };
  };