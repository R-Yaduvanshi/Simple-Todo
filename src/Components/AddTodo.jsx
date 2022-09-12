import React from "react";
import { useState } from "react";
import style from "./todo.module.css";

const AddTodo = ({ handleAddData, text, setText }) => {
  //   const [text, setText] = useState("");
  return (
    <div>
      <div className={style.input_div}>
        <input
          type="text"
          placeholder="Add your todo here"
          className={style.input}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className={style.btn_add} onClick={() => handleAddData(text)}>
          Add Task
        </button>
      </div>
    </div>
  );
};

export default AddTodo;
