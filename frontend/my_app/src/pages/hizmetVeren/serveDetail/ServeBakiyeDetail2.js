import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css'
export default class ServeBakiyeDetail2 extends Component {
    render() {
        return <div className='servebakiyedetail2-mother'>
            <div>
                <p className='serverbakiyedetail2'>Bakiye</p>
                <p className='serverbakiyedetail3'>Hesap özeti</p>
                <div className='serverbakiyedetail4'>
                    <p>Bakiye: </p>
                    <p> 00+</p>
                    <p><i class="fal fa-question"></i></p>
                </div>
                <div>
                      <p className='serverbakiyedetail3' >  Hesap hareketleri</p>

                    <p className='serverbakiyedetail5'>hesabında henüz hiç hareket yok</p>
                </div>
            </div>

            <div className='btn-serve-bakiyedetail-mother'>
                <Link className='btn-serve-bakiyedetail' to='/settings/balance/transactions'> <button>Hesap hareketleri</button></Link>

                <Link className='btn-serve-bakiyedetail1'  to='/settings/balance/transactions/invoices'><button>faturalar</button></Link>
            </div>
        </div>;
    }
}
