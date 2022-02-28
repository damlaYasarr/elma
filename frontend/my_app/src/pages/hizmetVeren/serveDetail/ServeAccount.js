import React, { Component } from 'react';
import { Button, Input } from 'reactstrap';
import './style.css'
export default class ServeAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null
        };

        this.onImageChange = this.onImageChange.bind(this);
    }
    onImageChange = event => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            this.setState({
                image: URL.createObjectURL(img)
            });
        }
    };
    render() {
        return (<div className='serve-account-detail'>

            <h6 style={{ fontWeight: 'bold' }}>Kullanıcı detayları</h6>
            <div className='circle_pic'>
                <img src={this.state.image} />
             </div>
            <div className='image-upload'>
                <label for="file-input">
                    <i class="far fa-plus"></i>
                </label>

                <input id="file-input" type="file" name="myImage" onChange={this.onImageChange} />
            </div> 
            
          
            <div className='serve-account-detail-child'>
                <label >isim</label>
                <input type='name'></input>
            </div>
            <div className='serve-account-detail-child'>
                <label >Soyisim</label>
                <input type='name'></input>
            </div>
            <div className='serve-account-detail-child'>
                <label>email</label>
                <input type='email'></input>
            </div>
            <div className='serve-account-detail-child'>
                <label >telefon numarası</label>
                <input type='phone' />
            </div>



            <div className='serve-account-detail-child'>
                <label >Adres
                    {/* buradan adres modalı çağırmamız gerekir */}
                </label>
                <textarea type='name' />
            </div>
            <div className='serve-account-detail-child'>
                <button>değişiklikleri kaydet</button>
            </div>

        </div>);
    }
}
