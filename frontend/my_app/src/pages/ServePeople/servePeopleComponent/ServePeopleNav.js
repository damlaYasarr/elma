import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './../style.css'
export default class ServePeopleNav extends Component {
  render() {
    return (<div>
 
     <div className='serve-people-header-mother'> 
     <div className='header-item1'> <Link style={{border:'none'}} className='header-item1-child' to='/'>Elma</Link> </div>
     <div className='header-item1'><Link  className='header-item2-child' >Hizmet ver</Link> </div>
     </div>
     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img className='img-img' src='https://st3.depositphotos.com/1033308/12687/i/950/depositphotos_126874186-stock-photo-empty-room-interior-design.jpg' />
                <div className='ad-fix'>
                    <p className='ad-fix-header1'>4 BOŞ EV TEMİZLİĞİ FİYATI AL, KARŞILAŞTIR</p>
                    <p className='ad-fix-header2'> 1,707 Boş Ev Temizlik Şirketi hizmet vermeye hazır.</p>
                    <button className='ad-fix-header3'>BAŞLA</button>
                </div>
            </div>

    </div>);
  }
}
