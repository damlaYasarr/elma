import React, { Component } from 'react';
import SupportDetail from './SupportDetail';
import SupportFooter from './SupportFooter';
import SupportNav from './SupportNav';
import SuppurtMainBody from './SuppurtMainBody';

export default class SupportDetailpage extends Component {
    render() {
        return <div>

            <SupportNav />

            <SupportDetail />


            <hr style={{ marginTop: '20px' }} />

            <SupportFooter />




        </div>;
    }
}
