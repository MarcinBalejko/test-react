import React, { Fragment } from "react";
import Test from "./components/Test";
import Test2 from "./components/Test2";
import "./App.css";

const App = (props) => {
  return (
    <Fragment>
      <Test />
      <Test2 />
    </Fragment>
  );
};

export default App;
