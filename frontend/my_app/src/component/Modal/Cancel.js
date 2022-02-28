import React, { Component } from 'react';
import { Card } from 'reactstrap';
import './style.css'
export default class Cancel extends Component {
  render() {
    return <div className='body-modal-cancel'>
    
         <Card  style={{ width: 310, height: 180, border: 'none' }}>
                <div className='cancel-serve'>
                <p style={{fontWeight:'bold'}}>emin misin?</p>
                  <p style={{color:'grey'}}> %72 tamamlandı. Birkaç soruya daha cevap vererek ücretsiz teklif alabilirsin.</p>
               <div> 
              <button style={{color:'white'}} className='cancel-serve-btn1'>DEVAM ET</button>
              <button style={{color:'white'}} className='cancel-serve-btn2'>ÇIK</button></div>
                </div>

            </Card>

    </div>;
  }
}
