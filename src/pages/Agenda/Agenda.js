import React, { Component } from 'react';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import MediaQuery from 'react-responsive';

import TalksSchedule from './TalksSchedule';
import ConSchedule from './ConSchedule';
import TrainingSubmissions from './TrainingSubmission';
import Workshops from './Workshops';

import './Agenda.scss';
import strand from '../../static/images/strand.jpg';
import sophia from '../../static/images/sophia.jpg';
import ctf from '../../static/images/logos/ctf_logo.png';
import toool from '../../static/images/logos/toool.png';
import hhv from '../../static/images/logos/hhv.png';
import wifi from '../../static/images/logos/wifi.png';
import mhv from '../../static/images/sponsors/MHH.png';
import mhvlight from '../../static/images/sponsors/MHH-white.png';
import otvlight from '../../static/images/logos/NARI-white.png';
import otvblack from '../../static/images/logos/NARI-black.png';
import bnb from '../../static/images/logos/BNB.png';
import resume from '../../static/images/logos/resume.svg'
import hiringlooking from '../../static/images/logos/hiringlooking.png';

export default class Agenda extends Component {
  static displayName = 'Agenda';

  constructor(props) {
    super(props);
    this.state = {
      defaultTab: 'schedule',
      goToClass: ''
    }
  }

  componentWillMount() {
    const trainingClasses = ['aai', 'atomicpurple', 'bhgo', 'csanalysis', 'elk', 'webhacking', 'ghidra', 'k8s', 'linfn6', 'netanalysis', 'binaryninja'];
    const workshops = ['iotlights', 'iotplugs', 'lightexfil', 'rtlsdr', 'sensing'];
    let defaultTab = window.location.href.split('#')[1];
    const goToClass = defaultTab;
    let className = '';

    if (trainingClasses.includes(goToClass)) {
      defaultTab = 'training';
      className = goToClass;
    } else if (workshops.includes(goToClass)) {
      defaultTab = 'workshops';
      className = goToClass;
    }

    this.setState({
      defaultTab: defaultTab,
      goToClass: className
    });
  }

