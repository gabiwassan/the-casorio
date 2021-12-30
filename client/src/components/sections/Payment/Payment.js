import React from 'react';
import './../MapStyles.css';
import './Payment.css';
import { MapHeader } from './../MapHeader';
import ImageFooter from '../../layout/ImageFooter';
import { connect } from 'react-redux';
import { logoutUser } from '../../../actions/authActions';

const Payment = (props) => {
  const { card } = props.auth.user;
  return (
    <>
      <MapHeader />
      <div className="home-padding">
        <div className="map-body ">
          <div className="vertical-space" />
          <div>
            <h1 className="text center">Tarjeta</h1>
          </div>
          <div>
            <div className="vertical-space" />
            <h5 className="text center">${card}</h5>
            <div className="vertical-space" />
          </div>

          <div clasName="row">
            <div className="col m12 s12 card m6">
              <h2 className="text-header-card">Formas de pago</h2>
              <p className="text center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
            </div>
          </div>
          <ImageFooter className="footer-image" />
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Payment);
