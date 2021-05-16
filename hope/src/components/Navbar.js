import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded">
        <a className="navbar-brand" href="localhost:3000">
          Dan's Pizza
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav m1-auto">
            <li className="nav-item">
              <a className="nav-link" href="localhost:3000">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="localhost:3000">
                Cart
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
