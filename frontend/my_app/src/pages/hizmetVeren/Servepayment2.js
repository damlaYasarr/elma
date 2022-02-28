import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import Servebakiye from './serveDetail/Servebakiye';
import ServeBakiyeDetail2 from './serveDetail/ServeBakiyeDetail2';
import ServeMenu from './serveDetail/ServeMenu';
import ServeNav from './serveDetail/ServeNav';

export default class Servepayment2 extends Component {
    render() {
        return <div>

            <ServeNav />
            <Row >
                <Col xs='2'>
                    <ServeMenu />
                </Col>
                
                <Col xs='3'><Servebakiye /></Col>
                <Col xs='6'><ServeBakiyeDetail2 /> </Col>

            </Row>

        </div>;
    }
}
