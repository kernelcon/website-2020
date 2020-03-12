import React, { Component } from 'react';
import './Covid.scss';

export default class Covid extends Component {
  static displayName = 'Covid';

  render() {
    return (
			<div className='covid-msg'>
	      <h1 className='covid'>
	        Kernelcon is going virtual in 2020
	      </h1>
	      <p className='tab-paragraph'>We have decided to take Kernelcon 2020 all virtual! </p> 
				<p className='tab-paragraph'>In light of the evolving pandemic and out of an abundance of caution, we are removing all in-person activities for Kernelcon 2020.  The additional risk presented to people from attending our conference is quite low...but it’s also not zero.  Moreover, we understand the pain and general uncertainty our community is encountering.  <b>We hear you.</b>  We don’t want anyone to feel uncomfortable or feel pressured to put themselves or their loved ones at greater risk, and we want everyone to be able to be involved in the conference.</p>
				<p className='tab-paragraph'>We have tons of great content, and are working on getting it to you.  We are evaluating technical options for holding virtual training and talks, expect to ship swag and badges, and we’re working on additional fun ideas to keep everyone involved. Much remains to be determined, but will become more clear in the coming days.  Keep your schedule open, and stay excited for an outstanding virtual Kernelcon experience.</p>
				<p className='tab-paragraph'>Going virtual was not an easy decision, and one that warranted heavy consideration.  We had a vision for the conference, and this wasn’t quite it.  We’ll do what hackers always do, evolve and adapt to the circumstances.  There is certainly an economic impact to those that booked travel, to our venue, and our financial status.   While there are tangible benefits to the in-person conference, those in our community who supported Kernelcon last year will feel right at home.  We aim to make the virtual experience a great one.  For experiences that we can’t take virtual we will use all of our work this year to make them even better next year.</p>
				<p className='tab-paragraph'>Updates will be made to the website, communicated via social media, and sent directly to pre-registered attendees.  Also, our anonymous cash-at-the-door policy and in-person black badge reciprocity programs will not be in effect this year.  The good news is, if you weren’t able to travel to Kernelcon before, registration is still open!</p>
				<p className='tab-paragraph'>We truly hope our Kernelcon community supports us.  We’ve been working all year to bring you a great conference, and we still expect to. We hope to see you all online on as scheduled. March 25-26 for training, and March 27-28 for the con!</p>
				<p className='tab-paragraph'>Thank you for your understanding, patience, and support!</p>
				<p className='tab-paragraph'><b>Tim, Jason, Adam, Aaron, Trent and the entire Kernelcon O.C.</b></p>
      </div>
    );
  }
}
