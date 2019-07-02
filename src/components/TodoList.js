import React, { Component } from 'react';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ['11', '22'],
      inputValue: ''
    };
  }
  inputChange(e) {
    this.setState({
      inputValue: e.target.value
    });
  }
  addItem() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    });
    this.refs.input.focus();
  }
  render() {
    const { list, inputValue } = this.state;
    return (
      <div>
        TodoList:
        <div>
          <input
            ref="input"
            type="text"
            value={inputValue}
            onChange={e => this.inputChange(e)}
          />
          <button onClick={() => this.addItem()}>添加</button>
        </div>
        <ul>{list.map((item, idx) => <li key={idx}>{item}</li>)}</ul>
      </div>
    );
  }
}

export default TodoList;
