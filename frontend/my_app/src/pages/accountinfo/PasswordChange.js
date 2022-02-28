import React, { Component } from 'react';
import './style.css'
export default class PasswordChange extends Component {
  render() {
    return (<div>
      <h4>password işlerimleri</h4>
      <br />
      <div>
        <label className='label-mom' for="password1">mevcut şifre</label>  <br />
        <input className='input-mom' type="password" id="password1" name="fav_language" />
      </div>

      <div>
        <label className='label-mom' for="password2">yeni şifre</label>  <br />
        <input className='input-mom' type="password" id="password2" name="fav_language" />
      </div>

      <div>
        <label className='label-mom' for="password3">yeni şifre tekrar</label>  <br />
        <input className='input-mom' type="text" id="password3" name="fav_language" />
      </div>
      <br />
      <button style={{
        backgroundColor: 'green',
        marginLeft: 40,
        width: 100,
        height: 40,
        color: 'white',
        border: 'none'
      }} >kaydet</button>
    </div>);
  }
}
