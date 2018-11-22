import React, { Component } from 'react';
import './App.css';
import Todo from './Todo';
import NewTodo from './NewTodo';
import RemoveCompleted from './RemoveCompleted';
import RemoveAll from './RemoveAll';


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

            <RemoveCompleted/>

            <RemoveAll/>

        



          </div>

        </div>
      </div>
    );
  }
}

export default App;
