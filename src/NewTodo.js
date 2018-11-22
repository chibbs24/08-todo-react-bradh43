import React, { Component } from 'react';
import './NewTodo.css';

class NewTodo extends Component {
  render() {
    return (
      <div class="addItem">
        <div id="addIcon"></div>
        <div class="newTodo">
          <input placeholder="New To-Do" id="addTodoInput"/>
        </div>
        <hr/>
      </div>
    );
  }
}

export default NewTodo;
