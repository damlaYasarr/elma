import React, { Component } from 'react';

export default class Servepayon extends Component {
    render() {
        return <div>
            <p className='server-bakiye-header1'>yüklenecek miktar</p>
            <div className='server-bakiye-header3'>
                <form>
                    <div className='server-bakiye-input-container'>
                        <input type='radio' name="fav_language" id='one' />
                        <label for="one">50 TL</label> <br /> </div>

                    <div className='server-bakiye-input-container'>
                        <input type='radio' name="fav_language" id='two' />
                        <label for="two">100 TL</label> <br /></div>
                    <div className='server-bakiye-input-container'>
                        <input type='radio' name="fav_language" id='three' />
                        <label for="three">200 TL</label> <br /></div>
                    <div className='server-bakiye-input-container'>
                        <input type='radio' name="fav_language" id='four' />
                        <label for="four">300 TL</label> <br /></div>
                    <div className='server-bakiye-input-container'>
                        <input type='radio' name="fav_language" id='five' />
                        <label for="five">400 TL</label> <br /></div>

                </form>
            </div>

            <div>
                <p className='server-bakiye-header1'>ödeme yöntemi</p>
                <div className='server-bakiye-header5-mother'>
                    <i style={{ border: 'none', color: 'grey' }}
                        class="far fa-credit-card-front"></i>
                    <input className='server-bakiye-header5' placeholder='444 4444 44 444 44' type='text' />
                </div>

                <div className='server-bakiye-header6-mother'>
                    <div className='server-bakiye-header6'>

                        <input placeholder='AA/YY' type='text' />
                    </div>
                    <div className='server-bakiye-header6-x'>

                        <input placeholder='CVC' type='text' />
                    </div>

                </div>
            </div>
            <div className='server-bakiye-header7'><button >Kart ekle</button></div>

        </div>;
    }
}
