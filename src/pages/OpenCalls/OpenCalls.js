import React, { Component } from 'react';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import MediaQuery from 'react-responsive';
import Villages from './Villages';
import './OpenCalls.scss';
import Stickers from '../../static/images/sticker-sheet-proof.png';

export default class OpenCalls extends Component {
  static displayName = 'OpenCalls';

  constructor(props) {
    super(props);
    this.state = {
      defaultTab: 'papers'
    }
  }

  componentWillMount() {
    const defaultTab = this.props.location.hash ? this.props.location.hash.split('#')[1] : 'papers';
    this.setState({
      defaultTab: defaultTab
    });
  }

  changeTab(tabId) {
    window.history.pushState(this.props.location.pathname, '', `#${tabId}`);
  }

  getTabs(vert) {
    return (
      <Tabs defaultTab={this.state.defaultTab}
        onChange={(tabId) => { this.changeTab(tabId) }}
        vertical={vert}>
        <TabList vertical>
          <Tab tabFor="papers">Papers</Tab>
          <Tab tabFor="villages">Villages</Tab>
          <Tab tabFor="training">Training</Tab>
          <Tab tabFor="competitions">Competitions</Tab>
          <Tab tabFor="stickers">Stickers</Tab>
        </TabList>
        <span>
          <TabPanel tabId="papers">
            <div className='tab-title'>Call for Papers</div>
            <p className='tab-paragraph'>The Kernelcon Crew will be soliciting presentations for Kernelcon 2020 held at the Downtown Embassy Suites in Omaha, NE on March 27-28, 2020.</p>
            <p className='tab-paragraph'>Conclude novel research? Create something fun in your home lab? Develop a new technique? Wish you could spare someone else the horrors you faced? Impart your wisdom, start the conversations that need to be started, submit your work to our CFP!</p>
            <p className='tab-paragraph'>As you plan your submission, feel free to peruse last year’s <a href='http://2019.kernelcon.org/agenda' className='text-highlight' rel='noopener noreferrer' target='_blank'>program</a> and <a href='http://2019.kernelcon.org/call-for-papers' className='text-highlight' rel='noopener noreferrer' target='_blank'>call for papers.</a></p>
            <div className='tab-title'>Important Dates</div>
            <p className='tab-paragraph'>Important dates regarding CFP can be found on our <a href='/dates' className='text-highlight' rel='noopener noreferrer' target='_blank'>important dates page</a>, which will always have the most current information.</p>
          </TabPanel>
          <TabPanel tabId="villages">
            <div className='tab-title'>Call for Villages</div>
            <Villages />
          </TabPanel>
          <TabPanel tabId="training">
            <div className='tab-title'>Call for Training Courses</div>
            <p className='tab-paragraph'>In 2020, we’ll be offering training to attendees the two days before the Kernelcon main program. All one-day classes will be offered to attendees at $500 and all two-day classes will be offered at $1000.</p>
            <p className='tab-paragraph'>We expect to open an official Call-for-Training soon and expect the call to close no later than December 1, 2019. We’ll be looking for crafty submissions in the hacking and infosec spaces. Based on feedback, we’d like to see hand’s-on components in training submissions. More details forthcoming, check back here, or watch at @_kernelcon_ for related announcements! Why offer training? Well, primarily because there seems to be a need! Our “workshops” were very well received last year, and we’ve had inquiries from would-be students AND would-be trainers. We exceeded our attendance targets in 2019, so we plan to keep growing the event and serving the needs of our fellow hackers!</p>
          </TabPanel>
          <TabPanel tabId="competitions">
            <div className='tab-title'>Call for Competitions</div>
            <p className='tab-paragraph'>Interested in hosting a competition? We are extremely interested in hosting competitions from the community. Some examples of competitions that were hosted last year:</p>
            <div className='tab-bullets'>
              <ul>
                <li>CTF (hosted by Kernelcon)</li>
                <li>WiFi Fox & Hound</li>
                <li>Chillout Village Kernel Smash - Super Smash Bros competition</li>
                <li>Kernel Panic Technology Olympics</li>
                <li>Kernel Panic Who's Slide Is It Anyways?</li>
              </ul>
            </div>  
            <p className='tab-paragraph'>Please consider submitting an idea to <a href='mailto:competitions@kernelcon.org' className='text-highlight' rel='noopener noreferrer'>competitions@kernelcon.org</a> if you would like to host a competition for this year's Kernelcon. If your idea is not fully finessed, no worries! We can help your ideas become a reality.</p>
            <p className='tab-paragraph'>Thanks and Good Luck!</p>
          </TabPanel>
          <TabPanel tabId="stickers">
            <div className='tab-title'>Call for Stickers</div>
            <p className='tab-sub-heading'>Can't get enough stickers in your life? Us either.</p>
            <p className='tab-paragraph'>One of the most talked about swag items last year was a handful of the same unique Kernelcon sticker. We spent hours tapping our most creative individuals (and sometimes their families) for their individual take on a kernelcon sticker.</p>
            <p className='tab-paragraph'><b>This year, we would like our community to be a part of the sticker proess.</b></p>
            <p className='tab-paragraph'>So, even if you don't have a creative bone in your body, we would love to see your design! If your design is just an idea, we will try to help fledging artists achieve their <span className='text-highlight'>vision</span>. Do you have an innovative artist in your family? We accept designs from attendee's family members too! It would be wonderful to include as many people as we can!</p>
            <p className='tab-paragraph'>Are you still interested?  If so, please send your sticker design to <a href='mailto:stickers@kernelcon.org' className='text-highlight' rel='noopener noreferrer'>stickers@kernelcon.org</a>.  We will pick twelve awesome designs for this year's stickers and you will each get a shoutout and a paragraph in the conference book to describe your design.</p>
            <p className='fine-notes'>Note: Please keep your design to a high resolution (> 300dpi) file.  Formats *.(png | pdf | ai | eps | psd) are all acceptable.</p>
            <p className='tab-paragraph'>Looking for inspiration? Look no further! Here are the twelve designs from last year.</p>
            <img src={Stickers}
              width="100"
              className='stickers'
              alt='stickers' />
          </TabPanel>
        </span>
      </Tabs>
    );
  }


  render() {
    return (
      <div className='open-calls'>
        <h3>Open Calls</h3>
        <MediaQuery minDeviceWidth={761}>
          {this.getTabs(true)}
        </MediaQuery>
        <MediaQuery maxDeviceWidth={760}>
          {this.getTabs(false)}
        </MediaQuery>
      </div>
    );
  }
}
