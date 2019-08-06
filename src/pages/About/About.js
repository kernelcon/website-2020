import React, { Component } from 'react';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import MediaQuery from 'react-responsive';
import FAQ from './FAQ';
import './About.scss';

export default class About extends Component {
  static displayName = 'About';

  constructor(props) {
    super(props);
    this.state = {
      defaultTab: 'kernelcon'
    }
  }

  componentWillMount() {
    const defaultTab = this.props.location.hash ? this.props.location.hash.split('#')[1] : 'kernelcon';
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
        <TabList vertical>
          <Tab tabFor="kernelcon">Kernelcon</Tab>
          <Tab tabFor="code-of-conduct">Code Of Conduct</Tab>
          <Tab tabFor="contact">Contact</Tab>
          <Tab tabFor="faq">FAQ</Tab>
        </TabList>
        <span>
          <TabPanel tabId="kernelcon">
            <div className='tab-title'>About Kernelcon</div>
            <p className='tab-paragraph'>Kernelcon is the result of many motivated information security professionals who recognized the opportunity to create an awesome security conference in Omaha.  The idea for Kernelcon started within the local DEF CON Group, <a className="text-highlight" href="http://dc402.org" rel="noopener noreferrer" target="_blank">DC402</a>, with lots of help from other members of other local security groups such as <a className="text-highlight" href="https://www.nebraskacert.org/" rel="noopener noreferrer" target="_blank">NebraskaCERT</a> and <a className="text-highlight" href="https://www.owasp.org/index.php/Omaha" rel="noopener noreferrer" target="_blank">OWASP</a>.  We are inspired by many other conferences including DEF CON, DerbyCon, ShmooCon, etc., and wanted to bring those same experiences to the Mid-West here in Omaha.</p>
            <p className='tab-paragraph'>Our goal is to make Omaha an annual destination for security professionals around the world that want to have a unique conference experience.</p>
            <p className='tab-paragraph'>We hope you enjoy the conference as much as we did planning it.</p>
          </TabPanel>
          <TabPanel tabId="code-of-conduct">
            <div className='tab-title'>Code Of Conduct</div>
            <div className='code-of-conduct-text'>
              <p className='about-sub-text'>Kernelcon provides a forum for open discussion between participants, where radical viewpoints are welcome and a high degree of skepticism is expected. However, insulting or harassing other participants is unacceptable. We want Kernelcon to be a safe and productive environment for everyone. It's not about what you look like but what's in your mind and how you present yourself that counts at Kernelcon.</p>
              <p className='about-sub-text'>We do not condone harassment against any participant, for any reason. Harassment includes deliberate intimidation and targeting individuals in a manner that makes them feel uncomfortable, unwelcome, or afraid.</p>
              <p className='about-sub-text'>Participants asked to stop any harassing behavior are expected to comply immediately. We reserve the right to respond to harassment in the manner we deem appropriate, including but not limited to expulsion without refund and referral to the relevant authorities.</p>
              <p className='about-sub-text'>This Code of Conduct applies to everyone participating at Kernelcon - from attendees and exhibitors to speakers, press, volunteers, and Kernelcon Crew.</p>
              <p className='about-sub-text'>Anyone can report harassment. If you are being harassed, notice that someone else is being harassed, or have any other concerns, you can contact a Kernelcon Crew member, go to the registration desk, or info booth.</p>
              <p className='about-sub-text'>Conference staff will be happy to help participants contact hotel security, local law enforcement, or otherwise assist those experiencing harassment to feel safe for the duration of Kernelcon.</p>
              <p className='about-sub-text'>Remember: The CON is what you make of it, and as a community we can create a great experience for everyone.</p>
            </div>
          </TabPanel>
          <TabPanel tabId="contact">
            <div className='tab-title'>Stay in Touch</div>
            <div className=''>
              <a href='http://twitter.com/_kernelcon_'
                target='_blank'
                rel='noopener noreferrer'>
                <svg className='in-touch-icons'
                  aria-labelledby='twitter-icon'
                  role='img'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'>
                  <title id='twitter-icon'>Twitter icon</title>
                  <path d='M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z'/>
                </svg>
              </a>
              <a href='mailto:info@kernelcon.org'
                rel='noopener noreferrer'>
                <svg className='in-touch-icons'
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24">
                  <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
                  <title id='email-icon'>Email icon</title>
                </svg>
              </a>
            </div>
          </TabPanel>
          <TabPanel tabId="faq">
            <div className='tab-title'>FAQ</div>
            <FAQ />
          </TabPanel>
        </span>
      </Tabs>
    );
  }

  render() {
    return (
      <div id='main_hero' className=''>
        <div className='container'>
          <div className='venue-section'>
            <h3>About</h3>
              <MediaQuery minDeviceWidth={761}>
                {this.getTabs(true)}
              </MediaQuery>
              <MediaQuery maxDeviceWidth={760}>
                {this.getTabs(false)}
              </MediaQuery>
          </div>
        </div>
      </div>
    );
  }
}