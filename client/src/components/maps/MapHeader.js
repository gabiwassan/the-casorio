import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './MapStyles.css';

class MapHeader extends Component {
  render() {
    return (
      <div>
        <div className='header-navigation center'>
          <Link to='/dashboard' className='btn-flat waves-effect'>
            <i className='material-icons left'>keyboard_backspace </i>Tarjeta
          </Link>
          <Link to='/dashboard/church' className='btn-flat waves-effect'>
            <i className='material-icons left'>church</i> Iglesia
          </Link>
          <Link to='/dashboard/party' className='btn-flat waves-effect'>
            <i className='material-icons left'>celebration</i> Salón
          </Link>
        </div>
      </div>
    )
  }
}

export {MapHeader};
