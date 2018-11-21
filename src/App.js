import React, { Component } from 'react';
import './App.css';
import Todo from './Todo';

class App extends Component {
  render() {
    return (
      <div class="checklist">
        //Todo list header
        <div class="header">
          <div id="todoIcon"></div>
          <div class="header-title">
            <h1>To-Do  List</h1>
          </div>
          <hr>
        </div>
        //Todo list body
        <div class="items">

          //Todo list items
          <Todo/>

          //Add a new todo list item
          <div class="addItem">
            <div id="addIcon"></div>
            <div class="newTodo">
              <input placeholder="New To-Do" id="addTodoInput"/>
            </div>
            <hr>
          </div>
        </div>
        // Footer of the todo list
        <div class="footer">
          // Remove completed button
          <div class="remove-completed">
            <button type="submit" id="removeCompletedButton">
              <div class="remove-button">
                <div id="removeCompletetedIcon"></div>
                <text>Remove Completed</text>
              </div>
            </button>
          </div>
          // Remove all button
          <div class="remove-all">
            <button type="submit" id="removeAllButton">
              <div class="remove-button">
                <div id="removeAllIcon"></div>
                <text>Remove All</text>
              </div>
            </button>
          </div>
        </div>

      // End of todo list
      </div>
    );
  }
}

export default App;
