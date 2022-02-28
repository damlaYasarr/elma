import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import NavAccount from '../../../Layouts/Header/NavAccount';
import AccountMenu from '../AccountMenu';
import AccountInfo from '../AccountInfo';

export default class MyAccount extends Component {
  render() {
    return <div>
         <NavAccount/>
         <Row> 
       <Col xs="3"> 
       <AccountMenu/> 
       </Col>
       <Col xs="5"> 
       <AccountInfo/> 
       </Col>
         </Row>


    </div>;
  }
}
