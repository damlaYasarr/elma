
import { Link } from 'react-router-dom';
export default function ActionButtons (props) {
    const handleBack = () => {
      props.previousStep();
    };
  
    const handleNext = () => {
      props.nextStep();
    };
  
    const handleFinish = () => {
      props.lastStep();
    };
  
    return (
      <div>
  
        <div className='mdl-footer'>
          {/* geri giderken modal olmalı */}
          {props.currentStep > 1 && (
  
            <button className='btn-back' onClick={handleBack}>Back</button>
  
          )}
          {props.currentStep < props.totalSteps && (
            <button className='btn-continue' onClick={handleNext}>DEVAM</button>
          )}
          {props.currentStep === props.totalSteps && (
            <Link to='/'>  <button className='btn-continue' onClick={handleFinish}>BİTİR</button></Link>
          )}
        </div>
      </div>
    );
  };
  