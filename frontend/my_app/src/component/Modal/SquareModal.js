import React, { useState, useEffect } from 'react';
import { Card } from 'reactstrap';
import './style.css'
import StepWizard from 'react-step-wizard'
import axios from "axios";
import { Link } from 'react-router-dom';
import ActionButtons from './ActionButtons';
function SquareModal(props) {

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
  
    const [room, setRoom] = useState([])
   
    useEffect(() => {
      async function fetchBirds() {
  
        const URL = `http://localhost:5000/elma/questions/apartmantemizli/1`;
        try {
          const res = await axios.get(URL);
          console.log(res.data);
          setRoom(res.data);
        } catch (error) {
          console.log(error);
        }
      }
      fetchBirds();
    }, []);
  
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
    return <div>
  
  
      <Card className='card-mother ' style={{ width: 298, height: 240, border: 'none' }}>
  
        {
          room.map((roo) => (
            <div className='modal-body' key={roo.id}>
  
              <label className='modal-body-label'> {roo.questions} </label>
              <p className='desc'>{roo.definition}</p>
  
              < div>
                <div className='btn-db-mother'>
                  <i id="my" class="fas fa-check"></i>
                  <button onChange={onInputChanged} name='name' className='btn-db'> {roo.answers[0]}
                  </button></div>
                  <div className='btn-db-mother'>
                  <i id="my" class="fas fa-check"></i>
                  <button onChange={onInputChanged} name='name' className='btn-db'> {roo.answers[1]}
                  </button></div>
                  <div className='btn-db-mother'>
                  <i id="my" class="fas fa-check"></i>
                  <button onChange={onInputChanged} name='name' className='btn-db'> {roo.answers[2]}
                  </button></div>
                  <div className='btn-db-mother'>
                  <i id="my" class="fas fa-check"></i>
                  <button onChange={onInputChanged} name='name' className='btn-db'> {roo.answers[3]}
                  </button></div>
  
  
              </div>
  
            </div>
  
          ))
        }
  
        <ActionButtons {...props} nextStep={props.nextStep} />
      </Card>
  
    </div>;
  
  }


    export default SquareModal;