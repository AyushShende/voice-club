import { Card, Input, Button } from '../../../components';
import lockEmoji from '../../../assets/lock-emoji.png';
import './StepOtp.css';
import { useState } from 'react';

const StepOtp = ({ onNext }) => {
  const [otp, setOtp] = useState('');
  return (
    <div className="card__wrapper">
      <Card Logo={lockEmoji} title="Enter the code we just texted you">
        <Input value={otp} onChange={(e) => setOtp(e.target.value)} />
        <p className="otp__text">Didn’t receive? Tap to resend</p>
        <Button onClick={onNext} text="Next" />
      </Card>
    </div>
  );
};
export default StepOtp;
