import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css'
export default class SupportFooter extends Component {
  render() {
    return <div className='help-link-footer-mother'>


       <div> <Link className='help-link-footer' to='/'> siteye dön  </Link></div>
    </div>;
  }
}
