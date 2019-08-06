import React, { Component } from 'react';
import './Conference.scss';

export default class Conference extends Component {
  static displayName = 'Conference';

  render() {
    return (
      <h1 className='conference'>
        Conference
      </h1>
    );
  }
}
