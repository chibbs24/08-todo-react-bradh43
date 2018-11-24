import React, { Component } from 'react';
import './SortTodo.css';

class SortTodo extends Component {

  render() {
    return (
      <div className="sortTodo">
        <h2>Sort By:</h2>
        <select>
          <option value="Date">Date</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
    );
  }
}


export default SortTodo;
