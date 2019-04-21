import { createStore, combineReducers } from 'redux';
import mainReducer from './reducers/';

const rootReducer = combineReducers({
  main: mainReducer
});

const configureStore = () => {
  return createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    );
}

export default configureStore;