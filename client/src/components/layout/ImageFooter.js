import React, {Component} from 'react';
import footer from './abajo ancho.png';
import './Layout.css';

class ImageFooter extends Component {
  render() {
    return (
      <div className='z-depth-0'>
        <div className='nav-wrapper white'>
          <div>
            <img className='footer-image' src={footer} alt='footer'/>
          </div>
        </div>
      </div>
    );
  }
}

export default ImageFooter;