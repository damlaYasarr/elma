import React, { Component } from 'react';
import './home.css'
export default class ServeEditDetail extends Component {
    render() {
        return <div>
              <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}> 
              <div> 
            <div className='servedit1-mother'>
                <p className='serve-edit1'> user name</p>
                <p className='serve-edit2'>0,0
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>

                </p>
            </div>
            <div>
                <p className='serve-edit3'>  <i class="far fa-map-marker"></i>
                    location</p>

            </div>
            <div>
                <p className='serve-edit3'>   <i class="fad fa-suitcase"></i>
                    gerçekleştirilen iş sayısı</p>

            </div>

            <div className='serve-edit4-mother'> 
                <p className='serve-edit4'>Hakkında</p>
                <p className='serve-edit5'> hakkında yazılan bişey</p>
                <div>
                <p className='serve-edit3'>  <i class="fad fa-suitcase"></i>
                    gerçekleştirilen iş sayısı</p>

            </div>

                
            </div>
            <button className='serve-edit6'> profili düzenle </button>
             <div>
             <p className='serve-edit4'> fotoğraflar</p>
              <div className='img-box'>


              </div>
             <button className='serve-edit6'> fotoğrafları düzenle</button>     
             </div>
             <div> 
                 <p className='serve-edit4' >henüz hiç yorum yok</p>
                 <p className='serve-edit5'>bu hizmet veren için henüz hiç bir yorum yapılmadı </p>
             </div>

           
             </div>
             <div className='circle_pic'>
          <img src='https://pngimage.net/wp-content/uploads/2018/06/png-afbeelding-1.png' />

             </div>
                 
            </div>
        </div>;
    }
}
