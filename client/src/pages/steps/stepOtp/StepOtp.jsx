import { Card, Input, Button } from '../../../components';
import { lockEmoji } from '../../../assets';
import { useState } from 'react';
import { verifyOtp } from '../../../http';
import { useDispatch, useSelector } from 'react-redux';
import { setAuth } from '../../../store/authSlice';

const StepOtp = ({ onNext }) => {
  const [otp, setOtp] = useState('');

  const { phone, hash } = useSelector((state) => state.auth.otp);
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    try {
      const { data } = await verifyOtp({ otp, phone, hash });
      console.log(data);
      dispatch(setAuth(data));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="card__wrapper">
      <Card Logo={lockEmoji} title="Enter the code we just texted you">
        <Input value={otp} onChange={(e) => setOtp(e.target.value)} />
        <p className="otp__text">Didn’t receive? Tap to resend</p>
        <Button onClick={handleSubmit} text="Next" />
      </Card>
    </div>
  );
};
export default StepOtp;
