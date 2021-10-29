import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {registerUser} from '../../actions/authActions';
import classnames from 'classnames';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      group: '',
      phone: '',
      card: '',
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  componentWillReceiveProps(nextProps) {
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

    const newUser = {
      name: this.state.name,
      group: this.state.group,
      phone: this.state.phone,
      card: this.state.card
    };

    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const {errors} = this.state;

    return (
      <div className='container'>
        <div className='row'>
          <div className='col s8 offset-s2'>
            <Link to='/' className='btn-flat waves-effect'>
              <i className='material-icons left'>keyboard_backspace</i> Back to
              home
            </Link>
            <div className='col-s12'>
              <h4>
                <b>Register</b> below
              </h4>
              <p className='grey-text text-darken-1'>
                Already have an account? <Link to='/login'>Log in</Link>
              </p>
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <div className='input-field col-s12'>
                <input
                  onChange={this.onChange}
                  value={this.state.name}
                  error={errors.name}
                  id='name'
                  type='text'
                  className={classnames('', {
                    invalid: errors.name
                  })}
                />
                <label htmlFor='name'>Name</label>
                <span className='red-text'>{errors.name}</span>
              </div>
              <div className='input-field col-s12'>
                <input
                  onChange={this.onChange}
                  value={this.state.group}
                  error={errors.group}
                  id='group'
                  type='text'
                  className={classnames('', {
                    invalid: errors.group
                  })}
                />
                <label htmlFor='group'>group</label>
                <span className='red-text'>{errors.group}</span>
              </div>
              <div className='input-field col-s12'>
                <input
                  onChange={this.onChange}
                  value={this.state.phone}
                  error={errors.phone}
                  id='phone'
                  type='tel'
                  className={classnames('', {
                    invalid: errors.phone
                  })}
                />
                <label htmlFor='phone'>phone</label>
                <span className='red-text'>{errors.phone}</span>
              </div>
              <div className='input-field col-s12'>
                <input
                  onChange={this.onChange}
                  value={this.state.card}
                  error={errors.card}
                  id='card'
                  type='number'
                  className={classnames('', {
                    invalid: errors.card
                  })}
                />
                <label htmlFor='card'>Valor de la Tarjeta</label>
                <span className='red-text'>{errors.card}</span>
              </div>
              <div className='col-s12'>
                <button
                  style={{
                    width: '150px',
                    borderRadius: '3px',
                    letterSpacing: '1.5px',
                    marginTop: '1rem'
                  }}
                  type='submit'
                  className='btn btn-large waves-effect waves-light hoverable'
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  {registerUser}
)(withRouter(Register));
