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
          <Tab tabFor="workshops">Workshops</Tab>
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
            <p className='tab-paragraph'>Important dates regarding CFP can be found on our <a href='/dates' className='text-highlight'>important dates page</a>, which will always have the most current information.</p>
          
            <div className='tab-title'>About Kernelcon</div>
            <p className='tab-paragraph'>In 2017, local collectives of information security professionals gathered together to start sharing knowledge and experiences here in Omaha. Many beers were had and slides discussed before culminating in a mission to gather knowledge seekers from across the Midwest to propagate their techniques and mastery.</p>
            <p className='tab-paragraph'><b>Enter Kernelcon.</b></p>
            <p className='tab-paragraph'>In 2019, we exceeded our targets and look to carry that momentum into 2020. For 2020, we are starting the festivities with <a href="https://kernelcon.org/open-calls#training" className='text-highlight' rel='noopener noreferrer' target='_blank'>two full days of training</a>.  In the days immediately following training, we welcome both seasoned professionals and novice beginners to network, share their wisdom, and learn from one another during two days of affordable Cornhusker camaraderie. Laughs will be had and popcorn eaten at this intimate and enriching event. Our organizers are driven to provide both a new generation with the experiences that inspired us to love Infosec and bolster our community with a strong network of professionals. We are made stronger together.</p>
          
            <div className='tab-title'>Suggested Topic Areas</div>
            <p className='tab-paragraph'>The theme for Kernelcon 2020, is Vision.  Accordingly, those that wish to tailor a talk to the theme or require a broad topic to start the creative engine toward a new talk, Vision is your starting point.  There are obvious directions that lend to talks in security and hacking topics, hindsight, for instance (or foresight), but do not let these directions limit your interpretation!</p>
            <p className='tab-paragraph'>Kernelcon submissions should focus on topics that are of interest to the security and hacking communities. The list below is meant as a guideline, not an exhaustive list.</p>

            <ul className='tab-bullets'>
              <li>Hacking of Software/Hardware</li>
              <li>Incident Response</li>
              <li>Operational Security</li>
              <li>Computing Hardware Security, Repurposing, Designing/Building</li>
              <li>Technology Policy and Politics (yep, we're willing to go there)</li>
              <li>Security Education</li>
              <li>Security and Hacking Capture-the-Flag Topics</li>
              <li>Security Automation</li>
              <li>Digital Forensics</li>
              <li>Bug Bounties</li>
              <li>Secure Development Practices / DevSecOps / SecDevOps</li>
              <li>Security Aspects of Cloud Computing</li>
              <li>Practical Security</li>
              <li>Machine Learning (securing, and using for security)</li>
              <li>War Stories, Histories, Scientific Advancement, Trade, etc. of Kernels</li>
              <li>Security Metrics (Inform Risk Analysis, Identify Priorities, Measure Progress, etc)</li>
              <li>Risk Management</li>
              <li>BeyondCorp / Zerotrust models in practice</li>
              <li>Privacy and Anonymity</li>
              <li>Identity & Access Management</li>
              <li>Focused Security Research (Visualization, IoT, Vehicles, Toys, Web apps, etc)</li>
            </ul>

            <p className='tab-paragraph'>Bonus points for incorporated 3D anaglyph (red/cyan) material in your presentation!  Contact us for more information.</p>
            <p className='tab-paragraph'>If your talk doesn't fit precisely into one of these areas, the theme, and/or you don’t have 3D material, but you still think is a good fit, please submit it for consideration! The suggested topics are meant only to provide some direction, not as a strict pedantic gate through which all submissions must pass.</p>

            <div className='tab-title'>Conference Format</div>
            <p className='tab-paragraph'>Kernelcon 2020 will have two, concurrent main tracks, and talks should fit into a 60 (FULL) or 20 (SHORT) minute timeslot (meaning a 15 or 50 minute presentation is expected). As one might expect, presenters will be positioned at the front of a hotel conference area, and will present using typical conference equipment.</p>

            <div className='tab-title'>Speaker Benefits</div>
            <p className='tab-paragraph'>Speakers receive complimentary admission to Kernelcon and will be recognized as a speaker via a special “SPEAKER” badge. Speakers also have the option of attending an exclusive speaker party preceding the conference. Details will be sent to accepted speakers following acceptance notification.</p>
            <p className='tab-paragraph'>For each FULL talk, the speakers may additionally select one of: </p>
            <ul className='tab-bullets'>
              <li>2 additional “HACKER” registrations</li>
              <li>$200 donation to the EFF or Hackers for Charity</li>
              <li>$200 honorarium</li>
              <li>Please reinvest into making Kernelcon even better next year</li>
            </ul>
            <p className='tab-paragraph'>We may also tentatively accept backup/alternate talks which will not be guaranteed a speaking slot, but will receive admission in order to be ready to present in the event they are needed.</p>

            <div className='tab-title'>Review Process</div>
            <p className='tab-paragraph'>Our review process is not as formal as some academic conferences. However, submissions are considered confidential and are not shared outside of the Technical Program Committee. Every submission is reviewed by multiple committee members and weighed for inclusion in the program. TPC Committee members are selected for the ability to provide valuable reviews, handle sensitive information, and remain fair, impartial, and consistent in the review process. Ultimately the the committee informs the TPC Chair(s) who set the technical portion of the program that is married with the rest of Kernelcon agenda.</p>
          
            <div className='tab-title'>How To Submit</div>
            <p className='tab-paragraph'>Speakers should submit directly (e.g. no PR representatives are permitted).</p>
            <p className='tab-paragraph'>Your submission email should include:</p>

            <ul className='tab-bullets'>
              <li>Speaker name(s)</li>
              <li>Contact information (email, twitter, phone, etc - if we need to reach you and we can't, that's on you)*</li>
              <li>Speaker promotion information (twitter, facebook, etc) - if we want to promote your talk specifically, and you want us to tag you</li>
              <li>Presentation Title*</li>
              <li>Abstract*</li>
              <li>A note if you'd like your submission to be presented to the program committee anonymously for review</li>
              <li>The speaker "Grant of Copyright Use" and "Speaker Terms" copied and completed from below</li>
              <li>Optional supplementary files</li>
              <li>Optional scheduling preferences</li>
              <li>Headshot if you have one you'd like to share (to be honest, we aren't sure if we'll use these, but if we need one, and you don't provide it, you will be depicted as a kernel of grain, nut, fruit, or corn)</li>
              <li>At least one attached file in TEXT or PDF format which contains the following information in this order:</li>
                <ul className='tab-bullets'>
                  <li>Title of Presentation **</li>
                  <li>Speaker Name(s), Pseudonym(s), or handle(s) **</li>
                  <li>Timeslot (20 or 60 minutes)</li>
                  <li>Abstract of your presentation (200 words or less) **</li>
                  <li>{`Bio limited to 100 words or less (<=100 words encompassing all speakers) **`}</li>
                  <li>Technical Level of talk: on a 1-none to 5-all the way down the rabbit hole **</li>
                  <li>Detailed Description: the most important part of your submission. You need to provide detailed information that demonstrates your knowledge of your topic and how you will present it to the audience. Do not rely on your abstract to be enough for the reviewers. It isn’t. If your talk will include demos, new exploits, tool releases or audience interactions, please include details.</li>
                  <li>Why do you feel this submission is a good fit for Kernelcon?</li>
                  <li>List of other venues or where this work has been presented, published or derived from</li>
                  <li>Are you a potential first time conference speaker?</li>
                  <li>List of facilities requested beyond what is already provided (power, projector, podium, sound projection, and internet connectivity).</li>
                  <li>Press can contact you: yes or no</li>
                  <li>Video recording preference***: (1 to 4; 1-PLEASE record me!, 4-I do not wish for this talk to be recorded under any circumstances)</li>
                  <li>For FULL talks, honorarium choice: Donate (EFF or HFC), Registrations (2), Cash, Reinvest</li>
                </ul>
            </ul>
            <p className='tab-paragraph'>*These should be copied directly from your attached file.</p>
            <p className='tab-paragraph'>**As intended for the conference program and website.</p>
            <p className='tab-paragraph'>***We are collecting this information to gauge interest in recordings from a speaker perspective - those that don’t want to be recorded will never be recorded by Kernelcon.</p>


            <p className='tab-paragraph'>Incomplete or misformatted submissions greatly reduce the likelihood of your talk being accepted.</p>
            <p className='tab-paragraph'>Novel, new, on-topic talks receive the most preference. Submissions by first-time presenters are not discounted in any way. Conversely, first-timers are whole-heartedly encouraged to submit. Blatant vendor pitches, recycled talks, presentations on well-known topics that are *not* depicted as 101 or intro, are unlikely to be accepted. We expect presentations that are considerate, planned, thought-out, and delivered well. All talks are considered on their merits. Everyone, including sponsors, internet legends, cultural icons, and Dave Kennedy must submit just like all other speakers.</p>
            <p className='tab-paragraph'>A printable checklist for the submission can be found at <a href='https://kernelcon.org/cfp/CFP-2020.pdf' className='text-highlight' rel='noopener noreferrer' target='_blank'>https://kernelcon.org/cfp/CFP-2020.pdf</a></p>
            <p className='tab-paragraph'>Templates are available in <a href='https://kernelcon.org/cfp/CFP-template.txt' className='text-highlight' rel='noopener noreferrer' target='_blank'>plaintext</a>, <a className='text-highlight' rel='noopener noreferrer' target='_blank' href='http://kernelcon.org/cfp/CFP-template.md'>markdown</a>, <a className='text-highlight' rel='noopener noreferrer' target='_blank' href='http://kernelcon.org/cfp/CFP-template.docx'>docx</a>, <a className='text-highlight' rel='noopener noreferrer' target='_blank' href='http://kernelcon.org/cfp/CFP-template.odt'>odt</a>, and <a className='text-highlight' rel='noopener noreferrer' target='_blank' href='http://kernelcon.org/cfp/CFP-template.tex'>LaTeX</a>.</p>
            <p className='tab-paragraph'>A sample submission can be found at <a href='https://kernelcon.org/cfp/CFP-example.txt' className='text-highlight' rel='noopener noreferrer' target='_blank'>https://kernelcon.org/cfp/CFP-example.txt</a></p>
            <p className='tab-paragraph'>Submissions should be sent to <a className='text-highlight' href='mailto:cfp@kernelcon.org'>cfp@kernelcon.org</a>. You should receive an automated confirmation email immediately denoting that the system has received your submission, and a manual confirmation email within 36 hours. If you don't, you should inquire at <a className='text-highlight' href='mailto:cfp@kernelcon.org'>cfp@kernelcon.org</a>.</p>
            <p className='tab-paragraph'>Again, your core submission should be in plain text or PDF. The PDF should contain the required information as text - the content will be extracted from the PDF. Supplementary files such as draft slides, extended outlines, and whitepapers may help your submission and may also be attached to the email.</p>



          

            <div className='tab-title'>Grant of Copyright Use</div>
            <p className='tab-paragraph'>I warrant that the above work has not been previously published elsewhere, or if it has, that I have obtained permission for its publication by Kernelcon and that I will promptly supply Kernelcon with wording for crediting the original publication and copyright owner. If I am selected for presentation, I hereby give Kernelcon permission to duplicate, record, and redistribute this presentation, which includes, but is not limited to, any conference proceedings, conference CD, video, audio, and handouts to the conference attendees for educational, on-line, and all other purposes.</p>
          

            <div className='tab-title'>Terms of Speaking Requirements</div>
            <ol className='tab-bullets'>
              <li>I will submit a completed presentation, a copy of the tool(s) and/or code(s), and a reference to all of the tool(s), law(s), web sites and/or publications referenced at the end of my talk and as described in this CFP submission for publication by Kernelcon.</li>
              <li>I will submit any revisions to the originally submitted Title, Abstract and Biography for the Kernelcon website and printed conference materials by March 4, 2020.</li>
              <li>I will complete my presentation within the time allocated to me - not running over, or excessively under, the time allocation.</li>
              <li>I understand that the Kernelcon venue will provide 1 projector feed, microphone, wired and/or wireless Internet. I understand that I am responsible for providing all other necessary equipment, including laptops and machines, to complete my presentation.</li>
              <li>I understand that I will be responsible for my own hotel and travel expenses.</li>
            </ol>
            <p className='tab-paragraph'>As detailed above, I, <em>(insert primary speaker name)</em>, have read and agree to the Grant of Copyright Use.</p>
            <p className='tab-paragraph'>I, <em>(insert primary speaker name)</em>, have read and agree to the Terms of Speaking Requirements.</p>
          

            <div className='tab-title'></div>
            <p className='tab-paragraph'></p>
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
          <TabPanel tabId="workshops">
            <div className='tab-title'>Call for Hands-on Workshops</div>
            <p className='tab-paragraph'>Kernelcon is once again bringing back our popular hands-on workshops for 2020!  The Kernelcon Workshops are short, focused, small-group classes where students can learn, hack, and play.  These hands-on workshops are intended to give the attendee's a brief view into specific technical topics.</p>
            
            <p className='tab-heading'>Length</p>
            <p className='tab-paragraph'>These workshops will be run during the conference, so there are only 1 and 2 hour slots available.  Instructors will be expected to keep on time for the next workshop to setup.  We will allow for workshops to be taught more than once during the con if instructor is willing and as schedule allows.</p>
          
            <p className='tab-heading'>Cost</p>
            <p className='tab-paragraph'>Materials for the workshops will be baked into the price of the tickets.  We aim to offer these workshops "at-cost", which is to say the materials and cost of the instructor's conference entry.</p>
          
            <p className='tab-heading'>Proposal Due Date</p>
            <p className='tab-paragraph'>Workshop proposals are due no later than December 15th, 2019.  Instructors will be notified of Acceptance/Rejections by the end of the day, December 31st, 2019.  See important dates at <a href='/dates' className='text-highlight' rel='noopener noreferrer' target='_blank'>kernelcon.org/dates</a> for official and updated dates.</p>

            <p className='tab-heading'>What are we looking for?</p>
            <p className='tab-paragraph'>These workshops are intended to be training in any technical area that gives the attendees hands-on experience.  For instance, if you'd like to demonstrate the capabilities of an Arduino mod, we would acquire the materials for the students to follow along with the instructor.  Due to the short timeframe of each course, we expect the scope of the content to be quite focused.  Classes can vary in skill-level, but please list knowledge and skills prerequisites in your submission for any advanced topics.  Please do not hesitate to submit an idea, even if it's not fully fleshed out, and we will try to work with you.</p>
          
            <p className='tab-heading'>What are some preferred hands-on workshop topics?</p>
            <p className='tab-paragraph'>Kernelcon is a hacker conference.  Therefore we are interested in any topic that appeals to hackers.  Whether it is attacking web applications, reversing executables, building home automation devices, reflashing routers, all would apply.  We do not mind pricing in the materials for these workshops if your submission allows for students to take something home with them.</p>
            <p className='tab-paragraph'>The time restriction is important at 1 or 2 hour classes, so we the submissions to be feasible within that timeframe.</p>
          
            <p className='tab-heading'>What is the workshop submission structure?</p>
            <p className='tab-paragraph'>Submissions should contain the following information. Instructors should gather all of the required information and submit it at once.</p>
            <p className='tab-paragraph'>
              <ol className='tab-ordered-list'>
                <li>Title for the workshop.</li>
                <li><em>For Kernelcon internal use only:</em> Instructor(s) name, email address, phone number (for emergency use only).</li>
                <li><em>For Kernelcon website:</em> Instructor(s) name, twitter handle (if desired), photograph, and biography.</li>
                <li>Indication of the desired workshop length: 1 or 2 hours.</li>
                <li>An indication of whether or not the workshop can run multiple times during the conference. (We prefer to give attendees flexibility if possible).</li>
                <li>Minimum, maximum and desired number of students. (Our space maximum is 30 students).</li>
                <li>A description of what the workshop will cover and what you would like to leave the students with (no more than 4 paragraphs - i.e. an "abstract").</li>
                <li>A short description of the workshop designed to attract attendees. This will be placed on our Kernelcon website.</li>
                <li>Clearly articulate any prerequisites for the workshop along with the required reading material. If any standards or guidelines constitute the basis for the workshop, identify them as such. If content for the workshop is not original, include an assertion that the instructor has rights or license to use the material.</li>
                <li>Identify any technical or equipment necessary for the training and indicate if students need to bring such equipment to the class or if it is included with the workshop.</li>
              </ol>
            </p>

            <p className='tab-heading'>How do I submit?</p>
            <p className='tab-paragraph'>Email a single PDF document containing ALL the required items detailed above to <a href='mailto:training@kernelcon.org' className='text-highlight' rel='noopener noreferrer'>training@kernelcon.org</a>. You can expect a confirmation that the submission was RECEIVED (not that it was accepted) in 48 hours. If you do not receive confirmation, please reach out to <a href='mailto:info@kernelcon.org' className='text-highlight' rel='noopener noreferrer'>info@kernelcon.org</a>, <a href='https://twitter.com/_kernelcon_' className='text-highlight' rel='noopener noreferrer' target='_blank'>@_kernelcon_</a>, or any organizing committee member you can find.</p>
          
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
