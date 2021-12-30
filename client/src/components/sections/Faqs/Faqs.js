import React from 'react';
import './../MapStyles.css';
import './Faqs.css';
import MapHeader from '../MapHeader';

const Faqs = () => {
  return (
    <div className="container>">
      <MapHeader />
      <div className="home-padding">
        <div className="map-body ">
          <div className="vertical-space" />
          <div>
            <h1 className="text center">Preguntas frecuentes</h1>
          </div>
          <div className="vertical-space" />

          <div clasName="row">
            <div className="col m12 s12 card m6">
              <h4 className="text-header-card">¿ Y ella ?</h4>
              <p className="text center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
              <h4 className="text-header-card">¿ Y la mami ?</h4>
              <p className="text center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
              <h4 className="text-header-card">¿ Vahhh ?</h4>
              <p className="text center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
              <h4 className="text-header-card">¿ Fi ?</h4>
              <p className="text center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
