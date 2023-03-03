import { useState } from 'react';

function ButtonCounter(){
    //useState returns an array with 2 elements: destruturing
    //useState is a hook
    const [counter, setCounter] = useState(0) //state object: useState(initial value)
  
  
    const handleClick = () => setCounter(counter+1)
    //curly braces always receive a function reference, or an anonymous function
    return <button onClick={handleClick}>
        {counter}
      </button>
  }


export default ButtonCounter;