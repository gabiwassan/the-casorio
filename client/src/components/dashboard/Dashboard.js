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
        <div className='row header-space'/>
        <div className='row header-navigation center'>
          <div className='col s4'>
            <Link to='/' className='btn-flat waves-effect' onClick={this.onLogoutClick}>
              <i className='material-icons left'>keyboard_backspace</i>
              Salir
            </Link>
          </div>
          <div className='col s4'>
            <Link to='/dashboard/church' className='btn-flat waves-effect'>
              <i className='material-icons left'>church</i>
              Iglesia
            </Link>
          </div>
          <div className='col s4'>
            <Link to='/dashboard/party' className='btn-flat waves-effect'>
              <i className='material-icons left'>celebration</i>
              Salón
            </Link>
          </div>
        </div>
        <div style={{height: '52vh'}} className='valign-wrapper center-align'>
          <div className='container'>
            <div className='home-text'>
              <div className='row'>
                <h4>
                  Hola, <b>{user.group}</b>!
                </h4>
              </div>
              <div className='row'>
                <FamilyGroup user={user}/>
              </div>
              <div className='row'>
                <h5>
                  Valor de la tarjeta: ${user.card} por persona.
                </h5>
              </div>
            </div>
          </div>
        </div>
        <FAQs/>
        <ImageFooter/>
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
