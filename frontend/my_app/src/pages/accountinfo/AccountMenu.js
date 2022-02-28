import React, { Component } from 'react';
import {  Row, Col, Label } from 'reactstrap';
import {BrowserRouter as Router, Switch, Route , Link } from 'react-router-dom';
import './style.css'



export default class Account extends Component {
     
    render() {
        return <div>
                    <div className='info-mother'>
                        <br>
                        </br>
                         <div className='info'>
                            <Label style={{ fontSize: '20' }}>HESABIM</Label>
                            <Link  className='btn-info-child' to='/customer/accountDetail/my-details' > <button >hesap bilgileri 
                            <i class="fas fa-user"></i>
                                 </button>
                           
                            </Link>
                            <Link  className='btn-info-child' to='/customer/accountDetail/mypassword-change'>
                                <button >şifre bilgileri <i class="fad fa-key"></i>
                        </button> </Link>
                        <Link  className='btn-info-child' to='/customer/accountDetail/mypayment-details'>
                             <button   >ödeme seçenekleri  <i class="fal fa-credit-card-front"></i>
                            </button>  </Link> 
                        </div>
                        <div className='info'>
                            <Label style={{ fontSize: '20' }}>DESTEK</Label>

                          <Link  className='btn-info-child'>  <button >Armuta ulaş <i class="fad fa-envelope-square"></i>  </button></Link>
                           <Link className='btn-info-child' > <button >Yardım merkezi <i class="fal fa-question"></i> </button></Link>
                           <Link to='/setting' className='btn-info-child' > <button  >Hizmet veren olarak kullan<i class="far fa-suitcase"></i>  </button></Link>
                           <Link  className='btn-info-child' > <button button>çikış yap <i class="far fa-sign-out-alt"></i> </button></Link>
                        </div> 



                    </div>
               



        </div>;
    }
}
