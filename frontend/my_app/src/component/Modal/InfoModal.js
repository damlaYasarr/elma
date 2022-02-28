
import React, { useState, useEffect } from 'react';
import { Card } from 'reactstrap';
import './style.css'
import StepWizard from 'react-step-wizard'
import axios from "axios";
import { Link } from 'react-router-dom';
import ActionButtons from './ActionButtons';

export default function InfoModal  (props) {

    const [info1, setInfo1] = useState({});
    const [error, setError] = useState("");
  
    const onInputChanged = (event) => {
      const targetName = event.target.name;
      const targetValue = event.target.value;
      console.log(targetValue)
      setInfo1((info1) => ({
        ...info1,
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
      console.log("nthing")
    }
  
  
    return (<div>
      <Card className='card-mother ' style={{ width: 298, height: 240, border: 'none' }}>
        <div className='Info-abone'>
  
          <form onSubmit={handleRegister}>
            <div><label className='header-mom'> Bilmemiz gereken başka hangi detaylar var</label> </div>
            <div>
              <textarea onChange={onInputChanged} name='name' className='text-description' type='text' placeholder='gir şite bişey'></textarea>
            </div>
          </form>
        </div>
        <ActionButtons {...props} nextStep={props.nextStep} />
      </Card>
    </div>);
  
  };
  