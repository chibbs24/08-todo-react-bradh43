import React, { Component } from 'react';
import './RemoveAll.css';

class RemoveAll extends Component {
  render() {
    return (
      <div className="remove-all">
        <button type="submit" id="removeAllButton">
          <div className="remove-button">
            <div id="removeAllIcon"></div>
            <text>Remove All</text>
          </div>
        </button>
      </div>
    );
  }
}

export default RemoveAll;
