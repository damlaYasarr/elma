import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Infofooter from './Infofooter';
import './style.css'
export default class InfoHow extends Component {
  render() {
    return <div> 
    <div className='info-nav-father'>
        
    <div className='info-nav-mother'>
       
        <div >
            <Link className='info-nav-brother'>ELMA</Link>
        </div>
        <div className='info-nav-sister'>
        <div><Link className='info-nav-sister-child'>HAKKIMIZDA</Link></div>
        <div><Link className='info-nav-sister-child'>NASIL ÇALIŞIR</Link></div>
        <div><Link to='/kariyer' className='info-nav-sister-child'>KARİYER</Link></div>
        <div><Link className='info-nav-sister-child'>İLETİŞİM</Link></div>
        <div><Link className='info-nav-sister-child'>BASINDA</Link></div>
        <div><Link className='info-nav-sister-child'>BLOG</Link></div>
        <div><Link className='info-nav-sister-child'>GİRİŞ</Link></div>
        <div><Link className='info-nav-sister-child'>HİZMET VER</Link></div>
        </div>
       
    </div>
    <div className='Info-how-child'> 
          <p className='info-how-child-1'> NASIL ÇALIŞIR</p>
          <p className='info-how-child-2'> ARMUT TÜRKİYE'DE HİZMET SEKTÖRÜNÜN DİNAMİKLERİNİ DEĞİŞTİRİYOR! </p>
            <Link className='info-how-link'><button className='info-how-btn'>
              AÇIK POZİSYONLARI GÖR
              </button></Link>
     </div>
     

  </div>
  <br/>  <br/>  <br/>   <br/>  <br/>
  
      <Infofooter/>
    </div>;   
  }
}
