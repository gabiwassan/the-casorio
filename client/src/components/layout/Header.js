import React, {Component} from 'react';
import './Layout.css';
import header from './arriba ancho.png'

//this is the header
class Header extends Component {
  render() {
    return (
      <div className='z-depth-0 brand-logo'>
        <div className='nav-wrapper white'>
          <div>
            <img className='header-image' src={header} alt='Header'/>
            <div className='center black-text header-text'>
              <h1>
                Micka & Mauro
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
