import React, { Component } from 'react';
import Vision from '../../static/images/kernelcon_vision.png';
import BlackLogo from '../../static/images/logos/kernelcon_black.png';
import Modal from '../../components/Modal/Modal';
import pdf from '../../program/kc2020_program.pdf';

import './Home.scss';

export default class Home extends Component {
  static displayName = 'Home';

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      mode: '',
      isOpen: false
    }
  }


  render() {

    const modalContentStyle = {
      padding: '0px',
      marginTop: '-100px'
    }

    return (
      <div className='home-page'>
        <div className='col left'>
          <img src={Vision}
            alt='Vision 2020'/>
          <a className='reg-button'
            href='https://reg.kernelcon.org'
            rel='noopener noreferrer'
            target='_blank'>
            Register Now
          </a>
          <a className='reg-button'
            href={pdf}
            rel='noopener noreferrer'
            target='_blank'>
            Kernelcon 2020 Program
          </a>

{/*          <Modal show={this.state.isOpen}
            onClose={this.toggleModal}
            title='Subscribe for Updates'
            modalContentStyle={modalContentStyle}
            height='620'
            width='600'>
              <iframe src="https://mailchi.mp/4305c17b886e/kernelcon"
                title="sign-up-form"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                className='mail-form'
                style={{'marginLeft': '0px', 'width': '580px', 'height': '720px'}}>
                Loading...
              </iframe>
          </Modal>*/}

    <div className='twitter-zone twitter-dark'>
        <a className="twitter-timeline"
          data-height="420"
          data-theme="dark"
          data-chrome="transparent nofooter noborders"
          href="https://twitter.com/_kernelcon_?ref_src=twsrc%5Etfw">Tweets by _kernelcon_</a> 
      </div>

      <div className='twitter-zone twitter-light'>
        <a className="twitter-timeline"
          data-height="420"
          data-theme="light"
          data-chrome="transparent nofooter noborders"
          href="https://twitter.com/_kernelcon_?ref_src=twsrc%5Etfw">Tweets by _kernelcon_</a> 
      </div>

        </div>
        <div className='col right'>
          <img src={BlackLogo}
            alt='Kernelcon'/>

          <div className='highlight-box'>
            <div className='vision-highlight'>
              Our 2020 theme is <span className='text-highlight'><b>Vision</b></span>. Our <span className='focus'>focus</span> will revolve around both learning from hindsight and looking toward the future!
            </div>

            <div className='highlight-boxes'>
              <div className='highlight-text-box'>
                <span className='num-highlight'>2</span>
                <span className='highlight-spans'>DAYS OF <a className='text-highlight' href='/agenda#training'>TRAINING</a></span>
              </div>
              <div className='highlight-text-box'>
                <span className='num-highlight'>2</span>
                <span className='highlight-spans'>DAYS OF <a className='text-highlight' href='/agenda#schedule'>TALKS</a></span>
              </div>
              <div className='highlight-text-box'>
                <span className='num-highlight'>2</span>
                <span className='highlight-spans'>Tracks</span>
              </div>
              <div className='highlight-text-box'>
                <span className='num-highlight'>2</span>
                <span className='highlight-spans'><a className='text-highlight' href='/agenda#keynotes'>Keynotes</a></span>
              </div>
              <div className='highlight-text-box'>
                <span className='num-highlight'>2</span>
                <span className='highlight-spans'><a className='text-highlight' href='/agenda#competitions'>Competitions</a></span>
              </div>
              <div className='highlight-text-box'>
                <span className='num-highlight'>4</span>
                <span className='highlight-spans'><a className='text-highlight' href='/agenda#villages'>Villages</a></span>
              </div>
              <div className='highlight-text-box'>
                <span className='num-highlight'>5</span>
                <span className='highlight-spans'><a className='text-highlight' href='/agenda#workshops'>Hands-on Workshops</a></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
