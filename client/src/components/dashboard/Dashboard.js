import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import { CardList } from '../layout/CardList/CardList';

//this is the invitation card

class Dashboard extends Component {
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;

    return (
      <div className="home-padding">
        <div className="col s4 my-4">
          <Link to="/" className="btn-flat waves-effect" onClick={this.onLogoutClick}>
            <i className="material-icons left">keyboard_backspace</i>
            Salir
          </Link>
        </div>
        <div className="row header-space-dashboard" />

        <div className="valign-wrapper center-align">
          <div className="container">
            <div>
              <div className="row">
                <h4>
                  Hola, <b>{user.group}</b>!
                </h4>
              </div>

              <div className="row">
                <CardList user={user} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Dashboard);
