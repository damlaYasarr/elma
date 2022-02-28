
import React, { useState, useEffect } from 'react';
import { Card } from 'reactstrap';
import './style.css'
import ActionButtons from './ActionButtons';



export default function AboneModal(props){
    const [info1, setInfo1] = useState({});
    const [error, setError] = useState("");
   
  
  
    const onInputChanged = (event) => {
      const targetName = event.target.name;
      const targetValue = event.target.value;
  
      setInfo1((info1) => ({
        ...info1,
        [targetName]: targetValue
      }));
    };
    const onDetailChange = (event) => {
      const targetName = event.target.name;
      const targetValue = event.target.value;
  
      setInfo1((info1) => ({
        ...info1,
        [targetName]: targetValue
      }));
    };
    // const validate = () => {
    //   if (!info1.name) setError("this field couldnt be empty");
    //   else {
    //     setError("");
    //     props.nextStep();
    //     props.userCallback(info1);
    //   }
    // };
    const handleRegister = (e) => {
      e.preventDefault();
      console.log(e.value)
    }
    return <div>
      <Card className='card-mother ' style={{ width: 298, height: 240, border: 'none' }}>
        <div className='Info-abone'>
          <div ><label className='header-mom' > temizlik hangi sıklıkla yapılsın</label> </div>
          <div className='header-label'><label> işin sıklığına göre rezervasyon otomatik oluşacak </label></div>
          <form onSubmit={handleRegister}>
            <div className='btns-abone'>
             
                
                  <div  > 
                    <button name="name" onChange={onInputChanged} className='btn-abone-child'>haftada 1</button></div>
                 
                
              
  
              <div> <button name="name" onChange={onInputChanged} className='btn-abone-child'>1 haftada 1</button></div>
              <div ><button name="name" onChange={onInputChanged} className='btn-abone-child'>Tek sefer</button></div>
  
            </div>
            <div><label className='header-mom'>tasarruf etmek ister misin?</label></div>
            <div className='Info-abone' >
  
              <button onChange={onDetailChange} name="name-detail" className='btn-abone-app'>6 aylık abone  <label className='lbl-price'> 167</label><div className='btn-discount1'>%15 indirim</div></button>
              <button onChange={onDetailChange} name="name-detail" className='btn-abone-app'>3 aylık abone  <label className='lbl-price'> 176</label> <div className='btn-discount2'>%15 indirim</div></button>
              <button onChange={onDetailChange} name="name-detail" className='btn-abone-app'> süresiz abonelik istiyorum  <label className='lbl-price'> 197 <div className='btn-discount3'>%15 indirim</div></label>
              </button>
            </div>
          </form>
          <ActionButtons {...props} nextStep={props.nextStep} />
        </div>
  
  
  
  
  
  
      </Card>
    </div>;
  }
  