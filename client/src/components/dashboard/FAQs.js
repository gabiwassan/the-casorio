import React, {Component} from 'react';
import Collapsible from 'react-collapsible';
import './FAQs.css'

class FAQs extends Component {
  render() {
    return (
      <div className='container'>
        <div className='FAQs row offset-s1'>
          <Collapsible className='col s10 FAQ-title FAQ-text' openedClassName='col s10 FAQ-title FAQ-text'
                       trigger={<h5 className='FAQ-text'><i className='material-icons'>expand_more</i>PREGUNTAS
                         FRECUENTES
                       </h5>}>
            <div className='container'>
              <div className='col s10 offset-s1 left'>
                <Collapsible className='FAQ-text' openedClassName='FAQ-text'
                             trigger={<h5><i className='material-icons'>expand_more </i>Tengo que confirmar asistencia?
                             </h5>}>
                  <h6 className='FAQ-text'>Si, obvio. Te pedimos porfa que nos confirmes tu asistencia lo antes posible.
                    La
                    fecha limite es hasta el 30/12/2021. Cualquier consulta que tengas, escribinos y lo charlamos.</h6>
                </Collapsible>
              </div>
              <div className='col s10 offset-s1 left'>
                <Collapsible className='FAQ-text' openedClassName='FAQ-text'
                             trigger={<h5><i className='material-icons'>expand_more </i>El monto de la tarjeta esta
                               congelado?</h5>}>
                  <h6 className='FAQ-answer'>Nope, pues Argentina. El valor que figura arriba es el de este mes. Se va a
                    ir
                    modificando en los siguientes meses por cuestiones de inflacion. Para nosotros es importante que nos
                    acompañes, si el valor de la tarjeta es un problema, no dejes de charlarlo con nosotros. Vamos a
                    encontrar una solucion.</h6>
                </Collapsible>
              </div>
              <div className='col s10 offset-s1 left'>
                <Collapsible className='FAQ-text' openedClassName='FAQ-text'
                             trigger={<h5><i className='material-icons'>expand_more </i>Puedo ir de Bermuda?</h5>}>
                  <h6 className='FAQ-answer'>Dice Mauro que si él no puede ir de bermuda vos tampoco. El codigo de
                    vestimenta es etiqueta (black tie).</h6>
                </Collapsible>
              </div>
              <div className='col s10 offset-s1 left'>
                <Collapsible className='FAQ-text' openedClassName='FAQ-text'
                             trigger={<h5><i className='material-icons'>expand_more </i>Hacen lista de casamiento?
                             </h5>}>
                  <h6 className='FAQ-answer'>No. Realmente su presencia es el mejor regalo que nos pueden dar... pero si
                    insisten (guiño, guiño), pueden transferir aca:</h6>
                </Collapsible>
              </div>
              <div className='col s10 offset-s1 left'>
                <Collapsible className='FAQ-text' openedClassName='FAQ-text'
                             trigger={<h5><i className='material-icons'>expand_more </i>Suele haber controles de
                               caminera
                               camino a Saldan?</h5>}>
                  <h6 className='FAQ-answer'>Tenemos entendido que no. Pero lo mejor seria que se organicen entre los
                    que
                    van, para hacerlo en Traffics. Para eso cree este grupo de whatsapp en el que pueden
                    organizarse</h6>
                </Collapsible>
              </div>
              <div className='col s10 offset-s1 left'>
                <Collapsible className='FAQ-text' openedClassName='FAQ-text'
                             trigger={<h5><i className='material-icons'>expand_more </i>Y ella?</h5>}>
                  <h6 className='FAQ-answer'>Y la mami?</h6>
                </Collapsible>
              </div>
            </div>
          </Collapsible>
        </div>
      </div>
    )
  }
}

export {FAQs}
