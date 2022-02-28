import React, { Component } from 'react';
import './style.css'
export default class Searchbar extends Component {
  render() {
    return (


      <div >

        <div className='search-mother'>
          <i class="fas fa-search" aria-hidden="true" style={{ color: 'grey', fontSize: 18, backgroundColor: 'white' }}>
          </i>
          <input style={{outline:'none', border:'none'}} type='text' />
        </div>


      </div>);
  }
}
