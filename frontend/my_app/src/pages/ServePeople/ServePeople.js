import React, { Component } from 'react';
import ServePeopleBody from './servePeopleComponent/ServePeopleBody';
import ServePeopleNav from './servePeopleComponent/ServePeopleNav';


export default class ServePeople extends Component {
  render() {
    return <div>
        <ServePeopleNav/>
        <ServePeopleBody/>
        
    </div>;
  }
}
