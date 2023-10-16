import React, { createContext, useRef, useState } from "react";
import Data from "./Data";

export const ThoughtContext=createContext();
const MyProject = () => {
  const [content, setContent] = useState([]);
  const [thoughts, newThoughts] = useState("");

  const AddThoughts = () => {
    setContent([...content, thoughts]);
    newThoughts("");
  };
  return (
    <div>
      <input
        type="text"
        name="thoughts"
        value={thoughts}
        onChange={(event) => {
          newThoughts(event.target.value);
        }}
      />
      <input type="submit" onClick={AddThoughts}></input>

      <div>
        {content.map((thought, index) => (
            <ThoughtContext.Provider  key={index} value={{thought}} >
                <Data/>
            </ThoughtContext.Provider>
         
        ))}
      </div>
    </div>
  );
};

export default MyProject;
