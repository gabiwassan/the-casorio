import React, {Component} from "react";
import {Link, Redirect} from "react-router-dom";

class MapHeader extends Component {
  render() {
    return (
      <div>
        <div className="container center">
            <Link to="/dashboard" className="btn-flat waves-effect">
              <i className="material-icons left">keyboard_backspace </i>Tarjeta
            </Link>
            <Link to="/dashboard/church" className="btn-flat waves-effect">
              <i className="material-icons left">church</i> Iglesia
            </Link>
            <Link to="/dashboard/party" className="btn-flat waves-effect">
              <i className="material-icons left">celebration</i> Salón
            </Link>
        </div>
        <div className="row">
          <div className="col s12">
          </div>
        </div>
      </div>
    )
  }
}

export {MapHeader};
