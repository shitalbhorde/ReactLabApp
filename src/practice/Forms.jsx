import React, { useState } from 'react'

function Forms() {
    const [email,setEmail] =useState('');
    const [password,setPassword] = useState('');

    function handleOnChange (e){
       const {name,value} =e.target;

       if(name=='email'){
          setEmail(value)
       }
       if(name=='password'){
        setPassword(value)
       }
    }

    function handleSubmit(){
    alert(email);
    alert(password);
    setEmail('');
    setPassword('');
    }
  return (
    <div >
      <div className='mt-5 d-flex justify-content-center align-items-center '>
        <form className=' p-3 border border-primary shadow-lg'>
            <div className='mt-5 ' >
                <label htmlFor="email" className='mb-5'>Email</label>
                <input type="email"
                value={email} placeholder='Enter email' name='email' onChange={handleOnChange}/>
            </div>
            <div>
                <label htmlFor="password" className='mb-5'>Password</label>
                <input type="password" placeholder='enter password'
                value={password} name='password' onChange={handleOnChange}/>
            </div>
            <button type='submit'
            onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Forms;

// import { useState } from "react";

// function Forms (){
 
//     const [num, setNum] = useState(0);
 
//     return (<div>
//         <h1> {num} </h1>
//         <button 
//         onClick={ () => setNum(num+1)}>+</button>
//         <button
//         onClick={()=> setNum(num-1)}>-</button>
//     </div>)
// }

// export default Forms;