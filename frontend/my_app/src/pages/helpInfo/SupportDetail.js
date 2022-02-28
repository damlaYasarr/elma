import React, { Component } from 'react';

import {Link} from 'react-router-dom'
import Searchbar from '../../Layouts/searchBar/Searchbar';
import'./style.css'
export default class SupportDetail extends Component {
  render() {
    return <div>

<div className='help-detail-info-header'>
              <div className='help-detail-info-header-child'> <Link className='link-help-detail' to='/' >Elma</Link>   </div>
              <div> < Searchbar  className='help-detail-info-header-search'/></div>
              </div>
  <h2 className='help-detail-header'>Ev temiziği yada masah hemen rezervasyn talebi için</h2>
 
    <div className='help-detail-info-mother'> 
           
        
           
     <div className='help-detail-info'>

         <Link className='help-detail-info-child'>REZERVASYON</Link>
          <Link className='help-detail-info-child'> nasıl rezervasyon yapabilrim</Link> 
          <hr/> 
          <Link className='help-detail-info-child'>REZERVASYON</Link>
          <Link className='help-detail-info-child'> nasıl rezervasyon yapabilrim</Link> 
          <hr/> 
     </div>



     <div className='help-detail-info'>
         <Link className='help-detail-info-child'>TEMİZLİK</Link>
         <Link className='help-detail-info-child'>nasıl ödeme yaparım</Link>
           <hr/>  
           <Link className='help-detail-info-child'>REZERVASYON</Link>
          <Link className='help-detail-info-child'> nasıl rezervasyon yapabilrim</Link> 
          <hr/> 
     </div>
         </div>

    </div>;
  }
}
