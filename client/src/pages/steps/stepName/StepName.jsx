import { useState } from 'react';
import { Card, Input, Button } from '../../../components';
import specsEmoji from '../../../assets/specs-emoji.png';
import { useDispatch, useSelector } from 'react-redux';
import { setName } from '../../../store/activateSlice';

const StepName = ({ onNext }) => {
  const dispatch = useDispatch();
  const { name } = useSelector((state) => state.activate);

  const [fullName, setFullName] = useState(name);

  const handleSubmit = () => {
    if (!fullName) {
      return;
    }

    dispatch(setName(fullName));
    onNext();
  };

  return (
    <div className="card__wrapper">
      <Card Logo={specsEmoji} title="What’s your full name?">
        <Input value={fullName} onChange={(e) => setFullName(e.target.value)} />
        <p className="card__text">People use real names at voiceclub :) </p>
        <Button onClick={handleSubmit} text="Next" />
      </Card>
    </div>
  );
};
export default StepName;
