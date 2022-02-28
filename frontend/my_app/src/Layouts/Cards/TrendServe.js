import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'reactstrap';

export default class TrendServe extends Component {
  render() {
    return (<div>
        {/* çoğu başlıklar veritabanından gelmeli  */}
        <h4 className='popular-header'> Populer hizmetler</h4>
         <Row> 
          <Col xs='3'>
              <Link to='/hizmet' style={{border:'none'}}
               className='serve-popular'> 
               inşaat </Link>
          </Col>
          <Col xs='3'>
               <Link style={{border:'none'}} 
               className='serve-popular'> inşaat </Link></Col>
          <Col xs='3'> <Link  style={{border:'none'}} className='serve-popular'> inşaat </Link></Col>
          <Col xs='3'> <Link style={{border:'none'}} className='serve-popular'> inşaat </Link></Col>
         </Row>
         
        

    </div>);
  }
}
 