  componentDidMount() {
    console.log('this.state', this.state);
    this.setState({...this.state});
    const goToClass = this.state.goToClass;

    if (goToClass !== '') {
      const yOffset = -100;
      const element = document.getElementsByName(goToClass)[0];
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({top: y, behavior: 'smooth'});
    }
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
          <Tab tabFor="keynotes">Keynotes</Tab>
          <Tab tabFor="training">Training</Tab>
          <Tab tabFor="workshops">Workshops</Tab>
          <Tab tabFor="villages">Villages</Tab>
          <Tab tabFor="competitions">Competitions</Tab>
          <Tab tabFor="careers">Careers</Tab>
        </TabList>
        <TabPanel tabId="schedule">
          <div className='text-area'>
          	<TalksSchedule />
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
            <div className='keynote-section'>
              <div className='keynote-left'>
                <h4 className='keynote-name'>Sophia d'Antoine</h4>
                <div className='keynote-subtitle'>
                  <div className='keynote-company'>
                    <a href='https://www.sophia.re' target="_blank" rel="noopener noreferrer">
                      Hacker in Residence at NYU
                    </a>
                  </div>
                  <div className='keynote-div'>|</div>
                  <div className='keynote-handle'>
                    <a href='https://twitter.com/Calaquendi44' target="_blank" rel="noopener noreferrer">
                      @Calaquendi44
                    </a>
                  </div>
                </div>

                <div className='keynote-bio'>
                  <p className='tab-paragraph'>Sophia is the founder of Margin Research, based in New York City, and the Hacker in Residence at NYU. Previously she has served at the NSA as well as a commercial security company. She is an alumnus of RPI where she taught Modern Binary Exploitation and helped run RPISEC, the university CTF team.</p> 
                  <p className='tab-paragraph'>Sophia has spoken at over a dozen conferences worldwide on topics ranging from automated exploitation to information operations. Her current work focuses on finding novel solutions to unique security problems, software vulnerabilities, and information operations.</p>
                  <p className='tab-paragraph'>She has co-authored policy papers on topics in offensive cyber including an <a href='https://www.lawfareblog.com/risks-huawei-risk-mitigation' className='text-highlight' target="_blank" rel="noopener noreferrer">Executive Order and a Lawfare article</a> on the risks associated with Huawei 5G. <a className='text-highlight' href='https://www.sophia.re/#pcs' target="_blank" rel="noopener noreferrer">A mostly complete listing of conference talks and publications.</a></p>
                </div>

                <div className='keynote-talk'>
                  <div className='keynote-topic'>In Search of Lost Bytes: Hardware Implants and the Trouble with Supply Chains</div>
                  <div className='keynote-abstract'>
                    <p className='tab-paragraph'>Digital markets have quickly grown to international proportions, complexities in materials, development, and distribution have developed accordingly, resulting in market efficiency and, often overlooked, incalculable risks.</p>
                    <p className='tab-paragraph'>There is a fine line between acceptable and irreconcilable risk, while some risks are mitigatable, others are not, and ignoring the facts has disproportionate consequences. This presentation will explore modern supply chain security risks through a technical deep dive of 5G infrastructure and the political battles surrounding it.</p>
                    <p className='tab-paragraph'>However, a wider acknowledgment of the supply chain problem doesn’t make it go away. We need to understand the inherent hardware vulnerabilities exposed. Currently, confidence in hardware security relies too much implicit trust — overlooking serious threats. Assurance in this area is hard won, manual, and costly.</p>
                    <p className='tab-paragraph'>To highlight this, several hardware implant techniques will be discussed, showcasing various attack methods as well as the point at which they are most likely to be exploited in a standard supply chain.</p>
                  </div>
                </div>


              </div>
              <div className='keynote-right'>
                <img src={sophia}
                  alt="Sophia d'Antoine"
                  className='keynote-image'/>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel tabId="training" className="training">
          <div className='text-area'>
            <h3 className='title'>Training</h3>
            <div className='training-call-out'><b className='note'>Note:</b><em>Conference admission included with every training class!  If you've already registered and want to add a training class, please contact registration@kernelcon.org.</em></div>
            <TrainingSubmissions />
          </div>
        </TabPanel>
        <TabPanel tabId="workshops" className="training">
          <div className='text-area'>
            <h3 className='title'>Workshops</h3>
            <a class="sold_out" href="https://abc.com/">Sold out</a>
            <div className='training-call-out'><b className='note'>Note:</b><em>Workshops can be purchased as an add-on when registering.  If you've already registered and want to add a workshop, please contact registration@kernelcon.org.  Hands-on workshops occur multiple times during the conference, choose the time that best fits your schedule.</em></div>
            <Workshops />
          </div>
        </TabPanel>

        <TabPanel tabId="villages">
          <div className='text-area'>
            <h3 className='title'>Villages</h3>
            
            <div className='competition-area'>
              <div className='competition-section'>
                <div className='competition-name-logo'>
                  <div className='competition-name'>Hardware Hacking</div>
                  <div className='competition-logo'>
                    <img src={hhv} width="150" alt='hhv' className='spons-white-img'/>
                  </div>
                </div>
                <div className='competition-description'>
                  Hardware hackers and novices alike, come learn the secrets of the Kernelcon badge and more at the Hardware Hacking Village. Never soldered? Now’s your chance to play with molten metal! Our experts will help teach you how to add the blinky-blink. More experienced? Chat with the people who created the badge, trade SAOs or bring your own electronics project to show off. We will have small project kits and tools available for everyone to practice their soldering skills. Make something you can call your own, and don’t miss the brightest village at the con - the Hardware Hacking Village.
                </div>
              </div>
            </div>

            <div className='competition-area'>
              <div className='competition-section'>
                <div className='competition-name-logo'>
                  <div className='competition-name'>Mental Health and Wellness</div>
                  <div className='competition-logo'>
                    <img src={mhv} className='dark-pic' width="150" alt='mhv'/>
                    <img src={mhvlight} className='light-pic' width="150" alt='mhv'/>
                  </div>
                </div>
                <div className='competition-description'>
                  Instead of a traditional “Chillout village”, Kernelcon has partnered with Mental Health Hackers. The Mental Health and Wellness Village offers a common place to allow like-minded individuals to share and grow as a community, to better our mental health and the health of those around us. Check out the village for fidget tables, crafts, adult coloring books, free chair massages and more! Visit <a href='https://www.mentalhealthhackers.org/' className='text-highlight' target="_blank" rel="noopener noreferrer">https://www.mentalhealthhackers.org/</a> for more information.
                </div>
              </div>
            </div>

            <div className='competition-area'>
              <div className='competition-section'>
                <div className='competition-name-logo'>
                  <div className='competition-name'>Operational Technology</div>
                  <div className='competition-logo'>
                    <img src={otvblack} className='otv-black' width="150" alt='otv'/>
                    <img src={otvlight} className='otv-light' width="150" alt='otv'/>
                  </div>
                </div>
                <div className='competition-description'>
                  Almost every enterprise has an IT network - but have you ever seen an OT network? Visit our operational technology (OT) village complete with testbed exercises on OT components. Two full-size building control system testbeds will be on display with demonstrations given throughout the day. Curious about the traffic? OT PCAP exercises are available for the network investigator in you. 
                </div>
              </div>
            </div>

            <div className='competition-area'>
              <div className='competition-section'>
                <div className='competition-name-logo'>
                  <div className='competition-name'>TOOOL Lockpicking</div>
                  <div className='competition-logo'>
                    <img src={toool} width="150" alt='toool'/>
                  </div>
                </div>
                <div className='competition-description'>
                  Tired of staring at a monitor trying to hack your way through a computer...come try your hand [literally] at hacking hardware! The Open Organisation Of Lockpickers [TOOOL] is set up and ready to give you a new kind of challenge. Gaining access has a different meaning here. TOOOL uses their knowledge to guide you through different types of locks, their vulnerabilities, and how to exploit them. Scrape pin tumblers instead of data!
                </div>
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



              <div className='competition-section'>
                <div className='competition-name-logo'>
                  <div className='competition-name'>Backdoors & Breaches</div>
                  <div className='competition-logo'>
                    <img src={bnb} alt='Backdoors & Breaches' />
                  </div>
                  <a className='update-button'
                    href="https://docs.google.com/forms/d/e/1FAIpQLScQykbvNzuoQXWFBWHEbCUm7ZEK39pF3gHKaYVCJW7CPphd9Q/viewform?usp=sf_link"
                    rel='noopener noreferrer'
                    target='_blank'>
                    Sign Up for Updates
                  </a>
                </div>
                <div className='competition-description'>
                  Backdoors & Breaches, and Incident Response card game from Black Hills Information Security & Active Countermeasures has been spreading across the hacking community, and Kernelcon is happy to host one of the first Competitive Backdoors & Breaches events!  Stop by on Friday to learn how to play the competitive version of Backdoors & Breaches, and then sign up for the tournament on Saturday.  
                  <p style={{marginTop: '18px'}}>For more information on Backdoors & Breaches you can visit <a rel='noopener noreferrer' href='https://www.backdoorsandbreaches.com' className='text-highlight' target='_blank'>backdoorsandbreaches.com</a>, but to learn how to play competitively before Kernelcon you will have to watch this webcast with Kernelcon keynote speaker John Strand - <a rel='noopener noreferrer' href='https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=2ahUKEwjfwdX2wYzoAhVQma0KHXZEBx8QwqsBMAB6BAgJEAQ&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DDriVsih8Hsc&usg=AOvVaw24wY2lCPcMGuAZ1jZDj2YN' target='_blank' className='text-highlight'>Introducing Competitive Backdoors & Breaches!</a></p>
                </div>
              </div>


            </div>
          </div>
        </TabPanel>


        <TabPanel tabId="careers">
          <div className='text-area'>
            <h3 className='title'>Careers</h3>            
            <div className='competition-area'>
              <div className='competition-section'>
                <div className='competition-name-logo'>
                  <div className='competition-name'>Resume Review</div>
                  <div className='competition-logo'>
                    <img src={resume} alt='Resume Review'/>
                  </div>
                </div>
                <div className='competition-description'>
                  Did you know your should update your resume every six months, even if you’re not looking for a new job?  Have a recruiting expert take a look at your resume and assist with advice on making it the best it can be.
                  <p style={{marginTop: '18px'}}>Sam Harvey, Warren Fish and Sydney Hardin of TEKsystems are volunteering on Friday, March 27th at the Kernelcon Resume Review table to provide professional resume review assistance. Attendees are welcome to walk up to the table at any point throughout the day and should expect to spend 15-20 minutes discussing resume updates. A printer will be located at the table for all attendees to print and then partner with the available team member on resume recommendations.</p>
                </div>
              </div>

              <div className='competition-section'>
                <div className='competition-name-logo'>
                  <div className='competition-name'>Hiring or Looking?</div>
                  <div className='competition-logo'>
                    <img src={hiringlooking} alt='Hiring Or Looking?' />
                  </div>
                </div>
                <div className='competition-description'>
                  Pick up a Hiring or Looking bracelet at the Kernelcon Resume Review table and wear it around the con to spark a conversation.  Who knows, you might just find your dream job or your next superstar employee right at Kernelcon! 
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
