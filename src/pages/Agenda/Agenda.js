import React, { Component } from 'react';
import './Agenda.scss';
import strand from '../../static/images/strand.jpg';

export default class Agenda extends Component {
  static displayName = 'Agenda';

  render() {
    return (
      <div className='con-page'>
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
		          		<p>Over the past two years we have see a perceptible shift in security issues.  Traditional architectures like AD and DMZs are falling away and are being replaced with Cloud and IoT.  So, how do we approach this new world?</p>
		          	  <p>In this talk, John will cover some core tools and techniques we use at BHIS every day to attack organizations.  We will also use these tools and techniques to help frame attendees in their approach and mindset to testing these technologies.</p>
		          	</div>
		          </div>
		         </div>
		         <div className='keynote-right'>
		         	<img src={strand}
		         		className='keynote-image'/>
		         </div>
	         </div>
         </div>
      </div>
    );
  }
}
