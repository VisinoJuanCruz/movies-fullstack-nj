import {
    GET_POKEMONS,
} from "./action_types";
import axios from "axios";

export const getPokemons = () => {
    return async function (dispatch) {
      const pokemons = (await axios.get(`/pokemons`)).data;
      dispatch({
        type: GET_POKEMONS,
        payload: pokemons,
      });
    };
  };