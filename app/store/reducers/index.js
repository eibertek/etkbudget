// placeReducer.js

import { INIT_STORE } from '../actions/types/main';

const initialState = {
  name: 'SARASSA',
  dolar: 0.00,
};

const mainReducer = (state = initialState, action) => {
  switch(action.type) {
    case INIT_STORE:
      return {
        ...state,
        name: action.name,
      };
    default:
      return state;
  }
}

export default mainReducer;