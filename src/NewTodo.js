import React, { Component } from 'react';
import './NewTodo.css';


class NewTodo extends Component {

  addButtonClick = () => {
    this.addTodoItem(this.refs.newTodoInput.value);
  }

  enterKeyPress = (e) => {
      if(e.keyCode === 13){
         this.addTodoItem(e.target.value);
      }
   }

   addTodoItem(newTodo) {
     console.log(newTodo);
     // // Setting variable for form input (get from HTML form)
     // var data = {
     //     text: newTodo
     // }
     //
     // // Initalize AJAX Request
     // var xhttp = new XMLHttpRequest();
     //
     // // Response handler
     // xhttp.onreadystatechange = function() {
     //     // Wait for readyState = 4 & 200 response
     //     if (this.readyState === 4 && this.status === 200) {
     //         // parse JSON response
     //         var todo = JSON.parse(this.responseText);
     //         this.renderTodo(todo);
     //     } else if (this.readyState === 4) {
     //         // this.status !== 200, error from server
     //         console.log("Server Error");
     //     }
     // };
     // xhttp.open("POST", "https://api.kraigh.net/todos", true);
     //
     // xhttp.setRequestHeader("Content-type", "application/json");
     // xhttp.setRequestHeader("x-api-key", this.apiKey);
     // xhttp.send(JSON.stringify(data));
   }

   //renderTodo(todo){
     // var node = document.createElement("DIV");
     // node.classList.add("todoItem");
     //
     // // add todo item id to node
     // node.id = todo.id;
     //
     // //node for check box
     // var checkNode = document.createElement("DIV");
     // checkNode.id = "checkIcon";
     // node.value = todo.completed;
     // //add function to check/complete a todo
     // checkNode.addEventListener('click', function(){
     //     //add toggle effect to check box by inversing the boolean value
     //     document.getElementById(node.id).value = !document.getElementById(node.id).value
     //     //style depending on if the todo is complete or not
     //     if(document.getElementById(node.id).value){
     //       document.getElementById(node.id).getElementsByClassName('todo-title')[0].firstElementChild.style.textDecoration = "line-through";
     //       document.getElementById(node.id).getElementsByClassName('todo-title')[0].firstElementChild.style.color = "darkGray";
     //       this.style.backgroundImage="url('assets/icons/check.png')";
     //     } else {
     //       document.getElementById(node.id).getElementsByClassName('todo-title')[0].firstElementChild.style.textDecoration = "none";
     //       document.getElementById(node.id).getElementsByClassName('todo-title')[0].firstElementChild.style.color = "black";
     //       this.style.backgroundImage="url('assets/icons/uncheck.png')";
     //     }
     //     //update the completed todo on the server side
     //     updateCompleteTodo(node.id, document.getElementById(node.id).value);
     // });
     //
     // //node for the title of the todo
     // var todoTitleNode = document.createElement("DIV");
     // todoTitleNode.classList.add("todo-title");
     // //node for the text of the title for the todo
     // var titleNode = document.createElement("H2");
     // //set todo title
     // titleNode.innerHTML = todo.text;
     //
     // //style depending on if the todo is complete or not
     // if(todo.completed){
     //   titleNode.style.textDecoration = "line-through";
     //   titleNode.style.color = "darkGray";
     //   checkNode.style.backgroundImage="url('assets/icons/check.png')";
     // } else {
     //   checkNode.style.backgroundImage="url('assets/icons/uncheck.png')";
     // }
     // todoTitleNode.appendChild(titleNode);
     //
     // //node for the remove button
     // var removeNode = document.createElement("DIV");
     // removeNode.id = "removeIcon";
     // //action to remove a todo when delete button is clicked
     // removeNode.addEventListener('click', function(){
     //   //clear the todo html
     //   node.innerHTML = "";
     //   //remove the todo from the server side
     //   removeTodo(node.id);
     // });
     //
     // //node for the line to seperate todos
     // var hrNode = document.createElement("HR");
     //
     // //add the child nodes to the main todo node
     // node.appendChild(checkNode);
     // node.appendChild(todoTitleNode);
     // node.appendChild(removeNode);
     // node.appendChild(hrNode);
     // document.getElementById("todoItems").appendChild(node);
  // }

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
