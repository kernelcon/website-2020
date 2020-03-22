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

              <div className='spons-block'>
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


{/*              <div className='spons-block'>
                <h3 className='text-highlight spons-title'>Silver</h3> 
                <a href="https://fnbo.com/"
                  target="_blank"
                  rel='noopener noreferrer'>
                  <img src={fnbo}
                    className='spons-img half-gold-spons spons-white-img'
                    alt="First National Bank"/>
                </a>
              </div>*/}

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


                <a href="https://www.contrastsecurity.com/"
                  target="_blank"
                  rel='noopener noreferrer'
                  className='contrast'>
                  <svg version="1.1" id="Layer_1"className='spons-img other-spons' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                     viewBox="0 0 771.72 325.7" style={{enableBackground:"new 0 0 771.72 325.7;"}}>
                  <g>
                    <path class="st0" d="M590.12,114.67c0-0.64,0.22-1.15,0.65-1.54c0.43-0.38,0.97-0.58,1.61-0.58h51.78c0.58,0,1.09,0.18,1.54,0.53
                      c0.45,0.35,0.71,0.88,0.77,1.58v11.95c0,0.58-0.2,1.13-0.6,1.66c-0.4,0.53-0.97,0.79-1.71,0.79h-16.6v52.69
                      c0,0.58-0.21,1.1-0.62,1.57c-0.42,0.47-0.96,0.7-1.63,0.7h-14.11c-0.54,0-1.06-0.22-1.54-0.65c-0.48-0.43-0.72-0.97-0.72-1.61
                      v-52.69h-16.55c-0.64,0-1.18-0.21-1.61-0.62c-0.43-0.42-0.65-1.02-0.65-1.82V114.67z M540.65,160.05
                      c-0.32-0.19-0.63-0.29-0.91-0.29c-0.42,0-0.96,0.24-1.64,0.72l-8.32,7.94c-0.74,0.68-1.11,1.29-1.11,1.83
                      c0,0.48,0.37,1.13,1.11,1.93c0.03,0.03,0.06,0.06,0.1,0.07c0.03,0.02,0.06,0.06,0.1,0.12c0.03,0.03,0.06,0.06,0.1,0.07
                      c0.03,0.02,0.06,0.06,0.1,0.12l0.14,0.14c0.51,0.55,1.21,1.27,2.09,2.17c0.88,0.9,1.96,1.82,3.25,2.75
                      c3.08,2.22,6.4,3.99,9.96,5.31c3.56,1.32,7.19,1.98,10.87,1.98c3.91,0,7.57-0.55,10.97-1.66c3.4-1.11,6.36-2.67,8.88-4.69
                      c2.52-2.02,4.5-4.47,5.94-7.34c1.44-2.87,2.17-6.07,2.17-9.6c0-3.34-0.59-6.18-1.76-8.52c-1.17-2.34-2.8-4.35-4.88-6.04
                      c-2.09-1.68-4.56-3.14-7.44-4.38c-2.87-1.23-6.01-2.41-9.41-3.54c-1.76-0.58-3.31-1.11-4.64-1.61c-1.33-0.5-2.45-1.03-3.34-1.59
                      c-0.9-0.56-1.57-1.17-2.02-1.83c-0.45-0.66-0.67-1.44-0.67-2.33c0-0.9,0.21-1.66,0.63-2.29c0.42-0.63,0.98-1.13,1.68-1.52
                      c0.71-0.38,1.52-0.67,2.45-0.84c0.93-0.18,1.92-0.26,2.98-0.26c1.03,0,2.04,0.15,3.03,0.46c0.99,0.31,1.94,0.69,2.84,1.15
                      c0.9,0.47,1.74,0.99,2.53,1.56c0.79,0.58,1.5,1.14,2.14,1.68l0.43,0.38c0.45,0.39,0.86,0.71,1.23,0.96
                      c0.37,0.26,0.78,0.38,1.23,0.38c0.55,0,1.09-0.27,1.64-0.82l7.36-7.84c0.42-0.45,0.73-0.85,0.94-1.2c0.21-0.35,0.31-0.74,0.31-1.15
                      c0-0.42-0.22-0.91-0.65-1.49c-0.43-0.58-1.02-1.19-1.76-1.83c-0.74-0.64-1.6-1.31-2.57-2c-0.98-0.69-2.01-1.36-3.1-2
                      c-2.6-1.44-5.24-2.49-7.92-3.15c-2.68-0.66-5.48-0.99-8.4-0.99c-3.88,0-7.39,0.47-10.54,1.42c-3.14,0.95-5.83,2.28-8.06,4.01
                      c-2.23,1.73-3.95,3.81-5.15,6.25c-1.2,2.44-1.8,5.15-1.8,8.13c0,2.82,0.48,5.38,1.44,7.67c0.96,2.29,2.41,4.39,4.33,6.3
                      c1.93,1.91,4.33,3.64,7.22,5.19c2.89,1.55,6.26,3,10.1,4.35c0.87,0.29,1.89,0.65,3.08,1.08c1.19,0.43,2.33,0.95,3.42,1.56
                      c1.09,0.61,2.01,1.31,2.77,2.09c0.75,0.78,1.13,1.67,1.13,2.67c0,0.9-0.14,1.75-0.41,2.55c-0.27,0.8-0.73,1.51-1.37,2.11
                      c-0.64,0.61-1.52,1.1-2.62,1.47c-1.11,0.37-2.48,0.55-4.11,0.55c-1.76,0-3.45-0.3-5.05-0.91c-1.6-0.61-3.22-1.46-4.86-2.55
                      c-1.09-0.74-2.06-1.48-2.91-2.24c-0.85-0.75-1.55-1.36-2.09-1.8C541.36,160.53,540.97,160.25,540.65,160.05 M493.16,135.03
                      c-0.61,1.64-6.8,20.35-7.41,21.99h14.77L493.16,135.03z M527.9,183.42c-0.35,0.4-0.96,0.6-1.83,0.6h-13.81
                      c-0.74,0-1.31-0.14-1.71-0.41c-0.4-0.27-0.71-0.73-0.94-1.37c-0.64-1.64-3.1-8.13-3.71-9.77h-25.55c-0.61,1.64-3.1,8.13-3.71,9.77
                      c-0.42,1.19-1.24,1.78-2.45,1.78h-14.2c-0.61,0-1.12-0.16-1.52-0.48c-0.4-0.32-0.47-0.8-0.22-1.44l26.13-67.66
                      c0.03-0.19,0.14-0.4,0.31-0.63c0.18-0.22,0.39-0.43,0.65-0.63c0.26-0.19,0.53-0.34,0.82-0.46c0.29-0.11,0.56-0.17,0.82-0.17h12.32
                      c0.55,0,1.01,0.17,1.4,0.51c0.38,0.34,0.67,0.63,0.87,0.89l1.2,2.74l25.26,65.15C528.3,182.49,528.26,183.01,527.9,183.42
                       M434.02,136.14c0,1.03-0.16,2.03-0.48,3.01c-0.32,0.98-0.79,1.86-1.39,2.65c-0.61,0.79-1.36,1.44-2.26,1.97
                      c-0.9,0.53-1.91,0.86-3.03,0.99c-0.55,0.06-1.04,0.11-1.49,0.14c-0.45,0.03-0.96,0.05-1.54,0.05h-8.85v-17.66h6.64
                      c0.93,0,1.79,0.02,2.57,0.07c0.79,0.05,1.63,0.1,2.53,0.17c1.09,0.16,2.08,0.51,2.98,1.06c0.9,0.55,1.67,1.22,2.31,2.02
                      c0.64,0.8,1.14,1.68,1.49,2.65C433.84,134.21,434.02,135.18,434.02,136.14 M455.15,182.43c0-0.45-0.18-0.98-0.53-1.59
                      c-0.35-0.61-0.64-1.14-0.87-1.59l-12.37-23.29c1.73-0.99,3.33-2.19,4.79-3.58c1.46-1.4,2.72-2.95,3.78-4.67
                      c1.06-1.72,1.88-3.56,2.48-5.53c0.59-1.97,0.89-4.05,0.89-6.23c0-3.21-0.62-6.23-1.85-9.07c-1.24-2.84-2.93-5.32-5.08-7.43
                      c-2.15-2.12-4.67-3.79-7.56-5.03c-2.89-1.23-5.98-1.85-9.29-1.85h-31.09c-0.71,0-1.24,0.2-1.59,0.6c-0.35,0.4-0.53,0.94-0.53,1.61
                      v67.18c0,0.71,0.19,1.23,0.58,1.56c0.39,0.34,0.9,0.51,1.54,0.51h14.29c1.48,0,2.21-0.69,2.21-2.07v-21.7h7.8l11.69,21.99
                      c0.13,0.55,0.41,0.98,0.84,1.3c0.43,0.32,0.92,0.48,1.47,0.48h16.51c0.58,0,1.04-0.14,1.37-0.41
                      C454.98,183.34,455.15,182.94,455.15,182.43 M330.18,114.67c0-0.64,0.22-1.15,0.65-1.54c0.43-0.38,0.97-0.58,1.61-0.58h51.78
                      c0.58,0,1.09,0.18,1.54,0.53c0.45,0.35,0.71,0.88,0.77,1.58v11.95c0,0.58-0.2,1.13-0.6,1.66c-0.4,0.53-0.97,0.79-1.71,0.79h-16.6
                      v52.69c0,0.58-0.21,1.1-0.62,1.57c-0.42,0.47-0.96,0.7-1.63,0.7h-14.11c-0.54,0-1.06-0.22-1.54-0.65
                      c-0.48-0.43-0.72-0.97-0.72-1.61v-52.69h-16.55c-0.64,0-1.18-0.21-1.61-0.62c-0.43-0.42-0.65-1.02-0.65-1.82V114.67z
                       M257.33,181.95c0,0.58,0.17,1.07,0.51,1.47c0.34,0.4,0.87,0.6,1.61,0.6h13.67c0.83,0,1.41-0.18,1.73-0.53
                      c0.32-0.35,0.48-0.88,0.48-1.59v-41.34c4.3,7.06,21.09,34.81,25.36,41.86c0.35,0.48,0.69,0.87,1.01,1.15
                      c0.32,0.29,0.69,0.43,1.11,0.43h15.35c0.67,0,1.2-0.15,1.59-0.46c0.39-0.3,0.58-0.78,0.58-1.42v-67.46c0-0.67-0.22-1.19-0.67-1.56
                      c-0.45-0.37-1.01-0.55-1.68-0.55h-13.71c-0.51,0-0.96,0.16-1.35,0.48c-0.38,0.32-0.64,0.77-0.77,1.35v38.54
                      c-4.11-6.58-20.23-32.3-24.3-38.88c-0.35-0.55-0.77-0.93-1.25-1.15c-0.48-0.22-0.95-0.34-1.4-0.34h-15.73
                      c-0.71,0-1.24,0.21-1.59,0.63c-0.35,0.42-0.53,0.91-0.53,1.49V181.95z"/>
                    <path class="st0" d="M208.03,170.04c0-0.88,0.14-4.28,3.6-4.28c0,0,10.11-0.37,14.79-7.58c4.69-7.2,2.75-16.67-1.22-21.73
                      c-4.85-6.17-12.14-5.96-12.69-5.96s-4.48,0.17-4.48-3.62s0-10.6,0-11.35s0.3-3.8,3.82-3.8c10.57,0,18.05,3.18,24.33,8.24
                      c9,7.27,13.21,18.83,13.21,27.06c0,7.73-1.29,11.09-2.52,14.82c-1.72,5.24-6.7,11.3-9.65,13.87c-12.07,10.51-25.59,9.19-25.59,9.19
                      s-3.6-0.1-3.6-3.69C208.03,178.88,208.03,170.04,208.03,170.04z"/>
                  </g>
                  <polygon class="st1" points="198.57,87.58 198.57,87.58 198.57,206.94 194.07,206.94 194.07,87.58 "/>
                  <path class="st1" d="M621.06,227.68l11.27-20.49h-5.26l-8.6,14.96l-8.77-14.96h-5.22l11.45,20.66v10.05h5.13V227.68z M587.58,211.84
                    v-4.65h-24.61v4.65h9.7v26.06h5.18v-26.06H587.58z M542.09,207.19h-5.18v30.71h5.18V207.19z M493.92,224v-12.15h7.28
                    c4.74,0,7.46,1.93,7.46,5.97c0,4.17-2.72,6.19-7.46,6.19H493.92z M508.23,237.9h5.88l-6.89-10.27c4.08-1.58,6.36-5.05,6.36-9.96
                    c0-6.67-4.52-10.48-12.37-10.48h-12.46v30.71h5.18v-9.26h7.28c0.48,0,0.96,0,1.4-0.04L508.23,237.9z M464.88,207.19h-5.18v17.99
                    c0,5.22-3.11,8.29-8.12,8.29c-5.05,0-8.25-3.11-8.25-8.29v-17.99h-5.18v17.99c0,8.03,5.09,12.94,13.38,12.94
                    c8.29,0,13.34-4.91,13.34-12.94V207.19z M405.35,207.06c-9.08,0-16.14,6.71-16.14,15.44c0,8.82,6.98,15.62,15.97,15.62
                    c4.34,0,8.77-1.97,11.89-5.05l-3.07-3.42c-2.32,2.24-5.48,3.64-8.55,3.64c-6.14,0-10.97-4.78-10.97-10.84s4.83-10.79,10.97-10.79
                    c3.11,0,6.32,1.49,8.55,3.9l3.03-3.77C414.04,208.86,409.7,207.06,405.35,207.06 M368.46,211.84v-4.65h-21.93v30.71h22.46v-4.65
                    H351.7v-8.47h15v-4.65h-15v-8.29H368.46z M312.88,206.97c-6.67,0-11.19,3.29-11.19,8.55c0,10.92,16.58,7.11,16.58,13.95
                    c0,2.37-2.15,3.73-5.75,3.73c-3.29,0-7.24-1.58-10.4-4.47l-2.24,4.47c3.16,2.9,7.72,4.87,12.55,4.87c6.76,0,11.58-3.38,11.58-8.86
                    c0.04-11.05-16.54-7.46-16.54-14.17c0-2.06,1.97-3.2,5-3.2c2.32,0,5.66,0.83,8.99,2.85l2.15-4.56
                    C320.77,208.25,316.87,206.97,312.88,206.97"/>
                  <path class="st2" d="M184.57,169.41c0,0-0.16-3.6-3.6-3.6s-13.04,0-16.32,0c-7.07,0-11.75-0.37-16.44-7.58
                    c-4.69-7.2-2.8-16.38,1.22-21.73c4.77-6.35,11.93-5.96,13.78-5.96s16.09,0,16.97,0c2.2,0,4.39-0.8,4.39-3.62c0-3.6,0-9.98,0-11.33
                    c0-1.85-1.11-3.82-3.82-3.82c-3.52,0-9.06,0-18.73,0c-9.26,0-17.28,3.18-23.56,8.24c-9,7.27-13.21,18.83-13.21,27.06
                    c0,7.73,1.29,11.09,2.52,14.82c1.72,5.24,11.96,23.06,33.82,23.06c14.58,0,17.94,0,18.89,0c1.57,0,4.1-0.51,4.1-3.69
                    C184.57,177.7,184.57,169.41,184.57,169.41z"/>
                  </svg>

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
