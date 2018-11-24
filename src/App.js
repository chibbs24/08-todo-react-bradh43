//Brad Hodkinson
//Lab 8
// Requirements:
// {} add an ability to sort ToDos
//  - by created date
//  - by completed status

import React, { Component } from 'react';
import './App.css';
import Todo from './Todo';
import NewTodo from './NewTodo';
import RemoveCompleted from './RemoveCompleted';
import RemoveAll from './RemoveAll';
import SortTodo from './SortTodo';



class App extends Component {
  render() {
    return (
      <div className="checklist">
        <div className="header">
          <div id="todoIcon"></div>
          <div className="header-title">
            <h1>To-Do  List</h1>
          </div>
          <SortTodo/>
          <hr/>
        </div>

        <div className="items" id="items">
          <Todo/>
          <NewTodo/>
        </div>

        <div className="footer">
          <RemoveCompleted/>
          <RemoveAll/>
        </div>

      </div>
    );
  }
}

export default App;





// //api key, should find some clever way to hide it, maybe php?
// let apiKey ="f1d8c98bb90164800f4d8bc7e8f945f1b1960695710dfc94396b9d3a97b08ff8";
// console.log(apiKey);
// //load action listeners once the page has loaded
// window.onload = function() {
//   // Remove completed button action listener
//   document.getElementById("removeCompletedButton").addEventListener('click', function(){
//     removeCompletedTodos();
//   });
//
//   // Remove all button action listener
//   document.getElementById("removeAllButton").addEventListener('click', function(){
//     removeAllTodos();
//   });
//
//   //add new todo when enter key is pressed
//   document.getElementById("addTodoInput").addEventListener('keyup', function(e){
//     //check if key pressed is the eneter key
//     if (e.keyCode === 13) {
//       //add todo to be rendered and added to the server
//       addTodo(this.value);
//       //clear text field
//       this.value="";
//     }
//   });
//   //add new todo when plus button is clicked
//   document.getElementById("addIcon").addEventListener('click', function(){
//     //add todo to be rendered and added to the server
//     addTodo(document.getElementById("addTodoInput").value);
//     //clear text field
//     document.getElementById("addTodoInput").value="";
//   });
//   //render all the todos from the server
//   renderTodos();
// }
//
//
// //function to load and render all the todos from the server
// function renderTodos(){
//   var xhttp = new XMLHttpRequest();
//
//   xhttp.onreadystatechange = function() {
//       if (this.readyState === 4 && this.status === 200) {
//           document.getElementById("todoItems").innerHTML = "";
//           var todos = JSON.parse(this.responseText);
//           for(var i=0; i < todos.length; i++) {
//             renderTodo(todos[i]);
//           }
//       }else if (this.readyState === 4) {
//           // this.status !== 200, error from server
//           console.log("Server Error");
//       }
//   };
//   xhttp.open("GET", "https://api.kraigh.net/todos", true);
//   console.log(this);
//   xhttp.setRequestHeader("x-api-key", this.apiKey);
//   xhttp.send();
// }
//
// //function to create HTML and render an indivudial todo
// function renderTodo(todo){
//   var node = document.createElement("DIV");
//   node.classList.add("todoItem");
//
//   // add todo item id to node
//   node.id = todo.id;
//
//   //node for check box
//   var checkNode = document.createElement("DIV");
//   checkNode.id = "checkIcon";
//   node.value = todo.completed;
//   //add function to check/complete a todo
//   checkNode.addEventListener('click', function(){
//       //add toggle effect to check box by inversing the boolean value
//       document.getElementById(node.id).value = !document.getElementById(node.id).value
//       //style depending on if the todo is complete or not
//       if(document.getElementById(node.id).value){
//         document.getElementById(node.id).getElementsByClassName('todo-title')[0].firstElementChild.style.textDecoration = "line-through";
//         document.getElementById(node.id).getElementsByClassName('todo-title')[0].firstElementChild.style.color = "darkGray";
//         this.style.backgroundImage="url('assets/icons/check.png')";
//       } else {
//         document.getElementById(node.id).getElementsByClassName('todo-title')[0].firstElementChild.style.textDecoration = "none";
//         document.getElementById(node.id).getElementsByClassName('todo-title')[0].firstElementChild.style.color = "black";
//         this.style.backgroundImage="url('assets/icons/uncheck.png')";
//       }
//       //update the completed todo on the server side
//       updateCompleteTodo(node.id, document.getElementById(node.id).value);
//   });
//
//   //node for the title of the todo
//   var todoTitleNode = document.createElement("DIV");
//   todoTitleNode.classList.add("todo-title");
//   //node for the text of the title for the todo
//   var titleNode = document.createElement("H2");
//   //set todo title
//   titleNode.innerHTML = todo.text;
//
//   //style depending on if the todo is complete or not
//   if(todo.completed){
//     titleNode.style.textDecoration = "line-through";
//     titleNode.style.color = "darkGray";
//     checkNode.style.backgroundImage="url('assets/icons/check.png')";
//   } else {
//     checkNode.style.backgroundImage="url('assets/icons/uncheck.png')";
//   }
//   todoTitleNode.appendChild(titleNode);
//
//   //node for the remove button
//   var removeNode = document.createElement("DIV");
//   removeNode.id = "removeIcon";
//   //action to remove a todo when delete button is clicked
//   removeNode.addEventListener('click', function(){
//     //clear the todo html
//     node.innerHTML = "";
//     //remove the todo from the server side
//     removeTodo(node.id);
//   });
//
//   //node for the line to seperate todos
//   var hrNode = document.createElement("HR");
//
//   //add the child nodes to the main todo node
//   node.appendChild(checkNode);
//   node.appendChild(todoTitleNode);
//   node.appendChild(removeNode);
//   node.appendChild(hrNode);
//   document.getElementById("todoItems").appendChild(node);
// }
//
// //function to add a new todo to the server side
// function addTodo(newTodo){
//   // Setting variable for form input (get from HTML form)
//   var data = {
//       text: newTodo
//   }
//
//   // Initalize AJAX Request
//   var xhttp = new XMLHttpRequest();
//
//   // Response handler
//   xhttp.onreadystatechange = function() {
//       // Wait for readyState = 4 & 200 response
//       if (this.readyState === 4 && this.status === 200) {
//           // parse JSON response
//           var todo = JSON.parse(this.responseText);
//           renderTodo(todo);
//       } else if (this.readyState === 4) {
//           // this.status !== 200, error from server
//           console.log("Server Error");
//       }
//   };
//   xhttp.open("POST", "https://api.kraigh.net/todos", true);
//
//   xhttp.setRequestHeader("Content-type", "application/json");
//   xhttp.setRequestHeader("x-api-key", this.apiKey);
//   xhttp.send(JSON.stringify(data));
// }
//
// //function to update a completed todo on the server side
// function updateCompleteTodo(id, complete){
//   var data = {
//       completed: complete
//   }
//   // Initalize AJAX Request
//   var xhttp = new XMLHttpRequest();
//
//   xhttp.open("PUT", "https://api.kraigh.net/todos/"+id, true);
//
//   xhttp.setRequestHeader("Content-type", "application/json");
//   xhttp.setRequestHeader("x-api-key", this.apiKey);
//   xhttp.send(JSON.stringify(data));
// }
//
// //function to edit the text of a todo, not yet utilized though
// // function editTodo(editText, id){
// //     var data = {
// //       text: editText
// //     }
// //
// //     // Initalize AJAX Request
// //     var xhttp = new XMLHttpRequest();
// //
// //     xhttp.open("PUT", "https://api.kraigh.net/todos/"+id, true);
// //
// //     xhttp.setRequestHeader("Content-type", "application/json");
// //     xhttp.setRequestHeader("x-api-key", this.apiKey);
// //     xhttp.send(JSON.stringify(data));
// // }
//
// //function to delte a todo from the server side
// function removeTodo(id){
//   //var data = {}
//   // Initalize AJAX Request
//   var xhttp = new XMLHttpRequest();
//
//   xhttp.open("DELETE", "https://api.kraigh.net/todos/"+id, true);
//
//   xhttp.setRequestHeader("Content-type", "application/json");
//   xhttp.setRequestHeader("x-api-key", this.apiKey);
//   //xhttp.send(JSON.stringify(data));
//   xhttp.send();
// }
//
// //function to remove all the completed todos, just a bonus function I added
// function removeCompletedTodos(){
//   var xhttp = new XMLHttpRequest();
//
//   xhttp.onreadystatechange = function() {
//       if(this.readyState === 4 && this.status === 200) {
//           var todos = JSON.parse(this.responseText);
//           for(var i=0; i < todos.length; i++) {
//             if(todos[i].completed){
//               document.getElementById(todos[i].id).innerHTML = "";
//               removeTodo(todos[i].id);
//             }
//
//           }
//
//       }
//   };
//
//   xhttp.open("GET", "https://api.kraigh.net/todos", true);
//   xhttp.setRequestHeader("Content-type", "application/json");
//   xhttp.setRequestHeader("x-api-key", this.apiKey);
//   xhttp.send();
// }
//
// //another bonus function I added that removes all the todos
// function removeAllTodos(){
//
//     document.getElementById("todoItems").innerHTML = "";
//
//     var xhttp = new XMLHttpRequest();
//
//     xhttp.onreadystatechange = function() {
//         if (this.readyState === 4 && this.status === 200) {
//             var todos = JSON.parse(this.responseText);
//             for(var i=0; i < todos.length; i++) {
//               //this.todoArray.push(todos[i]);
//               removeTodo(todos[i].id);
//
//             }
//         }
//     };
//
//     xhttp.open("GET", "https://api.kraigh.net/todos", true);
//     xhttp.setRequestHeader("Content-type", "application/json");
//     xhttp.setRequestHeader("x-api-key", this.apiKey);
//     xhttp.send();
//
//   }
