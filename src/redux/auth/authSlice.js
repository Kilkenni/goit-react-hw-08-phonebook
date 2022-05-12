import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import userReducer, {INIT_USER} from "./user";
import errorReducer from "./error";
import loginStatus from "./loginStatus";

//using nested persistReducer to store only user/token
const persistTokenConfig = {
  key: 'user',
  storage,
  whitelist: ['token'],
}

const persistedUserReducer = persistReducer(persistTokenConfig, userReducer);

//we persist only userReducer. From the outside nothing should change
const authReducer = combineReducers({
  user: persistedUserReducer,
  error: errorReducer,
  isLoggedIn: loginStatus,
});

const INIT_AUTH = {
  user: INIT_USER,
  error: null,
  isLoggedIn: false,
};

const selectLoginStatus = (state) => state.auth.isLoggedIn;
const selectUserName = (state) => state.auth.user.user.name;
const selectUserEmail = (state) => state.auth.user.user.email;
const selectUserToken = (state) => state.auth.user.token;

export {INIT_AUTH};
export { selectLoginStatus, selectUserName, selectUserEmail, selectUserToken };
export default authReducer;