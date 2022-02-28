import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css'
export default class Infofooter extends Component {
  render() {
    return<div className='info-footer-header'>  
    <div className='info-footer-mother'>

      <div>
        <div >  <Link className='info-footer'> <i class="far fa-apple-alt"></i>Elma </Link> </div>


        <div>
          <Link className='info-footer1'> <i class="fab fa-facebook"></i> </Link>
          <Link className='info-footer1'><i class="fab fa-instagram"></i> </Link>
          <Link className='info-footer1'> <i class="fab fa-twitter-square"></i> </Link>
          <Link className='info-footer1'> <i class="fab fa-pinterest"></i> </Link>
        </div>


      </div>

      <div className='info-footer-mother2'>
        <p>şirket</p>
        <Link className='text2-child'>Hakkımızda </Link>
        <Link className='text2-child'>kariyer </Link>
        <Link className='text2-child'>basında </Link>
        <Link className='text2-child'>blog </Link>


      </div>
      <div className='info-footer-mother3'>
        <p>müşteriler</p>
        <Link className='info-footer-child3'>Nasıl çalışır </Link>
        <Link className='info-footer-child3'>Armut Garantisi </Link>
        <Link className='info-footer-child3'>En yakın firmalar </Link>

      </div>
      <div className='info-footer-mother4'>
        <p>Yardım Merkezi</p>
        <Link className='info-footer-child4'>destek@elma.com </Link>
      </div>

      <div className='info-footer-mother5'>

        <Link className='info-footer-child5'>hizmet ver</Link>
      </div>
      
    </div>
    <div className='info-footer-footer'>
         <p>2011 - 2018 Armut Teknoloji A.Ş. </p>
          <p> 
            <Link className='footerlink1'>Gizililk</Link>|
            <Link className='footerlink1'>Kullanıcı sözleşmesi</Link>
          </p>
      </div>
    
    </div>
  }
}
