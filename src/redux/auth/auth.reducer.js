import { combineReducers, createReducer } from "@reduxjs/toolkit";
import {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
} from "./auth.actions";

const InitialState = { name: "", email: "" };

const user = createReducer(InitialState, {
  [registerSuccess]: (_, { payload }) => payload.user,
  [loginSuccess]: (_, { payload }) => payload.user,
  [getCurrentUserSuccess]: (_, { payload }) => payload,
  [logoutSuccess]: () => InitialState,
});

const token = createReducer(null, {
  [registerSuccess]: (_, { payload }) => payload.token,
  [loginSuccess]: (_, { payload }) => payload.token,
  [logoutSuccess]: () => null,
});

const cleanError = () => null;
const handleError = (_, action) => action.payload;

const error = createReducer(null, {
  [registerError]: (_, action) => action.payload,
  [loginError]: handleError,
  [logoutError]: handleError,
  [getCurrentUserError]: handleError,
  [registerRequest]: cleanError,
  [loginRequest]: cleanError,
  [logoutRequest]: cleanError,
  [getCurrentUserRequest]: cleanError,
});

const isAuthenticated = createReducer(false, {
  [registerSuccess]: () => true,
  [loginSuccess]: () => true,
  [getCurrentUserSuccess]: () => true,
  [registerError]: () => false,
  [loginError]: () => false,
  [getCurrentUserError]: () => false,
  [logoutSuccess]: () => false,
});

const auth = combineReducers({
  isAuthenticated,
  user,
  token,
  error,
});

export default auth;
