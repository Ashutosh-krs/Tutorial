import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [loggedIn, setLoggedIn] = useState(false); // state variable to store login status
  const [dropdownVisible, setDropdownVisible] = useState(false); // state variable to store dropdown visibility

  const handleLogin = () => {
    setLoggedIn(true); // set login status to true on login
  };

  const handleLogout = () => {
    setLoggedIn(false); // set login status to false on logout
  };

  const handleDropdownToggle = () => {
    setDropdownVisible(!dropdownVisible); // toggle dropdown visibility
  };

  const imageStyle = {
    borderRadius: "50%",
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-info navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="src/images/logo.png" width={65} style={imageStyle} />
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
                className={`nav-link dropdown-toggle text-white ${
                  dropdownVisible ? "show" : ""
                }`}
                to="/home"
                id="navbarDropdown"
                role="button"
                onClick={handleDropdownToggle}
                aria-expanded={dropdownVisible}
                style={{ fontSize: "170%" }}
              >
                <i className="fas fa-user mx-1"></i> Profile
              </Link>
              <ul
                className={`dropdown-menu dropdown-menu-end ${
                  dropdownVisible ? "show" : ""
                }`}
                aria-labelledby="navbarDropdown"
              >
                {loggedIn ? (
                  <li>
                    <Link className="dropdown-item" to="/user-logout">
                      Log out
                    </Link>
                  </li>
                ) : (
                  <>
                    <li>
                      <Link className="dropdown-item" to="/registration">
                        Sign Up
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/user-login">
                        Log in
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
