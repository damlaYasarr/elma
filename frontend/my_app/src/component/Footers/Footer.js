import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
export default function Footer() {
    return (
        <div className='footer'>
            <div className='footer-sister'>EN ÇOK ARANAN</div>
            <div className='footer-child'>
                <Link className='footer-child-1'>İstanbul Boyacı(boya badana ustası)</Link>
                <Link className='footer-child-1'>istanbul parça eşya taşıma</Link>
                <Link className='footer-child-1'>istanbul ev temizliği</Link>
                <Link className='footer-child-1'>Ankara evden eve nakliyat</Link>
                <Link className='footer-child-1'>izmir evden eve nakliyat</Link>
                <Link className='footer-child-1'>İstanbul özel matematik dersii</Link>
                <Link className='footer-child-1'>İstanbul psikolog</Link>

            </div>
            <div className='footer-child-son'>
                <div className='footer-child-son1'>
                    <p> BİLGİ</p>
                    <div className='footer-child-son1' >
                        <Link to='/nasil-calisir' className='text1'>Nasıl çalışır</Link>
                        <Link className='text1'>Yardım</Link>
                        <Link className='text1'>Blog</Link>
                        <Link className='text1'>Hakkımızda</Link>
                        <Link className='text1'> Kariyer</Link>


                    </div>
                </div>
                <div className='footer-child-son1'>
                    <p> HİZMETLER</p>
                    <div className='footer-child-son1' >
                        <Link className='text1'>Ev Temizliği</Link>
                        <Link className='text1'>Evden Eve Nakliyat</Link>
                        <Link className='text1'>Boya badana</Link>
                        <Link className='text1'>Rahat Taşın</Link>
                        <Link className='text1'>Usta arıyorum</Link>
                        <Link className='text1'>En Yakın</Link>

                    </div>


                </div>
                <div className='footer-child-son1'>
                    <p>BİZE ULAŞMAK İÇİN </p>
                    <div className='footer-child-son1' >
                        <Link className='text1'>support@elma </Link>
                        <Link className='text2'> HİZMET VER </Link>
                        <Link className='text3'>elma.com </Link>
                    </div>
                </div>

            </div>

            <div className='text4'>
                <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '50px' }} >
                    <div> <Link className='link1' to='/'>Elma</Link></div>
                    <p> © 2011 - 2022 Armut Teknoloji AŞ, Tüm Hakları Saklıdır </p>

                </div>
                <div className='text5-mother'>
                    <div style={{ display: 'flex', flexDirection: 'col' }}>
                        <Link className='text1'>Kullanıcı Sözleşmesi <br></br> Gizlilik ve Kişisel Verilerin Korunması Politikası</Link></div>
                    <div>
                        <Link className='text5'> <i class="fab fa-facebook"></i> </Link>
                        <Link className='text5'><i class="fab fa-instagram"></i> </Link>
                        <Link className='text5'> <i class="fab fa-twitter-square"></i> </Link>
                        <Link className='text5'> <i class="fab fa-pinterest"></i> </Link>
                    </div>
                    karekod var

                </div>

            </div>





        </div>
    )
}
