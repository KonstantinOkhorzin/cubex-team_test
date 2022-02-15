import { useState } from "react";

import List from "./components/List";

import "./styles.css";

export default function App() {
  const [todos, setTodos] = useState([]);

  const addItem = (text) => {
    const newItem = {
      text,
      id: Date.now(),
      isSublist: false
    };
    setTodos([...todos, newItem]);
  };

  const onDeleteItem = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  const onAddSubList = (id) => {
    setTodos(
      todos.map((item) => {
        if (item.id === id) {
          return { ...item, isSublist: true };
        }
        return item;
      })
    );
  };

  const onDeleteSublist = (id) => {
    setTodos(
      todos.map((item) => {
        if (item.id === id) {
          return { ...item, isSublist: false, todos: null };
        }
        return item;
      })
    );
  };

  const onUp = (index) => {
    const before = todos.slice(0, index - 1);
    const after = todos.slice(index + 1);
    before.push(todos[index]);
    before.push(todos[index - 1]);
    setTodos([...before, ...after]);
  };

  const onDown = (index) => {
    const before = todos.slice(0, index);
    const after = todos.slice(index + 2);
    before.push(todos[index + 1]);
    before.push(todos[index]);
    setTodos([...before, ...after]);
  };

  return (
    <div className="App">
      <List
        todos={todos}
        addItem={addItem}
        onDeleteItem={onDeleteItem}
        onUp={onUp}
        onDown={onDown}
        onAddSubList={onAddSubList}
        onDeleteSublist={onDeleteSublist}
      />
    </div>
  );
}
