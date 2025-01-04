import React, { useState } from 'react'

function Patient() {
    const [patientData,setPatientData] = useState(
        {
            firstname:'',
            lastname:'',
            phonenumber:'',
            gender:'',
            dob:'',
            email:'',
            address :''
        }
    );

  return (

    <div className='mb-0'>
      <h4 className='text-center mb-3'>Register new patient</h4>
      <div className='mx-2'>
        <form >
            <div className='row mb-4'>
                <div className='col-md-4'>
                    <label htmlFor="firstname" className='form-label'>First Name</label>
                    <input type="text" className='form-control' placeholder='Enter First Name' name='firstname' value={patientData.firstname}/>
                </div>
                <div className='col-md-4'>
                    <label htmlFor="lastname" className='form-label'>Last Name</label>
                    <input type="text" className='form-control' placeholder='Enter Last Name' name='lastname' value={patientData.lastname}/>
                </div>
                <div className='col-md-4'>
                    <label htmlFor="phonenumber" className='form-label'>Phone Number</label>
                    <input type="tel" className='form-control' placeholder='Enter Phone Number' name='phonenumber' value={patientData.phonenumber}/>
                </div>
            </div>

            <div className='row mb-4'>
                <div className='col-md-4'>
                    <label htmlFor="gender" className='form-label d-block'>Gender</label>
                    <div className='form-check form-check-inline'>
                    <input type="radio" name='gender' value={patientData.gender==="male"} className='form-check-input'/>
                    <label htmlFor="male" className='form-check-label' >Male</label>
                    </div>

                    <div className='form-check form-check-inline'>
                    <input type="radio" name='gender' value={patientData.gender==="female"} className='form-check-input'/>
                    <label htmlFor="female" className='form-check-label' >Female</label>
                    </div>

                    <div className='form-check form-check-inline'>
                    <input type="radio" name='gender' value={patientData.gender==="other"} className='form-check-input'/>
                    <label htmlFor="other" className='form-check-label'>Other</label>
                    </div>
                </div>

                <div className='col-md-4'>
                    <label htmlFor="dob" className='form-label'>Date of Birth</label>
                    <input type="date" placeholder='Enter Date of Birth' name='dob' value={patientData.dob} className='form-control'/>
                </div>

                <div className='col-md-4'>
                      <label htmlFor="email" className='form-label'>E-mail</label>
                      <input type="email" name="email" placeholder='Enter Email' value={patientData.email} className='form-control'/>
                </div>
            </div>
            <div className='mb-4'>
                <label htmlFor="address" className='form-label'>Address</label>
                <textarea name="address" placeholder='Enter Address' value={patientData.address} className='form-control' rows="2"></textarea>
            </div>
           
           <div className='mt-3'>
            <h6>Select Tests</h6>
              <div className='row mb-3'>
                <div className='col-md-6'>
                <select name="test" className='form-select' >
                    <option >Select Test</option>
                    <option value="bloodtest">Blood Test</option>
                    <option value="ecg">ECG</option>
                    <option value="xray">X-ray</option>
                </select>
                </div>
                <div className='col-md-3'>
                <button className='btn btn-primary'>Add Test</button>
                </div>
              </div>
           </div>

           <div>
            <h6>Selected Tests</h6>
              <div>
                <ul className='list-group'>
                    <li className='list-group-item d-flex justify-content-between '>blood test
                        <div>
                            <button className='btn btn-sm btn-warning mx-1'>Edit</button>
                            <button className='btn btn-sm btn-danger mx-1'>Delete</button>
                        </div>
                    </li>
                    <li className='list-group-item d-flex justify-content-between'>MRI
                    <div>
                            <button className='btn btn-sm btn-warning mx-1'>Edit</button>
                            <button className='btn btn-sm btn-danger mx-1'>Delete</button>
                        </div>
                    </li>
                </ul>
              </div>
           </div>
                 <div className='text-center mt-5'>
                    <button type="reset" className='btn  btn-secondary mx-1'>Clear</button>
                    <button type="submit" className='btn  btn-success mx-1'>Submit</button>
                 </div>
        </form>
      </div>
    </div>
  )
}

export default Patient
