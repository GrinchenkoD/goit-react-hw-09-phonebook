import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import auth from "./auth/auth.reducer";
import phoneReducer from "./contacts/contacts.reducer";

const config = {
  key: "token",
  storage,
  whitelist: ["token"],
};

const persistAuthReducer = persistReducer(config, auth);

const rootReducer = {
  auth: persistAuthReducer,
  contacts: phoneReducer,
};

export default rootReducer;
