import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const CardList = (props) => {
  const { user } = props;

  return (
    <div clasName="row">
      <div className="col m6 s12 card">
        <h2>Tarjeta</h2>
        <h5> ${user.card} </h5>
        <Link to="/dashboard/payment">
          <a class="right waves-effect waves-light btn">VER DATOS</a>
        </Link>
      </div>

      <div className="col m6 s12 card">
        <h2>El Salón</h2>
        <h5> Some testo </h5>
        <Link to="/dashboard/party">
          <a class="right waves-effect waves-light btn">VER MAPA</a>
        </Link>
      </div>

      <div className="col m6 s12 card">
        <h2>Confirmá tu presencia</h2>
        <h5> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. </h5>
        <Link to="/dashboard/confirmation">
          <a class="right waves-effect waves-light btn">AQUÍ</a>
        </Link>
      </div>

      <div className="col m6 s12 card">
        <h2>Preguntas frecuentes</h2>
        <a class="right waves-effect waves-light btn">AQUI</a>
      </div>
    </div>
  );
};

CardList.propTypes = { user: PropTypes.any };
