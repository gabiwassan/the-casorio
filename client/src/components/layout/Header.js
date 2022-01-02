import React, {Component} from 'react';
import './Layout.css';

//this is the header
class Header extends Component {
  render() {
    return (
      <div className='row'>
        <div className='col s12'>
          <h1 className='header-text'>
            Yami & Gabi
          </h1>
        </div>
      </div>
    );
  }
}

export default Header;
