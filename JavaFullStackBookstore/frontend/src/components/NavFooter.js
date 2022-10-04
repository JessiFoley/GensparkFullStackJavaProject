import { Link } from "react-router-dom";

const NavFooter = () => {
  return (

    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="#">Contact Us</Link>
        </li>
      </ul>
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <Link class="nav-link disabled" to="#">Copyright ©2022</Link>
        </li>
      </ul>
      
    </nav>
  )
}

export default NavFooter;