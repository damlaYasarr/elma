import React, { Component } from 'react';
import './style.css'
import 'bootstrap'
export default class AccountInfo extends Component {

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
    return (
      <div className='Information-mother'>

        <h4>Hesap bilgilerim</h4>
        <div className='image-upload'>
               
        <div className='circle_pic'>
                <img src={this.state.image} />
                 </div>
                <input id="file-input" type="file" name="myImage" onChange={this.onImageChange} />
                <label for="file-input">
                    <i class="far fa-plus"></i>
                </label>
            </div>
        <br></br>

        <label className='label-mom'>Ad</label>
        <input className='input-mom' type='text' />


        <label className='label-mom'>Soyadı</label>
        <input className='input-mom' type='text' />


        <label className='label-mom'>Email</label>
        <input className='input-mom' type='email' />


        <label className='label-mom'>telefon numarası</label>
        <input className='input-mom' type='number' />

        <br></br>
        <div>
          <input type="radio" id="html1" name="fav_language" value="HTML" />
          <label style={{ fontSize: 12 }} for="html1">teklif veren arayabilir</label><br />

        </div>
        <div>
          <input type="radio" id="html2" name="fav_language" value="HTML" />
          <label style={{ fontSize: 12 }} for="html2">arayabilir ama numaram gizli kalsın</label><br />

        </div>
        <div>
          <input type="radio" id="html3" name="fav_language" value="HTML" />
          <label style={{ fontSize: 12 }} for="html3">aranmak istemiyorum teklifler emaille gelsin</label><br />

        </div>

        <label className='label-mom'>adres</label>
        <textarea style={{
          fontSize: 12,
          padding: '8px',
          color: 'black', width: '200px'
        }}
          placeholder='adres giriniz'
        ></textarea>

        <br></br>
        <button
          style={{
            width: 100,
            marginLeft: '50px',
            backgroundColor: 'green',
            color: 'white',
            border: 'none'
          }}
        > kaydet</button>

      </div>);
  }
}
