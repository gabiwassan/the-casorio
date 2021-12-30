import React from 'react';
import { Link } from 'react-router-dom';
import './MapStyles.css';

const MapHeader = () => {
  return (
    <div>
      <div className="row my-4 home-padding">
        <div className="col left-align">
          <Link to="/dashboard" className="btn-flat waves-effect">
            <i className="material-icons left">keyboard_backspace </i>
            Atras
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MapHeader;
