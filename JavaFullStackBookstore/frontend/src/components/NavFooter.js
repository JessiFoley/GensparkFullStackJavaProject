import { Link } from "react-router-dom";

const NavFooter = () => {
  return (

    <nav class="navbar navbar-expand-sm bg-light navbar-light">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="#">Contact Us</Link>
        </li>
      </ul>
    </nav>

  )
}

export default NavFooter;