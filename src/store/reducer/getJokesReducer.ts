import {
  GET_JOKES_REQUEST,
  GET_JOKES_SUCCESS,
  EMPTY_STATE,
} from '../actions/actionsType';

const initialState = {
  data: [],
  animal: [],
  career: [],
  celebrity: [],
};

const getJokesReducer = ((state = initialState, action: any) => {
  switch (action.type) {
    case GET_JOKES_REQUEST:
      return {
        ...state,
      };
    case GET_JOKES_SUCCESS:
      const category : 'animal' | 'career' | 'celebrity' = action.payload.categories[0];
      
      return {
        ...state,
        data: [...state.data, action.payload],
        [category]: [...state[category] , action.payload]
      }
    case EMPTY_STATE:
      return {
        ...state,
        data: [],
      };
    default:
      return {
        ...state,
      };
  }
});

export default getJokesReducer