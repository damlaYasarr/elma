import React from 'react';

import Servecreditcart from "./Servecreditcart"
import Serveeft from "./Serveeft"
import './style.css'



const ServeBakiyeDetail1 = (props) => {
    const [active, setActive] = React.useState(1);
    const SetView = (active) => {
        setActive(active);
    };

    const ActiveView = () => {
        switch (active) {
            case 1:
                return <Servecreditcart />;
            case 2:
                return < Serveeft />;
            default:
                return <Servecreditcart />;

        }
    };


    return <div className='servebakiye-detail1-mother'>
        <h5 style={{ fontWeight: 'bold', fontSize: 16 }}>Para Ekle</h5>
        <div className='servebakiye-btn-mother'>
            <button id='cartbtn' onClick={() => SetView(1)} className='servebakiye-btn1'>kredi kartı</button>
            <button id='eftbtn' onClick={() => SetView(2)} className='servebakiye-btn2'>havale/eft</button>
        </div>

        {ActiveView()}
    </div>;

}
export default ServeBakiyeDetail1;
