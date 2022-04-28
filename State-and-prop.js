import React from "react";

const Child = (props) => {
  return <div>{props.count}</div>;
};

class Parentcomp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  countIncrement = () => {
    this.setState(function (prevState) {
      return {
        count: prevState.count + 1,
      };
    });
  };

  render() {
    return (
      <div>
        <h1>State & Prop Component</h1>
        <button id="like" onClick={this.countIncrement}>
          Like
        </button>
        <Child count={this.state.count} />
      </div>
    );
  }
}

export { Parentcomp };
