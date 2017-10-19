import React from 'react';
// import Counter from './Counter';
import Writer from './Writer';

export default class App extends React.Component {
  state = {
    value: ''
  }

  handleOnChange = (event) => {
    this.setState({ value: event.target.value })
  }

  render() {
    const { value } = this.state;
    return (
      <div id="content">
        <input type="text"
          value={value}
          onChange={this.handleOnChange}
        />
        <Writer value={value} />
      </div>
    );
  }
}
