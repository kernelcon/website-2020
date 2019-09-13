import React, { Component } from 'react';
import './Conference.scss';

export default class Conference extends Component {
  static displayName = 'Conference';

  render() {
    return (
      <div className='con-page'>
        <div className='text-area'>
          <h3 className='title'>Conference</h3>
          <a className='reg-button'
            href="https://reg.kernelcon.org"
            rel='noopener noreferrer'
            target='_blank'>
            Register Now
          </a>
          <p className='tab-paragraph'>Check out our open calls if you'd like to contribute! Our hotel rate is available on our Venue page!</p>
        </div>        
        <div className='text-area'>
          <h3 className='title'>Volunteers</h3>
          <p className='tab-paragraph'>Thanks to all those who helped make the first Kernelcon a success! We will be reaching out to our original volunteers to see if they are interested in volunteering for Kernelcon 2020. For those of you who are new and would like to volunteer, keep an eye out for an update here and <a href='https://twitter.com/_kernelcon_' className='text-highlight' rel='noopener noreferrer' target='_blank'>@_kernelcon_</a> on twitter.</p>
        </div>
      </div>
    );
  }
}
