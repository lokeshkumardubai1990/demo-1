import React from "react";
import "./App.css";

class Classcomp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedItems: new Map(),
    };
  }

  handleClick = (e) => {
    const item = e.target.name;
    const isChecked = e.target.checked;
    this.setState((prevState) => ({
      checkedItems: prevState.checkedItems.set(item, isChecked),
    }));
  };
  render() {
    const multiCheckbox = [
      {
        name: "check-box-1",
        key: "checkBox1",
        label: "Check Box 1",
      },
      {
        name: "check-box-2",
        key: "checkBox2",
        label: "Check Box 2",
      },
    ];
    return (
      <div className="App">
        <h1>{this.props.name} Component</h1>
        {multiCheckbox.map((obj, indx) => {
          return (
            <p key={indx}>
              <input
                type="checkbox"
                id={obj.name}
                checked={this.state.checkedItems.get(obj.name)}
                onChange={this.handleClick}
              />
              <label htmlFor={obj.name}>{obj.label}</label>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <input type="text" name={`input${indx}`} />
            </p>
          );
        })}
      </div>
    );
  }
}

export default Classcomp;
