import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css'
export default class Pictures extends Component {
  render() {
    return <div>
     <div className='serve-people-picture-mother'> 
         <div> <Link className='serve-people-picture1' to='/'> Elma </Link></div>
         <div className='serve-people-picture-mother-child'>
         <div> <Link className='sppm1'> ÇIKIŞ </Link> </div>
         <div > <Link className='sppm2' to='/serve-detail'>HESABIM</Link></div>
         <div><Link className='sppm-child'>TEKLİF AL</Link></div>
         </div>
        
     </div>
     <div style={{ display:'flex', flexDirection:'row', justifyContent:'center',backgroundColor:'rgb(236, 236, 236)'  }}> 
       <div style={{display:'flex', flexDirection:'row'}}> 
          <div> picture </div>
          <div> user name <br/> işi <br/> adres</div>
       </div>
    <div className='body-of-image'>  <img src='https://www.geberit.com.tr/local-media/goerseller/2016-bathroom-citterio-bigview-07828828.jpg?width=1170'
    alt="description of image"
    />  </div>
    </div>
     <div className='footer-of-image' > </div>
    </div>;
  }
}
