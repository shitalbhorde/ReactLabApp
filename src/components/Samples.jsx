// import { Search } from 'lucide-react';
// import React from 'react';

// function Samples() {
//   // Fixed patient object syntax
//   const patient = {
//     name: 'Keshav',
//     age: 20,
//     gender: 'Male',
//     contact: '1234567890',
//     tests: ['MRI', 'Blood Test'],
//   };

//   return (
//     <div>
//       <div>
//         <h4 className="text-center">Sample Dashboard</h4>

//         <div className="row align-items-center mt-4">
//           <div className="col-md-8">
//             <div className="input-group shadow rounded">
//               <input
//                 type="search"
//                 name="search"
//                 placeholder="Enter patient name"
//                 className="form-control border-0 shadow-none"
//                 aria-label="Search for patient name"
//               />
//               <span className="input-group-text border-0">
//                 <Search className="text-primary fs-5" />
//               </span>
//             </div>
//           </div>
//           <div className="col-md-2 text-md-end mt-3 mt-md-0">
//             <button type="button" className="btn btn-success rounded w-100">
//               Details
//             </button>
//           </div>
//         </div>

//         <div className="row my-4 shadow-lg">
//           <p className="text-center text-primary">Patient Information</p>
//           <div className='col-md-2 mb-3'>
//             <strong>Patient Name:</strong> {patient.name}
//           </div>
//           <div className='col-md-2'>
//             <strong>Age:</strong> {patient.age}
//           </div>
//           <div className='col-md-2'>
//             <strong>Gender:</strong> {patient.gender}
//           </div>
//           <div className='col-md-2'>
//             <strong>Contact:</strong> {patient.contact}
//           </div>
//           <div className='col-md-2'>
//             <strong>Tests:</strong> {patient.tests.join(', ')}
//           </div>
//         </div>


//          <div className='row'>
//          <div className="col-md-3 shadow p-4 bg-white rounded">
//           <p className="text-danger text-center fw-bold">Tests</p>
//             <ul className="list-group">
//                 <li className="list-group-item">Blood Test</li>
//                <li className="list-group-item">X-ray</li>
//               <li className="list-group-item">ECG</li>
//             </ul>
//         </div>


//         <div className="col-md-8 shadow rounded p-4 text-center">
//           <h6>Blood Samples Details</h6>
//           <div className="row mb-5">
//             <div className='col-md-3'>
//               <p>Sample ID : </p>
//               <span>123</span>
//             </div>
//             <div className='col-md-3'>
//               <label className='form-label'>Collection Date</label>
//               <input type="datetime-local" name="date"className='form-control' />
//             </div><div className='col-md-3'>
//               <label className='form-label'> Collector name </label>
//               <input type="text" className='form-control' />
//             </div><div className='col-md-3'>
//               <label className='form-label'>Location</label>
//               <input type="text"  className='form-control'/>
//             </div>

//           </div>

//           <div>
//           <button type="submit" className='btn btn-primary'>Submit Samples</button>

//           </div>

//         </div>
//          </div>
       

//       </div>
//     </div>
//   );
// }

// export default Samples;


import { Search } from 'lucide-react';
import React from 'react';

function Samples() {
  const patient = {
    name: 'Keshav',
    age: 20,
    gender: 'Male',
    contact: '1234567890',
    tests: ['MRI', 'Blood Test'],
  };

  return (
    
    <div className="container">
      <header className="text-center my-4">
        <h4>Sample Dashboard</h4>
      </header>

      <section>
        <div className="row align-items-center mb-4">
          <div className="col-md-8">
            <div className="input-group shadow rounded">
              <input
                type="search"
                name="search"
                placeholder="Enter patient name"
                className="form-control border-0 shadow-none"
                aria-label="Search for patient name"
              />
              <span className="input-group-text border-0">
                <Search className="text-primary fs-5" />
              </span>
            </div>
          </div>
          <div className="col-md-2 text-md-end mt-3 mt-md-0">
            <button type="button" className="btn btn-success rounded w-100">
              Details
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="row my-4 p-3 shadow-lg bg-light rounded">
          <h5 className="text-center text-primary">Patient Information</h5>
          <div className="col-md-2 mb-2">
            <strong>Patient Name:</strong> {patient.name}
          </div>
          <div className="col-md-2 mb-2">
            <strong>Age:</strong> {patient.age}
          </div>
          <div className="col-md-2 mb-2">
            <strong>Gender:</strong> {patient.gender}
          </div>
          <div className="col-md-2 mb-2">
            <strong>Contact:</strong> {patient.contact}
          </div>
          <div className="col-md-4">
            <strong>Tests:</strong> {patient.tests.join(', ')}
          </div>
        </div>
      </section>

      <section className="row">
        <div className="col-md-3 shadow p-4 bg-white rounded">
          <h6 className="text-danger text-center fw-bold">Tests</h6>
          <ul className="list-group">
            <li className="list-group-item">Blood Test</li>
            <li className="list-group-item">X-ray</li>
            <li className="list-group-item">ECG</li>
          </ul>
        </div>

        <div className="col-md-8 shadow rounded p-4 bg-light">
          <h6 className="text-center mb-4">Blood Samples Details</h6>
          <div className="row mb-5">
            <div className="col-md-3 mb-3">
              <label className='form-label'>Sample Id</label>
              <span className='form-control'>123</span>
            </div>
            <div className="col-md-3 mb-3">
              <label className="form-label">Collection Date</label>
              <input type="datetime-local" name="date" className="form-control" />
            </div>
            <div className="col-md-3 mb-3">
              <label className="form-label">Collector Name</label>
              <input type="text" className="form-control" />
            </div>
            <div className="col-md-3 mb-3">
              <label className="form-label">Location</label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary">Submit Samples</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Samples;
