import React, { Component, useState } from 'react';
import './style.css'
import { Link } from 'react-router-dom'
import SignInModal from './SignInModal'
export default class SupportNav extends Component {
  state = {
    show: false
  };
  showModal = e => {
    this.setState({
      show: !this.state.show
    });
  };
  render() {

    return (<div >

      <div className='help-nav-mother'>
        <div className='help-nav'>
          <Link className='help-nav-child' to='/'> <i class="far fa-apple-alt"> </i>elma <p className='small-font'>hizmet piş ağzıma düş</p> </Link>
        </div>
        <div>

          <button id='btn-modal'
            class="toggle-button"
            id="centered-toggle-button"
            onClick={e => {
              this.showModal(e);
            }}
            className='help-navx'> oturum aç
            {" "}
          </button>
        </div>
      </div>
      <SignInModal onClose={this.showModal} show={this.state.show} />
    </div>);
  }
}
