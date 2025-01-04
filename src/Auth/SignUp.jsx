// import React,{useState} from 'react'

//  function SignUp() {
//        const [formData,setFormData] = useState({
//         username :'',
//         email :'',
//         password:'',
//         confirmpassword:''
//        });
       
//        const handleChange =(e)=>{
//           const {name,value}=e.target;
//           setFormData({...formData,[name]:value});
//        };

//     const handleSubmit = (e) => {
//        e.preventDefault();

//     const { username, email, password, confirmPassword } = formData;

//     // Validation
//     if (!username || !email || !password || !confirmPassword) {
//       alert('All fields are required!');
//       return;
//     }

//     if (password !== confirmPassword) {
//       alert('Passwords do not match!');
//       return;
//     }

//     // Save data to localStorage
//     localStorage.setItem(
//       'signUpData',
//       JSON.stringify({ username, email, password })
//     );

//     alert('Sign-up successful! Data has been saved to localStorage.');
    
//     // Reset form
//     setFormData({
//       username: '',
//       email: '',
//       password: '',
//       confirmPassword: '',
//     });
//   };

//   return (
//     <div className='d-flex justify-content-center align-items-center' style={{minHeight:'100vh'}}>
//       <div className='p-5 border rounded shadow-lg' style={{width:'100%',maxWidth:'400px'}}>
//         <h2 className='text-center mb-4' >Sign Up</h2>
//         <form>
//              <div className='mb-3'>
//                 <label htmlFor="username" className='form-label'>Username</label>
//                 <input type="text" className='form-control' placeholder='Username'
//                  value={formData.password} onChange={handleChange}/>
//              </div>

//              <div className='mb-3'>
//                 <label htmlFor="email" className='form-label'>Email</label>
//                 <input type="email" className='form-control' placeholder='Email' value={formData.email} onChange={handleChange}/>
//              </div>

//              <div className='mb-3'>
//                 <label htmlFor="password"className='form-label' >Password</label>
//                 <input type="password" className='form-control' placeholder='Password' value={formData.password} onChange={handleChange}/>
//              </div>

//              <div className='mb-3'>
//                 <label htmlFor="confirmpassword" className='form-label'>Confirm Pasword</label>
//                 <input type="password" className='form-control' placeholder="Confirm password" value={formData.confirmpassword} onChange={handleChange}/>
//              </div>

//              <button type="submit" onClick={handleSubmit} className="btn btn-primary w-100">Sign Up</button>
//         </form>
            
//         <div className="text-center mt-3">
//           <p>Already have an account? <a href="/">Log In</a></p>
//         </div>
//       </div>
//     </div>
//   )
// };
// export default SignUp;





// //   return (
// //     <div
// //       className="d-flex justify-content-center align-items-center"
// //       style={{ minHeight: '100vh' }}
// //     >
// //       <div
// //         className="p-5 border rounded shadow-lg"
// //         style={{ width: '100%', maxWidth: '400px' }}
// //       >
// //         <h2 className="text-center mb-4">Sign Up</h2>
// //         <form onSubmit={handleSubmit}>
// //           <div className="mb-3">
// //             <label htmlFor="username" className="form-label">
// //               Username
// //             </label>
// //             <input
// //               id="username"
// //               name="username"
// //               type="text"
// //               className="form-control"
// //               placeholder="Enter your username"
// //               value={formData.username}
// //               onChange={handleChange}
// //               required
// //             />
// //           </div>

// //           <div className="mb-3">
// //             <label htmlFor="email" className="form-label">
// //               Email
// //             </label>
// //             <input
// //               id="email"
// //               name="email"
// //               type="email"
// //               className="form-control"
// //               placeholder="Enter your email"
// //               value={formData.email}
// //               onChange={handleChange}
// //               required
// //             />
// //           </div>

// //           <div className="mb-3">
// //             <label htmlFor="password" className="form-label">
// //               Password
// //             </label>
// //             <input
// //               id="password"
// //               name="password"
// //               type="password"
// //               className="form-control"
// //               placeholder="Enter your password"
// //               value={formData.password}
// //               onChange={handleChange}
// //               required
// //             />
// //           </div>

// //           <div className="mb-3">
// //             <label htmlFor="confirmPassword" className="form-label">
// //               Confirm Password
// //             </label>
// //             <input
// //               id="confirmPassword"
// //               name="confirmPassword"
// //               type="password"
// //               className="form-control"
// //               placeholder="Confirm your password"
// //               value={formData.confirmPassword}
// //               onChange={handleChange}
// //               required
// //             />
// //           </div>

// //           <button type="submit" className="btn btn-primary w-100">
// //             Sign Up
// //           </button>
// //         </form>

// //         <div className="text-center mt-3">
// //           <p>
// //             Already have an account? <a href="#">Log In</a>
// //           </p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default SignUp;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const { username, email, password, confirmPassword } = formData;
  
    // Validation
    if (!username || !email || !password || !confirmPassword) {
      alert('All fields are required!');
      return;
    }
  
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
  
    // Retrieve existing data and ensure it's a valid array
    let existingData;
    try {
      existingData = JSON.parse(localStorage.getItem('signUpData')) || [];
      if (!Array.isArray(existingData)) {
        existingData = [];
      }
    } catch (error) {
      existingData = [];
    }
  
    // Append new user data
    const newUser = { username, email, password };
    existingData.push(newUser);
  
    // Save updated data back to localStorage
    localStorage.setItem('signUpData', JSON.stringify(existingData));
  
    alert('Sign-up successful! Data has been saved to localStorage.');
    navigate('/');
    // Reset form
    setFormData({
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
    
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
        <h2 className="text-center mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              className="form-control"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="form-control"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              className="form-control"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              className="form-control"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Sign Up
          </button>
        </form>

        <div className="text-center mt-3">
          <p>
            Already have an account? <a href="/">Log In</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
