import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css'
export default class InfoKariyer extends Component {
    render() {
        return <div>
            <div className='info-kariyer-mother'>
                <div>
                    <Link to='/' className='info-kariyer-header'> elma </Link>
                </div>
                <div className='info-kariyer-header-items'>
                    <p> DO YOU WANT TO BE SURROUNDED BY PEOPLE <br />
                        WHO WILL CHALLENGE YOU TO LEARN AND GROW?</p>
                    <Link><button>JOIN US!</button></Link>
                </div>
            </div>

        </div>;
    }
}
