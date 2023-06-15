import {
    GET_POKEMONS,
} from "./action_types";
import axios from "axios";

export const getExercises = () => {
    return async function (dispatch) {
      const exercisesData = (await axios.get(`/exercises`)).data;
      dispatch({
        type: GET_POKEMONS,
        payload: exercisesData,
      });
    };
  };