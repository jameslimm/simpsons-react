import Button from "./Button";

const Controls = (props) => {
  const { onLikeClicked, onDeleteClicked, id, liked } = props;
  return (
    <div>
      <Button button={liked ? "Liked" : "Like"} highlight={liked} id={id} onClick={onLikeClicked} />
      <Button button="Delete" id={id} onClick={onDeleteClicked} />
    </div>
  );
};

export default Controls;
