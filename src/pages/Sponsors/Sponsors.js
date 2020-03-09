import React, { Component } from 'react';
import ubtlogo from '../../static/images/sponsors/ubt.png';
import toool from '../../static/images/sponsors/toool.svg';
import tooolwhite from '../../static/images/sponsors/toool-white.png';
import mhh from '../../static/images/sponsors/MHH.png';
import mhhlight from '../../static/images/sponsors/MHH-white.png';
import splunk from '../../static/images/sponsors/splunk-dark.png';
import forefront17 from '../../static/images/sponsors/forefront17.png';
import swlight from '../../static/images/sponsors/swlight.png';
import securesky from '../../static/images/sponsors/securesky.png';
import narilight from '../../static/images/sponsors/NARI-white.png';
import naridark from '../../static/images/sponsors/NARI-dark.png';
import perspectadark from '../../static/images/sponsors/perspecta-dark.png';
import perspectalight from '../../static/images/sponsors/perspecta-light.png';
import guidepointdark from '../../static/images/sponsors/guidepoint-dark.png';
import guidepointlight from '../../static/images/sponsors/guidepoint-light.png';
import checkpointdark from '../../static/images/sponsors/cp-black.png';
import checkpointlight from '../../static/images/sponsors/cp-white.png';
import sirius from '../../static/images/sponsors/Sirius.svg';
import fnbo from '../../static/images/sponsors/fnbo.png';
import fnts from '../../static/images/sponsors/fnts.png';
import nostarch from '../../static/images/sponsors/nostarch.png';
import cag from '../../static/images/sponsors/conagra.png';
import cagw from '../../static/images/sponsors/conagraw.png';

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

              <div className='spons-block'>
                <h2 className='text-highlight spons-title'>Platinum</h2>

                <div className='two-line'>
                  <a href="https://www.checkpoint.com/"
                    target="_blank"
                    rel='noopener noreferrer'
                    className='light-pic'>
                    <img src={checkpointlight}
                      className='spons-img half-plat-spons'
                      alt="Checkpoint"/>
                  </a>
                  <a href="https://www.guidepointsecurity.com/"
                    target="_blank"
                    rel='noopener noreferrer'
                    className='light-pic'>
                    <img src={guidepointlight}
                      className='spons-img half-plat-spons'
                      alt="GuidePoint Security"/>
                  </a>
                </div>

                <div className='two-line'>
                  <a href="https://www.checkpoint.com/"
                    target="_blank"
                    rel='noopener noreferrer'
                    className='dark-pic'>
                    <img src={checkpointdark}
                      className='spons-img half-plat-spons'
                      alt="Checkpoint"/>
                  </a>
                  <a href="https://www.guidepointsecurity.com/"
                    target="_blank"
                    rel='noopener noreferrer'
                    className='dark-pic'>
                    <img src={guidepointdark}
                      className='spons-img half-plat-spons'
                      alt="GuidePoint Security"/>
                  </a>
                </div>


              </div>

{/*              <div className='spons-block'>
                <h3 className='text-highlight spons-title'>Gold</h3>
                <div className='two-line'>
                  <a href="https://fnbo.com/"
                    target="_blank"
                    rel='noopener noreferrer'>
                    <img src={fnbo}
                      className='spons-img half-gold-spons spons-white-img'
                      alt="First National Bank"/>
                  </a>
                  <a href="https://www.fnts.com/"
                    target="_blank"
                    rel='noopener noreferrer'>
                    <img src={fnts}
                      className='spons-img half-gold-spons spons-white-img'
                      alt="First National Technology Solutions"/>
                  </a>
                </div>
              </div>
*/}

              <div className='spons-block'>
                <h3 className='text-highlight spons-title'>Silver</h3> 
                <a href="https://fnbo.com/"
                  target="_blank"
                  rel='noopener noreferrer'>
                  <img src={fnbo}
                    className='spons-img half-gold-spons spons-white-img'
                    alt="First National Bank"/>
                </a>
              </div>

              <div className='spons-block'>
                <h3 className='text-highlight spons-title'>Bronze</h3>
                <a href="https://www.secureworks.com/"
                  target="_blank"
                  rel='noopener noreferrer'>
                  <img src={swlight}
                    className='spons-img other-spons spons-white-img'
                    alt="Secureworks"/>
                </a>
                <a href="https://www.conagrabrands.com/"
                  target="_blank"
                  rel='noopener noreferrer'
                  className='light-pic'>
                  <img src={cagw}
                    className='spons-img other-spons'
                    alt="ConAgra Brands"/>
                </a>
                <a href="https://www.conagrabrands.com/"
                  target="_blank"
                  rel='noopener noreferrer'
                  className='otv-black'>
                  <img src={cag}
                    className='spons-img other-spons'
                    alt="ConAgra Brands"/>
                </a>
              </div>

              <div className='spons-block'>
                <h3 className='text-highlight spons-title'>Tin</h3>
                <a href="https://www.siriuscom.com/"
                  target="_blank"
                  rel='noopener noreferrer'>
                  <img src={sirius}
                    className='spons-img other-spons spons-white-img'
                    alt="Sirius"/>
                </a>
              </div>

