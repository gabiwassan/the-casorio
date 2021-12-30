import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './MapStyles.css';

class MapHeader extends Component {
  render() {
    return (
      <div>
        <div className="row header-navigation center my-4">
          <div className="col left-align">
            <Link to="/dashboard" className="btn-flat waves-effect">
              <i className="material-icons left">keyboard_backspace </i>
              Atras
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export { MapHeader };
