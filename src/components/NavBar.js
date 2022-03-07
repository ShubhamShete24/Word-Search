import React from "react";


function NavBar(props) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/#">
            Word-Search-Game
          </a>
          <button
            className="navbar-toggler"
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
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/GameInfo">
                  Game Info
                </a>
              </li>
              <span
                className={`form-check form-switch text-${
                  props.mode === "light" ? "dark" : "light"
                } my-2 mx-3`}
              >
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="darkmode"
                  onClick={props.toggleMode}
                />
                <label
                  className="form-check-label"
                  htmlFor="flexSwitchCheckDefault"
                >
                  {" "}
                  Enable Dark Mode
                </label>
              </span>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
