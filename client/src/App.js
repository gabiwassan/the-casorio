import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import 'bootstrap/dist/css/bootstrap.min.css';

import { logoutUser, setCurrentUser } from './actions/authActions';
import { Provider } from 'react-redux';
import store from './store';
import Login from './components/auth/Login';
import PrivateRoute from './components/private-route/PrivateRoute';
import Dashboard from './components/dashboard/Dashboard';

import './App.css';
import Register from './components/auth/Register';
import PartyMap from './components/sections/PartyMap';
import Payment from './components/sections/Payment/Payment';
import Confirmation from './components/sections/Confirmation/Confirmation';

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = './';
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Route exact path="/" component={Login} />
            <Switch>
              <PrivateRoute exact path="/register" component={Register} />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute exact path="/dashboard/payment" component={Payment} />
              <PrivateRoute exact path="/dashboard/party" component={PartyMap} />
              <PrivateRoute exact path="/dashboard/confirmation" component={Confirmation} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
