import React from 'react';
import './Faqs.css';
import MapHeader from '../MapHeader';
import Header from "../../header/Header";
import headerLight from "../../../assets/header-light.png";
import FooterSection from "../../footerSection/FooterSection";

const Faqs = () => {
  return (
    <>
      <div className="container">
        <MapHeader/>
        <Header showHeader={false} image={headerLight}/>
        <div className="row margin-section center-align">
          <div className="dashboard-position">
            <p className="title-party">PREGUNTAS FRECUENTES</p>
          </div>

          <div>
            <p className="title-faq">¿Cuál es el código de vestimenta?</p>
            <p className="text-card font18">👗 Formal 🎩</p>
            <div className="separator-faq"/>
          </div>

          <div>
            <p className="title-card">¿Debo confirmar asistencia?</p>
            <p className="text-card font18">Si! Para confirmar la asistencia tanto en efectivo como en transferencia se
              debe abonar antes del 01.02.2022 </p>
            <div className="separator-faq"/>
          </div>

          <div>
            <p className="title-card">¿Me puedo quedar a dormir en la estancia?</p>
            <p className="text-card font18">Si, para esto necesitamos confirmación de cada uno para poder organizar los
              lugares.</p>
            <div className="separator-faq"/>
          </div>
        </div>
        <FooterSection className="footer-image"/>
      </div>
    </>
  );
};

export default Faqs;
