import './Login.css';
import StepEmailPhone from '../steps/stepEmailPhone/StepEmailPhone';
import StepOtp from '../steps/stepOtp/StepOtp';
import { useState } from 'react';
const steps = {
  1: StepEmailPhone,
  2: StepOtp,
};
const Login = () => {
  const [step, setStep] = useState(1);
  const CurrentStep = steps[step];

  function onNext() {
    setStep(step + 1);
  }

  return (
    <div>
      <CurrentStep onNext={onNext} />
    </div>
  );
};
export default Login;
