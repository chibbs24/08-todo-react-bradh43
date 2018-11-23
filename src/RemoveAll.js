import React, { Component } from 'react';
import './RemoveAll.css';

class RemoveAll extends Component {

  removeAllTodos = () => {
    console.log("Remove All");
  }

  render() {
    return (
      <div className="remove-all">
        <button onClick={this.removeAllTodos} type="submit" id="removeAllButton">
          <div className="remove-button">
            <div id="removeAllIcon"></div>
            Remove All
          </div>
        </button>
      </div>
    );
  }
}

export default RemoveAll;
