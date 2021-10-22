import React, {Component} from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {loginUser} from "../../actions/authActions";
import classnames from "classnames";

//This should be in landing

class Login extends Component {
    constructor() {
        super();
        this.state = {
            phone: "",
            errors: {}
        };
    }

    componentDidMount() {
        // If logged in and user navigates to Login page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/dashboard");
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push("/dashboard");
        }

        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    onChange = e => {
        this.setState({[e.target.id]: e.target.value});
    };

    onSubmit = e => {
        e.preventDefault();

        const userData = {
            phone: this.state.phone
        };

        this.props.loginUser(userData);
    };

    maxLengthCheck = (object) => {
        if (object.target.value.length > object.target.maxLength) {
            object.target.value = object.target.value.slice(0, object.target.maxLength)
        }
    }

    render() {
        const {errors} = this.state;

        return (
            <div className="container">
                <div style={{marginTop: "4rem"}} className="row">
                    <div className="col s12">
                        <div className="col s12" style={{paddingLeft: "11.250px"}}>
                            <h4>
                                <b>Ingresa</b> tu teléfono.
                            </h4>
                        </div>
                        <form noValidate onSubmit={this.onSubmit}>
                            <div className="input-field col s12">
                                <input
                                    onChange={this.onChange}
                                    value={this.state.phone}
                                    error={errors.phone}
                                    id="phone"
                                    type="tel"
                                    maxLength="10"
                                    onInput={this.maxLengthCheck}
                                    className={classnames("", {
                                        invalid: errors.phone || errors.phoneIncorrect
                                    })}
                                />
                                <label htmlFor="phone">Teléfono</label>
                                <span className="red-text">
                  {errors.phone}
                                    {errors.phoneIncorrect}
                </span>
                            </div>
                            <div className="col s12" style={{paddingLeft: "11.250px",}}>
                                Sin el 0 y sin el 15. Ej: 3513079896
                            </div>
                            <div className="col s12" style={{paddingLeft: "11.250px"}}>
                                <button
                                    style={{
                                        width: "150px",
                                        borderRadius: "3px",
                                        letterSpacing: "1.5px",
                                        marginTop: "1rem"
                                    }}
                                    type="submit"
                                    className="btn btn-large waves-effect waves-light hoverable"
                                >
                                    Ingresar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    {loginUser}
)(Login);
