import React, { Component } from 'react';
import ResponsiveMenu from 'react-responsive-navbar';
import { FaBars, FaTimes } from 'react-icons/fa';

import './NavBar.scss';

export default class SecondaryNav extends Component {
  static displayName = 'SecondaryNav';

  render() {
    return (
      <div className='secondary-nav'>
        <div className='container nav-menu'>
          <ResponsiveMenu
            menuOpenButton={<FaBars size={30} color="#fff" />}
            menuCloseButton={<FaTimes size={30} color="#fff" />}
            changeMenuOn="992px"
            largeMenuClassName="nav-large"
            smallMenuClassName="nav-small"
            menu = {
              <div className='nav-links'>
                <a href="/venue">Venue</a>
                <a href="/dates">Dates</a>
                <a href="/open-calls">Open Calls</a>
                <a href="/sponsors">Sponsors</a>
                <a href="/conference">Con</a>
                <a href="/about">About</a>
              </div>
            }
          />
        </div>
      </div>
    );
  }
}
