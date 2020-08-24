import React from "react";
import ReactDOM from "react-dom";
import TodoApp from "./TodoApp";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <TodoApp />
  </React.StrictMode>,
  document.getElementById("root")
);
serviceWorker.unregister();
