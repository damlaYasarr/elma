import React, { Component } from 'react';
import ServeAccount from './serveDetail/ServeAccount';
import { Col, Row } from 'reactstrap';
import ServeMenu from './serveDetail/ServeMenu';
import ServeNav from './serveDetail/ServeNav';

export default class ServePersonalInfo extends Component {
    render() {
        return <div>

            <ServeNav />
            <Row >
                <Col xs='2'>
                    <ServeMenu />
                </Col>
                <Col xs='3'></Col>
                <Col xs='2'> <ServeAccount/></Col>

            </Row>

        </div>;
    }
}
