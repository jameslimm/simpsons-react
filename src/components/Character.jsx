import Quote from "./Quote";
import Image from "./Image";
import Name from "./Name";
import Controls from "./Controls";

const Character = (props) => {
  // Deconstruct props, only send required data to each child component
  const { image, character, quote, characterDirection, liked, id } = props.quoteFullData;

  return (
    <div className="quote-box">
      <div>
        <Name name={character} />
        <Quote quote={quote} />
        <Controls id={id} liked={liked} />
      </div>
      <Image image={image} characterDirection={characterDirection} alt={character} />
    </div>
  );
};

export default Character;
