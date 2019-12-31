import React, { Component } from 'react';
import './Register.scss';

class Register extends Component {
  static displayName = 'Register';

  render() {
    return (
      <div className='con-page'>
        <div className='venue-section'>
          <h3 className='title'>Register</h3>
          <p className='tab-paragraph'>Welcome! We are happy to have your interest. Below is the registration page for Kernelcon 2020!</p>

          <a className='reg-button'
            href="https://reg.kernelcon.org"
            rel='noopener noreferrer'
            target='_blank'>
            Register Now
          </a>
        </div>
        <div className='venue-section'>
          <h3 className='title'>Registering as a Group?</h3> 
          <p className='tab-paragraph'>We give discounts at 10 or more signups! Contact us about our group rates here: <a className='text-highlight' href="mailto:info@kernelcon.org">info@kernelcon.org</a></p>
        </div>
        <div className='venue-section'>
          <h3 className='title'>Students</h3>
          <p className='text-highlight'>Are you interested in attending Kernelcon, but cannot afford the con?</p>
          <p className='tab-paragraph'>Students, aged 18 and over, who are interested in applying for this opportunity will need the following:</p>
          <ul className='students-list'>
            <li>Proof that you are a student. Picture at school with your student ID.</li>
            <li>Letter of recommendation from an advisor or instructor from your institution.</li>
            <li>A brief letter of interest, telling us why you are interested in attending Kernelcon and what you hope to learn.</li>
            <li>Lastly, one or both of the letters should be sent from a school email address.</li>
          </ul>
          <p className='tab-paragraph'>Students should submit the above information along with any questions or concerns to <a className='text-highlight' href="mailto:students@kernelcon.org">students@kernelcon.org</a>. Accepted students will receive admission to the conference, a hotel room (for traveling students), and this year's "hacker education kit".</p>
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

export default Register;

