import React from 'react';
import './Faqs.css';
import MapHeader from '../MapHeader';
import Header from '../../header/Header';
import headerLight from '../../../assets/header-light.png';
import FooterSection from '../../footerSection/FooterSection';

const Faqs = () => {
  return (
    <>
      <MapHeader />
      <Header showHeader={false} image={headerLight} />
      <div className="row margin-section center-align">
        <div className="dashboard-position">
          <p className="title-party">PREGUNTAS FRECUENTES</p>
        </div>

        <div>
          <p className="title-faq">¿Cuál es el código de vestimenta?</p>
          <p className="text-card font18">👗 Formal 🎩</p>
          <div className="separator-faq" />
        </div>

        <div>
          <p className="title-card">¿Debo confirmar asistencia?</p>
          <p className="text-card font18">
            Si! Para confirmar la asistencia tanto en efectivo como en transferencia se debe abonar
            antes del 01.02.2022{' '}
          </p>
          <div className="separator-faq" />
        </div>

        <div>
          <p className="title-card">¿Me puedo quedar a dormir en la estancia?</p>
          <p className="text-card font18">
            Si, para esto necesitamos confirmación de cada uno para poder organizar los lugares.
          </p>
          <div className="separator-faq" />
        </div>

        <div>
          <p className="title-card">¿Hay transporte a la fiesta?</p>
          <p className="text-card font18">
            Si. Les dejamos 2 contactos de trafics que ya han realizado viajes hasta la estancia
            para que puedan coordinar con ellos:
          </p>
          <p className="text-card mb0 font18">
            <strong className="title-card">Diego</strong> 351 384-5589
          </p>
          <p className="text-card font18">
            <strong className="title-card">Martín</strong> 351 399-4122
          </p>
          <div className="separator-faq" />
        </div>
      </div>
      <div className="vertical-space-faq"></div>
      <FooterSection className="footer-image" />
    </>
  );
};

export default Faqs;
