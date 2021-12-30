import React from 'react';
import './../MapStyles.css';
import './Confirmation.css';
import { MapHeader } from '../MapHeader';
import ImageFooter from '../../layout/ImageFooter';
import { connect } from 'react-redux';
import { logoutUser } from '../../../actions/authActions';

const Confirmation = (props) => {
  const { card } = props.auth.user;

  const onSubmit = (event) => {
    event.preventDefault();
    console.log('submited');
  };

  return (
    <div className="container>">
      <MapHeader />
      <div className="home-padding">
        <div className="map-body ">
          <div className="vertical-space" />
          <div>
            <h1 className="text center">Confrmá tu presencia</h1>
          </div>
          <div className="vertical-space" />

          <div clasName="row">
            <div className="col card">
              <h2 className="text-header-card">Titulo</h2>
              <p className="text center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>

              <form noValidate onSubmit={onSubmit}>
                <p>
                  <label>
                    <input name="group1" type="radio" checked />
                    <span>Si</span>
                  </label>
                </p>
                <p>
                  <label>
                    <input name="group1" type="radio" />
                    <span>No</span>
                  </label>
                </p>
                <div class="row">
                  <div class="input-field col s12">
                    <textarea id="textarea1" class="materialize-textarea"></textarea>
                    <label for="textarea1">Dejanos un mensaje...</label>
                  </div>
                </div>
                <button type="submit" className="right btn waves-effect btn-size">
                  ENVIAR CONFIRMACION
                </button>
              </form>
            </div>
          </div>
          <ImageFooter className="footer-image" />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Confirmation);
