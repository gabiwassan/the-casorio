import React from 'react';
import './../MapStyles.css';
import './Faqs.css';
import { MapHeader } from '../MapHeader';
import ImageFooter from '../../layout/ImageFooter';
import { connect } from 'react-redux';
import { logoutUser } from '../../../actions/authActions';

const Faqs = (props) => {
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
              <h4 className="text-header-card">Pregunta?</h4>
              <p className="text center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
              <h4 className="text-header-card">Pregunta?</h4>
              <p className="text center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
              <h2 className="text-header-card">Pregunta?</h2>
              <p className="text center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
              <h2 className="text-header-card">Pregunta?</h2>
              <p className="text center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
            </div>
          </div>
          <ImageFooter className="footer-image" />
        </div>
      </div>
    </div>
  );
};

export default Faqs;
