import React, { Component } from 'react';
import './MapStyles.css';
import { MapHeader } from './MapHeader';
import ImageFooter from '../layout/ImageFooter';

class PartyMap extends Component {
  render() {
    return (
      <div>
        <MapHeader />
        <div className="map-body">
          <div className="vertical-space" />
          <div>
            <h5 className="text center">
              El Salón es <b>Estancia El Rosal</b> en <b>Agua de Oro</b>.
            </h5>
          </div>
          <div>
            <h5 className="text center">
              Los esperamos a las <b>19hs</b> nos casamos por <b>civil</b> y ahí empieza la{' '}
              <b>joda</b>.
            </h5>
          </div>
          <div className="vertical-space" />
          <div>
            <div className="google-map-code">
              <iframe
                title="party-map"
                className="responsive-iframe"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13670.233127852205!2d-64.29085565937464!3d-31.066394197335622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94327e493e62d587%3A0x74fb360063580bd1!2sEstancia%20el%20Rosal!5e0!3m2!1ses-419!2sar!4v1640723249682!5m2!1ses-419!2sar"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </div>
          <ImageFooter className="footer-image" />
        </div>
      </div>
    );
  }
}

export { PartyMap };