import './Button.css';
import { FaArrowRight } from 'react-icons/fa';
const Button = ({ text, onClick }) => {
  return (
    <button className="btn" onClick={onClick}>
      <span>{text}</span>
      <FaArrowRight />
    </button>
  );
};
export default Button;
