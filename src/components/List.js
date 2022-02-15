import ListItem from "./ListItem";
import ListItemForm from "./ListItemForm";

const List = ({
  todos,
  addItem,
  onDeleteItem,
  onUp,
  onDown,
  onAddSubList,
  onDeleteSublist
}) => {
  const elements = todos.map((item, index, todos) => {
    return (
      <ListItem
        key={item.id}
        text={item.text}
        isSublist={item.isSublist}
        index={index}
        todosLen={todos.length}
        onDeleteItem={() => onDeleteItem(item.id)}
        onUp={() => onUp(index)}
        onDown={() => onDown(index)}
        onAddSubList={() => onAddSubList(item.id)}
        onDeleteSublist={() => onDeleteSublist(item.id)}
      />
    );
  });

  return (
    <ul className="list">
      {elements}
      <ListItemForm addItem={addItem} />
    </ul>
  );
};

export default List;
