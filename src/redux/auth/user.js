import { createSlice } from "@reduxjs/toolkit";

import { registerUserOp, loginUserOp } from "./ops";

const INIT_USER = {
  user: {
    name: null,
    email: null,
  },
  token: null,
};

const userSlice = createSlice({
  name: "user",
  initialState: { ...INIT_USER },
  reducers: {},
  extraReducers: {
    [registerUserOp.fulfilled]: (user, action) => {
      //console.log(action.payload);
      return action.payload;
    },

    [loginUserOp.fulfilled]: (user, action) => {
      return action.payload;
    },
  },
});

export default userSlice.reducer;

