import { useState } from 'react';
import Email from './Email';
import Phone from './Phone';
import './StepEmailPhone.css';
import phoneEmoji from '../../../assets/phone-white.png';
import mailEmoji from '../../../assets/mail-white.png';

const emailPhoneMap = {
  phone: Phone,
  email: Email,
};

const StepEmailPhone = ({ onNext }) => {
  const [type, setType] = useState('phone');

  const RenderedComponent = emailPhoneMap[type];
  return (
    <div className="card__wrapper">
      <div>
        <div className="btn__wrapper">
          <button
            className={`tab__btn ${type === 'phone' ? 'active__btn' : ''}`}
            onClick={() => setType('phone')}
          >
            <img src={phoneEmoji} alt="phone emoji" />
          </button>
          <button
            className={`tab__btn ${type === 'email' ? 'active__btn' : ''}`}
            onClick={() => setType('email')}
          >
            <img src={mailEmoji} alt="mail emoji" />
          </button>
        </div>
        <RenderedComponent onNext={onNext} />
      </div>
    </div>
  );
};
export default StepEmailPhone;
