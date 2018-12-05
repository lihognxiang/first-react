/*
import React, {Component} from 'react';
import TodoItem from './TodoItemSimple';
import axios from 'axios';

class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: []
    };
    this.handleBtn = this.handleBtn.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleInputChange(e) {
    const value = e.target.value;
    this.setState(() => (
      {
        inputValue: value
      }
    ));
  }

  handleBtn() {
    if (!this.state.inputValue) {
      console.log(this.state.inputValue);
      return;
    }
    this.setState((prevState) => (
      {
        inputValue: '',
        list: [...prevState.list, prevState.inputValue]
      }
    ));
  }

  handleDelete(index) {
    this.setState((prevState) => {
      const list = prevState.list;
      list.splice(index, 1);
      return {
        list
      };
    });
  }

  getItem() {
    return this.state.list.map((item, index) => {
      return (
        <TodoItem key={index} content={item} index={index} deleteItem={this.handleDelete}/>
      );
    })
  }

  render() {
    return (
      <div>
        <label htmlFor="inputArea">输入内容</label>
        <input
          id="inputArea"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
          ref={(input) => {
            this.input = input
          }}
        />
        <button onClick={this.handleBtn}>提交</button>
        <ul>
          {this.getItem()}
        </ul>
      </div>
    );
  }

  componentDidMount() {
    axios.get('/api/todolist')
      .then((res) => {
        this.setState(() => ({list: [...res.data]}));
      }).catch(() => {
      alert('error')
    })
  }
}

export default TodoList;*/
