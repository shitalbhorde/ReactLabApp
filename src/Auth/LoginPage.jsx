// import React, { useState } from 'react'

// function LoginPage() {
//    const [email,setEmail] =useState('');
//    const [password,setPassword] =useState('');
   
//     const handleChange = (e) =>{
//       const {name,value} = e.target;
//     }
//   return (
//     <div className='d-flex justify-content-center align-items-center' style={{minHeight : '100vh'}}>
//        <div className='p-5 border rounded shadow-lg' style={{width:'100%' , maxWidth:'400px'}}>
//         <h2 className='text-center'>Login</h2> 
//         <form> 
//         <div className='mb-3'>
//          <label htmlFor="email" className="form-label">E-mail</label>
//          <input type="email" placeholder='Enter email' className='form-control' name='email'  onChange={handleOnchange()}/>
//          </div>

//          <div className='mb-3'>
//          <label htmlFor="password" className="form-label">Password</label>
//          <input type="password" placeholder='Enter password' className='form-control' name = 'password' onChange={handleOnchange()}/>
//          </div>

//          <button type='submit' className='btn btn-primary w-100' onClick={handleSubmit()}>Login</button>
         
//       </form>
         
//           <div className='text-center mt-3'>
//             <a href="http:#">forgot password?</a>
//           </div>

//        </div>
//     </div>
//   )
// }

// export default LoginPage;

import React, { useState } from 'react';

function LoginPage({setIsLogged}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve stored data from localStorage
    const storedData = JSON.parse(localStorage.getItem('signUpData'));

    if (!storedData) {
      setError('No account found. Please sign up first.');
      return;
    }

    // Validate login credentials
    if (email === storedData.email && password === storedData.password) {
      setIsLogged(true);
      setEmail('');
      setPassword('');
      setError('');
      // Further actions like navigation or user session setup can go here
    } else {
      setError('Invalid email or password. Please try again.');
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: '100vh' }}
    >
      <div
        className="p-5 border rounded shadow-lg"
        style={{ width: '100%', maxWidth: '400px' }}
      >
        <h2 className="text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <div className="text-danger mb-3">{error}</div>}

          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
        
        <div className="text-center mt-3">
          <a href="#">Forgot password?</a>
        </div>
        <div className="text-center mt-3">
         New User <a href="/signup">Sign Up</a>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

