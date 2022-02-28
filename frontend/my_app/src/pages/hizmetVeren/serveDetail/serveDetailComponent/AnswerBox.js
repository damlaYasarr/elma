import React, { Component } from 'react';
import './../style.css'
export default class AnswerBox extends Component {
    render() {
        return <div>
            <p className='opport8'>fiyat? kdv dahil</p>
            <input className='opport4' type='text' placeholder='TL'></input>
            <p className='opport8'> mesaj</p>
            <textarea className='opport5' placeholder='lorem ipso' ></textarea>
            <div className='opport9 '>  <button className='opport6'> <i class="far fa-trash-alt"></i> </button>
                <button className='opport7'>teklif ver</button></div>
        </div>;
    }
}
