import Button from '../../components/shared/button/Button';
import Card from '../../components/shared/card/Card';
import Logo from '../../assets/logo.png';
import './Home.css';

import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/authenticate');
  };

  return (
    <div>
      <div className="card__wrapper">
        <Card Logo={Logo} title="Welcome to voiceclub">
          <p className="home__card-text">
            Welcome to Voiceclub, your go-to cafe for chilling. Voiceclub is an
            audio meet platform where you can create rooms and chill with your
            friends or host a webinar and much more!
          </p>
          <Button onClick={handleClick} text="Get Started" />
        </Card>
      </div>
    </div>
  );
};
export default Home;
