import React from 'react';
import waves from './../../assets/waves-background.png';
import dino from './../../assets/footer-dino.png';
import './FooterLogin.css';

const FooterLogin = () => {
  return (
    <div className="row">
      <div className="col s12 no-padding margin-waves-top">
        <img className="footer-image" src={waves} alt="footer" />
        <img className="footer-dino-image" src={dino} alt="dino" />
      </div>
    </div>
  );
};

export default FooterLogin;
