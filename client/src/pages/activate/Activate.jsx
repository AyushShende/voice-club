import { useState } from 'react';
import StepName from '../steps/stepName/StepName';
import StepAvatar from '../steps/stepAvatar/StepAvatar';
const steps = {
  1: StepName,
  2: StepAvatar,
};

const Activate = () => {
  const [step, setStep] = useState(1);
  const CurrentStep = steps[step];

  function onNext() {
    setStep(step + 1);
  }
  return <CurrentStep onNext={onNext} />;
};
export default Activate;
