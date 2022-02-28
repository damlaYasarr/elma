import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './../style.css'
export default class ServePeoplePriceBody extends Component {
    render() {
        return <div className='price-serve'>
            <div className='serve-people-price-body-mother'>
                <span className='span-header'>
                    <Link>elma</Link>
                    -<Link>kategori fiyatı</Link>
                    -<Link>şehir fiyatı</Link>
                </span>
                <div className='price-definition'>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <div className='circle_pic1'>
                                <img src='https://pngimage.net/wp-content/uploads/2018/06/png-afbeelding-1.png' />
                            </div>
                            <div className='price-user-info'>
                                <span>şehir-ilçe</span><br />
                                <span>tarih-kategori</span>
                            </div>
                        </div>
                        <div className='price-info'>
                            <span>500</span><br />
                            <span>500-600</span>
                        </div>
                    </div>


                    <div className='price-question-mother'>
                        <div className='price-question'>
                            <span>kaç oda</span>
                            <span>kaç banyo </span>
                            <span>ev hangi sebepten boş </span>
                        </div>
                        <div className='price-question'>
                            <span>1</span>
                            <span>1</span>
                            <span>ev sıfır </span>
                        </div>
                    </div>
                    <div className='price-explain'>Ev sıfır bir yapıdadır, bu nedenle inşaat pisliği bulunmaktadır. Yoğun bir toz bulunmaktadır. Mutfak dolaplarının iç dış ve üstü; banyo dolaplarının iç dış ve üstü, girişte bulunan kapı arkasındaki dolabın iç dışı ve tuvaletin, banyonun detaylı temizliği; camlar cam içleri ve önlerinin temizliği, fransız balkonun temizliği, korkulukların temizliği kapıların silinmesi gerekmektedir.</div>
                </div>


                <div className='price-definition'>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <div className='circle_pic1'>
                                <img src='https://pngimage.net/wp-content/uploads/2018/06/png-afbeelding-1.png' />
                            </div>
                            <div className='price-user-info'>
                                <span>şehir-ilçe</span><br />
                                <span>tarih-kategori</span>
                            </div>
                        </div>
                        <div className='price-info'>
                            <span>500</span><br />
                            <span>500-600</span>
                        </div>
                    </div>


                    <div className='price-question-mother'>
                        <div className='price-question'>
                            <span>kaç oda</span>
                            <span>kaç banyo </span>
                            <span>ev hangi sebepten boş </span>
                        </div>
                        <div className='price-question'>
                            <span>1</span>
                            <span>1</span>
                            <span>ev sıfır </span>
                        </div>
                    </div>
                    <div className='price-explain'>Ev sıfır bir yapıdadır, bu nedenle inşaat pisliği bulunmaktadır. Yoğun bir toz bulunmaktadır. Mutfak dolaplarının iç dış ve üstü; banyo dolaplarının iç dış ve üstü, girişte bulunan kapı arkasındaki dolabın iç dışı ve tuvaletin, banyonun detaylı temizliği; camlar cam içleri ve önlerinin temizliği, fransız balkonun temizliği, korkulukların temizliği kapıların silinmesi gerekmektedir.</div>
                </div>



            </div>
            <div className='price-mother'>
                <div className='price-child'>
                    <div>bölgesel fiyatlar</div>

                    <span> <Link>kadıköy </Link></span><br></br>
                    <Link><span>kadıköy </span></Link><br></br>
                    <Link><span>kadıköy </span></Link><br></br>
                    <Link><span>kadıköy </span></Link><br></br>
                    <Link><span>kadıköy </span></Link><br></br>
                    <Link><span>kadıköy </span></Link><br></br>
                </div>
                <div className='jouin-us'> <button>  hizmet vermek için bize katıl</button></div>
                <div>
                    <div> müşteri yorumları </div>
                    <div className='price-comment'>
                        <span className='staricon'><i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>


                        </span>
                        <span style={{fontWeight:'bold'}}>username </span>
                        <br/>
                        <i style={{fontSize:11}}> kategori-tarih</i>
                         <div style={{fontSize:13}}> 
                         Çok titiz bir insan olarak söylüyorum şu ana kadar ilk defa temizlik konusunda oldukça memnun kaldığım bir hizmet aldım. Gönül rahatlığı ile temizlik hizmeti alabilirsiniz. 
                         </div>
                    </div>

                </div>


            </div>
        </div>;
    }
}
