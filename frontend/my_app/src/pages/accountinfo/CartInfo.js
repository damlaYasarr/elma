import React, { Component } from 'react';
import './style.css'

export default class CartInfo extends Component {
    
  state = {
    show: false,
  }
  toggle = () => this.setState((currentState) => ({show: !currentState.show}));

  renderselectedRadio() {
    return (
      <div>
        <h6> kart bilgileri</h6>
        <br />
        <div>
          <h6 style={{fontWeight:'bold'}} >
       kart bilgileri</h6>

       <div className='inputpasswordx'> <i class="fas fa-credit-card-front"></i>
       <input 
          placeholder=' 12345 4324 2323 3242' type="tel" id="cart3" name="fav_language" />
       </div> 
          
        </div>
        <div>

         
         <input className='inputpassword1' placeholder='AA/YY' type="text" id="cart1" name="fav_language" />
          <input 
          placeholder='CVC'
          className='inputpassword1' type="text" id="cart2" name="fav_language" />
        </div>
        <div className='cart-info-btn'>
          <button>KAYDET</button></div>
      </div>

    )
  }
  render() {
    return (<div>

      
      <h4> cart bilgilerim</h4>
      <br />
      <h6> bir kredi kartı seç</h6>
      <br />
      <div>
        <input  onClick={this.toggle} type="radio" id="cart" name="fav_language"   />
        <label style={{ fontSize: 14 }} for="cart">kredi kart ekle</label><br />
         <br>
         </br>
         {this.state.show && this.renderselectedRadio()}
      </div>
    </div>);
  }
}
