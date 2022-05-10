import { useSelector } from "react-redux";

import { selectUserEmail } from "redux/auth/authSlice";

export default function UserMenu(props) {
  
  const userEmail = useSelector(selectUserEmail);
  console.log(userEmail)

  return (<p>
    You have logged in as { userEmail}
  </p>);
}