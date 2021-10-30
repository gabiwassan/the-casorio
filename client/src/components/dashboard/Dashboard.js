import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {logoutUser} from '../../actions/authActions';
import {Link} from 'react-router-dom';
import {FAQs} from './FAQs';
import {WeatherWidget} from './WeatherWidget';
import ImageFooter from '../layout/ImageFooter';
import './Dashboard.css'
import {FamilyGroup} from "../layout/FamilyGroup/FamilyGroup";

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
        <div className='container-fluid'>
          <div className='row header-space'/>
          <div className='row center'>
            <div className='col s4'>
              <Link to='/' className='btn-flat waves-effect' onClick={this.onLogoutClick}>
                <i className='material-icons left'>keyboard_backspace</i>Salir</Link>
            </div>
            <div className='col s4'>
              <Link to='/dashboard/church' className='btn-flat waves-effect'>
                <i className='material-icons left'>church</i> Iglesia</Link>
            </div>
            <div className='col s4'>
              <Link to='/dashboard/party' className='btn-flat waves-effect'>
                <i className='material-icons left'>celebration</i>Salón</Link>
            </div>
          </div>
        </div>
        <div style={{height: '60vh'}} className='container valign-wrapper'>
          <div className='row center-align'>
            <div className='home-text col s12'>
              <div>
                <h4>
                  Hola, <b>{user.group}</b>!
                </h4>
              </div>
              <div className='row'>
                <div className='col s10 offset-s1'>
                  <FamilyGroup user={user}/>
                </div>
              </div>
              <div className='row'>
                <h5>
                  <i className='material-icons'>credit_card </i> ${user.card} por persona.
                </h5>
              </div>
            </div>
          </div>
        </div>
        <FAQs/>
        <ImageFooter/>
        <h5 className="weather-text center">
          <b>Aca te dejamos el pronostico para que planees tu outfit.</b>
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
