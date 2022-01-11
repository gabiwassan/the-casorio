import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './CardList.css';

export const CardList = (props) => {
  const { user } = props;

  return (
    <div clasName="row">
      <div className="col s12 card borders">
        <p className="title-card">EL SALON</p>
        <div className="separator" />
        <p className="text-card font18"> Los esperamos el viernes 25 de febrero a las 18:30 hs en Estancia el Rosal.  </p>
        <Link className="btn-size-card" to="/dashboard/party">
          <a class="btn-link-card">- VER COMO LLEGAR -</a>
        </Link>
      </div>

      <div className="col s12 card borders">
        <p className="title-card">VALOR TARJETA</p>
        <div className="separator" />
        <p className="value-card font24"> ${user.card} </p>
        <Link className="btn-size-card" to="/dashboard/payment">
          <a class="btn-link-card">- VER FORMAS DE PAGO -</a>
        </Link>
      </div>

      <div className="col s12 card borders">
        <p className="title-card">PREGUNTAS FRECUENTES</p>
        <div className="separator" />
        <p className="text-card font18"> Sacate todas las dudas aquí.  </p>
        <Link className="btn-size-card" to="/dashboard/faqs">
          <a class="btn-link-card">- VER TODAS -</a>
        </Link>
      </div>
    </div>
  );
};

CardList.propTypes = { user: PropTypes.any };
