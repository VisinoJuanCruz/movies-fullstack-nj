import {
    GET_POKEMONS,
} from "./action_types";

export const initialState = {
    pokemons: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_POKEMONS:
        return {
          ...state,
          pokemons: action.payload
        };
    
    }
}

export default rootReducer;

