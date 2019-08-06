import React, { Component } from 'react';
import './Dates.scss';

import config from 'dateConfig';

class Dates extends Component {
  static displayName = 'Dates';

  render() {

    const dates = config.map((ele, idx) => {
      return (
        <div className='date-box'
          key={`${ele}-${idx}`}>
          <span className='dl-title'>{ele.title}</span>
          {ele.description && <div className='dl-description'>{ele.description}</div>}
          <div className='dl-date'>{ele.date}</div>
        </div>
      );
    });

    return (
      <div className=''>
        <div className='container'>
          <div className='venue-section'>
            <h3 className='title'>Important Dates</h3>
            <div className='dates-list'>
              {dates}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dates;







      // <div className='dates'>
      //   <div class="wrapper">
      //     <div class="frame">
      //       <div class="oval"></div>
      //       <div class="paper"></div>
      //       <div class="container-view-master">
      //         <div class="inner">
      //           <div class="shadow"></div>
      //         </div>
      //         <div class="inner right">
      //           <div class="shadow"></div>
      //         </div>
      //         <div class="bridge"></div>
      //         <div class="rim"></div>
      //         <div class="rim right"></div>
      //       </div>
      //       <div class='handle'>
      //         <div class='handle-shadow'></div>
      //         <div class='handle-stem'></div>
      //       </div>
      //     </div>
      //   </div>
      // </div>