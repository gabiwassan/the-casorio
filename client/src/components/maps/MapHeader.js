import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './MapStyles.css';

class MapHeader extends Component {
  render() {
    return (
      <div>
        <div className='row header-space'/>
        <div className='row header-navigation center'>
          <div className='col s4'>
            <Link to='/dashboard' className='btn-flat waves-effect'>
              <i className='material-icons left'>keyboard_backspace </i>
              Atras
            </Link>
          </div>
          <div className='col s4'>
            <Link to='/dashboard/church' className='btn-flat waves-effect'>
              <i className='material-icons left'>church</i>
              Iglesia
            </Link>
          </div>
          <div className='col s4'>
            <Link to='/dashboard/party' className='btn-flat waves-effect'>
              <i className='material-icons left'>celebration</i>
              Salón
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export {MapHeader};
