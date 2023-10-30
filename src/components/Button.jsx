const Button = (props) => {
  const { button, id, highlight, onClick } = props;
  return (
    <button id={id} className={highlight ? "highlighted" : "not-highlighted"} onClick={onClick}>
      {button}
    </button>
  );
};

export default Button;
