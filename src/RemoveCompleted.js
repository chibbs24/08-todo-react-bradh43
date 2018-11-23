import React, { Component } from 'react';
import './RemoveCompleted.css';

class RemoveCompleted extends Component {

  removeCompletedTodos = () => {
    console.log("remove completed");
  }

  render() {
    return (
      <div className="remove-completed">
        <button onClick={this.removeCompletedTodos}type="submit" id="removeCompletedButton">
          <div className="remove-button">
            <div id="removeCompletetedIcon"></div>
            Remove Completed
          </div>
        </button>
      </div>
    );
  }
}


export default RemoveCompleted;
