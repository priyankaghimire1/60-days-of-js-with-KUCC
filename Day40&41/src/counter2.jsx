import { useState} from 'react'
export default Counter2;
function Counter2(){
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
      return<>  <div >
  <h2>Count: {count}</h2>
  <p>This is the second counter.</p>
  <button id="increase" onClick={()=> handleChangeValue(Number(count)+1)}>Increase count by 1</button>
  <a href="/">Go to the other page</a>
  </div></>
}
