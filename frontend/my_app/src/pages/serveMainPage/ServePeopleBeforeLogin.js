import React, { Component } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';

import './style.css'

export default class ServePeopleBeforeLogin extends Component {
  render() {
    const images=[
     "https://talent2africa.com/wp-content/uploads/2020/09/Qualit%C3%A9-employ%C3%A9.jpg",
     "https://talent2africa.com/wp-content/uploads/2020/09/Qualit%C3%A9-employ%C3%A9.jpg",
     "https://talent2africa.com/wp-content/uploads/2020/09/Qualit%C3%A9-employ%C3%A9.jpg",
     "https://talent2africa.com/wp-content/uploads/2020/09/Qualit%C3%A9-employ%C3%A9.jpg",
     "https://talent2africa.com/wp-content/uploads/2020/09/Qualit%C3%A9-employ%C3%A9.jpg",
     "https://talent2africa.com/wp-content/uploads/2020/09/Qualit%C3%A9-employ%C3%A9.jpg"
    ];
    const responsive = {
      
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
      }
    }
    return <div>

      <div className='serve-main-page'>
        <div>
          <Link to='/' className='serve-main-page-header'> elma </Link>
        </div>
        <div className='serve-main-page-header-items'>
          <div className='serve-main-page-serve'>
            <p className='serve-main-page-header1'>Daha çok müşteriye ulaş, daha çok kazan</p>
            <p>HER AY 300.000 MÜŞTERİMİZ 1,4 MİLYAR TL DEĞERİNDEKİ PROJELERİ İÇİN HİZMET VEREN ARIYOR</p>
            <input placeholder='hangi hizmeti veriyosun?' />
            <button>ÜCRETSİZ ÜYE OL</button><br />
            <span>zaten hesabın var mı?</span>
            <Link to='/login'><span>giriş yap!</span></Link>
          </div>
        
         </div>
         <div className='serve-people-istatistic'>
           <div >
           <span className='spantext'>5 saniyede</span><br/>
           <span>bir talep</span>
             </div> 
             <div>
           <span className='spantext'>300.000</span><br/>
           <span>Aylık Müşteri</span>
             </div>
             <div>
           <span className='spantext'>1,4Mr TL</span><br/>
           <span>Aylık talep değeri</span>
             </div>
          </div>
      </div>
      <br/>
      
       <div className='image-slider-mother'>
         <p >En iyi hizmet verenlerimizin ne kadar kazandığını gör</p>
        <div className='img-slider-body'> 
        <Carousel responsive={responsive}>
          <div style={{lineHeight:'15px'}}><img src='https://talent2africa.com/wp-content/uploads/2020/09/Qualit%C3%A9-employ%C3%A9.jpg'/>
            <span className='spantext4'>evden eve nakliyat</span><br/>
            <span className='spantext5'>33.333tl</span>
           </div>
         
           <div style={{lineHeight:'15px'}}><img src='https://talent2africa.com/wp-content/uploads/2020/09/Qualit%C3%A9-employ%C3%A9.jpg'/>
            <span className='spantext4'>evden eve nakliyat</span><br/>
            <span className='spantext5'>33.333tl</span>
           </div>
           <div style={{lineHeight:'15px'}}><img src='https://talent2africa.com/wp-content/uploads/2020/09/Qualit%C3%A9-employ%C3%A9.jpg'/>
            <span className='spantext4'>evden eve nakliyat</span><br/>
            <span className='spantext5'>33.333tl</span>
           </div>
           <div style={{lineHeight:'15px'}}><img src='https://talent2africa.com/wp-content/uploads/2020/09/Qualit%C3%A9-employ%C3%A9.jpg'/>
            <span className='spantext4'>evden eve nakliyat</span><br/>
            <span className='spantext5'>33.333tl</span>
           </div>
           <div style={{lineHeight:'15px'}}><img src='https://talent2africa.com/wp-content/uploads/2020/09/Qualit%C3%A9-employ%C3%A9.jpg'/>
            <span className='spantext4'>evden eve nakliyat</span><br/>
            <span className='spantext5'>33.333tl</span>
           </div>
           <div style={{lineHeight:'15px'}}><img src='https://talent2africa.com/wp-content/uploads/2020/09/Qualit%C3%A9-employ%C3%A9.jpg'/>
            <span className='spantext4'>evden eve nakliyat</span><br/>
            <span className='spantext5'>33.333tl</span>
           </div>
        </Carousel>
        </div>
     
       </div>
           <div className='ad-break-client'>
             <p>HEMEN DAHA ÇOK MÜŞTERİ KAZANMAYA BAŞLA</p>
             <span>sadece beş dakikanı ayır</span>
             <button> ÜCRETSİZ ÜYE OL</button>

           </div>

           <div className='serve-main-page-footer'> 
             <div>
              <span style={{fontWeight:'bold'}}> bilgi</span> <br/>
              <Link><span> Yardım</span> <br/></Link>
  
              <Link style={{fontSize:16,color:'white', 
            fontWeight:'bold',
            textDecoration:'none'
            }}>Elma</Link><br/>
                 <span>© 2011 - 2022 Armut Teknoloji AŞ, Tüm Hakları Saklıdır </span> 
              </div>  
              <div>
              <span style={{fontWeight:'bold'}}>BİZE ULAŞMAK İÇİN</span> <br/>
             <Link>  <span> destek@elma.com</span></Link> <br/>
              
              </div> 
                  
           </div>

    </div>;
  }
}
