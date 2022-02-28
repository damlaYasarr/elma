import React, { useState } from 'react';
import './style.css'
import 'bootstrap'
import { Card } from 'reactstrap';
import StepWizard from 'react-step-wizard'
import SquareModal from './SquareModal'
import AdressModal from './AdressModal'
import AboneModal from './AboneModal';
import InfoModal from './InfoModal';
import 'bootstrap'



const Modals = (props) => {
  const [stepWizard, setStepWizard] = useState(null);
  const [user, setUser] = useState({});
  const [activeStep, setActiveStep] = useState(0);

  const assignStepWizard = (instance) => {
    setStepWizard(instance);
  };

  const assignUser = (val) => {
    console.log("parent receive user callback");
    console.log(val);
    setUser((user) => ({
      ...user,
      ...val
    }));
  };

  const handleStepChange = (e) => {
    console.log("step change");
    console.log(e);
    setActiveStep(e.activeStep - 1);
  };

  const handleComplete = () => {
    alert("You r done. TQ");
  };


  return (

    <div className='body-modal'>
      <Card className='card-mother' >
        <div className='header'>
          <button data-toggle="modal" data-target="#exampleModalLong" className='modal-btn'>Yardım</button>
          <label className='header-mom'> Ev temizliği </label>
        </div>
        <div className='header-alt'>
          <label className='header-mom' >Haftalık </label>
          <span>107TL</span>
        </div>
        <hr className='hr' />


        <StepWizard instance={assignStepWizard} onStepChange={handleStepChange} >
          <SquareModal />
          <AboneModal userCallback={assignUser} />
          <InfoModal userCallback={assignUser} />
          <AdressModal userCallback={assignUser} />
        </StepWizard>
      

      </Card>
    </div>


  )
}



export default Modals;