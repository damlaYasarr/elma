import React from 'react';

import { Col, Row } from 'reactstrap';
import ServeMenu from './serveDetail/ServeMenu';
import ServeNav from './serveDetail/ServeNav';

export default function Serve() {
  return (

    <div>
      <ServeNav />
      <Row >
        <Col xs='2'>
          <ServeMenu />
        </Col>

      </Row>





    </div>
  );
}
