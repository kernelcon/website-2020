import React, { Component } from 'react';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import MediaQuery from 'react-responsive';
import './OpenCalls.scss';

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
          </TabPanel>
          <TabPanel tabId="training">
            <div className='tab-title'>Call for Training Courses</div>
          </TabPanel>
          <TabPanel tabId="competitions">
            <div className='tab-title'>Call for Competitions</div>  
          </TabPanel>
          <TabPanel tabId="stickers">
            <div className='tab-title'>Call for Stickers</div>
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
