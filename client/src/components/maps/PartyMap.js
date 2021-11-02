import React, {Component} from 'react';
import './MapStyles.css';
import {MapHeader} from './MapHeader';
import ImageFooter from "../layout/ImageFooter";

class PartyMap extends Component {
  render() {
    return (
      <div>
        <MapHeader/>
        <div className='map-body'>
          <div className='vertical-space'/>
          <div>
            <h5 className='text center'>
              El Salón es <b>Mansueto 1912</b> en <b>Saldán</b>.
            </h5>
          </div>
          <div>
            <h5 className='text center'>
              Después de la <b>iglesia</b> nos vamos al salón a partir de las <b>18 hs</b>.
            </h5>
          </div>
          <div>
            <h5 className='text center'>
              A las <b>19:30 hs</b> nos casamos por <b>civil</b> y ahí empieza la <b>joda</b>.
            </h5>
          </div>
          <div className='vertical-space'/>
          <div>
            <div className='google-map-code'>
              <iframe title='party-map' className='responsive-iframe'
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3408.14287855895!2d-64.30533788417961!3d-31.32742699909063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94329d6164ec1a69%3A0xfe084d85fd5c39e1!2sMansueto%201912!5e0!3m2!1ses-419!2sar!4v1635732990987!5m2!1ses-419!2sar"
                      style={{border: 0}} allowFullScreen='' loading='lazy'/>
            </div>
          </div>
          <ImageFooter className='footer-image'/>
        </div>
      </div>
    )
  }
}

export {PartyMap};