{/*
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
                <a href="https://securesky.com/"
                  target="_blank"
                  rel='noopener noreferrer'>
                  <img src={securesky}
                    className='spons-img other-spons spons-white-img'
                    alt="Secure Sky"/>
                </a>
              </div>

              <div className='spons-block'>
                <h4 className='text-highlight spons-title'>Other Sponsors</h4>
                <a href="https://toool.us/"
                  target="_blank"
                  rel='noopener noreferrer'
                  className='light-pic'>
                  <img src={tooolwhite}
                    className='spons-img other-spons'
                    alt="TOOOL"/>
                </a>
                <a href="https://toool.us/"
                  target="_blank"
                  rel='noopener noreferrer'
                  className='otv-black'>
                  <img src={toool}
                    className='spons-img other-spons'
                    alt="TOOOL"/>
                </a>
                <a href="https://www.mentalhealthhackers.org/"
                  target="_blank"
                  rel='noopener noreferrer'
                  className='otv-black'>
                  <img src={mhh}
                    className='spons-img other-spons'
                    alt="MHH"/>
                </a>
                <a href="https://www.mentalhealthhackers.org/"
                  target="_blank"
                  rel='noopener noreferrer'
                  className='light-pic'>
                  <img src={mhhlight}
                    className='spons-img other-spons'
                    alt="MHH"/>
                </a>
                <a href="https://nari-cyber.com/"
                  target="_blank"
                  rel='noopener noreferrer'
                  className='light-pic'>
                  <img src={narilight}
                    className='spons-img other-spons'
                    alt="NARI"/>
                </a>
                <a href="https://nari-cyber.com/"
                  target="_blank"
                  rel='noopener noreferrer'
                  className='otv-black'>
                  <img src={naridark}
                    className='spons-img other-spons'
                    alt="NARI"/>
                </a>
                <a href="https://nostarch.com/"
                  target="_blank"
                  rel='noopener noreferrer'>
                  <img src={nostarch}
                    className='spons-img other-spons spons-white-img'
                    alt="NoStarch Press"/>
                </a>
              {/*  
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
                    <a href="https://securesky.com/"
                      target="_blank"
                      rel='noopener noreferrer'>
                      <img src={securesky}
                        className='spons-img fdbev-spons spons-white-img'
                        alt="Secure Sky"/>
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
                    <a href="https://www.secureworks.com/"
                      target="_blank"
                      rel='noopener noreferrer'>
                      <img src={swlight}
                        className='spons-img fdbev-spons spons-white-img'
                        alt="Secureworks"/>
                    </a>
                    <a href="https://perspecta.com/"
                      target="_blank"
                      rel='noopener noreferrer'
                      className='dark-pic'>
                      <img src={perspectalight}
                        className='spons-img fdbev-spons'
                        alt="Perspecta"/>
                    </a>
                    <a href="https://perspecta.com/"
                      target="_blank"
                      rel='noopener noreferrer'
                      className='light-pic'>
                      <img src={perspectadark}
                        className='spons-img fdbev-spons'
                        alt="Perspecta"/>
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
