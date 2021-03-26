import axios from "axios";
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

axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = ``;
  },
};

const register = (credentials) => async (dispatch) => {
  // /users/signup
  dispatch(registerRequest());
  try {
    const { data } = await axios.post("/users/signup", credentials);
    // console.log(data);
    token.set(data.token);
    dispatch(registerSuccess(data));
  } catch (error) {
    // console.log(error.response.data.message);
    dispatch(registerError(error.response.data.message));
  }
};

const logIn = (credentials) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const { data } = await axios.post("/users/login", credentials);
    token.set(data.token);
    dispatch(loginSuccess(data));
  } catch (error) {
    dispatch(loginError(error.response.data.message));
  }
};

const logOut = () => async (dispatch) => {
  dispatch(logoutRequest());
  try {
    await axios.post("/users/logout");
    await token.unset();
    await dispatch(logoutSuccess());
  } catch (error) {
    console.log(error);
    dispatch(logoutError(error));
  }
};
//   /users/current
const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }
  token.set(persistedToken);
  dispatch(getCurrentUserRequest());

  try {
    const { data } = await axios.get("/users/current");
    dispatch(getCurrentUserSuccess(data));
  } catch (error) {
    dispatch(getCurrentUserError(error.response.data.message));
  }
};

export { register, logIn, logOut, getCurrentUser };
