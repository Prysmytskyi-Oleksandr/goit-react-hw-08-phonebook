import { combineReducers } from '@reduxjs/toolkit';

import contactsReducer from './contacts/contactsSlice';
import filterReducer from './filter/filterSlice';
import authReducer from './auth/authSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  contacts: contactsReducer,
  filter: filterReducer,
});

export default rootReducer;
