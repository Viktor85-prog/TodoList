import React, { Component } from "react";
import "./TodoApp.css";
import Todos from "./Components/Todos";
import Todo from "./Components/Todo";

class TodoApp extends React.Component {
  state = {
    todos: [],
    todoToShow: "all",
    toggleAllComplete: true,
  };
  addTodo = (text) => {
    this.setState((state) => ({
      todos: [text, ...state.todos],
    }));
  };
  OnChangeComplete = (id) => {
    this.setState((state) => ({
      todos: state.todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      }),
    }));
  };

  updateTodoToShow = (show) => {
    this.setState({
      todoToShow: show,
    });
  };

  deleteTodo = (id) => {
    this.setState((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    }));
  };

  removeAllComplete = () => {
    this.setState((state) => ({
      todos: state.todos.filter((todo) => !todo.complete),
    }));
  };

  OnChangeCompleteAll = () => {
    this.setState((state) => ({
      todos: state.todos.map((todo) => ({
        ...todo,
        complete: state.toggleAllComplete,
      })),
      toggleAllComplete: !state.toggleAllComplete,
    }));
  };

  render = () => {
    let todos = [];

    if (this.state.todoToShow === "completed") {
      todos = this.state.todos.filter((todo) => todo.complete);
    } else if (this.state.todoToShow === "active") {
      todos = this.state.todos.filter((todo) => !todo.complete);
    } else if (this.state.todoToShow === "all") {
      todos = this.state.todos;
    }

    return (
      <div className="App">
        <div className="App-navbar">
          <div>
            todos left:
            {this.state.todos.filter((todo) => !todo.complete).length}
          </div>
          <hr />
          <div>
            <div className="">
              <button onClick={() => this.updateTodoToShow("all")}>All</button>
            </div>
            <div className="">
              <button onClick={() => this.updateTodoToShow("active")}>
                Active
              </button>
            </div>
            <div className="">
              <button onClick={() => this.updateTodoToShow("completed")}>
                Completed
              </button>
            </div>
          </div>
          <div>
            <div className="">
              <button onClick={this.OnChangeCompleteAll}>
                Change Complete
              </button>
            </div>
            <div className="">
              <button onClick={this.removeAllComplete}>Del Completed</button>
            </div>
          </div>
        </div>
        <div className="App-main">
          <header className="App-header">Todo App</header>
          <hr />
          <Todos onSubmit={this.addTodo} />

          <div className="todo">
            {todos.map((todo) => (
              <Todo
                className="todo"
                key={todo.id}
                todo={todo}
                onClickDelete={() => this.deleteTodo(todo.id)}
                OnChangeComplete={() => this.OnChangeComplete(todo.id)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  };
}
export default TodoApp;
