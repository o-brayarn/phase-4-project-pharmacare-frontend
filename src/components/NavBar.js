import React from "react";
import { BrowserRouter as Router, Link, useNavigate } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

export default function NavBar({ user, setUser }) {
  const navigate = useNavigate;
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
        navigate("/login");
      }
    });
  }

  return (
    <Router>
      <div className="Home">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={"/pharmacy-page"}>
              WELCOME TO PHARMACARE
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={"/orders"}>
                    Your Order
                  </Link>
                </li>
                <li className="new-nav-item">
                  <NavLink to="/logout">
                    <button className="nav-buttons" onClick={handleLogoutClick}>
                      Logout
                    </button>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </Router>
  );
      }
