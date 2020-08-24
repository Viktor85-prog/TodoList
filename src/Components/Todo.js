import React, { Component } from "react";

let Todo = (props) => {
  return (
    <div>
      <div className="todos">
        <div>
          <input
            type="checkbox"
            onClick={props.OnChangeComplete}
            checked={props.todo.complete}
          />
        </div>

        <div className={props.todo.complete ? "todoC" : null}>
          {props.todo.text}
        </div>
        <div>
          <button onClick={props.onClickDelete}>x</button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
