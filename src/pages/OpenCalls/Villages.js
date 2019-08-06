import React, { Component } from 'react';
import './OpenCalls.scss';

export default class Villages extends Component {
  static displayName = 'Call for Villages';

  render() {
    return (
      <div>
        <h3 className='title'>The Call for Villages is now OPEN</h3>
        <p className='tab-paragraph'>Last year we had a great time with 4 awesome villages!</p>
        <p className='tab-paragraph'>If you are interested submitting to have a village present at Kernelcon 2020 Here are some things you should know up front:</p>
        <div className='tab-bullets'>
          <ul>
            <li>Villages are expected to be open Friday and Saturday, during conference hours.</li>
            <li>Information provided about the village will be used for Art, Marketing, Announcements et al.</li>
            <li>Space is limited and the one thing we cannot easily make more of.</li>
            <li>If your village plans to sell any items, you must be aware of and comply with any sales tax laws.</li>
          </ul>
        </div>
        <h3 className='title'>Submission Requirements</h3>
        <p className='tab-paragraph'>If you are interested in running a Village, email the <a href='mailto:villages@kernelcon.org' className='text-highlight' rel='noopener noreferrer'>villages@kernelcon.org</a> with the following form (submit one form per Village). Please be as detailed as possible so that our review board can best evaluate your submissions. All submissions are due by December 1, 2019.</p>
        <p className='tab-paragraph'>After your submission is received, we will respond and let you know we got it. If you have not received confirmation of your submission after two business days, contact lead Aaron at <a href='mailto:villages@kernelcon.org' className='text-highlight' rel='noopener noreferrer'>villages@kernelcon.org</a>.</p>
        <p className='tab-paragraph'>Thank you and good luck!</p>
        <h3 className='title'>Kernelcon 2020 VILLAGE APPLICATION</h3>
        <p className='tab-paragraph'><div>Special Note:</div>Please cut and paste your submission into the body of an email as plain text, or attach it as a .docx, or a .txt file.</p>
        <h3 className='title'>SUBMISSION INFO</h3>
        <p className='tab-paragraph'><div>Village Name:</div> Please provide a full description of your Village (used for Art, Marketing, Announcements, et al.):</p>
        <p className='tab-paragraph'><div>Primary and Secondary Contact information for correspondence:</div> Name, Handle, and Email address</p>
        <p className='tab-paragraph'><div>Please provide the official web address/URL for your Village if available:</div> Are you planning to have talks, contests, or events?</p>
        <p className='tab-paragraph'>Good luck!</p>
      </div>
    );
  }
}


