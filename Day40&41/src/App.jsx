import { useState } from 'react'
import './App.css'
export default App; 
function App() {
  const setValue = (newValue) => {
    localStorage.setItem('value', newValue);
  };
  
  const getValue = () => {
    return localStorage.getItem('value') || 0;
  };
  const [count, setCount] = useState(getValue())
  const handleChangeValue = (newValue) => {
    setValue(newValue);
    setCount(newValue);
  };
  
  return<> <div >
  <h2>Count: {count}</h2>
  <p>This is the first counter.</p>
  <button onClick={()=> handleChangeValue(Number(count)+1)}>Increase count by 1</button>
  <a href="/second">Go to the other page</a>
  </div>
  </>
}
