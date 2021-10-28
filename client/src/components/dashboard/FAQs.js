import React, {Component} from 'react';
import Collapsible from 'react-collapsible';
import './FAQs.css'

class FAQs extends Component {
  render() {
    return (
      <div className='FAQs'>
        <Collapsible
          trigger={<h5 className='FAQ center'><i className='material-icons'>expand_more </i>Preguntas Frecuentes</h5>}>
          <Collapsible className='FAQ-text' openedClassName='FAQ-text'
                       trigger={<h5><i className='material-icons'>expand_more </i>Tengo que confirmar asistencia?</h5>}>
            <h6 className='FAQ-answer'>Si, obvio. Te pedimos porfa que nos confirmes tu asistencia lo antes posible. La
              fecha limite es hasta
              el
              30/12/2021. Cualquier consulta que tengas, escribinos y lo charlamos.</h6>
          </Collapsible>
          <Collapsible className='FAQ-text' openedClassName='FAQ-text'
                       trigger={<h5><i className='material-icons'>expand_more </i>El monto de la tarjeta esta congelado?
                       </h5>}>
            <h6 className='FAQ-answer'>Nope, pues Argentina. El valor que figura arriba es el de este mes. Se va a ir
              modificando en los
              siguientes
              meses por cuestiones de inflacion.
              Para nosotros es importante que nos acompañes, si el valor de la tarjeta es un problema, no dejes de
              charlarlo con nosotros. Vamos a encontrar una solucion.</h6>
          </Collapsible>
          <Collapsible className='FAQ-text' openedClassName='FAQ-text'
                       trigger={<h5><i className='material-icons'>expand_more </i>Puedo ir de Bermuda?</h5>}>
            <h6 className='FAQ-answer'>Dice Mauro que si él no puede ir de bermuda vos tampoco. El codigo de vestimenta
              es etiqueta (black
              tie).</h6>
          </Collapsible>
          <Collapsible className='FAQ-text' openedClassName='FAQ-text'
                       trigger={<h5><i className='material-icons'>expand_more </i>Hacen lista de casamiento?</h5>}>
            <h6 className='FAQ-answer'>No. Realmente su presencia es el mejor regalo que nos pueden dar... pero si
              insisten (guiño, guiño),
              pueden
              transferir aca:</h6>
          </Collapsible>
          <Collapsible className='FAQ-text' openedClassName='FAQ-text'
                       trigger={<h5><i className='material-icons'>expand_more </i>Suele haber controles de caminera
                         camino a Saldan?</h5>}>
            <h6 className='FAQ-answer'>Tenemos entendido que no. Pero lo mejor seria que se organicen entre los que van,
              para hacerlo en
              Traffics.
              Para eso cree este grupo de whatsapp en el que pueden organizarse</h6>
          </Collapsible>
          <Collapsible className='FAQ-text' openedClassName='FAQ-text' trigger={<h5><i className='material-icons'>expand_more </i>Y ella?</h5>}>
            <h6 className='FAQ-answer'>Y la mami?</h6>
          </Collapsible>
        </Collapsible>
      </div>
    )
  }
}

export {FAQs}
