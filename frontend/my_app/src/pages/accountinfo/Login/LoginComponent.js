import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LoginNav from './LoginNav';

export default class LoginComponent extends Component {
    render() {
        return <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div className='login-header-mother'>
                <div><Link to='/' className='login-header'>
                    <i style={{ color: 'green', margin: 2 }} class="fas fa-apple-alt"></i>

                    Elma</Link></div>
                <div><Link to='login' className='login-header1'>giriş</Link></div>
            </div>
            <div> <h4 style={{ textAlign: 'center', fontSize: '25px,', fontWeight: 'bold' }}>YENİ ŞİFRE OLUŞTURMAK İÇİN</h4></div>
            <div className='logincomponent-mother'>
                <div className='logincomponent-child1'>
                    <div className='login-component1-mother'><p className='login-component1'>email ile mesaj gönder</p></div>
                    <form>
                        <div style={{ lineHeight: '1px' }}>  <p className='login-component2'>Email</p>
                            <input className=' login-component-email' type='email'></input>

                            <button className='login-component-btn1'>EMAİL GÖNDER</button>
                        </div>
                    </form>
                </div>
                <div className='logincomponent-child2'>veya..</div>
                <div className='logincomponent-child3'>
                    <div className='login-component1-mother'> <p className='login-component1'> sms ile mesaj gönder</p></div>

                    <form>
                        <div style={{ lineHeight: '1px' }}><p className='login-component2'>cep telefonu</p>
         
                            <div className='login-component3-mother'>
                                <select className='login-component3' name="coutry-kod" id="country">
                                    <option value="volvo">TR+90</option>
                                    <option value="saab">Us+1</option>

                                </select>
                                <input className='login-component4' placeholder='(5__) ___-____' type='tel'></input>
                            </div>
                            <button className='login-component-btn2'>CEP TELEFONUMA SMS GÖNDER </button>
                        </div>
                    </form>
                </div>

            </div>
            <div className='login-footer'>
                <div>
                    <p >BİLGİ</p>
                    <Link
                        style={{
                            border: 'none',
                            color: '#c3c3c3'
                        }}
                        className='login-footer1'> Yardım</Link>
                    <p style={{ marginTop: '5px' }}>© 2011 - 2022 ELma Teknoloji AŞ, Tüm Hakları Saklıdır</p>
                </div>
                <div>
                    <p> BİZE ULAŞMAK İÇİN</p>
                    <Link
                        style={{
                            border: 'none',
                            color: '#c3c3c3'
                        }}
                        className='login-footer1'> elma@gmail.com</Link>
                </div>



            </div>

        </div>;
    }
}
