import { useState } from "react";
import { useDispatch } from "react-redux";

import { loginUserOp } from "redux/auth/ops";

const INIT_CREDS = {
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

  function onFormSubmit(event) {
    event.preventDefault();

    //console.log(credentials);
    dispatch(loginUserOp(credentials));
    setCredentials({ ...INIT_CREDS });
  }

  return (
    <form action="submit" onSubmit={onFormSubmit}>
      <label htmlFor="email">E-mail</label>
      <input
        type="email"
        name="email"
        required
        onChange={onInputChange}
        value={credentials.email}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        required
        onChange={onInputChange}
        value={credentials.password}
      />
      <button type="submit">Log in</button>
    </form>
    );
}