import React, {Component} from "react";
import './MapStyles.css';
import {MapHeader} from "./MapHeader";

class PartyMap extends Component {
  render() {
    return (
      <div>
        <MapHeader/>
        <div>
          <h5 className="text center">
          El Salon es <b>Mansueto 1912</b> en <b>Saldan</b>.
          </h5>
        </div>
        <div className="google-map-code">
          <iframe className="responsive-iframe"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3408.1428785589183!2d-64.30533788385668!3d-31.327426999091514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94329d6164ec1a69%3A0xfe084d85fd5c39e1!2sMansueto%201912!5e0!3m2!1sen!2sar!4v1634857023220!5m2!1sen!2sar"
                  style={{border: 0}} allowFullScreen="" loading="lazy"></iframe>
        </div>
      </div>
    )
  }
}

export {PartyMap};