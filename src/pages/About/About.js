import React, { Component } from 'react';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import MediaQuery from 'react-responsive';
import FAQ from './FAQ';
import Organizers from './Organizers';
import './About.scss';

import Kernelcon from '../../static/images/logos/kernelcon_black.png';
import GrrCon from '../../static/images/other-cons/grrcon.png';
import ThotCon from '../../static/images/other-cons/thotcon.png';
import DerbyCon from '../../static/images/other-cons/derby.png';
import Cyphercon from '../../static/images/other-cons/cyphercon.png';
import wwhackinfest from '../../static/images/other-cons/wwhackingfest.png';
import texas_cyber from '../../static/images/other-cons/texas_cyber.png';


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
          <Tab tabFor="reciprocity">Reciprocity</Tab>
          <Tab tabFor="organizers">Organizers</Tab>
          <Tab tabFor="contact">Contact</Tab>
          <Tab tabFor="faq">FAQ</Tab>
          <Tab tabFor="archive">Archive</Tab>
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
          <TabPanel tabId="reciprocity">
            <div className='reciprocity'>
              <div className='wording'>
                <div className='tab-title'>Stronger Together</div>
                <p className='tab-paragraph'>Some hacker conferences (or "cons") have developed a tradition of awarding a coveted, relatively rare, token to deserving folks.  Typically, the primary recipient of these tokens are the champions of the most difficult competitions conducted at the con.  For instance, the primary CTF contest is often a "Black Badge event."</p>
                <p className='tab-paragraph'>In addition to the accolades, the awarding of these tokens often carry other benefits.  Perhaps the most common is free entry to the conference for life.  </p>
                <p className='tab-paragraph'>Not all conferences are the same, and many bestow other perks with the token.  Some cons take the right to anonymity very seriously, while others require attributed registration for their conference.</p>
                <p className='tab-paragraph'>One common characteristic to most hacker (and security, infosec, etc) cons, is the underpinning natural curiosity found in attendees, but keenly present in those that elect to spend their conference time competing in events.  Often these events are "winner-takes-all" with little or no perks for places other than first.</p>
                <p className='tab-paragraph'>Another very common characteristic is the sense of community.  Each con develops its own sense of community, but there is also a sense of togetherness that spans cons, not owned or governed by any one con, but embodied by all.</p>
                <p className='tab-paragraph'>Merging these components is long past due.  Starting today, with the end of DerbyCon, several peers in the community will begin honoring not only DerbyCon's black badge holders with free registration at their own conferences, but also each others.  Our hope is that this black badge reciprocity brings us even closer together as a community while also strengthening the ingrained traditions of curiosity and competition.</p>
                <p className='tab-paragraph'>The specifics of how each conference will handle things like registration complexities are actively being worked out, but many have confidence that the problem is tractable.  Accordingly, several are already pledging broad support, and each venue will ultimately be individually communicating details pertinent to registration.</p>
                <p className='tab-paragraph'>#strongertogether</p>
                <p className='tab-paragraph'>#hackercommunity</p>
              </div>
              <div className='logo-space'>
                <a href='http://twitter.com/_kernelcon_'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <img src={Kernelcon}
                    alt='kernelcon-logo'
                    className='con-logo-flip' />
                </a>
                <a href='http://twitter.com/grrcon'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <img src={GrrCon}
                    alt='grrcon-logo' />
                </a>
                <a href='http://twitter.com/DerbyCon'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <img src={DerbyCon}
                  className='con-logo-flip'
                    alt='derbycon-logo' />
                </a>
                <a href='http://twitter.com/thotcon'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <img src={ThotCon}
                  className='con-logo-flip'
                    alt='thotcon-logo'/>
                </a>
                <a href='http://twitter.com/cyphercon'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <img src={Cyphercon}
                  className='con-logo-flip-flip'
                    alt='cyphercon-logo'/>
                </a>
                <a href='http://twitter.com/wwhackinfest'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <img src={wwhackinfest} 
                    alt='wwhf-logo'/>
                </a>
                <a href='http://twitter.com/texas_cyber'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <img src={texas_cyber} 
                    alt='texas_cyber-logo'/>			
                </a>
              </div>
            </div>
          </TabPanel>
          <TabPanel tabId="organizers">
            <Organizers />
          </TabPanel>
          <TabPanel tabId="contact">
            <div className='text-area'>
              <div className='tab-title'>Stay in Touch</div>
              <div className='tab-paragraph'>We've got the social!  Follow us for updates and announcements before, during, and after the con!  Or, if you need to contact us directly send us an email.</div>
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
                <a href='https://www.facebook.com/groups/1821424957949120/'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <svg className='in-touch-icons'
                    aria-labelledby='facebook-icon'
                    role='img'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'>
                    <title id='facebook-icon'>Facebook icon</title>
                    <path d='M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0'/>
                  </svg>
                </a>
                <a href='https://www.linkedin.com/groups/8689674/'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <svg className='in-touch-icons'
                    aria-labelledby='linkedin-icon'
                    role='img'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'>
                    <title id='linkedin-icon'>LinkedIn icon</title>
                    <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'/>
                  </svg>
                </a>
                <a href='https://www.instagram.com/_kernelcon_'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <svg className='in-touch-icons'
                    aria-labelledby='instagram-icon'
                    role='img'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'>
                    <title id='instagram-icon'>Instagram icon</title>
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div className='text-area'>
              <div className='tab-title'>Join our Mailing List</div>
              <div className='tab-text'>Join our mailing list to have the most important updates sent right to you.  We won't spam or sell your info.</div>
              <div>
                <div id='mc_embed_signup'>
                  <form action='https://kernelcon.us3.list-manage.com/subscribe/post?u=09ee8b91c15e71e4ea26fcb3a&amp;id=698defb12e' method='post' id='mc-embedded-subscribe-form' name='mc-embedded-subscribe-form' className='validate' target='_blank' noValidate=''>
                    <div id='mc_embed_signup_scroll'>
                      <div className='mc-field-group'>
  	                    <input type='email' name='EMAIL' className='required email' id='mce-EMAIL' />
                      </div>
                      <div id='mce-responses' className='clear'>
                        <div className='response' id='mce-error-response'></div>
                        <div className='response' id='mce-success-response'></div>
                      </div>
                      <div aria-hidden='true' className='clear'>
                        <input type='text' name='b_09ee8b91c15e71e4ea26fcb3a_698defb12e' tabIndex='-1'/>
                      </div>
                      <div>
                        <input type='submit' value='Subscribe' name='subscribe' id='mc-embedded-subscribe' className='button' />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel tabId="faq">
            <div className='tab-title'>FAQ</div>
            <FAQ />
          </TabPanel>
          <TabPanel tabId="archive">
            <div className='tab-title'>Archive</div>
            <p className='tab-paragraph'>Feel free to check out our previous con material, we are an open book!</p>
            <a className='tab-title'
              href="http://2019.kernelcon.org" 
              rel='noopener noreferrer'
              target='_blank'>
              Kernelcon 2019: Origin Story
            </a>
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
