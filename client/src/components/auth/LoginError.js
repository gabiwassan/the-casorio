import React from 'react';
import ardilla from './../../assets/invalid-phone.jpg'
import noPhone from './../../assets/no-phone.jpg'
import './Login.css'

export const QueLeDoyError = () => {
  return (
    <div className='container'>
      <div className='col s12'>
        <img className='ardilla' src={noPhone}
             alt='noPhone?'/>
      </div>
      <div className='col s12'> Tú <b>teléfono</b> no figura en la lista de <b>invitados</b>, podes comunicate conmigo <a href='https://wa.me/+543517654165'><b>acá</b></a></div>
    </div>

  )
}

export const NoPhoneError = () => {
  return (
    <div className='container center-align'>
      <div className='col s12'>
        <img className='ardilla' src={ardilla} alt='really?'/>
      </div>
    </div>
  )
}
