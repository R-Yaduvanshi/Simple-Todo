import React from "react";
import { useState } from "react";
import AddTodo from "./AddTodo";
import style from "./todo.module.css";
import TodoList from "./TodoList";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const handleAddData = () => {
    if (!text) {
      //Do Nothing
    } else {
      setTodos([
        ...todos,
        {
          id: todos.length + Date.now(),
          title: text,
          status: false,
        },
      ]);
      setText("");
    }
  };

  const handleToggle = (id) => {
    let updatedData = todos.map((item) =>
      item.id === id
        ? {
            ...item,
            status: !item.status,
          }
        : item
    );
    setTodos(updatedData);
  };

  const handleDelete = (id) => {
    let updatedData = todos.filter((item) => item.id !== id);
    setTodos(updatedData);
  };

  return (
    <div className={style.main_container}>
      <h1 className={style.head}>TODO CRUD APP</h1>
      <div className={style.sub_container}>
        <AddTodo handleAddData={handleAddData} text={text} setText={setText} />
        <div className={style.todo_list_div}>
          {todos.length === 0 ? (
            <h2 className={style.tasktext}>Please Add Task</h2>
          ) : (
            <h2 className={style.tasktext}>Your Task</h2>
          )}

          <TodoList
            data={todos.filter((item) => !item.status)}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        </div>
        <div>
          <h2 className={style.tasktext}>Completed Task</h2>
          <TodoList
            data={todos.filter((item) => item.status)}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        </div>
      </div>
    </div>
  );
};

export default Todo;
