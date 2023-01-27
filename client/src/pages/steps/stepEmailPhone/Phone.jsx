import { useState } from 'react';
import phone from '../../../assets/phone.png';
import { Input, Card, Button } from '../../../components';
import './StepEmailPhone.css';

const Phone = ({ onNext }) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <Card Logo={phone} title="Enter your phone number">
      <Input
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <Button onClick={onNext} text="Next" />
      <p className="card__bottom-text">
        By entering your number, you’re agreeing to our Terms of Service and
        Privacy Policy. Thanks!
      </p>
    </Card>
  );
};
export default Phone;
