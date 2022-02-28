import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './home.css'
export default class ServeService extends Component {
    render() {
        return (<div style={{ padding: '12px' }}>

            <div className='serve-service-setting'>
                <p>Servisler</p>
            </div>
            <div className='dropdown-happening'>
                <div className='serve-service-setting-child'>
                    <p>ingilizce matematik özel ders</p>
                    <i class="far fa-chevron-down"></i>
                </div>
                <div className='btn-family-serve-service'>
                    <div><Link className='btn-serve-service' to='/setting/services/edit-detail'><button>Profili düzenle</button></Link></div>
                    <div><button className='btn-serve-service1'>bu profili sil</button></div>
                </div></div>

            <br></br><br></br><br></br><br></br>

            <div className='addservice-mother'>
                <p>yeni servis ekle</p>
                  <Link className='addservice'> <button> bişey ekledik </button><i class="far fa-plus"></i></Link>
                  <Link className='addservice'> <button> bişey ekledik </button><i class="far fa-plus"></i></Link>
                  <Link className='addservice'> <button> bişey ekledik </button><i class="far fa-plus"></i></Link>
            </div>
            
        </div>);
    }
}
