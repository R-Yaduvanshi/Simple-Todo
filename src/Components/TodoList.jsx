import React from "react";
import style from "./todo.module.css";
import TodoItem from "./TodoItem";
// Map function do here

const TodoList = ({ data, handleDelete, handleToggle }) => {
  return (
    <>
      {data.map((item) => (
        <TodoItem
          key={item.id}
          id={item.id}
          title={item.title}
          status={item.status}
          handleDelete={handleDelete}
          handleToggle={handleToggle}
        />
      ))}
    </>
  );
};

export default TodoList;
