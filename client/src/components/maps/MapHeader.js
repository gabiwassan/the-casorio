import React, {Component} from "react";
import {Link, Redirect} from "react-router-dom";

class MapHeader extends Component {
    render() {
        return (
            <div>
                <div className="container center" style={{display: 'table'}}>
                    <Link to="/dashboard" className="col s4 btn-flat waves-effect">
                        <i className="material-icons left">keyboard_backspace </i>Atras
                    </Link>
                    <Link to="/dashboard/church" className="col s4 btn-flat waves-effect">
                        <i className="material-icons left">church</i> Iglesia
                    </Link>
                    <Link to="/dashboard/party" className="col s4 btn-flat waves-effect">
                        <i className="material-icons left">celebration</i> Salón
                    </Link>
                </div>
            </div>
        )
    }
}

export {MapHeader};