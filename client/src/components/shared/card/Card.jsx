import './Card.css';
const Card = ({ children, title, Logo }) => {
  return (
    <div className="card">
      <header className="card__header">
        {Logo && <img src={Logo} alt="logo" />}
        {title && <h1 className="heading__primary">{title}</h1>}
      </header>
      {children}
    </div>
  );
};
export default Card;
