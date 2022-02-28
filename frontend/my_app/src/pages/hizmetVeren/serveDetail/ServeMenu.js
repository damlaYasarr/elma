import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css'
export default class ServeMenu extends Component {
  render() {
    return <div className='serve-menu-mother'>


        <div > <h4 className='serve-header'>PROFİLİM</h4></div>
        <div className='serve-menu'>
            <Link to='/setting/personal-info'>  <button className='serve-menu-items'>Kişisel Bilgiler 
             <i className='icon' class="far fa-user-alt"></i></button></Link>
           
        </div>
        <div className='serve-menu'>
        <Link to='/setting/services'  className='serve-menu-items'>Servis Ayarları
        <i  className='icon'  class="far fa-toolbox"></i>
        </Link>
        

        </div>
        <div  className='serve-menu'>
        <Link to='/setting/balance' className='serve-menu-items'>Bakiye Ödeme
        <i  className='icon'  class="fal fa-money-bill-wave-alt"></i>
        </Link>
        </div>
        <div  className='serve-menu'>
        <button className='serve-menu-items'>Hesap Ayarları
        
        <i  className='icon'  class="far fa-cog"></i>
        
        </button>
        </div>
        <div  className='serve-menu'>
        <button className='serve-menu-items'>Tanıtım Metaryalleri indir
        <i  className='icon'  class="far fa-sparkles"></i>
        </button>
        </div>
        <div  className='serve-menu'>
       <Link to='/support'>  <button className='serve-menu-items'>Yardım ve destek
        <i  className='icon'  class="far fa-question"></i>
        </button></Link>
        </div>
        <div  className='serve-menu'>
        <Link to='/customer'>  <button  className='serve-menu-items'>Müşteri olarak kullan
        <i  className='icon'  class="far fa-repeat-alt"></i>
        
        </button></Link>
        </div>
        <div  className='serve-menu'>
        <button className='serve-menu-items'>çıkış
        <i  className='icon'  class="far fa-sign-out-alt"></i>
        </button>
        </div>
    </div>;
  }
}
