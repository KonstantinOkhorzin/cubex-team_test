import App from "../App";

const ListItem = ({
  text,
  isSublist,
  onDeleteItem,
  index,
  onUp,
  todosLen,
  onDown,
  onAddSubList,
  onDeleteSublist
}) => {
  return (
    <li className="list-item">
      <div className="list-item_content">
        {isSublist ? null : <button onClick={onAddSubList}>Add Sublist</button>}
        <div className="text">{text}</div>
        {index ? <button onClick={onUp}>UP</button> : null}
        {index !== todosLen - 1 ? <button onClick={onDown}>DOWN</button> : null}
        <button onClick={onDeleteItem}>Delete</button>
      </div>
      {isSublist ? (
        <>
          <button onClick={onDeleteSublist}>Delete Sublist</button>
          <App />
        </>
      ) : null}
    </li>
  );
};

export default ListItem;
