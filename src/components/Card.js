import "../styles/Card.css";

const Card = ({ children, className }) => {
  return <div className={"Card " + className}>{children}</div>;
};

export default Card;
