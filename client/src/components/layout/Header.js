import React, {Component} from 'react';
import './Layout.css';
import header from '../../arriba ancho.png'

//this is the header
class Header extends Component {
  render() {
    return (
      <div className='row'>
        <div className='header-space'/>
        <div className='col-s12'>
          <h1 className='header-text'>
            Micka & Mauro
          </h1>
        </div>
      </div>
    );
  }
}

export default Header;
