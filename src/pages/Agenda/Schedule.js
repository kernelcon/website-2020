import React, { Component } from 'react';
import './Schedule.scss';

class Schedule extends Component {
  static displayName = 'Schedule';

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

  getDailySchedule() {
  	const sched = this.state.index < 2 ? 'All Day Training' : 'Conference All Day';
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
    return (
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
    );
  }
}

export default Schedule;

