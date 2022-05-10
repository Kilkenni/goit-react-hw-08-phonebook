import { createReducer } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

import { registerUserOp } from "./ops/registerUserOp";
import { loginUserOp } from "./ops/loginUserOp";

const userError = createReducer(null, {
  [registerUserOp.rejected]: (error, action) => {
    if (action.payload) {
      //extended Axios error processing
      const { data } = action.payload;

      const extendedReason = (data.name === "MongoError" && data.code === 11000) ? "This user is already registered. Try logging in." : "Re-check your registration data.";

      toast.error(
        <>
          <p>Unable to register a user.</p>
          <p>{extendedReason}</p>
        </>
        /*`Unable to register a user. ${extendedReason}`*/
      );
      return action.payload; //write extended error info into redux
    }
    const { code, message } = action.error;
    toast.error(`Unable to register a user. Server responded with code ${code} and message: ${message}.`);
    return action.error; //write error into redux
  },

  [loginUserOp.rejected]: (error, action) => {
    if (action.payload) {
      //extended Axios error processing
      const { status, statusText } = action.payload;
      toast.error(<>
        <p>Login failed. Re-check your login data.</p>
        <p>Error code {status}, message: {statusText}</p>
      </>
        /*`Login failed. Re-check your login data. \n\n Error code ${status}, message: ${statusText}`*/
      );

      return action.payload;
    }
    const { code, message } = action.error;
    toast.error(`Login failed. Server responded with code ${code} and message: ${message}.`);
    return action.error; //write error into redux
  },
});

export default userError;