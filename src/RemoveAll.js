import React, { Component } from 'react';
import './RemoveAll.css';

class RemoveAll extends Component {
  constructor(props){
    super(props)
    this.state={
      removeAll: props.removeAll,
    }
  }
  
  render() {
    return (
      <div className="remove-all">
        <button onClick={this.props.removeAll} type="submit" id="removeAllButton">
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
