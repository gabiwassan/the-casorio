import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-materialize';
import { Link } from 'react-router-dom';

export const CardList = (props) => {
  const { user } = props;
  const trigger = <Button>VER DATOS</Button>;

  return (
    <div clasName="row">
      <div className="col m6 s12 card">
        <h2>Tarjeta</h2>
        <h5> ${user.card} </h5>
        <Modal
          header="Modal Header"
          trigger={trigger}
          actions={[
            <Button flat modal="close" node="button" waves="green">
              x
            </Button>,
          ]}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Modal>
      </div>

      <div className="col m6 s12 card">
        <h2>El Salón</h2>
        <h5> Some testo </h5>
        <Link to="/dashboard/party" className="btn-flat waves-effect">
          <a class="waves-effect waves-light btn">VER MAPA</a>
        </Link>
      </div>

      <div className="col m6 s12 card">
        <h2>Confirmá tu presencia</h2>
        <h5> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. </h5>
        <a class="waves-effect waves-light btn">AQUI</a>
      </div>

      <div className="col m6 s12 card">
        <h2>Preguntas frecuentes</h2>
        <a class="waves-effect waves-light btn">AQUI</a>
      </div>
    </div>
  );
};

CardList.propTypes = { user: PropTypes.any };
