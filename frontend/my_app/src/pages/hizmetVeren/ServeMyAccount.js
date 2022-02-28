import React, { Component } from 'react';
import ServeMyWorks from './serveDetail/ServeMyWorks';

import ServeNav from './serveDetail/ServeNav';

export default class ServeMyAccount extends Component {
    render() {
        return <div>

            <ServeNav />
             <div> 
                <ServeMyWorks/> 
             </div>


        </div>;
    }
}
