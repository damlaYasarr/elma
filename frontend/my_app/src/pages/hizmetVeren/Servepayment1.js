import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import Servebakiye from './serveDetail/Servebakiye';
import ServeBakiyeDetail1 from './serveDetail/ServeBakiyeDetail1';
import ServeMenu from './serveDetail/ServeMenu';
import ServeNav from './serveDetail/ServeNav';

export default class Servepayment1 extends Component {
    render() {
        return <div>

            <ServeNav />
            <Row >
                <Col xs='2'>
                    <ServeMenu />
                </Col>
               
                <Col xs='3'><Servebakiye /></Col>
                <Col xs='2'> </Col>
                <Col xs='3'><ServeBakiyeDetail1/> </Col>

            </Row>


        </div>;
    }
}
