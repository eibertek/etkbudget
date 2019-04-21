import { INIT_STORE, GET_DOLAR } from '../types/main';

export const initStore = name => {
  return {
    type: INIT_STORE,
    name,
  }
}

export const getDolar = () => {
    return {
      type: GET_DOLAR,
    }
  }