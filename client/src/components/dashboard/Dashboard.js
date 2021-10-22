import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {logoutUser} from "../../actions/authActions";
import {Link} from "react-router-dom";

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
                <div className="container center" style={{display:'table'}}>
                    <Link to="/" className="btn-flat waves-effect" onClick={this.onLogoutClick}>
                        <i style={{display:'block'}}
                           className="material-icons left">keyboard_backspace </i>Salir
                    </Link>
                    <Link to="/dashboard/church" className="col s4 btn-flat waves-effect">
                        <i className="material-icons left">church</i> Iglesia
                    </Link>
                    <Link to="/dashboard/party" className="col s4 btn-flat waves-effect">
                        <i className="material-icons left">celebration</i> Salón
                    </Link>
                </div>
                <div style={{height: "75vh"}} className="container valign-wrapper">
                    <div className="row">
                        <div className="landing-copy col s12 center-align">
                            <h4>
                                <b>Hey there,</b> {user.name.split(" ")[0]}
                                <p className="flow-text grey-text text-darken-1">
                                    <img src={'https://c.tenor.com/04WNM3F6Rv8AAAAM/party-hard-the-simpsons.gif'} />
                                </p>
                            </h4>
                        </div>
                    </div>
                </div>
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
