import React, { Component } from 'react';
import { Card } from 'reactstrap';
import './style.css'
export default class EmailModal extends Component {
    render() {
        return <div>
            <Card className='card-mother ' style={{ width: 298, height: 240, border: 'none' }}>
                <div className='Info-abone'>

                    <form>
                        <div>
                            <label className='lbl-input'>email</label><br />
                            <input className='inputInfo' type='email' placeholder='email'></input>
                        </div>
                        <div>
                            <label className='lbl-input'>password</label><br />
                            <input className='inputInfo' type='password' placeholder='password'></input>

                        </div>
                        <div>

                            <input className='btnInput' type='submit' ></input>
                        </div>
                    </form>


                </div>

            </Card>
        </div>;
    }
}
