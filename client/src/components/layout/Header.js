import React, {Component} from 'react';
import './Layout.css';
import header from './arriba ancho.png'

//this is the header
class Header extends Component {
  render() {
    return (
        <div>
            <img className='col-s12 header-image' src={header} alt='Header'/>
            <div className='col-s12'>
              <h2 className='header-text center'>
                Micka & Mauro
              </h2>
          </div>
        </div>
    );
  }
}

export default Header;
