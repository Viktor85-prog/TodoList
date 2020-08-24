import React, { Component } from "react";

class Todos extends React.Component {
  state = {
    text: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  hadleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit({
      id: Date(),
      complete: false,
      text: this.state.text,
    });
    this.setState({
      text: "",
    });
  };

  render() {
    return (
      <div className="menu1">
        <form onSubmit={this.hadleSubmit}>
          <input
            className="text"
            placeholder="...сюды...жиши..."
            name="text"
            value={this.state.text}
            onChange={this.handleChange}
          />
        </form>
        <button onClick={this.hadleSubmit}>Add</button>
      </div>
    );
  }
}

export default Todos;
