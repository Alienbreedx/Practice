import Home from './Home.jsx';
import axios from 'axios';
import './App.css';

export default function App() {
  function onclickhandler() {
    const options = {
      method: 'post',
      url: 'https://script.google.com/macros/s/AKfycbxUxfZqGQltIhgq-VPJ7RFRA_LB_k3uISn8ktA8LohqIKJghgtZavJKhFBZPKqwU5zjcA/exec',
      params: {
        test: 'test',
        email: 'alopezisaac@gmail.com',
        phone: 3853356703,
      },
    };
    axios(options);
  }

  return (
    <div>
      <Home />
      <button onClick={onclickhandler}>Press me!</button>
    </div>
  );
}
