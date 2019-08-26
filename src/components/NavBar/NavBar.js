import React, { Component } from 'react';
import DarkModeToggle from '../../themes/DarkMode/DarkModeToggle';

import BlackLogo from '../../static/images/logos/kernelcon_black.png';
import './NavBar.scss';

export default class NavBar extends Component {
  static displayName = 'NavBar';

  render() {
    return (
      <div className='navbar'>
        <div className='container'>
          <a href='/'>
            <img src={BlackLogo} 
              className='navbar-logo'
              height='25'
              alt='kernelcon logo' 
            />
            <p className='nav-dates'>March 25-28, 2020</p>
          </a>
        </div>
        <div className='toggle-group'>
          <DarkModeToggle />
        </div>
      </div>
    );
  }
}
