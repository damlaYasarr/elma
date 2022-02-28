import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css'
export default class Servebakiye extends Component {
    render() {
        return (<div >
            <div className='serve-payment-mother'> 
            <h7 style={{fontWeight:'bold'}}>Bakiye ve ödeme</h7>
            <Link to='/settings/balance/payment' className='serve-payment'>ödeme</Link>
            <Link to='/settings/balance/transactions' className='serve-payment'>bakiye</Link>
            <Link to='/settings/balance/auto-reload' className='serve-payment'> otomatik ödeme</Link>
           </div> 
        </div>);
    }
}
