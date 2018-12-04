import React, { Component } from 'react';
import './SortTodo.css';

class SortTodo extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentSort: "date",
      sortByDate: props.sortByDate,
      sortByCompleted: props.sortByCompleted,
    }
  }

  resortTodos = (event) => {
    let newSort = event.target.value

    this.setState({
      currentSort: newSort
    });

    if(newSort === "completed"){
      this.state.sortByCompleted()
    } else {
      this.state.sortByDate()
    }

  }

  render() {
    return (
      <div className="sortTodo">
        <h2>Sort By:</h2>
        <select value={this.state.currentSort} onChange={this.resortTodos}>
          <option value="date">Date</option>
          <option value="completed">Completed</option>
        </select>
      </div>
    );
  }
}


export default SortTodo;
