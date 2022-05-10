import { combineReducers } from "@reduxjs/toolkit";

import userReducer from "./user";
import errorReducer from "./error";
import loginStatus from "./loginStatus";

const authReducer = combineReducers({
  user: userReducer,
  error: errorReducer,
  isLoggedIn: loginStatus,
});

const selectLoginStatus = (state) => state.auth.isLoggedIn;
const selectUserEmail = (state) => state.auth.user.user.email;
const selectUserToken = (state) => state.auth.user.token;


export { selectLoginStatus, selectUserEmail, selectUserToken };
export default authReducer;