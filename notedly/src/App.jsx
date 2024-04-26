import { useState, useRef, useEffect } from "react";
import "./App.css";

import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoFooter from "./components/TodoFooter";

function App() {
  const [todos, setTodos] = useState([]);
  const idRef = useRef(0);
  const onCreate = (content, isDone) => {
    const newTodo = {
      id: idRef.current++,
      content: content,
      isDone: isDone,
      created_at: new Date().toLocaleString(),
    };
    setTodos(...todos, newTodo);
  };
  return (
    <>
      <TodoHeader />
      <TodoInput />
      <TodoList />
      <TodoFooter />
    </>
  );
}

export default App;
