import { deleteQuote, likeQuote } from "../utils/simpsonsSlice";
import Button from "./Button";
import { useDispatch } from "react-redux";

const Controls = (props) => {
  const { id, liked } = props;
  const dispatch = useDispatch();

  return (
    <div>
      <Button button={liked ? "Liked" : "Like"} highlight={liked} onClick={() => dispatch(likeQuote(id))} />
      <Button button="Delete" onClick={() => dispatch(deleteQuote(id))} />
    </div>
  );
};

export default Controls;
