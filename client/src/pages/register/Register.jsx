import './Register.css';
import StepEmailPhone from '../steps/stepEmailPhone/StepEmailPhone';
import StepOtp from '../steps/stepOtp/StepOtp';
import StepAvatar from '../steps/stepAvatar/StepAvatar';
import StepName from '../steps/stepName/StepName';
import StepUserName from '../steps/stepUserName/StepUserName';
import { useState } from 'react';
const steps = {
  1: StepEmailPhone,
  2: StepOtp,
  3: StepName,
  4: StepAvatar,
  5: StepUserName,
};
const Register = () => {
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
export default Register;
