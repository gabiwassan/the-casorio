import React from 'react';
import logo from './../../assets/logo-login.png';
import './LogoLogin.css';

const LogoLogin = () => {
  return (
    <div className="row">
      <div className="col center-align no-padding">
        <img src={logo} />
        <p className="login-text">
          Porque el camino vale más la pena si lo recorremos juntos. NOS CASAMOS!
        </p>
      </div>
    </div>
  );
};

export default LogoLogin;
