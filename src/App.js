//Brad Hodkinson
//Lab 8
// Requirements:
// {} add an ability to sort ToDos
//  - by created date
//  - by completed status

import React, { Component } from 'react';
import './App.css';
import NewTodo from './NewTodo';
import RemoveCompleted from './RemoveCompleted';
import RemoveAll from './RemoveAll';
import SortTodo from './SortTodo';
import Todo from './Todo';

class App extends Component {

  constructor(){
    super()
    this.state = {
      //api key, should find some clever way to hide it
      apiKey: "f1d8c98bb90164800f4d8bc7e8f945f1b1960695710dfc94396b9d3a97b08ff8",
      todos: []
    }
    this.removeAll = this.removeAll.bind(this)
    this.removeCompleted = this.removeCompleted.bind(this)
    this.deleteTodo = this.deleteTodo.bind(this)
    this.addTodo = this.addTodo.bind(this)
    this.updateCompleteTodo = this.updateCompleteTodo.bind(this)
    this.sortByCompleted = this.sortByCompleted.bind(this)
    this.sortByDate = this.sortByDate.bind(this)
  }

  componentDidMount(){
    //Make API call to fetch existing Todos.
    this.getTodos()
      .then(retrievedTodos => {
        this.setState(state => ({
              todos: retrievedTodos
            }));
        this.sortByDate()
        return true;
      })
      .catch(error => console.log('Error fetching todos:' + error))

  }

  sortByDate(){
    var sortedTodos = this.state.todos
    var oldestIndex = sortedTodos.length
    var temp = sortedTodos.length
    for(var i = 0; i < sortedTodos.length; i++){
      oldestIndex = i;
      for(var  j = i+1; j< sortedTodos.length; j++){
         if(sortedTodos[j].created < sortedTodos[oldestIndex].created){
            oldestIndex = j;
         }
      }
      temp = sortedTodos[i];
      sortedTodos[i] = sortedTodos[oldestIndex];
      sortedTodos[oldestIndex] = temp;
    }
    console.log(sortedTodos);
    this.setState({
      todos: sortedTodos
    })
  }

  sortByCompleted(){
    var completedTodos = []
    var incompletedTodos = []

    this.state.todos.forEach(function(todo) {
      if(todo.completed){
        completedTodos.push(todo)
      } else {
        incompletedTodos.push(todo)
      }
    });

    this.setState({
      todos: [...completedTodos, ...incompletedTodos]
    })
  }

  getTodos(onSuccess, onFail) {
    return new Promise((resolve, reject) => {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
          if (this.readyState === 4 && this.status === 200) {
            resolve(JSON.parse(this.responseText))
          } else if (this.readyState === 4) {
              console.log("Server Error");
              reject('Error')
          }
      }
      xhttp.open("GET", "https://api.kraigh.net/todos", true);
      xhttp.setRequestHeader("x-api-key", this.state.apiKey);
      xhttp.send();
    })
  }

  //function to update a completed todo on the server side
  updateCompleteTodo(id, complete){
    var updateTodos = []

    this.state.todos.forEach(function(todo) {
      if(todo.id === id){
        todo.completed = complete
      }
      updateTodos.push(todo)
    });

    this.setState({
      todos: updateTodos
    })

    var data = {
        completed: complete
    }
    // Initalize AJAX Request
    var xhttp = new XMLHttpRequest();

    xhttp.open("PUT", "https://api.kraigh.net/todos/"+id, true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.setRequestHeader("x-api-key", this.state.apiKey);
    xhttp.send(JSON.stringify(data));
  }


  addTodo(newTodo){
    this.generateNewTodo(newTodo)
      .then(newTodo => {
        this.setState(state => ({
              todos: [...this.state.todos, newTodo]
            }));
        return true;
      })
      .catch(error => console.log('Error fetching todos:' + error))
  }

  generateNewTodo(newTodo){
    return new Promise((resolve, reject) => {
      // Setting variable for form input (get from HTML form)
      var data = {
          text: newTodo
      }
      // Initalize AJAX Request
      var xhttp = new XMLHttpRequest();
      // Response handler
      xhttp.onreadystatechange = function() {
          // Wait for readyState = 4 & 200 response
          if (this.readyState === 4 && this.status === 200) {
              // parse JSON response
              var todo = JSON.parse(this.responseText);
              resolve(todo)
          } else if (this.readyState === 4) {
              // this.status !== 200, error from server
              console.log("Server Error");
              reject('Error');
          }
      };
      xhttp.open("POST", "https://api.kraigh.net/todos", true);

      xhttp.setRequestHeader("Content-type", "application/json");
      xhttp.setRequestHeader("x-api-key", this.state.apiKey);
      xhttp.send(JSON.stringify(data));
    })
  }

  removeTodo(id){
    // Initalize AJAX Request
    var xhttp = new XMLHttpRequest();

    xhttp.open("DELETE", "https://api.kraigh.net/todos/"+id, true);

    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.setRequestHeader("x-api-key", this.state.apiKey);
    xhttp.send();
  }

  deleteTodo(id){
    var remainingTodos = []

    this.state.todos.forEach(function(todo) {
      if(todo.id === id){
        this.removeTodo(todo.id)
      } else {
        remainingTodos.push(todo);
      }
    }, this);

    this.setState({
      todos: remainingTodos
    })
  }

  removeAll(){
    this.setState({
      todos: []
    })

    this.state.todos.map((todo) =>
      this.removeTodo(todo.id)
    )
  }

  removeCompleted(){
    var incompleteTodos = []

    this.state.todos.forEach(function(todo) {
      if(todo.completed){
        this.removeTodo(todo.id)
      } else {
        incompleteTodos.push(todo);
      }
    }, this);

    this.setState({
      todos: incompleteTodos
    })
  }

  render() {
    return (
      <div className="checklist">
        <div className="header">
          <div id="todoIcon"></div>
          <div className="header-title">
            <h1>To-Do  List</h1>
          </div>
          <SortTodo
          sortByDate={this.sortByDate}
          sortByCompleted={this.sortByCompleted}/>
          <hr/>
        </div>

        <div className="items" id="items">
          <div id="todoItems">
            {this.state.todos.map((todo) =>
              <Todo key={todo.id}
              id= {todo.id}
              text={todo.text}
              completed={todo.completed}
              deleteTodo={this.deleteTodo}
              updateCompleteTodo={this.updateCompleteTodo}/>
            )}
          </div>
          <NewTodo
          addTodo={this.addTodo}/>
        </div>

        <div className="footer">
          <RemoveCompleted
          removeCompleted={this.removeCompleted}/>
          <RemoveAll
          removeAll={this.removeAll}/>
        </div>

      </div>
    );
  }
}

export default App;
