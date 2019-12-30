import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Agenda.scss';

import trainingConfig from 'trainingConfig';

export default class TrainingSubmission extends Component {
  static displayName = 'TrainingSubmission';

  render() {
  	const sortedTraining = trainingConfig.sort((a, b) => {
      return a.title.localeCompare(b.title)
    });

  	const training = sortedTraining.map((ele, idx) => {
  		const instructors = ele.instructor.map((el, idx) => {
  			return (
  				<div className='training-instructor' key={idx}>
            <Link to={{ pathname: '/bio/', state: { name: el.name, bio: el.bio, twitter: el.twitter} }}>
              {el.name}
            </Link>
          </div>
  			);
  		});

  		const prereqs = ele.prereqs.map((el, idx) => {
  			return (
  				<li key={idx}>{el.req}</li>
  			);
  		});

  		const equipment = ele.equipment.map((el, idx) => {
  			return (
  				<li key={idx}>{el.req}</li>
  			);
  		});

  		return(
  			<div className='training-submission' kye={idx}>
  				<div className='training-title'>
  					<span>{ele.title}</span>
  					<span>{ele.courseLength > 1 ? '$1,000' : '$500'}</span>
  				</div>

  				<div className='training-presenter'>
  					<div className='training-heading'>{ele.instructor.length > 1 ? 'Instructors' : 'Instructor'}:</div>
  					<div class='text-highlight'>{instructors}</div>
  				</div>
  				<div className='training-format'>
  					<div className='training-heading'>Format:</div>
  					<div>{ele.courseLength} {ele.courseLength > 1 ? 'days training' : 'day training'}</div>
  				</div>
  				<div className='training-desc'>{ele.trainingDescription}</div>
  				<div className='training-prereqs'>
  					<div className='training-heading'>Prerequisites:</div>
  					<div><ul>{prereqs}</ul></div>
  				</div>
  				<div className='training-equipment'>
  					<div className='training-heading'>Required Equipment:</div>
  					<div><ul>{equipment}</ul></div>
  				</div>
  			</div>
  		);
  	});

    return (
      <div className='training-section'>
      	{training}
      </div>
  	);
  }
}
