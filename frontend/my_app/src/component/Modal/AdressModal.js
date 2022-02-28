import React, { useState, useEffect } from 'react';
import ActionButtons from './ActionButtons';
import { Card } from 'reactstrap';
export default function AdressModal(props) {

    const [info2, setInfo2] = useState({});
    const [error, setError] = useState("");
  
    const onInputChanged1 = (event) => {
      const targetName = event.target.name;
      const targetValue = event.target.value;
      console.log(targetValue)
      setInfo2((info2) => ({
        ...info2,
        [targetName]: targetValue
      }));
    };
    const onInputChanged2 = (event) => {
      const targetName = event.target.name;
      const targetValue = event.target.value;
      console.log(targetValue)
      setInfo2((info2) => ({
        ...info2,
        [targetName]: targetValue
      }));
    };
    const onInputChanged3 = (event) => {
      const targetName = event.target.name;
      const targetValue = event.target.value;
      console.log(targetValue)
      setInfo2((info2) => ({
        ...info2,
        [targetName]: targetValue
      }));
    };
    const onInputChanged4 = (event) => {
      const targetName = event.target.name;
      const targetValue = event.target.value;
      console.log(targetValue)
      setInfo2((info2) => ({
        ...info2,
        [targetName]: targetValue
      }));
    };
  
    // const validate = () => {
    //     if (!info1.name) setError("this field couldnt be empty");
    //     else {
    //         setError("");
    //         props.nextStep();
    //         props.userCallback(info1);
    //     }
    // };
    const handleRegister = (e) => {
      e.preventDefault();
      console.log(this.props.onDetailChange.targetName)
    }
    return <div>
      <Card className='card-mother ' style={{ width: 298, height: 240, border: 'none' }}>
        <div className='Info-abone'>
  
          <form onSubmit={handleRegister}>
            <div>
              <label className='header-mom'> nerde temizlik yapılacak </label>
            </div>
            <div className='Info-abone'>
  
              <select onChange={onInputChanged1} name='name'
                className='adresschosen'
              >
                <option selected>şehir seçiniz</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <select onChange={onInputChanged2} name='name1'
                className='adresschosen'>
                <option selected>ilçe seçiniz</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <select onChange={onInputChanged3} name='name2'
                className='adresschosen'>
                <option selected>mahalle seçiniz</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
  
              <textarea
                placeholder='adresinin tamamını yazınız'
                onChange={onInputChanged4} name='name3' className='inputAdress' type='text' > </textarea>
            </div>
            <ActionButtons {...props} nextStep={props.nextStep} />
  
  
  
          </form>
  
  
        </div>
  
      </Card>
    </div>;
  }
  