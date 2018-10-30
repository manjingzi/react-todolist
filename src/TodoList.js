import React, { Component } from "react";
import TodoItem from "./TodoItem";
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { list: [], inputValue: "" };
    this.onClickHandle = this.onClickHandle.bind(this);
    this.onChangeHandle = this.onChangeHandle.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  onClickHandle() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ""
    });
  }

  onChangeHandle(e) {
    this.setState({
      inputValue: e.target.value
    });
  }

  deleteItem(index){
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({
      list
    });
  }


  render() {
    return (
      <div>
        <input onChange={this.onChangeHandle} value={this.state.inputValue} />
        <button onClick={this.onClickHandle}>Add</button>
        <ul>
          {this.state.list.map((item, i) => {
            return <TodoItem key={i} index={i} item={item} delete={this.deleteItem} />;
          })}
        </ul>
      </div>
    );
  }
}

export default TodoList;
