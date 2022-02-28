import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css'
export default class ServeBakiyeDetail3 extends Component {
  render() {
    return <div className='servebakiyedetail2-mother'>
       <div className='server-bakiye-detail'> 
          <p className='server-bakiye-detail1'> FATURALA DETAYLARI</p>
           <p className='server-bakiye-detail2'> Faturalar</p>
           <p className='server-bakiye-detail3'>Mart 2016'da Armut.com olarak e-arşiv/e-fatura uygulamasına geçmiş bulunuyoruz. Bu sistem ile birlikte artık resmi faturalarınız size e-posta yoluyla ve aşağıdaki bağlantılara tıklama sonucunda iletilecektir. Daha önceki dönemlere ait faturalarınız ile ilgili sorularınızı destek@armut.com'a iletebilirsiniz. </p>  
           <div>
           henüz adınıza düzenlenmiş bir fatura yok
       </div>
       </div>
       
       <div className='btn-serve-bakiyedetail-mother'>
                <Link className='btn-serve-bakiyedetail1' to='/settings/balance/transactions'> <button>Hesap hareketleri</button></Link>

                <Link className='btn-serve-bakiyedetail'  to='/settings/balance/transactions/invoices'><button>faturalar</button></Link>
            </div>
   
    </div>;
  }
}
