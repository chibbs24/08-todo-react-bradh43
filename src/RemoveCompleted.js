import React, { Component } from 'react';
import './RemoveCompleted.css';

class RemoveCompleted extends Component {
  render() {
    return (
      <div className="remove-completed">
        <button type="submit" id="removeCompletedButton">
          <div className="remove-button">
            <div id="removeCompletetedIcon"></div>
            <text>Remove Completed</text>
          </div>
        </button>
      </div>
    );
  }
}

export default RemoveCompleted;
