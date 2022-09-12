import React from "react";
import style from "./todo.module.css";
import { TiTick } from "react-icons/ti";
import { FaTrashAlt } from "react-icons/fa";
import { BiCheckCircle } from "react-icons/bi";
import { BsFillFileArrowUpFill } from "react-icons/bs";
// import { FcCheckmark } from "react-icons/fc";

const TodoItem = ({ title, status, id, handleDelete, handleToggle }) => {
  return (
    <div className={style.tl_main_container}>
      <div className={style.item_div}>
        <h3>{title}</h3>
        <h3 className={style.completetext}>
          {status ? (
            <h3 style={{ color: "green" }}>Completed</h3>
          ) : (
            <h3 style={{ color: "red" }}>Not Completed</h3>
          )}
        </h3>
      </div>
      <div className={style.btn_div}>
        <button className={style.tl_btn_mark} onClick={() => handleToggle(id)}>
          {!status ? (
            <BiCheckCircle className={style.bicheck} />
          ) : (
            <BsFillFileArrowUpFill className={style.moveup} />
          )}
        </button>
        <button
          className={style.tl_delete_btn}
          onClick={() => handleDelete(id)}
        >
          <FaTrashAlt className={style.fatrash} />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
