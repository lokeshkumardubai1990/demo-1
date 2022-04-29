import React from "react";

/*functional or statelesscomponent*/
/*pure component*/
const Child = (props) => {
  return (
    <div>
      <p>button from child component</p>

      <button id="like" onClick={props.counterFunction}>
        Like
      </button>

      <p>value from Child component</p>
      {props.countasProps}
    </div>
  );
};

class Parentcomp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  countIncrement = () => {
    this.setState(
      function (prevState) {
        return {
          count: prevState.count + 1,
        };
      },
      () => {
        console.log(this.state.count);
      }
    );
  };

  render() {
    const userDetails = [
      {
        name: "john",
        age: 31,
      },
      {
        name: "Luther",
        age: 29,
      },
    ];
    return (
      <div>
        <h1>Map function</h1>

        <ul>
          {userDetails.map((obj, index) => {
            console.log(obj.name);
            return (
              <li key={index}>
                {obj.name} {obj.age} {index}
              </li>
            );
          })}
        </ul>

        <h1>State & Prop Component</h1>

        <Child
          countasProps={this.state.count}
          counterFunction={this.countIncrement}
        />
      </div>
    );
  }
}

export { Parentcomp };
