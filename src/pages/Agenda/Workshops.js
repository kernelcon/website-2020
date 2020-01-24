import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Agenda.scss';

import workshopsConfig from 'workshopsConfig';

export default class Workshops extends Component {
  static displayName = 'Workshops';

  render() {
    const filteredWorkshops = workshopsConfig.filter(ele => !ele.hidden);

  	const sortedWorkshops = filteredWorkshops.sort((a, b) => {
      return a.title.localeCompare(b.title)
    });

  	const workshops = sortedWorkshops.map((ele, idx) => {
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

      const takeHome = ele.takeHome.map((el, idx) => {
        return (
          <li key={idx}>{el.req}</li>
        );
      });

      const dates = ele.dates.map((el, idx) => {
        return (
          <div key={idx}>{`${el.day} - at ${el.time}`}</div>
        );
      })

  		return(
  			<div className='training-submission' key={idx} name={ele.id}>
  				<a href={`/agenda#${ele.id}`}>
            <div className='training-title'>
    					<span>{ele.title}</span>
    					<span>{`$${ele.cost}`}</span>
    				</div>
          </a>

  				<div className='training-presenter'>
  					<div className='training-heading'>{ele.instructor.length > 1 ? 'Instructors' : 'Instructor'}:</div>
  					<div className='text-highlight'>{instructors}</div>
  				</div>
          <div className='training-format'>
            <div className='training-heading'>Format:</div>
            <div>{`${ele.courseLength} hour workshop`}</div>
          </div>
          <div className='training-format'>
            <div className='training-heading'>Date:</div>
            <div>
              {dates}
            </div>
          </div>
  				<div className='training-desc'>{ele.trainingDescription}</div>
  				<div className='training-prereqs'>
  					<div className='training-heading'>Students Bring:</div>
  					<div><ul>{prereqs}</ul></div>
  				</div>
          <div className='training-equipment'>
            <div className='training-heading'>Workshop provides:</div>
            <div><ul>{equipment}</ul></div>
          </div>
          <div className='training-equipment'>
            <div className='training-heading'>Take Home Items:</div>
            <div><ul>{takeHome}</ul></div>
          </div>
  			</div>
  		);
  	});

    return (
      <div className='training-section'>
      	{workshops}
      </div>
  	);
  }
}
