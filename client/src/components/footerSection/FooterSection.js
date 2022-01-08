import React from 'react';
import waves from './../../assets/waves-background.png';
import logoSection from './../../assets/logo-sections.png';
import './FooterSection.css';

const FooterSection = () => {
  return (
    <div className="row">
      <div className="col s12 no-padding margin-waves-top">
        <img className="footer-image" src={waves} alt="footer" />
        <img className="footer-section-image" src={logoSection} alt="logo" />
      </div>
    </div>
  );
};

export default FooterSection;
