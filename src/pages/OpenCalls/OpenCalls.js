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
            <p className='tab-paragraph'>The Kernelcon Trainings offer attendees technical courses on topics from the information security field. These will be hands-on courses that help expand attendees' skill sets and knowledge.</p>
            
            <p className='tab-heading'>Length and Cost</p>
            <p className='tab-paragraph'>The Kernelcon Crew is looking for training proposals that can fit into a full one-day or two-day format. Classes should typically follow a standard daily schedule, with short morning and afternoon breaks, and a one hour break for lunch.</p>
            <p className='tab-paragraph'>All one-day training courses will be offered to attendees at $500 all two-day courses will be offered at $1000.</p>
          
            <p className='tab-heading'>Proposal Due Date</p>
            <p className='tab-paragraph'>Training proposals are due no later than December 1st, 2019. Instructors will be notified of Acceptance/Rejections by the end of the day, December 31st, 2019. See important dates at <a href='/dates' className='text-highlight' rel='noopener noreferrer' target='_blank'>kernelcon.org/dates</a> for official and updated dates.</p>
          

            <p className='tab-heading'>What are we looking for?</p>
            <p className='tab-paragraph'>We are looking for general cybersecurity and hacking training. Typically, this full one or two-day course will include significant hands-on experience. Classes can range from basic entry-level material to highly technical. We know that there is a wide variety of training readily available and Kernelcon prefers to provide highly interactive, immersive, and in general, any teaching technique that doesn't purely lecture. That said, mixing traditional lecture with hands-on components is something that can work well. Don't hesitate to submit your training summary and we can work with anyone.</p>
          
            <p className='tab-heading'>What are some preferred training workshop topics?</p>
            <p className='tab-paragraph'>Anything in the cybersecurity field that could benefit from hands-on experience. Specialized penetration and vulnerability testing, cybersecurity incident response simulation, cutting your teeth on reverse engineering with IDA Pro, and threat hunting 101, are all examples of plausible training. We are not looking for simple vendor pitches disguised as training and our attendees like classes where the student can take away enough from the training to return to home or work and immediately make use of their new skills.</p>
          
            <p className='tab-heading'>What do I need to have ready for the training workshop submission?</p>
            <p className='tab-paragraph'>The workshop does not need to be completely developed at the time of the submission. However, for evaluation, we do need to have very formal workflow and timing of the training you are proposing. (Detailed section below)</p>
            <p className='tab-paragraph'>You should have most of the material ready to go and have a rough idea of how it will be presented. We would also like to encourage multiple instructors <b>if</b> that is the best approach to cover the material.</p> 
          
            <p className='tab-heading'>How do I structure a training submission?</p>
            <p className='tab-paragraph'>Training submissions should contain the following information. Instructors should gather all of the required information and submit it at once.</p>
            <p className='tab-paragraph'>
              <ol className='tab-ordered-list'>
                <li>Title for the training.</li>
                <li><em>For Kernelcon internal use only:</em> Instructor(s) name, email address, phone number (for emergency use only).</li>
                <li><em>For Kernelcon website:</em> Instructor(s) name, twitter handle (if desired), photograph, and biography.</li>
                <li>An indication of the desired length of the training - one or two days.</li>
                <li>Minimum, maximum and desired number of students.</li>
                <li>A description of what the training will cover and what you would like to leave the students with (no more than 4 paragraphs - i.e. an "abstract").</li>
                <li>A short description of the training designed to attract attendees. This will be placed on our Kernelcon website.</li>
                <li>Clearly articulate any prerequisites for the training along with the required reading material. If any standards or guidelines constitute the basis for the training, identify them as such. If content for the training is not original, include an assertion that the instructor has rights or license to use the material.</li>
                <li>Identify any technical or equipment necessary for the training and indicate if students need to bring such equipment to the class or if it is included with the training.</li>
              </ol>
            </p>

            <p className='tab-heading'>How do I submit?</p>
            <p className='tab-paragraph'>Email a single PDF document containing ALL the required items detailed above to <a href='mailto:training@kernelcon.org' className='text-highlight' rel='noopener noreferrer'>training@kernelcon.org</a>. You can expect a confirmation that the submission was RECEIVED (not that it was accepted) in 48 hours. If you do not receive confirmation, please reach out to <a href='mailto:info@kernelcon.org' className='text-highlight' rel='noopener noreferrer'>info@kernelcon.org</a>, <a href='https://twitter.com/_kernelcon_' className='text-highlight' rel='noopener noreferrer' target='_blank'>@_kernelcon_</a>, or any organizing committee member you can find.</p>
          
            <p className='tab-heading'>Trainer Responsibilities</p>
            <p className='tab-note'>This is only for confirmed Trainers.</p>
            <p className='tab-paragraph'>
              <ol className='tab-ordered-list'>
                <li>Provide a completed W-9 form to Kernelcon.</li>
                <li>Notify Kernelcon ASAP if you cannot attend or anything significant changes from the accepted proposal.</li>
                <li>Promote the course as able.</li>
                <li>Provide course materials to Kernelcon no later than March 1st, 2020, for the digital distribution of course workbooks and/or materials.
                  <ul>
                    <li>The instructor will assume full responsibility for the costs associated with printed material.</li>
                  </ul>
                </li>
                <li>Work with Kernelcon crew to ensure classroom attendance is accurate.</li>
                <li>Sign and distribute certificates of completion (a.k.a. "Kernels of Completion"). Physical certificates will be provided to you by the Kernelcon crew and must be signed by the instructor.</li>
                <li>Feedback and/or suggestions regarding course outcome, venue, and hosts.</li>
                <li>Distribute to and collect Kernelcon Feedback surveys from students - these will be provided by and should be returned to the Kernelcon crew.</li>
                <li>Upload the Kernelcon Code of Conduct during training and at all times during Kernelcon.</li>
                <li>Instructor warrants that they own, are licensed to use or have obtained third-party permission for ALL course material, and grants Kernelcon permission to make available to students any material that the instructor requests. The instructor retains any ownership or copyright.</li>
                <li>Instructor warrants that no course material contains unlawful material or anything that violates the rights of any person or entity.</li>
              </ol>
            </p>
          
            <p className='tab-heading'>Kernelcon will provide...</p>
            <p className='tab-paragraph'>
              <ol className='tab-ordered-list'>
                <li>Class advertisement and promotion via website, social media, and other means.</li>
                <li>The venue, including a classroom-style room configuration, projector and screen, and internet access.</li>
                <li>Complimentary admission to Kernelcon for the instructor.</li>
                <li>Kernelcon will host digital media training material in a fashion readily accessible by students if said material is in Kernelcon's possession by March 1st, 2020.</li>
                <li>Attendee registration services.</li>
                <li>Results from attendee feedback surveys.</li>
                <li>Snacks for instructors (and attendees).</li>
                <li>Payment to the instructor on NET60 terms.</li>
              </ol>
            </p>
          
            <p className='tab-heading'>Kernelcon will not provide...</p>
            <p className='tab-paragraph'>
              <ol className='tab-ordered-list'>
                <li>Any travel, lodging, or logistics costs. This includes the hotel, any airfare, all transportation, meals, and parking.</li>
                <li>Material reproduction.</li>
                <li>Any guarantee that a class will not be cancelled. (While we sincerely hope to not cancel any class that has been selected, unforeseen circumstances may require cancellation).</li>
              </ol>
            </p>
          
            <p className='tab-heading'>In Closing</p>
            <p className='tab-paragraph'>We will communication with you throughout this process. If we think more information or clarification is needed, we will reach out to you. When a decision is made, we will promptly let you know if you are accepted or denied.</p>
            <p className='tab-paragraph'>Good luck and we cannot wait to see what you have in store for us!</p> 
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
                <li>Kernel Panic Whose Slide Is It Anyways?</li>
              </ul>
            </div>  
            <p className='tab-paragraph'>Please consider submitting an idea to <a href='mailto:competitions@kernelcon.org' className='text-highlight' rel='noopener noreferrer'>competitions@kernelcon.org</a> if you would like to host a competition for this year's Kernelcon. If your idea is not fully finessed, no worries! We can help your ideas become a reality.</p>
            <p className='tab-paragraph'>Thanks and Good Luck!</p>
          </TabPanel>
          <TabPanel tabId="stickers">
            <div className='tab-title'>Call for Stickers</div>
            <p className='tab-heading'>Can't get enough stickers in your life? Us either.</p>
            <p className='tab-paragraph'>Last year Kernelcon had 12 unique stickers that our most creative individuals (and sometimes their family members) spent hours designing. Attendees received a handful of the same unique stickers so they could trade with others and collect the whole set.  It was one of our most talked about swag items, and a fun way to meet new people and get your sticker on.</p>
            <p className='tab-heading'>This year, we would like our community to be a part of the sticker process!</p>
            <p className='tab-paragraph'>So, even if you don't have a creative bone in your body, we would love to see your design! If your design is just an idea, we will try to help fledgling artists achieve their <span className='text-highlight'>vision</span>. Do you have an innovative artist in your family? We accept designs from attendee's family members too! It would be wonderful to include as many people as we can!</p>
            <p className='tab-paragraph'>Are you still interested?  If so, please send your sticker design to <a href='mailto:stickers@kernelcon.org' className='text-highlight' rel='noopener noreferrer'>stickers@kernelcon.org</a>.  We will pick twelve awesome designs for this year's stickers and you will each get a shoutout and a paragraph in the conference book to describe your design.</p>
            <p className='fine-notes'>Note: Please keep your design to a high resolution (> 300dpi) file.  Formats *.(png | pdf | ai | eps | psd) are all acceptable.</p>
            <p className='tab-paragraph'>Looking for inspiration? Look no further! Here are the twelve designs from last year.</p>
            <img src={Stickers}
              width="100%"
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
