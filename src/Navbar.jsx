import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/Contact'>User Info</Link>
        </li>
        {/* Add more links here */}
      </ul>
    </nav>
  );
}

export default Navbar;
