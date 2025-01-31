
import React from 'react';
import { TestTube } from 'lucide-react';
import { useNavigate, NavLink } from 'react-router-dom';

function Navbar({ setIsLogged }) {
  const navigate = useNavigate();

  function handleLogout() {
    setIsLogged(false);
    localStorage.removeItem("LoginData");
    navigate('/');
  }

  return (
    <div className="border">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <div className="d-flex align-items-center p-3 border-bottom">
            <TestTube className="me-2" style={{ width: '32px', height: '32px', color: '#0d6efd' }} />
            <span className="fw-bold fs-5">PathoCore</span>
          </div>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item list-group-item d-flex bg-light border shadow-sm rounded mx-2 fw-semibold">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item list-group-item d-flex bg-light border shadow-sm rounded mx-2 fw-semibold">
              <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </li>
            <li className="nav-item list-group-item d-flex bg-light border shadow-sm rounded mx-2 fw-semibold">
              <NavLink className="nav-link" to="/aboutus">About us</NavLink>
            </li>
            <li>
              <button className="btn btn-sm btn-primary mt-1 mx-1 p-2" onClick={handleLogout}>Log Out</button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
