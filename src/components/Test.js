import React, { useState } from "react";

const Test = (props) => {
  const [userInput, setUserInput] = useState("");

  const onChange = (e) => {
    setUserInput(e.target.value);
    setTimeout(() => {
      console.log(userInput);
    }, 500);
  };
  return (
    <div>
      <input type="text" value={userInput} onChange={(e) => onChange(e)} />
    </div>
  );
};

export default Test;

// In this task I was asked to create a functional component containing an input.
// User's input should change the state immediately and logging it into the console after 500ms
// This task could be completed by implementing react useState hook, as well as the setTimeout function
// which would log in the current input state exactly after 500ms.
