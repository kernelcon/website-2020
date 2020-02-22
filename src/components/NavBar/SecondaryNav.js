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
            menuOpenButton={<FaBars size={24} color="#000" />}
            menuCloseButton={<FaTimes size={24} color="#000" />}
            changeMenuOn="992px"
            largeMenuClassName="nav-large"
            smallMenuClassName="nav-small"
            menu = {
              <div className='nav-links'>
                <a href="/venue">Venue</a>
                <a href="/agenda">Agenda</a>
                <a href="/speakers">Speakers</a>
                <a href="/agenda#training">Training</a>
                <a href="/agenda#workshops">Workshops</a>
                <a href="/register">Register</a>
                <a href="/sponsors">Sponsors</a>
                <a href="/about">About</a>
              </div>
            }
          />
        </div>
      </div>
    );
  }
}
