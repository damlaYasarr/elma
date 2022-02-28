import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './home.css'
import AnswerBox from './serveDetailComponent/AnswerBox';
import RequestDetail from './serveDetailComponent/RequestDetail';
export default class ServeMyWorks extends Component {
  state = {
    show: false,
  }
  toggle = () => this.setState((currentState) => ({show: !currentState.show}));
  render() {

    return <div className='serve-my-works'>

      <div className='serve-my-works1'>
        <div className='serve-my-works1-child'>
          <Link className='serve-my-works2'><p>fırsatlar</p></Link>
          <p style={{ marginLeft: '5px', fontSize: '16px' }}>30</p>
          <Link className='serve-my-works2'><p>işlerim</p></Link>
        </div>
        <div className='serve-my-works-mother'>


          <button onClick={this.toggle} className='serve-my-opport-mother'>
            <p className='opport1'>username </p>
            <p className='opport1'> neistiyor-adres-başvurutarihi</p>
            <p className='opport2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <p className='opport3'><i class="far fa-phone"></i> </p>
              <p className='opport3'>öğretmenevi </p>
              <p className='opport3'> kpss</p>
              <p className='opport3'>2haftada1 </p>
            </div>
          </button>
          <button
          style={{color:'rgb(78, 78, 78)'}}
          onClick={this.toggle} className='serve-my-opport-mother'>
            <p className='opport1'>username </p>
            <p className='opport1'> neistiyor-adres-başvurutarihi</p>
            <p className='opport2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <p className='opport3'><i class="far fa-phone"></i> </p>
              <p className='opport3'>öğretmenevi </p>
              <p className='opport3'> kpss</p>
              <p className='opport3'>2haftada1 </p>
            </div>
          </button>
          <button
          style={{color:'rgb(78, 78, 78)'}}
          onClick={this.toggle} className='serve-my-opport-mother'>
            <p className='opport1'>username </p>
            <p className='opport1'> neistiyor-adres-başvurutarihi</p>
            <p className='opport2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <p className='opport3'><i class="far fa-phone"></i> </p>
              <p className='opport3'>öğretmenevi </p>
              <p className='opport3'> kpss</p>
              <p className='opport3'>2haftada1 </p>
            </div>
          </button>
        </div>
      </div>



      <div className='serve-my-works1'>
        <div className='serve-my-works1-child'>
          <p className='serve-my-works2'>Talep Detayları</p>
        </div>
        <div className='serve-my-works-mother'>
        {this.state.show && <RequestDetail/>}
        </div>
      </div>

      <div className='serve-my-works1'>
        <div className='serve-my-works1-child'>
          <p className='serve-my-works2'>teklif Ver</p>

        </div>
        <div className='serve-my-works-mother1'>
        {this.state.show &&  <AnswerBox/>}
        </div>
      </div>

    </div>;
  }
}
