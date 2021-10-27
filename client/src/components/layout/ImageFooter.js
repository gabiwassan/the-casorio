import React, {Component} from "react";
import footer from "./abajo ancho1.png";
import './Layout.css';

class ImageFooter extends Component {
  render() {
    return (
      <div className="z-depth-0">
        <div className="nav-wrapper white">
          <div>
            <img className="footer-image" src={footer} alt="footer-image"/>
          </div>
        </div>
      </div>
    );
  }
}

export default ImageFooter;