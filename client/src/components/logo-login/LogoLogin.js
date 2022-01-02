import React from 'react';
import header from './../../assets/header.png';
import './Header.css'

const LogoLogin = () => {
  return (
    <div className="row">
      <div className="col s12 no-padding">
        <img src={header} />
        <p className="date-header"> 25 . 02 . 2022</p>
      </div>
    </div>
  );
};

export default LogoLogin;
