import React, { Component } from 'react';
import './../../pages/helpInfo/style.css'
import PropTypes from "prop-types";
export default class Detail extends Component {
  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };
  render() {
    if (!this.props.showModaldetail) {
      return null;
    }
    return <div className='request-detail'>
      <div >
          <span  onClick={this.onClose} class="close">&times;</span></div>
      <div> <p> Talep Detayları</p>   </div>
      <div>
         <span className='request-detail-header1'>  iş başlığı</span><br/>
         <span className='request-detail-header2'><i class="far fa-calendar-week"></i> gün-tarih-saat</span><br/>
         <span className='request-detail-header2'><i class="fal fa-map-marker-minus"></i> adres</span><br/>
         <span className='request-detail-header2'><i class="fas fa-phone-square-alt"></i> aranma şartı</span><br/>
      </div>   
      <hr style={{color:'lightgray'}}/> 
      <span className='request-detail-header1'>  iş başlığı</span><br/>
      <span className='request-detail-header2'>cevap</span><br/>
      <span className='request-detail-header1'>  Amacı nedir</span><br/>
      <span className='request-detail-header2'>cevap</span><br/>
      <span className='request-detail-header1'>  Hangi seviye</span><br/>
      <span className='request-detail-header2'>cevap</span><br/>
      <span className='request-detail-header1'>  hangi sıklıkta</span><br/>
      <span className='request-detail-header2'>cevap</span><br/>
      <span className='request-detail-header1'>  ihtiyacın detayları neler</span><br/>
       <span className='request-detail-header2'>cevap</span><br/>
    </div>;
  }
}
Detail.propTypes = {
  onClose: PropTypes.func.isRequired,
  showModaldetail: PropTypes.bool.isRequired
};