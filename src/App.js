import "./App.css";
import { useState } from "react";
import { v4 } from "uuid";

import Button from "./Components/Button";
import Input from "./Components/Input";
import Label from "./Components/Label";
import TodoBlock from "./Components/TodoBlock";

function App() {
  const [text, setText] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [disability, setDisability] = useState(true);

  const handleChange = (event) => {
    setText(event.target.value);
    event.target.value ? setDisability(false) : setDisability(true);
  };

  const handleClick = () => setTodoList([...todoList, { text, id: v4() }]);

  const handleDelete = () => (text ? (setText(""), setDisability(true)) : null);

  const handleDeleteTodo = (num) => {
    setTodoList(todoList.filter((entry) => num !== entry.id));
  };

  return (
    <div className="app">
      <div>
        <h2>TodoList</h2>
      </div>
      <div className="inputSection">
        <Input
          className="input"
          value={text}
          onChange={handleChange}
          maxLength="80"
        />
        <div className="buttonSection">
          <Button
            className="addButton"
            text="ADD"
            onClick={handleClick}
            disabled={disability}
          />
          {text ? (
            <Button className="addButton" text="Clean" onClick={handleDelete} />
          ) : null}
        </div>
      </div>
      <div className="container">
        {todoList.map((entry, index) => (
          <TodoBlock
            key={v4()}
            text={entry.text}
            id={entry.id}
            click={() => handleDeleteTodo(entry.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
