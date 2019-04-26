import { createStore, combineReducers } from 'redux';
import mainReducer from './reducers/';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const rootReducer = combineReducers({
  main: mainReducer
});

const persistConfig = {
  key: 'main',
  storage: storage,
  stateReconciler: autoMergeLevel2 // see "Merge Process" section for details.
};

const pReducer = persistReducer(persistConfig, rootReducer);


const configureStore = () => {
  return createStore(
      pReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    );
}
export const persistor = persistStore(configureStore());
export const store = configureStore();