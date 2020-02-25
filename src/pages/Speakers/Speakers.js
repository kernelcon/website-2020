import React, { Component } from 'react';
import Individuals from './Individuals';
import './Speakers.scss';

import config from 'speakersConfig';

export default class Speakers extends Component {
  static displayName = 'Speakers';

  constructor(props) {
    super(props);
    this.state = {};
  }

  getRandomKernel(lengthOfArray, indexToExclude, secondLastKernelIndex) {
    // This function just grabs a random index that wasn't one of the last two.
    // Obviously, due to math, you need to send in at least an array of length 3.
    let rand = null;

    while (rand === null || rand === indexToExclude || rand === secondLastKernelIndex) {
      rand = Math.round(Math.random() * (lengthOfArray - 1));
    }
    return rand;
  }

  getSpeakers() {
    // Get Speakers
    const speakers = config.map(a => a.speaker).flat();
    
    // Order Alphabetically
    const speakers_ordered = speakers.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
    
    // Because of the way I stack two per row, get a new kernel that's not it's neighbor either up or down.
    let lastKernelIndex = 99;
    let secondLastKernelIndex = 100;
    const speakerGroup = speakers_ordered.filter((el) => {
      if (el.hidden === "true") {
        return false;
      }
      return true;
    }).map((ele, idx) => {
      const randKernel = this.getRandomKernel(17, lastKernelIndex, secondLastKernelIndex);
      secondLastKernelIndex = lastKernelIndex;
      lastKernelIndex = randKernel;

      // If image DNE, assign the random kernel we've generated.
      const img = ele.image ? `speakers/${ele.image}` : `kernels/${randKernel}.png`;

      return (
        <Individuals key={idx}
          speaker_id={ele.speaker_id}
          talk_id={ele.talk_id}
          speaker={ele.name} 
          company={ele.company}
          twitter={ele.twitter}
          image={img}
          bio={ele.bio}
        />
      )
    });

    return speakerGroup;
  }

  render() {
    const speakers = this.getSpeakers();
    return (
      <div className='venue-section speaker-section'>
        <h3 className='title'>Speakers</h3>
        <div className='speakers'>
          {speakers}
        </div>
      </div>
    );
  }
}