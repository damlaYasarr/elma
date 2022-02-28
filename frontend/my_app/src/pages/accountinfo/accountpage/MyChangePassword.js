import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import NavAccount from '../../../Layouts/Header/NavAccount';
import AccountMenu from '../AccountMenu';
import PasswordChange from '../PasswordChange';

export default class MyChangePassword extends Component {
  render() {
    return <div>
         <NavAccount/>
         <Row> 
       <Col xs="3"> 
       <AccountMenu/> 
       </Col>
       <Col xs="4"> 
       <PasswordChange/> 
       </Col>
         </Row>


    </div>;
  }
}
