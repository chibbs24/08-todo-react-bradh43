import React, { Component } from 'react';
import './RemoveCompleted.css';

class RemoveCompleted extends Component {

  constructor(props){
    super(props)
    this.state={
      removeCompleted: props.removeCompleted,
    }
  }

  render() {
    return (
      <div className="remove-completed">
        <button onClick={this.state.removeCompleted}type="submit" id="removeCompletedButton">
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
