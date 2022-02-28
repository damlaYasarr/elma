import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './../style.css'

export default class LoginNav extends Component {
    render() {
        return <div>

            <div className='login-header-mother'>
                <div><Link to='/' className='login-header'>
                    <i style={{ color: 'green', margin: 2 }} class="fas fa-apple-alt"></i>

                    Elma</Link></div>
                <div><Link className='login-header1'>Hizmet ver</Link></div>
            </div>



        </div>;
    }
}
