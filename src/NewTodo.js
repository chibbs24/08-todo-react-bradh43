import React, { Component } from 'react';
import './NewTodo.css';


class NewTodo extends Component {

  constructor(props){
    super(props)
    this.state={
      addTodo: props.addTodo
    }
  }

  addButtonClick = () => {
    this.addTodoItem(this.refs.newTodoInput.value);
  }

  enterKeyPress = (e) => {
      if(e.keyCode === 13){
         this.addTodoItem(e.target.value);
      }
   }

   addTodoItem(newTodo) {
     this.refs.newTodoInput.value = ""
     this.state.addTodo(newTodo)
   }

  render() {
    return (
      <div className="addItem">
        <div onClick={this.addButtonClick} id="addIcon"></div>
        <div className="newTodo">
          <input onKeyDown={this.enterKeyPress} placeholder="New To-Do" id="addTodoInput" ref="newTodoInput"/>
        </div>
        <hr/>
      </div>
    );
  }
}

export default NewTodo;
