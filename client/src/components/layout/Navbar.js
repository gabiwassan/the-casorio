import React, {Component} from "react";
import {Link} from "react-router-dom";

//this is the header
class Navbar extends Component {
  render() {
    return (
        <nav className="z-depth-0 brand-logo">
          <div className="center nav-wrapper white">
            <Link
              to="/"
              style={{
                  fontFamily: "monospace",
                  display: "flex-center"
              }}
              className="black-text"
            >
              Micka & Mauro
            </Link>
          </div>
        </nav>
    );
  }
}

export default Navbar;
