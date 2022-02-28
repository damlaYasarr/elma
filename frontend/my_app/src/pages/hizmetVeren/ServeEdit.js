import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import ServeEditDetail from './serveDetail/ServeEditDetail';
import ServeMenu from './serveDetail/ServeMenu';
import ServeNav from './serveDetail/ServeNav';
import ServeService from './serveDetail/ServeService';

export default class ServeEdit extends Component {
  render() {
    return <div>

<ServeNav />
            <Row >
                <Col xs='2'>
                    <ServeMenu />
                </Col>
               
                <Col xs='2'><ServeService/></Col>
                <Col xs='2'> </Col>
                <Col xs='3'><ServeEditDetail/> </Col>

            </Row>
    </div>;
  }
}
