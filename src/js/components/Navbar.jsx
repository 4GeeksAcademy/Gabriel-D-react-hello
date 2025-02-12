import React from "react";
import ReactDOM from "react-dom";
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css";

        
        const Navbar = () => {
          return (
            <nav className="navbar navbar-expand-lg bg-dark text-white">
              <div className="container">
                <a className="navbar-brand text-white" href="index.html">
                  Bootstrap
                </a>
        
                <button className="navbar-toggler bg-white"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
        
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                      <a className="nav-link text-white" href="#">
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-white" href="#">
                        About
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-white" href="#">
                        Services
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-white" href="#">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          );
        };
        
        export default Navbar;