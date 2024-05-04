import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./navBar.css";

const NavBar = () => {
  return (
    <header className="header_nav">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <Link className="navbar-brand" to="/">
            SAILOR
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
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
            <ul className="navbar-nav  mb-2 mb-lg-0 align-items-center">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item dropDown">
                <Link>
                  <span> about </span>
                  <i class="fa-solid fa-chevron-down"></i>{" "}
                </Link>
                <ul className="aboutDrop">
                  <li>
                    <NavLink to="/about">About</NavLink>
                  </li>
                  <li>
                    <NavLink to="/team">team</NavLink>
                  </li>
                  <li>
                    <NavLink to="/testimonials">Testimonials</NavLink>
                  </li>
                  <li className="nav-item dropDown dropDown2">
                    <Link>
                      <span>Deep Drop Down</span>
                      <i class="fa-solid fa-angle-right"></i>
                    </Link>
                    <ul className="deepDrop">
                      <li>
                        <Link to="#">Deep Drop Down 1</Link>
                      </li>
                      <li>
                        <Link to="#">Deep Drop Down 2</Link>
                      </li>
                      <li>
                        <Link to="#">Deep Drop Down 3</Link>
                      </li>
                      <li>
                        <Link to="#">Deep Drop Down 4</Link>
                      </li>
                      <li>
                        <Link to="#">Deep Drop Down 5</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/serveices">
                  serveices
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/protfolio">
                  protfolio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/pricing">
                  pricing
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/blog">
                  blog
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  contact
                </NavLink>
              </li>

              <li className="nav-item btn_nav_top">
                <button className="btn_main">get stared </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
