import React from 'react';
import './../MapStyles.css';
import MapHeader from '../MapHeader';
import Header from '../../header/Header';
import headerLight from './../../../assets/header-light.png';
import './../../dashboard/Dashboard.css';
import './../../layout/CardList/CardList.css';
import FooterSection from '../../footerSection/FooterSection';

const PartyMap = () => {
  return (
    <>
      <MapHeader />
      <Header showHeader={false} image={headerLight} />
      <div className="row margin-section">
        <div className="row sub-header center-align dashboard-position">
          <p className="title-party">EL SALON</p>
          <p className="text-dashboard mb2">
            Los esperamos el viernes 25 de febrero a las 18:30 hs en Estancia el Rosal.
          </p>
        </div>

        <div className="col m6 s12 card borders">
          <p className="title-card">ESTANCIA EL ROSAL</p>
          <div className="separator" />
          <p className="text-card mb0 font18">E53, X5107</p>
          <p className="text-card font18">Agua de Oro, Córdoba</p>
        </div>

        <div className="vertical-space" />
        <div className="col m6 s12 card borders color-map">
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
      </div>
      <FooterSection className="footer-image" />
    </>
  );
};

export default PartyMap;
