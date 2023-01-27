import './Card.css';
const Card = ({ children, title, Logo }) => {
  return (
    <div className="card">
      <header className="card__header">
        <img src={Logo} alt="logo" />
        <h1 className="heading__primary">{title}</h1>
      </header>
      {children}
    </div>
  );
};
export default Card;
