import React, { Component } from 'react';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import MediaQuery from 'react-responsive';

import Schedule from './Schedule';
import TrainingSubmissions from './TrainingSubmission';

import './Agenda.scss';
import strand from '../../static/images/strand.jpg';
import ctf from '../../static/images/logos/ctf_logo.png';
import wifi from '../../static/images/logos/wifi.png';

export default class Agenda extends Component {
  static displayName = 'Agenda';

  constructor(props) {
    super(props);
    this.state = {
      defaultTab: 'schedule'
    }
  }

  componentWillMount() {
    const defaultTab = this.props.location.hash ? this.props.location.hash.split('#')[1] : 'schedule';
    this.setState({
      defaultTab: defaultTab
    });
    //window.history.pushState(this.props.location.pathname, '', `#${defaultTab}`);
  }

  changeTab(tabId) {
    window.history.pushState(this.props.location.pathname, '', `#${tabId}`);
  }

  getTabs(vert) {
    return (
      <Tabs defaultTab={this.state.defaultTab}
        onChange={(tabId) => { this.changeTab(tabId) }}
        vertical={vert}>
        <TabList>
          <Tab tabFor="schedule">Schedule</Tab>
          <Tab tabFor="training">Training</Tab>
          <Tab tabFor="keynotes">Keynotes</Tab>
          <Tab tabFor="competitions">Competitions</Tab>
        </TabList>
        <TabPanel tabId="schedule">
          <div className='text-area'>
          	<h3 className='title'>Schedule</h3>
          	<Schedule />
          </div>
        </TabPanel>
        <TabPanel tabId="training" className="training">
          <div className='text-area'>
          	<h3 className='title'>Training</h3>
            <div className='training-call-out'><b className='note'>Note:</b><em>Conference admission included with every training class!</em></div>
            <TrainingSubmissions />
          </div>
        </TabPanel>
        <TabPanel tabId="keynotes">
					<div className='text-area'>
					  <h3 className='title'>Keynotes</h3>
					  <div className='keynote-section'>
					    <div className='keynote-left'>
					      <h4 className='keynote-name'>John Strand</h4>
					      <div className='keynote-subtitle'>
					      	<div className='keynote-company'>
					      		<a href='https://www.blackhillsinfosec.com/' target="_blank" rel="noopener noreferrer">
					      			Black Hills Information Security
					      		</a>
					      	</div>
					      	<div className='keynote-div'>|</div>
					      	<div className='keynote-handle'>
					      		<a href='https://twitter.com/strandjs' target="_blank" rel="noopener noreferrer">
					      			@strandjs
					      		</a>
					      	</div>
					      </div>

					      <div className='keynote-bio'>
					      	John has both consulted and taught hundreds of organizations in the areas of security, regulatory compliance, and penetration testing. He is a coveted speaker and much loved teacher. John is a contributor to the industry shaping Penetration Testing Execution Standard and 20 Critical Controls frameworks.
					      </div>

					      <div className='keynote-talk'>
					      	<div className='keynote-topic'>Now, For Something Completely Different</div>
					      	<div className='keynote-abstract'>
					      		<p className='tab-paragraph'>Over the past two years we have see a perceptible shift in security issues.  Traditional architectures like AD and DMZs are falling away and are being replaced with Cloud and IoT.  So, how do we approach this new world?</p>
					      	  <p className='tab-paragraph'>In this talk, John will cover some core tools and techniques we use at BHIS every day to attack organizations.  We will also use these tools and techniques to help frame attendees in their approach and mindset to testing these technologies.</p>
					      	</div>
					      </div>
					     </div>
					     <div className='keynote-right'>
					     	<img src={strand}
					     		alt='John Strand'
					     		className='keynote-image'/>
					     </div>
					   </div>
					 </div>
        </TabPanel>
        <TabPanel tabId="competitions">
          <div className='text-area'>
            <h3 className='title'>Competitions</h3>
            
            <div className='competition-area'>
              <div className='competition-section'>
                <div className='competition-name-logo'>
                  <div className='competition-name'>Annual Kernelcon CTF</div>
                  <div className='competition-logo'>
                    <img src={ctf} alt='ctf'/>
                  </div>
                  <a className='update-button'
                    href="https://docs.google.com/forms/d/e/1FAIpQLScQykbvNzuoQXWFBWHEbCUm7ZEK39pF3gHKaYVCJW7CPphd9Q/viewform?usp=sf_link"
                    rel='noopener noreferrer'
                    target='_blank'>
                    Sign Up for Updates
                  </a>
                </div>
                <div className='competition-description'>
                  Our Annual Kernelcon Capture the Flag event is back and better than ever, with all new challenges, prizes and a new, fun theme!  The competition this year is sure to be fierce with the winning team receiving our coveted <a className='text-highlight' href='/about#reciprocity'>Eternal Kernel badges</a>. CTF challenges to include web hacking, reversing, pwning, cryptography, and a whole lot more.  In fact, maybe we have already hidden some flags around the internet.  Do you have the team to beat this year?  If so, we will see you at Kernelcon CTF!
                </div>
              </div>

              <div className='competition-section'>
                <div className='competition-name-logo'>
                  <div className='competition-name'>WiFi Fox and Hound Event</div>
                  <div className='competition-logo'>
                    <img src={wifi} alt='wifi' />
                  </div>
                  <a className='update-button'
                    href="https://docs.google.com/forms/d/e/1FAIpQLScQykbvNzuoQXWFBWHEbCUm7ZEK39pF3gHKaYVCJW7CPphd9Q/viewform?usp=sf_link"
                    rel='noopener noreferrer'
                    target='_blank'>
                    Sign Up for Updates
                  </a>
                </div>
                <div className='competition-description'>
                  Have you ever wanted to crack your neighbors WiFi network?  We all have at one point or another.  Come on down to the WiFi Fox and Hound where you can crack WiFi networks in a safe, consensual, and legal competition designed to test your abilities in WEP, WPA, and WPA2 cracking.  We will be hiding access points around the hotel with various levels of security on them.  It will be your job to find them, and break into the networks and recover the key/flag.  Once you have the flag enter it in the scoring site to get those points! Contest will run the duration of the conference. Think you have what it takes? Then come show us your 1337 WiFi skillz and compete in the WiFi Fox and Hound event.  Even if you're new to WiFi hacking, we'll have plenty of resources to help you along your way.  You can even win fabulous prizes!
                </div>
              </div>

            </div>



          </div>
        </TabPanel>
      </Tabs>
    );
  }

  render() {
    return (
      <div className='container'>
        <div className='venue-section'>
          <h3 className='title'>Agenda</h3>
            <MediaQuery minDeviceWidth={1000}>
              {this.getTabs(true)}
            </MediaQuery>
            <MediaQuery maxDeviceWidth={999}>
              {this.getTabs(false)}
            </MediaQuery>
        </div>
      </div>
    );
  }
}
