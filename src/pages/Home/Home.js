import React, { Component } from 'react';
import Vision from '../../static/images/kernelcon_vision.png';
import BlackLogo from '../../static/images/logos/kernelcon_black.png';

import './Home.scss';

export default class Home extends Component {
  static displayName = 'Home';

  render() {
    return (
      <div className='home-page'>
        <div className='col left'>
          <img src={Vision}/>
          <div className='twitter-zone'>
            <a className="twitter-timeline"
              data-height="400"
              data-theme="light" 
              href="https://twitter.com/_kernelcon_?ref_src=twsrc%5Etfw">Tweets by _kernelcon_</a> 
          </div>
        </div>
        <div className='col right'>
          <img src={BlackLogo}/>

          <div className='highlight-box'>
            <div className='vision-highlight'>
              Our 2020 theme is <span className='text-highlight'><b>Vision</b></span>. Our <span className='focus'>focus</span> will revolve around both learning from hindsight and looking towards the future!
            </div>
            <div className='highlight-boxes'>
              <div className='highlight-text-box'>
                <span className='num-highlight'>2</span>
                <span className='highlight-spans'>DAYS OF TRAINING</span>
              </div>
              <div className='highlight-text-box'>
                <span className='num-highlight'>2</span>
                <span className='highlight-spans'>DAYS OF TALKS</span>
              </div>
              <div className='highlight-text-box'>
                <span className='num-highlight'>2</span>
                <span className='highlight-spans'>Tracks</span>
              </div>
              <div className='highlight-text-box'>
                <span className='num-highlight'>2</span>
                <span className='highlight-spans'>Keynotes</span>
              </div>
              <div className='highlight-text-box'>
                <span className='highlight-spans'>Villages</span>
              </div>
              <div className='highlight-text-box'>
                <span className='highlight-spans'>Competitions</span>
              </div>
              <div className='highlight-text-box'>
                <span className='highlight-spans'>Training Courses</span>
              </div>
              <div className='highlight-text-box'>
                <span className='highlight-spans'>Hands-on Classes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
