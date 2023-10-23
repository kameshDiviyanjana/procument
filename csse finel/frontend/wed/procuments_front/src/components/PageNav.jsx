import { NavLink } from "react-router-dom";

function PageNav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/pendingorders">Pending Request</NavLink>
        </li>
        <li>
          <NavLink to="/acceptorder">Accept Order</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
