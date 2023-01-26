import Button from '../../components/shared/button/Button';
import Card from '../../components/shared/card/Card';
import './Home.css';

import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/register');
  };

  return (
    <div>
      <div className="card__wrapper">
        <Card title="Welcome to voiceclub">
          <p className="home__card-text">
            Welcome to Voiceclub, your go-to cafe for chilling. Voiceclub is an
            audio meet platform where you can create rooms and chill with your
            friends or host a webinar and much more!
          </p>
          <Button onClick={handleClick} text="Get your username" />
          <div className="home__card-footer">
            <span>Already a member?</span>
            <Link className="home__card-link" to="/login">
              Sign In
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
};
export default Home;
