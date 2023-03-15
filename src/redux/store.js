import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import {
  persistStore,
  // FLUSH,
  // REHYDRATE,
  // PAUSE,
  // PERSIST,
  // PURGE,
  // REGISTER,
} from 'redux-persist';

export const store = configureStore({
  reducer: rootReducer,
});
export const persistor = persistStore(store);
