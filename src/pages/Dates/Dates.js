import React, { Component } from 'react';
import './Dates.scss';

export default class Dates extends Component {
  static displayName = 'Dates';

  render() {
    return (
      <div className='dates'>
        <div class="wrapper">
          <div class="frame">
            <div class="oval"></div>
            <div class="paper"></div>
            <div class="container-view-master">
              <div class="inner">
                <div class="shadow"></div>
              </div>
              <div class="inner right">
                <div class="shadow"></div>
              </div>
              <div class="bridge"></div>
              <div class="rim"></div>
              <div class="rim right"></div>
            </div>
            <div class='handle'>
              <div class='handle-shadow'></div>
              <div class='handle-stem'></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
