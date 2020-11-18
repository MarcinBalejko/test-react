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
