import {
    GET_POKEMONS,
} from "./actions_types";

export const initialState = {
    pokemons: [],
    pokemonsPageNumber: []
};
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_POKEMONS:
        return {
          ...state,
          pokemons: action.payload.pageData,
          pokemonsPageNumber: action.payload.countPages
        };
        default:
          return { ...state };
    }
}

export default rootReducer;

