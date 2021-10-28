import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {logoutUser} from '../../actions/authActions';
import {Link} from 'react-router-dom';
import {FAQs} from './FAQs';
import {WeatherWidget} from './WeatherWidget';
import ImageFooter from '../layout/ImageFooter';
import './Dashboard.css'

//this is the invitation card

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const {user} = this.props.auth;

    return (
      <div>
        <div className='container center' style={{display: 'table'}}>
          <div className='header-navigation'>
          <Link to='/' className='btn-flat waves-effect' onClick={this.onLogoutClick}>
            <i className='material-icons left'>keyboard_backspace </i>Salir
          </Link>
          <Link to='/dashboard/church' className='col s4 btn-flat waves-effect'>
            <i className='material-icons left'>church</i> Iglesia
          </Link>
          <Link to='/dashboard/party' className='col s4 btn-flat waves-effect'>
            <i className='material-icons left'>celebration</i> Salón
          </Link>
        </div>
        </div>
        <div style={{height: '60vh'}} className='container valign-wrapper'>
          <div className='row'>
            <div className='home-text col s12 center-align'>
              <h4>
                Hola, <b> {user.group}</b>!
                <p className='flow-text grey-text text-darken-1'>
                </p>
              </h4>
              <h5>
                <b>Ustedes</b> de alguna forma, han sido parte de esta <b>hermosa historia de amor</b>, y nos encantaría que
                nos acompañen en este día tan especial.
              </h5>
              <div>
              </div>
              <h5>
                <i className='material-icons'>credit_card </i> ${user.card} por persona.
              </h5>
            </div>
          </div>
        </div>
        <FAQs/>
        <ImageFooter/>
        <h5 className="weather-text center">
          Aca te dejamos el pronostico para que planees tu outfit.
          <i className='material-icons left'>arrow_downward </i>
          <i className='material-icons right'>arrow_downward </i>
        </h5>
        <WeatherWidget/>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  {logoutUser}
)(Dashboard);
