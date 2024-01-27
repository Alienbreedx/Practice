import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  function onclickhandler() {
    var copy = count;
    copy++;
    setCount(copy);
  }
  return <button onClick={onclickhandler}>count is {count}</button>;
}

export default App;
