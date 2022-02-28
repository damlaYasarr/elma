import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Searchbar from '../searchBar/Searchbar';
import './style.css'
import 'bootstrap'

export default class NavAccount extends Component {
    render() {
        return (<div >
            <div className='navaccount-mother'>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <div> <Link className='navaccount-header' to='/'>Elma</Link></div>
                    <div > <Searchbar /></div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <div > <Link to='/pro-armut'
                    
                    className='navaccount-header-sis'>İşlerim</Link></div>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <image> img</image>
                        <div className='dropdown'>
                            <button style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} className='dropbtn'> username <i class="fas fa-chevron-down"></i></button>
                            <div className='dropdown-content'>

                                <Link to='/customer/accountDetail/my-details' > hesabım</Link>
                                <Link to='/'>Exit</Link>

                            </div> </div>

                    </div>

                </div>
            </div>


        </div>);
    }
}
