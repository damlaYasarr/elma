import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css'

export default class MyOldworkcomponent extends Component {
  render() {
    return <div>

      <div className='btn-mother'>
        <div className='btn-header'>
          <Link to='/customer'>
            <button className='btn-child1'> işlerim </button> </Link>

          <Link to='/customer/oldjob'> <button className='btn-child'>
            eski işlerim</button></Link>
        </div>
        <p > tarih</p>
            <div className='worksContainer-mother' >
             <Link style={{color:'black', textDecoration:'none'}}>
               
                <div className='worksContainer'>
                <p> Evden eve nakliyat
                  <br /> <i style={{color:'grey'}}> tarih</i>
                </p>
                <hr />
                <p>iptal edildi</p>
              </div>
              
            </Link>
            <Link style={{color:'black', textDecoration:'none'}}>
              <div className='worksContainer'>
                <p> Evden eve nakliyat
                  <br /> <i style={{color:'grey'}}> tarih</i>
                </p>
                <hr />
                <p>iptal edildi</p>
              </div>
              </Link>
              <Link style={{color:'black', textDecoration:'none'}}>
              <div className='worksContainer'>
                <p> Evden eve nakliyat
                  <br /><i style={{color:'grey'}}> tarih</i>
                </p>
                <hr />
                <p>iptal edildi</p>
              </div>
              </Link>
              <Link style={{color:'black', textDecoration:'none'}}>
              <div className='worksContainer'>
                <p> Evden eve nakliyat
                  <br /> <i style={{color:'grey'}}> tarih</i>
                </p>
                <hr />
                <p>iptal edildi</p>
              </div> 
              </Link>
              <Link style={{color:'black', textDecoration:'none'}}> <div className='worksContainer'>
                <p> Evden eve nakliyat
                  <br /> <i style={{color:'grey'}}> tarih</i>

                </p>
                <hr />
                <p>iptal edildi</p>
              </div>
              </Link>
            </div>
            
            <p>tarih</p>
            <div><i class="fas fa-chevron-left"></i> page number
            <i class="fas fa-chevron-right"></i>
               </div>

         
      </div>
        

    </div>;
  }
}
