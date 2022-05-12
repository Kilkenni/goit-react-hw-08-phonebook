import { NavLink } from "react-router-dom";

export default function NavBar(props) {
  return (
    <nav>
      <ul>
        <li>
          <NavLink end to={'/'} className={({ isActive }) => isActive ? "activeLink" : "inactiveLink"} >
            Login
          </NavLink>
        </li>

        <li>
          <NavLink end to={'/contacts'} className={({ isActive }) => isActive ? "activeLink" : "inactiveLink"} >
            Contacts
          </NavLink>
        </li>

        <li>
          <NavLink end to={'/register'} className={({ isActive }) => isActive ? "activeLink" : "inactiveLink"} >
            Register
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}