import React, { Component } from 'react';

import ocConfig from 'ocConfig';
import './About.scss';


class Organizers extends Component {
  static displayName = 'Organizers';

  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {};
  static defaultProps = {};

  getImage(ele) {
    const imageName =  ele.image ? ele.image : 'kernel.png';
    const imgUrl = require(`../../static/images/oc/${imageName}`);

    return imgUrl;
  }

  render() {

    const oc = ocConfig.map((ele, idx) => {
      const people = ele.people.sort((a, b) => {
        return a.name.localeCompare(b.name)
      });

      const display = people.map((el, idx) => {
        const imgUrl = this.getImage(el);
        return (
          <div className='oc-member'
            key={el.name}>
            <div className='oc-member-box'>
              <div className='oc-member-img'>
                <img src={imgUrl} height="70" alt={el.name}/>
              </div>
              <div className='oc-text-section'>
                <div className='oc-name'>{el.name}</div>
                <div className='oc-title'>{el.title}</div>
                {el.twitter && <a className='oc-twitter' href={`https://twitter.com/${el.twitter}`}>{`@${el.twitter}`}</a>}
              </div>
            </div>
          </div>
        );
      });

      return (
        <div>
          <div className='tab-title'>
            {ele.heading}
          </div>
          <div className='oc-list'>
            {display}
          </div>
        </div>
      );
    }); 


    return (
      <div className='organizers'>
        {oc}
      </div>
    );
  }
}

export default Organizers;