import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import { Champ } from '../Champ/Champ';
import FooterLogin from '../footerLogin/FooterLogin';
import Header from '../header/Header';
import { CardList } from '../layout/CardList/CardList';
import header from './../../assets/header.png';
import './Dashboard.css';

class Dashboard extends Component {
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;

    return (
      <div className="">
        <Header showHeader={false} image={header} />
        <div className="valign-wrapper center-align dashboard-position">
          <div className="container">
            <div>
              <div className="row sub-header">
                <Champ user={user} />

                <p className="text-dashboard mb2">
                  Hay días en la vida que son especiales por sí solos. Compartirlos con las personas
                  que quieres lo convierte en inolvidables.
                </p>
                <div className="separator" />
                <p className="text-dashboard">25 de febrero, 2022 - 18:30 hs.</p>
                <div className="separator" />
              </div>

              <div className="row">
                <CardList user={user} />
              </div>
            </div>
          </div>
        </div>
        <FooterLogin />
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
