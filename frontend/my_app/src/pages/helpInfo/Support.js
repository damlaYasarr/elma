import React, { Component } from 'react';
import './style.css'




import SuppurtMainBody from './SuppurtMainBody';
import SupportNav from './SupportNav';
import SupportFooter from './SupportFooter';
import SupportDetail from './SupportDetail';
import Searchbar from '../../Layouts/searchBar/Searchbar';
import { Route, Switch } from 'react-router-dom';
export default class Support extends Component {
  render() {
    return (<div>


      <SupportNav />

      <SuppurtMainBody />

      <hr style={{ marginTop: '20px' }} />

      <SupportFooter />

    </div>

    );
  }
}
