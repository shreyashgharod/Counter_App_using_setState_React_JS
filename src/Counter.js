import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  changeCount() {
    this.setState({
      count: this.state.count + 1
    });
  }

  resetCount() {
    this.setState({
      count: 0
    });
  }

  render() {
    return (
      <div>
        <div> Count is {this.state.count} </div>
        <button onClick={() => this.changeCount()}>Counter</button>
        <button onClick={() => this.resetCount()}>Reset Counter</button>
      </div>
    );
  }
}

export default Counter;
