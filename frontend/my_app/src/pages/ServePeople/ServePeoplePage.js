import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LoginNav from '../accountinfo/Login/LoginNav';
import ServePeopleNav from './servePeopleComponent/ServePeopleNav';

import './style.css'
export default class ServePeoplePage extends Component {
  render() {
    return (<div>

   
      <LoginNav/>
        <div className='wide-appearance'> 
            <div className='bir'>
                <div className='serve-people-page-mother'> 
                   <div className='serve-people-page'>
                        <img src='https://www.egemtemizlik.com/wp-content/uploads/2018/01/buca-temizlik-firmas%C4%B1.jpg' 
                        style={{width:'100%', height:'100%'}}
                        
                        /> 
                       <div className='text1-mother'> 
                       <p  style={{color:'white '}}  className='text1'>username-<br/>mesleği-kaç aydır üye <br/>
                        şehri</p>  </div>
                        
                       
                     </div>    
                   <div > <button className='serve-people-page-btn'>fiyat teklifi al</button> </div>
                  
                </div>  



            </div>
            <div className='iki'>
              <p className='serve-people-desc'> Daha temiz yaşam yaşam alanlarının Daha da hijyenik bir ortama dönüşmesi adına profesyonel ekibimizle hizmetlerini sürdürmektedir buna göre istediğiniz hangi gün olursa olsun anında olduğunuz adrese gelerek temizliği yapmaktayız.</p>
              <div  className='serve-people-photos-mother'>
                <div className='serve-people-photos'>  
                <Link style={{border:'none'}} to='/fotoğraflar/34382743984729'> 
                    <img src='https://i.pinimg.com/736x/f5/52/6c/f5526c6258e355dadff74f74549f2d23.jpg'/>
                </Link>
                </div>
                <div className='serve-people-photos'>  
                    <img src='https://i.pinimg.com/736x/f5/52/6c/f5526c6258e355dadff74f74549f2d23.jpg'/>
                </div>
                <div className='serve-people-photos'>  
                    <img src='https://i.pinimg.com/736x/f5/52/6c/f5526c6258e355dadff74f74549f2d23.jpg'/>
                </div>
                <div className='serve-people-photos'>  
                    <img src='https://i.pinimg.com/736x/f5/52/6c/f5526c6258e355dadff74f74549f2d23.jpg'/>
                </div>
                <div className='serve-people-photos'>  
                    <img src='https://i.pinimg.com/736x/f5/52/6c/f5526c6258e355dadff74f74549f2d23.jpg'/>
                </div>
                <div className='serve-people-photos'>  
                    <img src='https://i.pinimg.com/736x/f5/52/6c/f5526c6258e355dadff74f74549f2d23.jpg'/>
                </div>

              </div>

            </div>

             
        </div>



    </div>);
  }
}
