import { useState } from 'react';
import emailEmoji from '../../../assets/email-emoji.png';
import { Input, Card, Button } from '../../../components';
import './StepEmailPhone.css';

const Email = ({ onNext }) => {
  const [email, setEmail] = useState('');

  return (
    <Card Logo={emailEmoji} title="Enter your email id">
      <Input value={email} onChange={(e) => setEmail(e.target.value)} />
      <Button onClick={onNext} text="Next" />
      <p className="card__bottom-text">
        By entering your email, you’re agreeing to our Terms of Service and
        Privacy Policy. Thanks!
      </p>
    </Card>
  );
};
export default Email;
