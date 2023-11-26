import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { filterReducer } from './ContactsFilterInitialSlice';
import { contactsReducer } from './ContactsInitialSlice';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
