import { useState } from 'react';
import phone from '../../../assets/phone.png';
import { Input, Card, Button } from '../../../components';
import './StepEmailPhone.css';
import { sendOtp } from '../../../http';
import { useDispatch } from 'react-redux';
import { setOtp } from '../../../store/authSlice';

const Phone = ({ onNext }) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = async () => {
    try {
      const { data } = await sendOtp({ phone: phoneNumber });
      console.log(data);
      dispatch(setOtp({ phone: data.phone, hash: data.hash }));
      onNext();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card Logo={phone} title="Enter your phone number">
      <Input
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <Button onClick={handleSubmit} text="Next" />
      <p className="card__bottom-text">
        By entering your number, you’re agreeing to our Terms of Service and
        Privacy Policy. Thanks!
      </p>
    </Card>
  );
};
export default Phone;
