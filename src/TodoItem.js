import React, { Component } from "react";

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.onDeleteHandle = this.onDeleteHandle.bind(this);
  }
  
  onDeleteHandle() {
    this.props.delete(this.props.index);
  }

  render() {
    return <li onClick={this.onDeleteHandle}>{this.props.item}</li>;
  }
}

export default TodoItem;
