import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {

  constructor(props){
      super(props)
      this.state = {
        id: props.id,
        text: props.text,
        completed: props.completed,
        deleteTodo: props.deleteTodo,
        updateCompleteTodo: props.updateCompleteTodo,
      }
  }

  completeTodo = () => {
    this.setState(state => ({
      completed: !state.completed,
    }));
    this.checkTodo()
    this.state.updateCompleteTodo(this.state.id, !this.state.completed)
  }

  componentDidMount(){
    if(this.state.completed){
      this.checkTodo()
    }
  }

  checkTodo(){
    this.refs.checkIcon.classList.toggle("check");
    this.refs.title.classList.toggle("strikeText");
  }

  render(){
    return (
      <div id={this.state.id} className="todoItem">
        <div ref="checkIcon" id="checkIcon" onClick={this.completeTodo}></div>
        <div ref="title" className="todo-title">
          <h2>{this.state.text}</h2>
        </div>
        <div id="removeIcon" onClick={() => this.state.deleteTodo(this.state.id)}></div>
        <hr/>
      </div>
    );
  }
}

export default Todo;
