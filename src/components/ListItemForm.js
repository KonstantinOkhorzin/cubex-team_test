import { useState } from "react";

const ListItemForm = ({ addItem }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    addItem(text);
    setText("");
  };

  return (
    <li className="list-item_form">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <button type="submit">Add</button>
      </form>
    </li>
  );
};

export default ListItemForm;
