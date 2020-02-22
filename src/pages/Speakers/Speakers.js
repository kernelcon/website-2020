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
    // Order Alphabetically
    const speakers = config.sort((a,b) => (a.speaker > b.speaker) ? 1 : ((b.speaker > a.speaker) ? -1 : 0));
    
    console.log(JSON.stringify(speakers))


    // Because of the way I stack two per row, get a new kernel that's not it's neighbor either up or down.
    let lastKernelIndex = 99;
    let secondLastKernelIndex = 100;
    const speakerGroup = speakers.filter((el) => {
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
          speaker={ele.speaker} 
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
      <div id='main_hero' className=''>
        <div className='container'>
          <div className='speaker-section'>
            <h1 className='title-reversed'>Speakers</h1>
            <div className='speakers'>
              {speakers}
            </div>
          </div>
        </div>
      </div>
    );
  }
}