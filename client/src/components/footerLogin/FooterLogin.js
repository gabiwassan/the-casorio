import React from 'react';
import waves from './../../assets/waves-background.png';
import './FooterLogin.css';

const FooterLogin = () => {
  return (
    <div className="row no-margin-bottom">
      <div className="col s12 no-padding margin-waves-top">
        <img className="footer-image" src={waves} alt="footer" />
      </div>
    </div>
  );
};

export default FooterLogin;
