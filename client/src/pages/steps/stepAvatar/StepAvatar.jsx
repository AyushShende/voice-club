import { useDispatch, useSelector } from 'react-redux';
import { Card, Button, Loader } from '../../../components';
import { monkeyEmoji, monkeyAvatar } from '../../../assets';
import './StepAvatar.css';
import { useState } from 'react';
import { setAvatar } from '../../../store/activateSlice';
import { activate } from '../../../http';
import { setAuth } from '../../../store/authSlice';

const StepAvatar = ({ onNext }) => {
  const dispatch = useDispatch();
  const { name, avatar } = useSelector((state) => state.activate);

  const [image, setImage] = useState(monkeyAvatar);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const { data } = await activate({ name, avatar });
      if (data.status === 'success') {
        dispatch(setAuth(data));
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const captureImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
      dispatch(setAvatar(reader.result));
    };
  };

  if (loading) return <Loader message="Activation in progress..." />;

  return (
    <div className="card__wrapper">
      <Card Logo={monkeyEmoji} title={`Okay, ${name}`}>
        <p className="card__text">How’s this photo? </p>
        <div className="avatar__wrapper">
          <img src={image} alt="default avatar" />
        </div>
        <div className="input__file">
          <input
            onChange={captureImage}
            type="file"
            id="avatar__input"
            className="avatar__input"
          />
          <label className="avatar__label" htmlFor="avatar__input">
            Choose a different photo
          </label>
        </div>
        <Button onClick={handleSubmit} text="Next" />
      </Card>
    </div>
  );
};
export default StepAvatar;
