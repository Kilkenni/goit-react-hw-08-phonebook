import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
//import { useNavigate } from "react-router-dom";

import { selectUserName, selectUserEmail } from "redux/auth/authSlice";
import { logoutUserOp } from "redux/auth/ops";

export default function UserMenu(props) {
  
  const userEmail = useSelector(selectUserEmail);
  const userName = useSelector(selectUserName);
  const dispatch = useDispatch();
  //const navigate = useNavigate();

  async function logout() {
    //dispatch logout
    /*const result = await */dispatch(logoutUserOp()); //token is retrieved inside op
    /*if (result?.meta?.requestStatus === "fulfilled") {
      navigate("/");
    }*/
  }

  return (
    <div>
      <p>You have logged in as {userEmail}</p>
      <p>Hi, { userName}!</p>
      <button type="button" onClick={logout}>Logout</button>
    </div>
    );
}