import React from 'react';

export const WeatherWidget = () => {
  return (
    <div className='row'>
      <div>
        <h5 className="weather-text">
          <div className='col s1'>
            <i className='material-icons left'>arrow_downward </i>
          </div>
          <div className='col s10 center'>
            <b>Aca te dejamos el pronostico para que planees tu outfit.</b>
          </div>
          <div className='col s1'>
            <i className='material-icons right'>arrow_downward </i>
          </div>
        </h5>
      </div>
      <a className='weatherwidget-io' href='https://forecast7.com/es/n31d27n64d34/saldan/'
         data-label_1='SALDÁN' data-label_2='Clima para los proximos dias' data-font='Ubuntu'
         data-icons='Climacons Animated' data-theme='clear'>SALDÁN Clima</a>
    </div>)
}
