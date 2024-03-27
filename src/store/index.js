import { createStore } from 'redux';
import rootReducer from './rootReducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Define your persist configuration for each reducer
const persistConfig = { 
  key: 'root',
  storage,
  whitelist: ["allData"], // Specify the items you want to persist
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };