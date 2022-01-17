import React from 'react';
import './../MapStyles.css';
import './Payment.css';
import { connect } from 'react-redux';
import { logoutUser } from '../../../actions/authActions';
import MapHeader from '../MapHeader';
import Header from '../../header/Header';
import headerLight from '../../../assets/header-light.png';
import FooterSection from '../../footerSection/FooterSection';

const Payment = () => {
  return (
    <>
      <MapHeader />
      <Header showHeader={false} image={headerLight} />
      <div className="row margin-section">
        <div className="row sub-header center-align dashboard-position">
          <p className="title-party">FORMAS DE PAGO</p>
          <p className="text-dashboard mb2">
            Para confirmar la asistencia podes realizar una transferencia a alguna de estas cuentas.
          </p>
        </div>

        <div className="col m6 s12 card borders">
          <p className="title-card">BANCO BBVA</p>
          <div className="separator" />
          <p className="text-card mb0 font18">Gabriel Wassan</p>
          <p className="text-card mb0 font18">CBU: 0170247940000003651067</p>
          <p className="text-card font18">ALIAS: DINO.PERRO.GOKU</p>
        </div>

        <div className="vertical-space" />

        <div className="col m6 s12 card borders">
          <p className="title-card">BANCO BBVA</p>
          <div className="separator" />
          <p className="text-card mb0 font18">Yamile Natalia Coronel</p>
          <p className="text-card mb0 font18">CBU: 2850301930094018180611</p>
          <p className="text-card font18">ALIAS: YAMILE.CORONEL</p>
        </div>

        <div className="vertical-space" />

        <div className="col m6 s12 card borders">
          <p className="title-card">WISE USD</p>
          <div className="separator" />
          <p className="text-card mb0 font18">Yamile Coronel</p>
          <p className="text-card mb0 font18">Nro. de ruta: 084009519</p>
          <p className="text-card font18">Nro. de cuenta: 9600000000528959</p>
        </div>
      </div>
      <FooterSection className="footer-image" />
    </>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Payment);
