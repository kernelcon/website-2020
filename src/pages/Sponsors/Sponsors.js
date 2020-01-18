import React, { Component } from 'react';
import ubtlogo from '../../static/images/sponsors/ubt.png';
import toool from '../../static/images/sponsors/toool.svg';
import splunk from '../../static/images/sponsors/splunk-dark.png';
import forefront17 from '../../static/images/sponsors/forefront17.png';

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
          <div className='spons-page'>
            <h1 className='title'>2020 Sponsors</h1>
            <div className='text-block'>
              <p>We would like to thank all of our sponsors who make Kernelcon the best it can be.  Without our sponsors, our conference wouldn't happen.</p>
            </div>

            <div className='text-block spons-groups'>

{/*              <div className='spons-block'>
                <h2 className='gold spons-title'>Platinum</h2>
                <a href="https://www.netscout.com/"
                  target="_blank"
                  rel='noopener noreferrer'>
                  <img src={netscout}
                    className='spons-img plat-spons'
                    alt="NETSCOUT"/>
                </a>
                <a href="https://www.endgame.com/"
                  target="_blank"
                  rel='noopener noreferrer'>
                  <img src={endgamelogo}
                    className='spons-img plat-spons'
                    alt="ENDGAME"/>
                </a>
              </div>

              <div className='spons-block'>
                <h3 className='gold spons-title'>Gold</h3>
                <a href="https://www.secureworks.com/"
                  target="_blank"
                  rel='noopener noreferrer'>
                  <img src={swlogo}
                    className='spons-img gold-spons'
                    alt="Secure Works"/>
                </a>
                <div className='two-line'>
                  <a href="https://fnbo.com/"
                    target="_blank"
                    rel='noopener noreferrer'>
                    <img src={fnbo}
                      className='spons-img half-gold-spons'
                      alt="First National Bank"/>
                  </a>
                  <a href="https://www.fnts.com/"
                    target="_blank"
                    rel='noopener noreferrer'>
                    <img src={fnts}
                      className='spons-img half-gold-spons'
                      alt="First National Technology Solutions"/>
                  </a>
                </div>
              </div>
              
               <h3 className='gold'>Silver</h3> 

              <div className='spons-block'>
                <h3 className='gold spons-title'>Bronze</h3>
                <a href="https://www.conagrabrands.com/"
                  target="_blank"
                  rel='noopener noreferrer'>
                  <img src={caglogo}
                    className='spons-img other-spons'
                    alt="ConAgra"/>
                </a>
                <a href="https://www.checkmarx.com/"
                  target="_blank"
                  rel='noopener noreferrer'>
                  <img src={cxlogo}
                    className='spons-img other-spons'
                    alt="Checkmarx"/>
                </a>
                <a href="https://www.netskope.com/"
                  target="_blank"
                  rel='noopener noreferrer'>
                  <img src={netskopelogo}
                    className='spons-img other-spons'
                    alt="Netskope"/>
                </a>
              </div>

              <div className='spons-block'>
                <h4 className='gold spons-title'>Party Sponsor</h4>
                <a href="https://www.nttsecurity.com/en-us"
                  target="_blank"
                  rel='noopener noreferrer'>
                  <img src={nttlogo}
                    className='spons-img other-spons'
                    alt="NTT Security"/>
                </a>
              </div>
              */}

              <div className='spons-block'>
                <h4 className='text-highlight spons-title'>CTF Sponsor</h4>
                <a href="https://www.splunk.com/"
                  target="_blank"
                  rel='noopener noreferrer'>
                  <img src={splunk}
                    className='spons-img other-spons spons-white-img'
                    alt="Splunk"/>
                </a>
              </div>

              <div className='spons-block'>
                <h4 className='text-highlight spons-title'>Other Sponsors</h4>
                <a href="https://toool.us/"
                  target="_blank"
                  rel='noopener noreferrer'>
                  <img src={toool}
                    className='spons-img other-spons'
                    alt="TOOOL"/>
                </a>
{/*             <a href="https://nari-cyber.com/"
                  target="_blank"
                  rel='noopener noreferrer'>
                  <img src={nari}
                    className='spons-img other-spons spons-white-img'
                    alt="NARI"/>
                </a>
                <a href="https://nostarch.com/"
                  target="_blank"
                  rel='noopener noreferrer'>
                  <img src={nostarch}
                    className='spons-img other-spons'
                    alt="NoStarchPress"/>
                </a>
              */}
                <br />
              </div>


              <div className='spons-block'>
                <div className='foodbev-spons'>
                
                  <div className='single-foodbev-spons'>
                    <h6 className='text-highlight spons-title'>Coffee</h6>
                    <a href="https://www.ubt.com/"
                      target="_blank"
                      rel='noopener noreferrer'>
                      <img src={ubtlogo}
                        className='spons-img fdbev-spons spons-white-img'
                        alt="Union Bank & Trust"/>
                    </a>
                  </div>

                  <div className='single-foodbev-spons'>
                    <h6 className='text-highlight spons-title'>Popcorn</h6>
                    <a href="https://www.ubt.com/"
                      target="_blank"
                      rel='noopener noreferrer'>
                      <img src={ubtlogo}
                        className='spons-img fdbev-spons spons-white-img'
                        alt="Union Bank & Trust"/>
                    </a>
                    <a href="https://www.linkedin.com/company/forefront-17/about/"
                      target="_blank"
                      rel='noopener noreferrer'>
                      <img src={forefront17}
                        className='spons-img fdbev-spons spons-white-img'
                        alt="ForeFront 17"/>
                    </a>
                  </div>

                </div>
              </div>

            </div>
          </div>
      </div>
  );
  }
}
