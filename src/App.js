import React, { Component } from 'react';
import './App.css';
import Todo from './Todo';
import NewTodo from './NewTodo';

class App extends Component {
  render() {
    return (
      <div>
        <div className="checklist">
          <div className="header">
            <div id="todoIcon"></div>
            <div className="header-title">
              <h1>To-Do  List</h1>
            </div>
            <hr/>
          </div>
          <div className="items">

            <Todo/>

            <NewTodo/>

          </div>

          <div className="footer">
            <div className="remove-completed">
              <button type="submit" id="removeCompletedButton">
                <div className="remove-button">
                  <div id="removeCompletetedIcon"></div>
                  <text>Remove Completed</text>
                </div>
              </button>
            </div>
            <div className="remove-all">
              <button type="submit" id="removeAllButton">
                <div className="remove-button">
                  <div id="removeAllIcon"></div>
                  <text>Remove All</text>
                </div>
              </button>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
