import React, { Component } from 'react';
import './style.css'
import { Button, Input } from 'reactstrap'
import { Link } from 'react-router-dom'
import PropTypes from "prop-types";
export default class SignInModal extends Component {
  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };
  render() {
    if (!this.props.show) {
      return null;
    }
    return <div>

      <div className='modal-content-signin'>

        <div >
          <span  onClick={this.onClose} class="close">&times;</span></div>
        <div className='modal-content-signin-child'>
            <p>sign in to elma</p>
          <Input className='help-input-modal' placeholder='email' type='email'>email</Input> <br></br>
          <Input className='help-input-modal' placeholder='password' type='password'>password</Input> <br></br>
          
            <Link to='/forgotpassword' className='help-link-modal'>forgot my password</Link>
          <button className='help-btn-modal'
            style={{color:'white'}}
          >Sign in</button>
        
        </div>
      </div>

    </div>;
  }
}
SignInModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired
};