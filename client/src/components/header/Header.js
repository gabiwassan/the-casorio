import React from 'react';
import './Header.css';

const Header = ({ showHeader, image }) => {
  return (
    <div className="row">
      <div className="col s12 no-padding">
        <img className="size-header" src={image} />
        {showHeader ? <p className="date-header"> 25 . 02 . 2022</p> : '' }
      </div>
    </div>
  );
};

export default Header;
