import React from "react";

class Counter extends React.Component {
  state = {
    score: 0
  };

  handleIncrement = () => {
    this.setState({ score: this.state.score + 100 });
  };
  handleIncrement2 = () => {
    this.setState({ score: this.state.score - 100 });
  };

  render() {
    return (
      <div className="card text-center">
        <div className="card-header bg-primary text-white">
          <h3 className="card-title">Only click each photo once!</h3>
        </div>
        <div className="card-body">
          <p className="card-text">Score: {this.state.score}</p>
          <button className="btn btn-primary" onClick={this.handleIncrement}>
            Increment
          </button>{" "}
          <button className="btn btn-danger" onClick={this.handleIncrement2}>
            Decrement
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
