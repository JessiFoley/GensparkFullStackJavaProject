import { Link } from "react-router-dom";

const Nav = () => {
  return (

    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/inventory">Inventory Management</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="#">Contact Us</Link>
        </li>
      </ul>
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link" href="/">Sign Out</a>
        </li>
      </ul>
    </nav>

  )
}

export default Nav