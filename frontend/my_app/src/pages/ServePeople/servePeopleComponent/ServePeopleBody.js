import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import './../style.css'
import {Link} from 'react-router-dom'

export default class ServePeopleBody extends Component {
    render() {
        return (<div className='serve-People-body-mother'>
            

            <Container style={{ width: '60%' }}>
                <p className='serve-people-header1'>En iyi online .. ..bişey</p>
                <Row>
                    <Col xs='9'>
                        <div className='serve-people-container'>
                            <div className='circle_pic'>
                                <img src='https://pngimage.net/wp-content/uploads/2018/06/png-afbeelding-1.png' />

                            </div>
                            <div className='serve-people-container-detail'>
                                <Link className='serve-people-page' to='/profesyonelüye/kişiadı'>
                                     <span className='serve-people-container-detail1'>isim soyisim </span>
                                     </Link><br/>
                                <span> elmaya katılma tarihi </span><br/>
                                <span>adres</span><br/>
                                <span> açıklaması....</span><br/>
                            </div>

                        </div>
                        <div className='serve-people-container'>
                            <div className='circle_pic'>
                                <img src='https://pngimage.net/wp-content/uploads/2018/06/png-afbeelding-1.png' />

                            </div>
                            <div className='serve-people-container-detail'>
                            <Link className='serve-people-page' to='/profesyonelüye/kişiadı'>
                                     <span className='serve-people-container-detail1'>isim soyisim </span>
                                     </Link><br/>
                                <span> elmaya katılma tarihi </span><br/>
                                <span>adres</span><br/>
                                <span> açıklaması....</span><br/>
                            </div>

                        </div>

                    </Col>
                    <Col xs='3'>
                        <div className='serve-people-body-detail-mother'> 
                         <div className='serve-people-body-detail-child1'>
                             <h7 className='online-lesson-area' >popular online özel ders bölgeleri
                
                             </h7>
                              <Link className='online-lesson-area1'>izmir özel ders</Link>
                              <Link className='online-lesson-area1'>muğla özel ders</Link>
                              <Link className='online-lesson-area1'>istanbul özel ders</Link>
                              <Link className='online-lesson-area1'>ankara özel ders</Link>
                         </div>
                        
                        </div>
                        <div className='serve-people-body-detail-mother'> 
                         <div className='serve-people-body-detail-child1'>
                             <h7 className='online-lesson-area' >Fiyatlar
                
                             </h7>
                             <Link to='/fiyatları' className='online-lesson-area1'>izmir özel ders</Link>
                              <Link className='online-lesson-area1'>muğla özel ders</Link>
                              <Link className='online-lesson-area1'>istanbul özel ders</Link>
                              <Link className='online-lesson-area1'>ankara özel ders</Link>
                         </div>
                          
                        </div>
                        <div className='serve-people-body-detail-btn'> 
                            <Link> <button>4 boş ev temizliği teklifi al</button></Link>
                        </div>
                        <div className='serve-people-body-detail-mother'> 
                         <div className='serve-people-body-detail-child2'>
                             <h7 className='online-lesson-area' >Müşteri yorumları </h7>
                              <div className='comment-container'> 
                                     <span>username</span><br/>
                                     <span>hangi işe yorum yaptı, tarih</span>
                                     <br/>
                                   <div className='star-icon'>  
                                     <i class="fas fa-star"></i>
                                     <i class="fas fa-star"></i>
                                     <i class="fas fa-star"></i>
                                     <i class="fas fa-star"></i>
                                     <i class="fas fa-star"></i>
                                  </div>
                                 <p>
                                 İletişime geçer geçmez hızla malzeme listesinin gelmesi ardından iş anlaşılan zamanda başladı. Başlamadan önce ne kadar süreceğine dair tahminini söyleyen Nasiba hanım, gerçekten de o saatte bitirdi. Eve girdiğimizde camlar, mutfak dolapları, süpürgelikler, balkonlar vs her yer tertemizdi. Çok iyi iş çıkarmışlardı. Emeklerine sağlık…
                                 </p>
                              </div>
                              <div className='comment-container'> 
                                     <span>username</span><br/>
                                     <span>hangi işe yorum yaptı, tarih</span>
                                     <br/>
                                   <div className='star-icon'>  
                                     <i class="fas fa-star"></i>
                                     <i class="fas fa-star"></i>
                                     <i class="fas fa-star"></i>
                                     <i class="fas fa-star"></i>
                                     <i class="fas fa-star"></i>
                                  </div>
                                 <p>
                                 İletişime geçer geçmez hızla malzeme listesinin gelmesi ardından iş anlaşılan zamanda başladı. Başlamadan önce ne kadar süreceğine dair tahminini söyleyen Nasiba hanım, gerçekten de o saatte bitirdi. Eve girdiğimizde camlar, mutfak dolapları, süpürgelikler, balkonlar vs her yer tertemizdi. Çok iyi iş çıkarmışlardı. Emeklerine sağlık…
                                 </p>
                              </div>
                              <div className='comment-container'> 
                                     <span>username</span><br/>
                                     <span>hangi işe yorum yaptı, tarih</span>
                                     <br/>
                                   <div className='star-icon'>  
                                     <i class="fas fa-star"></i>
                                     <i class="fas fa-star"></i>
                                     <i class="fas fa-star"></i>
                                     <i class="fas fa-star"></i>
                                     <i class="fas fa-star"></i>
                                  </div>
                                 <p>
                                 İletişime geçer geçmez hızla malzeme listesinin gelmesi ardından iş anlaşılan zamanda başladı. Başlamadan önce ne kadar süreceğine dair tahminini söyleyen Nasiba hanım, gerçekten de o saatte bitirdi. Eve girdiğimizde camlar, mutfak dolapları, süpürgelikler, balkonlar vs her yer tertemizdi. Çok iyi iş çıkarmışlardı. Emeklerine sağlık…
                                 </p>
                              </div>
                         </div>
                          
                        </div>
                        
                     </Col>

                </Row>



            </Container>
            
        </div>);
        
        
        
        
    }
}
