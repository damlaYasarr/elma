import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import Servebakiye from './serveDetail/Servebakiye';
import ServeBakiyeDetail4 from './serveDetail/ServeBakiyeDetail4';
import ServeMenu from './serveDetail/ServeMenu';
import ServeNav from './serveDetail/ServeNav';

export default class Servepayment4 extends Component {
    render() {
        return <div>

            <ServeNav />
            <Row >
                <Col xs='2'>
                    <ServeMenu />
                </Col>
                
                <Col xs='3'><Servebakiye /></Col>
                <Col xs='6'><ServeBakiyeDetail4 /> </Col>

            </Row>

        </div>;
    }
}
