import React, { useContext } from "react";
import {ThoughtContext} from './MyProject'

const Data = () => {
    const {thought} = useContext(ThoughtContext)
  return (
    <div>
      <h1>{thought}</h1>
    </div>
  );
};

export default Data;
