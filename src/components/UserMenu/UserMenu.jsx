import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { selectUserName, selectUserEmail } from "redux/auth/authSlice";
import { logoutUserOp } from "redux/auth/ops";

export default function UserMenu(props) {
  
  const userEmail = useSelector(selectUserEmail);
  const userName = useSelector(selectUserName);
  const dispatch = useDispatch();

  function logout() {
    console.log("Logging out");

    //dispatch logout
    dispatch(logoutUserOp()); //token is retrieved inside op
  }

  return (
    <div>
      <p>You have logged in as {userEmail}</p>
      <p>Hi, { userName}!</p>
      <button type="button" onClick={logout}>Logout</button>
    </div>
    );
}