import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { logoutSuccess } from "../auth/auth.actions";
import {
  filterChange,
  removeContactError,
  removeContactSuccess,
  removeContactRequest,
  addContactError,
  addContactSuccess,
  addContactRequest,
  getContactsError,
  getContactsSuccess,
  getContactsRequest,
} from "./contacts.actions";

const contactsReducer = createReducer([], {
  [getContactsSuccess]: (_, action) => [...action.payload],
  [addContactSuccess]: (state, action) => [...state, action.payload],
  [removeContactSuccess]: (state, action) => [
    ...state.filter((contact) => contact.id !== action.payload),
  ],
  [logoutSuccess]: () => [],
});

const filterReducer = createReducer("", {
  [filterChange]: (_, action) => action.payload,
});

const loadingReducer = createReducer(false, {
  [removeContactError]: () => false,
  [removeContactSuccess]: () => false,
  [removeContactRequest]: () => true,
  [addContactError]: () => false,
  [addContactSuccess]: () => false,
  [addContactRequest]: () => true,
  [getContactsError]: () => false,
  [getContactsSuccess]: () => false,
  [getContactsRequest]: () => true,
});

const cleanError = () => null;
const handleError = (_, action) => action.payload;

const errorReducer = createReducer(null, {
  [getContactsRequest]: cleanError,
  [addContactRequest]: cleanError,
  [removeContactRequest]: cleanError,
  [getContactsError]: handleError,
  [addContactError]: (_, action) => action.payload,
  [removeContactError]: handleError,
});

const phoneReducer = combineReducers({
  items: contactsReducer,
  filter: filterReducer,
  loading: loadingReducer,
  error: errorReducer,
});

export default phoneReducer;
