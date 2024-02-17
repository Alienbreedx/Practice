import Home from './Home.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import UserInfoForm from './Contact.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<UserInfoForm />} />
          {/* Add more routes here*/}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
