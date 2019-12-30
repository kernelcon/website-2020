import React, { Component } from 'react';
import './Conference.scss';

export default class Conference extends Component {
  static displayName = 'Conference';

  render() {
    return (
      <div className='con-page'>
        <div className='text-area'>
          <h3 className='title'>Conference</h3>
          <p className='tab-paragraph'>If you're ready to pull the trigger, below is the registration page for Kernelcon 2020!</p>

          <a className='reg-button'
            href="https://reg.kernelcon.org"
            rel='noopener noreferrer'
            target='_blank'>
            Register Now
          </a>
          <p className='tab-paragraph'>Also, check out our open calls if you'd like to contribute! Our hotel rate is available on our Venue page!</p>
          <p className='tab-paragraph'>Please check back again soon!  As the conference gets more and more ready, this page will be updated with all the great stuff we plan to offer. Hope to see you in Omaha in 2020!</p>
        </div>        
        <div className='text-area'>
          <h3 className='title'>Volunteers</h3>
          <p className='tab-paragraph'>Thanks to all those who helped make the first Kernelcon a success! We are seeking hard-working, community-loving volunteers again for 2020, sign up below!  As a volunteer you will receive free entry into the conference. For updates, please follow <a href='https://twitter.com/_kernelcon_' className='text-highlight' rel='noopener noreferrer' target='_blank'>@_kernelcon_</a> on twitter.</p>
        
          <a className='reg-button'
            href="https://docs.google.com/forms/d/e/1FAIpQLScPCLkIEX0G_3zftN0sNt-ClsHiasThBMAasjvs3B176yGN3A/viewform?usp=sf_link"
            rel='noopener noreferrer'
            target='_blank'>
            Sign Up to Volunteer
          </a>

        </div>
      </div>
    );
  }
}



