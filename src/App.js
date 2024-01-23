import './App.css';
import { useState, useEffect } from 'react';
/**
 * Create components event
 * @returns 
 */
const App = () => {

  const [counter, setCounter] = useState(0);
  /**
   * Count basic
   * NEVER change manual, is not only variable, that si parth of state React
   * ONLY CHANGES from function
   * @returns 
   */
  useEffect(() => {
    /**
    * Bad practice, but show how call the state
    */
    alert("Your count change to:" + counter);
  }, [counter]);

  return (
    <div className="App">
      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>+</button>
    </div>
  );
}

export default App;
