import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [loggedIn, setLoggedIn] = useState(false); // state variable to store login status

  const handleLogin = () => {
    setLoggedIn(true); // set login status to true on login
  };

  const handleLogout = () => {
    setLoggedIn(false); // set login status to false on logout
  };

  const imageStyle = {
    borderRadius: "50%",
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-info navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="src/images/logo.png" width={75} style={imageStyle} />
          </a>

          <ul className="navbar-nav d-flex flex-row me-1">
            <li className="nav-item me-3 me-lg-0">
              <Link
                to="/home"
                className="nav-link text-white"
                style={{ fontSize: "170%" }}
              >
                <i className="fas fa-envelope mx-1"></i> Home
              </Link>
            </li>
            <li className="nav-item me-3 me-lg-0">
              <Link
                to="/search"
                className="nav-link text-white"
                style={{ fontSize: "170%" }}
              >
                <i className="fas fa-cog mx-1"></i> Search
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle text-white"
                to="/home"
                id="navbarDropdown"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
                style={{ fontSize: "170%" }}
              >
                <i className="fas fa-user mx-1"></i> Profile
              </Link>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <Link className="dropdown-item" to="/registration">
                    My account
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Log out
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
