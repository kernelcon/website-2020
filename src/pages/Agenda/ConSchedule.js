import React, { Component } from 'react';
import DonutChart from '../../components/Charts/Donut.js';
import './Schedule.scss';

import config from 'speakersConfig';

class ConSchedule extends Component {
  static displayName = 'ConSchedule';

  constructor(props) {
  	super(props);
  	this.state = {
  		index: 0,
  		activeClasses: [true, false, false, false],
  		dateText: ['Wednesday, March 25th', 'Thursday, March 26th', 'Friday, March 27th', 'Saturday, March 28th']
  	};
  }

  addActiveClass(index) {
  	// this.setState({})
    const activeClasses = this.state.activeClasses.map((ele, idx) => {
    	return idx === index;
    });

    this.setState({index, activeClasses});
  }

  getTalks() {
  	// Order Alphabetically
  	const talksOrdered = config.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0));

  	const talks = talksOrdered.map((ele, idx) => {
  		const percentTechnical = (ele.technical / 5) * 100;

  		const speakers = ele.speaker.map((el, idx) => {
  			const twitterUrl = el.twitter.replace('@', '');

  			return (
  				<div className='single-speaker'
  					key={idx}>
            <div className='speaker-name'>
            	{el.name}
            </div>
            {(el.twitter || el.github || el.linkedin) && <div className='speaker-icon-bar'>
              {el.twitter && <span className='speaker-icons'>
                <a href={`https://twitter.com/${twitterUrl}`}
                  target='_blank'
                  rel='noopener noreferrer'>
                  <svg className='speaker-icons'
                    aria-labelledby='twitter-icon'
                    role='img'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'>
                    <title id='twitter-icon'>Twitter icon</title>
                    <path d='M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z'/>
                  </svg>
                </a>
              </span>}
              {el.linkedin && <span className='speaker-icons'>
                <a href={`https://www.linkedin.com${el.linkedin}`}
                  target='_blank'
                  rel='noopener noreferrer'>
                  <svg className='speaker-icons'
                    aria-labelledby='linkedin-icon'
                    role='img'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'>
                    <title id='linkedin-icon'>LinkedIn icon</title>
                    <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'/>
                  </svg>
                </a>
              </span>}
              {el.github && <span className='speaker-icons'>
                <a href={el.github}
                  target='_blank'
                  rel='noopener noreferrer'>
                  <svg className='speaker-icons'
                    aria-labelledby='github-icon'
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <title>GitHub icon</title>
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                  </svg>
                </a>
              </span>}
            </div>}
          </div>
  			)
  		});


			const speakerLines = (
        <div className='talk-sub-title'>
        	{speakers}

          <div className='length'>{`${ele.length} minutes`}</div>

          {ele.technical && <div className='technical'>
            <DonutChart value={percentTechnical} />
            <span className='tech-label'>% technical</span>
          </div>}
        </div>
			);


  		return (
  			<div id={ele.talk_id}
  				key={idx}
  				className='single-talk'
  			>
          <div className='talk-title'>{ele.title}</div>
          {speakerLines}
          <div className='abstract'>
            {ele.abstract}
          </div>
  			</div>
  		)
  	});

  	return talks;
  }

  getDailySchedule() {
  	const trainingWednesday = (
  		<div>
  			<div>All Day Training</div>
  			<ul className='training-bullets'>
  				<li>Atomic Purple Teaming</li>
  				<li>Advanced Attack Infrastructure</li>
  				<li>Introduction to Ghidra</li>
  				<li>Linux Forensics</li>
  				<li>Reverse Engineering with Binary Ninja</li>
  				<li>Kubernetes: Build, Secure, Attack</li>
  				<li>Network Analysis Workshop</li>
  			</ul>
  		</div>
  	);
  	const trainingThursday = (
  		<div>
  			<div>All Day Training</div>
  			<ul className='training-bullets'>
  				<li>Atomic Purple Teaming</li>
  				<li>Advanced Attack Infrastructure</li>
  				<li>Introduction to Ghidra</li>
  				<li>Linux Forensics</li>
  				<li>Reverse Engineering with Binary Ninja</li>
  				<li>Black Hat Go</li>
  				<li>Hands On Web Application Hacking</li>
  				<li>Control System Analysis and Defense</li>
  			</ul>
  		</div>
  	);
  	const sched = this.state.index === 0 ? trainingWednesday : this.state.index === 1 ? trainingThursday : 'Conference All Day';
  	const desc = this.state.index < 2 ? 'Start your Kernelcon week out right! Training Sessions offered from 8:00am to 5:00pm with a one hour lunch break.' : 'Keynotes start at 9:00am! Be there for some of the best infosec talent to speak in Omaha. Conference sessions run all day in two tracks with multiple workshops, villages, and competitions for attendees to also participate in. Hands-on workshops are also offered throughout the day.';
  	const party = this.state.index === 2 ? 'Join us for cocktails and appetizers at our legendary Kernel Panic party! During the party we will also host Tech Olympics and Who\'s Slide Is It Anyways.' : '';
  	const closing = this.state.index === 3 ? 'Join us for closing ceremonies where we award our Eternal Kernel badges and celebrate the con that was.' : '';
  	return (
  		<div>
				<div className='date-wording'>{sched}</div>
				<div className='date-desc'>{desc}</div>
				{party && <div>
					<div className='date-wording'>Kernel Panic Party</div>
					<div className='date-desc'>{party}</div>
				</div>}
				{closing && <div>
					<div className='date-wording'>Closing Ceremonies</div>
					<div className='date-desc'>{closing}</div>
				</div>}
			</div>
  	);
  }

  render() {
  	const activeClasses = this.state.activeClasses.slice();
  	const talks = this.getTalks();
    return (
    	<div className='agenda'>
				<div className='schedule'>
					<div className='calendar'>
					  <div className='day-block' onClick={() => this.addActiveClass(0)}>
					  	<div className='day-header'>
					  		<div className='day'>Wednesday</div>
					  	</div>
					  	{activeClasses[0] && <div className='day-div'>
					  		<div className='day-box'>
						  		<div className='date-month'>March</div>
						  		<div className='date-num'>25</div>
						  	</div>
					  	</div>}
					  </div>
					  <div className='day-block' onClick={() => this.addActiveClass(1)}>
					  	<div className='day-header'>
					  		<div className='day'>Thursday</div>
					  	</div>
					  	{activeClasses[1] && <div className='day-div'>
					  		<div className='day-box'>
						  		<div className='date-month'>March</div>
						  		<div className='date-num'>26</div>
						  	</div>
					  	</div>}
					  </div>
					  <div className='day-block' onClick={() => this.addActiveClass(2)}>
					  	<div className='day-header'>
					  		<div className='day'>Friday</div>
					  	</div>
					  	{activeClasses[2] && <div className='day-div'>
					  		<div className='day-box'>
						  		<div className='date-month'>March</div>
						  		<div className='date-num'>27</div>
						  	</div>
					  	</div>}
					  </div>
					  <div className='day-block' onClick={() => this.addActiveClass(3)}>
					  	<div className='day-header'>
					  		<div className='day'>Saturday</div>
					  	</div>
					  	{activeClasses[3] && <div className='day-div'>
					  		<div className='day-box'>
						  		<div className='date-month'>March</div>
						  		<div className='date-num'>28</div>
						  	</div>
					  	</div>}
					  </div>
				  </div>
				  <div className='daily-schedule'>
				  	{this.getDailySchedule()}
				  </div>
				</div>
				<div className='talks'>
					<h2>Talks</h2>
					{talks}
				</div>
			</div>
    );
  }
}

export default ConSchedule;

