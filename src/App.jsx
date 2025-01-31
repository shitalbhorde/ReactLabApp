import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Patient from './components/Patient';
import ResultEntry from './components/ResultEntry';
import Dashboard from './components/Dashboard';
import Reports from './components/Reports';
import Samples from './components/Samples';
import TestOrders from './components/TestOrders';
import LoginPage from './Auth/LoginPage';
import SignUp from './Auth/SignUp';
import Home from './layout/Home';
import Contact from './layout/Contact';
import AboutUs from './layout/AboutUs';

function App() {
  const [isLogged, setIsLogged] = useState(null); // Start as null to indicate "unknown" state

  // Check localStorage for login status on component mount
  useEffect(() => {
    const loginData = localStorage.getItem("LoginData");
    setIsLogged(!!loginData); // Set to true if loginData exists, otherwise false
  }, []);

  if (isLogged === null) {
    // Show a loading spinner or blank screen while checking login status
    return <div>Loading...</div>;
  }

  return (
    <>
      {isLogged ? (
        <Router>
          <div>
            <Navbar setIsLogged={setIsLogged} />
          </div>
          <div className="d-flex">
            <Sidebar />
            <div className="main-content flex-grow-1">
              <main className="container-fluid py-4">
                <Routes>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/" element={<Home />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/aboutus" element={<AboutUs />} />
                  <Route path="/patient" element={<Patient />} />
                  <Route path="/test-orders" element={<TestOrders />} />
                  <Route path="/samples" element={<Samples />} />
                  <Route path="/reports" element={<Reports />} />
                  <Route path="/result" element={<ResultEntry />} />
                </Routes>
              </main>
            </div>
          </div>
        </Router>
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<LoginPage setIsLogged={setIsLogged} />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </Router>
      )}
    </>
  );
}

export default App;
