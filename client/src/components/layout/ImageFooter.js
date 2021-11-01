import React, {Component} from 'react';
import footer from './abajo ancho.png';
import './Layout.css';

class ImageFooter extends Component {
  render() {
    return (
      <div className='row'>
        <div className='col s12'>
          <img className='footer-image' src={footer} alt='footer'/>
        </div>
      </div>
    );
  }
}

export default ImageFooter;
