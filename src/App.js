import React, { Component } from 'react';
import { AddNote } from './components/AddContent/AddNode/AddNote';
import { AddTodo } from './components/TaskList/AddTodo';
import { Calendar } from './components/Calendar/Calendar';
import './App.css';

export class App extends Component {
  state = {
    isTaskCreator: false,
  };

  loadTaskCreator = () => {
    this.setState({
      isTaskCreator: true,
    });
  }

  render() {
    return (
      <div className="App">
        <Calendar />
        <AddNote />
        {
          this.state.isTaskCreator
            ? (
              <AddTodo />
            )
            : (
              <button
                className="button button__task-creator"
                type="button"
                onClick={this.loadTaskCreator}
              >
                Add task
              </button>
            )
        }
      </div>
    );
  }
}
