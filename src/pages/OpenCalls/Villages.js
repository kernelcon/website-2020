import React, { Component } from 'react';
import './OpenCalls.scss';

export default class Villages extends Component {
  static displayName = 'Call for Villages';

  render() {
    return (
      <div>
        <p className='tab-heading closed-wording'>The Call for Villages is now CLOSED. Thank you to all who submitted to help make Kernelcon great.</p>
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
        <p className='tab-heading'>Submission Requirements</p>
        <p className='tab-paragraph'>If you are interested in running a Village, email the <a href='mailto:villages@kernelcon.org' className='text-highlight' rel='noopener noreferrer'>villages@kernelcon.org</a> with the following form (submit one form per Village). Please be as detailed as possible so that our review board can best evaluate your submissions. All submissions are due by December 1, 2019.</p>
        <p className='tab-paragraph'>After your submission is received, we will respond and let you know we got it. If you have not received confirmation of your submission after two business days, contact lead Aaron at <a href='mailto:villages@kernelcon.org' className='text-highlight' rel='noopener noreferrer'>villages@kernelcon.org</a>.</p>
        <p className='tab-paragraph'>Thank you and good luck!</p>
        <p className='tab-heading'>Kernelcon 2020 Village Application must include:</p>
        <p className='tab-paragraph'>
          <ol className='tab-ordered-list'>
            <li>Village Name</li>
            <li>Please provide a full description of your Village (used for Art, Marketing, Announcements, et al.)</li>
            <li><em>For Kernelcon internal use only:</em> Instructor(s) name, email address, phone number (for emergency use only).</li>
            <li><em>For Kernelcon website:</em> Instructor(s) name, twitter handle (if desired), and biography.</li>
            <li>Please provide the official web address/URL for your Village if available</li>
            <li>Please let us know if you are you planning to have talks, contests, or events.</li>
            <li>Please cut and paste your submission into the body of an email as plain text, or attach it as a .docx, or a .txt file.</li>
          </ol>
        </p>
        <p className='tab-paragraph'>Good luck!</p>
      </div>
    );
  }
}


