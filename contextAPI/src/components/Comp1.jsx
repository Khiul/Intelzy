import React, { useContext } from "react";
import { MyContext } from "./MyContext";

const Comp1 = () => {
  const {data,age,darkMode,toggleBtn}=useContext(MyContext)
  return (
    <div>
      <h1>Hello</h1>
      <p>Name: {data}</p>
      <p>Age: {age}</p>
      <button onClick={toggleBtn}>{darkMode?'Disable DarkMode':'Enable DarkMode'}</button>
    </div>
  );
};

export default Comp1;
