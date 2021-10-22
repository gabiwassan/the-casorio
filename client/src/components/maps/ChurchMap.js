import React, {Component} from "react";
import './MapStyles.css';
import {MapHeader} from "./MapHeader";

class ChurchMap extends Component {
    render() {
        return (
            <div>
                <MapHeader/>
                <div>
                    La iglesia es Nuestra señora del carmen en Villa Allende
                </div>
                <div className="google-map-code">
                    <iframe className="responsive-iframe"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3409.3833474223784!2d-64.30077458385725!3d-31.293148197435094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94329d056aa66e5f%3A0x8d59cccda2c33d4f!2sOur%20Lady%20of%20Carmen!5e0!3m2!1sen!2sar!4v1634856315223!5m2!1sen!2sar"
                        style={{border: 0}} allowFullScreen="" loading="lazy"></iframe>
                </div>
            </div>
        )
    }
}

export {ChurchMap};