import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css'
export default class Servecreditcart extends Component {
  render() {
    return <div>
        <div> 
         <div className='ilkpart'> 
             <h8 className='ilk-part-header'> OTOMATİK ÖDEME AYARLARI</h8>
              <p className='ilk-part-child'> işinize odaklanın, gerisini bize bırakın. bakiyeniz bittiğinde yeniden 
                  doldurmak için otomatik ödemeyi kurun!
              </p>
               <Link className='ilkpart-child-link'> <button className='ilkpart-child-btn'> OTOMATİK ÖDEME AYARLARI </button> </Link>
         </div>
         <div> 
            <p className='ilk-part-p1'> Hoşgeldin indirimi!</p>
            <p className='ilk-part-p2'>daha fazla para ekle, daha fazla indirim al. ilk yüklemene özel
                bu seferlik fırsatı kaçırma!
            </p>
             <div className='occupy' > 
                 <input type='radio' name='fav-discount'></input>
                100TL <p className='occupy-p'>indirim yok</p>
             </div>
             <div className='occupy'> 
                 <input type='radio'  name='fav-discount'></input>
                260TL <p className='occupy-p'>Ödenecek tutar</p> 
                 <span className='span1'> 60tl <br/> indirim</span>
             </div>
             <div className='occupy'> 
                 <input type='radio'  name='fav-discount'></input>
                260TL <p className='occupy-p'>Ödenecek tutar</p> 
                 <span className='span1'> 60tl <br/> indirim</span>
             </div>
         </div>

           <div>   
               <p className='ilk-part-p1'>ödeme yöntemi</p>
                 
                <div> 
                <input className='servebakiye-cart1' placeholder='5555-555-555'></input>
                 <div> 
   
                 </div>
               </div>
               <button className='cart-detail-btn'>KART EKLE</button>
           </div>
       </div>
    </div>;
  }
}
