import React from "react";
import "./App.css";

function Funccomp(props) {
  return (
    <div className="App">
      <h1>{props.name} Component</h1>
      <p>
        The lorem ipsum is a placeholder text used in publishing and graphic
        design. This filler text is a short paragraph that contains all the
        letters of the alphabet. The characters are spread out evenly so that
        the reader's attention is focused on the layout of the text instead of
        its content
      </p>
    </div>
  );
}

export default Funccomp;
