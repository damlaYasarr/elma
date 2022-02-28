import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import ServeMenu from './serveDetail/ServeMenu';
import ServeNav from './serveDetail/ServeNav';
import ServeService from './serveDetail/ServeService';

export default class ServeSetting extends Component {
  render() {
    return <div>

        {/* genel servis ayarları açılınca bunu kullanacağız */}
        <ServeNav />
            <Row >
                <Col xs='2'>
                    <ServeMenu />
                </Col>
               
                <Col xs='2'><ServeService/></Col>
                <Col xs='2'> </Col>
                

            </Row>
    </div>;
  }
}
