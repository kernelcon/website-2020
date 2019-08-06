import React, { Component } from 'react';
import './Sponsors.scss';

export default class Sponsors extends Component {
  static displayName = 'Sponsors';

  render() {
    return (
      <div className='sponsors'>
        <div>
          <h3>Sponsorship</h3>
          <div className='text-block'>
            <p>We understand your products and services play an important part in our security and we can’t put on this conference without your help.  The Omaha metropolitan area is home to 45,000 businesses, including Fortune 500 companies, large financial companies, global technology service providers, the University of Nebraska system, and important U.S. Armed forces operations.  If you’re not already doing business in Omaha, you should be.</p>
            <p>Get your name and product in front of hundreds of security professionals and key decision makers with a Kernelcon sponsorship.  We will be happy to work with you on details of your sponsorship, options available and sponsorship fees.</p>
            <p>While we do appreciate our sponsors, please understand that Kernelcon is first and foremost for our attendees so we can only accept sponsors who have their best interests in mind.</p>
            <div className='tab-title'>Sponsorships are now available. Please contact <a href="mailto:sponsor@kernelcon.org?Subject=Sponorship" style={{textDecoration:'underline'}} target="_top">sponsor@kernelcon.org</a>.</div>
          </div>
        </div>
        <div>
          <h3 className='title'>Sponsor a Student</h3>
          <div className='text-block'>
            <h4>Interested in sponsoring a student for this year's Kernelcon?</h4>
            <p>With your assistance, Kernelcon hopes to sponsor up to 50 students this year. In addition to entry for you, your money will help pay for a student’s admission, hotel room (for traveling students), and this year’s “hacker education kit”.</p>
            <div className='tab-title'>Would you like to hear more?  Please contact <a href="mailto:sponsor@kernelcon.org?Subject=Sponorship" style={{textDecoration:'underline'}} target="_top">sponsor@kernelcon.org</a>.</div>  
          </div>
        </div>
      </div>
  );
  }
}
