import { useRef, useState } from "react";

function MyComponent() {
 const myRef = useRef();
  const [color,setColor]=useState('blue');
    const handleClick = () => {
      // Accessing and manipulating the DOM element
     myRef.current.style.backgroundColor = 'blue';
    //
   // setColor('black')
    };
  
    return (
      <div>
        <button onClick={handleClick}>Change Color</button>
        <div  ref={myRef} >This is a DOM element
        {console.log('hello')}
        </div>
      </div>
    );
  }
export default   MyComponent