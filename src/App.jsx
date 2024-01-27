import { useState } from 'react';
import './App.css';

function App() {
  const [total, setCount] = useState(0);
  function onclickhandler() {
    var copy = total;
    copy++;
    setCount(copy);
  }
  return <button onClick={onclickhandler}>count is {total}</button>;
}

export default App;
