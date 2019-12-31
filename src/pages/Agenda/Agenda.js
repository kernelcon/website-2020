import React, { Component } from 'react';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import MediaQuery from 'react-responsive';

import Schedule from './Schedule';
import TrainingSubmissions from './TrainingSubmission';

import './Agenda.scss';
import strand from '../../static/images/strand.jpg';

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
