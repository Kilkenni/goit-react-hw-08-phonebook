import { useState } from "react";
import { useDispatch } from "react-redux";
//import { toast } from "react-toastify";

import { registerUserOp } from "redux/auth/ops/registerUserOp";

const INIT_CREDS = {
  name: "",
  email: "",
  password: "",
}

export default function RegisterPage(props) {
  const [credentials, setCredentials] = useState({ ...INIT_CREDS });

  const dispatch = useDispatch();

  function onInputChange(event) {
    const { name, value } = event.currentTarget;
    setCredentials({ ...credentials, [name]: value });

  }

  async function onFormSubmit(event) {
    event.preventDefault();

    /*if (credentials.password.length < 7) {
      toast.warn("Password length should be at least 7 symbols for safety reasons. Try something more complex.");
      return false;
    }*/

    //console.log(`posting ${credentials} to server as new user`);
    dispatch(registerUserOp(credentials));
    // const response = await registerUser(credentials);
    // console.log(response);

    setCredentials({ ...INIT_CREDS });
  }

  return (
    <form action="submit" onSubmit={onFormSubmit}>
      <label htmlFor="name">Name
        <p>This name will be used to address you as a user</p>
      </label>
      <input
        type="text"
        name="name"
        required
        onChange={onInputChange}
        value={credentials.name}
      />
      <label htmlFor="email">E-mail
        <p>Your e-mail address. Will be used to log in.</p>
      </label>
      <input
        type="email"
        name="email"
        required
        onChange={onInputChange}
        value={credentials.email}
      />
      <label htmlFor="password">Password
        <p>Your password to log in. Keep it safe!</p>
      </label>
      <input
        type="password"
        name="password"
        required
        onChange={onInputChange}
        value={credentials.password}
      />
      <button type="submit">Register</button>
    </form>
    );
}