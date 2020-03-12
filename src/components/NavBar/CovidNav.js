import React, { Component } from 'react';

import './NavBar.scss';

export default class CovidNav extends Component {
  static displayName = 'CovidNav';

  render() {
    return (
      <a className='covid-nav'
      	href='/virtual'
      >
        <div className='container nav-menu'>
        	<div className='covid-wording'>
        		COVID-19 UPDATE - Click here to read our full update.
        	</div>
        </div>
      </a>
    );
  }
}
