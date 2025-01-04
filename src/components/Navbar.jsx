import React from 'react'
import { TestTube } from 'lucide-react'
import { useNavigate } from 'react-router-dom';

function Navbar({setIsLogged}) {
 
  const navigate = useNavigate();

  function handleLogout(){
    setIsLogged(false);
    navigate('/');
  }
  return (
    <div className='border '>
      <nav className='navbar  navbar-expand-lg'> 
        
        <div className='container'>
        <div className="d-flex align-items-center p-3 border-bottom">
        <TestTube className="me-2" style={{ width: '32px', height: '32px', color: '#0d6efd' }} />
        <span className="fw-bold fs-5">LIMS</span>
      </div>
        <ul className='navbar-nav ms-auto'>
            <li className='nav-item'>
                <a className='nav-link' href='/home'>Home</a>
            </li>
                
            <li className='nav-item'> <a className='nav-link' href='/contact'>Contact</a></li>
            <li>
            <a className='nav-link' href='/aboutus'>About us</a>
              </li> 
            <li>
              <button className="btn btn-sm btn-primary mt-1" onClick={handleLogout}>Log Out</button>
            </li>
        </ul>
        </div>
    
      </nav>
    </div>
  )
}

export default Navbar

