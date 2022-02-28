import React, { Component } from 'react';
import './home.css'
import Servepayon from './Servepayon';
export default class ServeBakiyeDetail4 extends Component {
  state = {
    show: false,
  }
  toggle = () => this.setState((currentState) => ({show: !currentState.show}));
  render() {
    return <div>

      <div className='server-bakiye-header'>
        <p className='server-bakiye-header0' >OTOMATİK ÖDEME</p>
        <div className='server-bakiye-header-small'>
          <div  >
            <p className='server-bakiye-header1' >Otomatik ödemeyi aç/kapa</p>
            <p className='server-bakiye-header2'>Bakiyeniz 50 TL'nin altına düştüğünde Armut otomatik olarak bakiyenizi seçilen tutarla yeniden doldurur.</p>
          </div>

          <label class="switch">
            <input type="checkbox" id="togBtn" 
            onClick={this.toggle}
            />
            <div class="slider round">

              <span class="on">ON</span>
              <span class="off">OFF</span>

            </div>
          </label>
        </div>
</div>
           {this.state.show && <Servepayon/>}
       
    </div>;
  }
}
