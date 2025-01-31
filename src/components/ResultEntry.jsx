// import { Search} from 'lucide-react'
// import React from 'react'

// function ResultEntry() {
//   return (
  
//     <div className='container'>
    
//      <section>
//             <div className="row align-items-center mb-4 shadow-lg bg-light">
//                 <div className="col-md-5 p-3" >
//                   <div className="input-group rounded">
//                     <input
//                       type="search"
//                       name="search"
//                       className="form-control"
//                       aria-label="Search for patient name"
//                     />
//                     <span className="input-group-text border-0">
//                       <Search className="text-primary fs-5" />
//                     </span>
//                   </div>
//                 </div>

//                 <div className='col-md-2'>
//                 <select name="PH" className='form-select' >
//                     <option >Pathology</option>
//                     <option value="ph">Adwani PH Center</option>
//                     <option value="ph">Sai PH Center</option>
//                 </select>
//                 </div>
//                 </div>
//   </section>

// <section>
//   <div className="row p-3 shadow-lg bg-light rounded">
//    <div className="col-md-2">
//     Name : <strong>Shital</strong>
//    </div>
//    <div className="col-md-2">
//     Age : <strong>25</strong>
//    </div>
//    <div className="col-md-2">
//     Gender : <strong>Female</strong>
//    </div>
//    <div className="col-md-2">
//    Status : <strong className='text-primary'>Ongoing</strong>
//    </div>
//    <div className='col-md'>
//     <button type='button' className='btn btn-primary' style={{borderRadius:'0'}}>Save</button>
//    </div>
//    <div className='col-md'>
//     <button type='button' className='btn btn-outline-primary' style={{borderRadius:'0'}}>View more</button>
//    </div>
//   </div>
// </section>

//    <section>
//     <div className='row p-3  mt-4 shadow-lg bg-light rounded'>
//        <table>
//         <tr>
//           <th>Test</th>
//         <th>Observed Value</th>
//         <th>Units</th>
//         <th>Normal Range</th>
//         </tr>

//        <tr>
//        <td colSpan={3}><h4>Complete Blood Count</h4></td>
//        <td>
//         <input type="checkbox" name="" id="" />
//         Show Interpretation
//        </td>
//         </tr>

//         <tr>
//           <td><strong>Hemoglobin</strong></td>
//           <td>
//             <input type="checkbox" name="" id="" />
//             <input type="text" /></td>
//           <td>g/dl</td>
//           <td>13-17</td>
//         </tr>  

//         <tr>
//         <td><strong>Total Leucocyte Count</strong></td>
//         <td>
//             <input type="checkbox" name="" id="" />
//             <input type="text" /></td>
//         <td>/cumm</td>
//         <td>4000-10000</td>
//         </tr>    

//          <tr>
//         <td><strong>Different Leucocyte Count</strong></td>
//          </tr>
        
//         <tr>
//         <td>Total Leucocyte Count</td>
//         <td>
//             <input type="checkbox" name="" id="" />
//             <input type="text" placeholder='Enter Value' />
//         </td>
//         <td>%</td>
//         <td>40-80</td>
//         </tr>

//         <tr>
//         <td>Total Leucocyte Count</td>
//         <td>
//             <input type="checkbox" name="" id="" />
//             <input type="text" placeholder='Enter Value' />
//         </td>
//         <td>%</td>
//         <td>40-80</td>
//         </tr>

//         <tr>
//         <td>Total Leucocyte Count</td>
//         <td>
//             <input type="checkbox" name="" id="" />
//             <input type="text" placeholder='Enter Value' />
//         </td>
//         <td>%</td>
//         <td>40-80</td>
//         </tr>

//         <tr>
//         <td>Total Leucocyte Count</td>
//         <td>
//             <input type="checkbox" name="" id="" />
//             <input type="text" placeholder='Enter Value' />
//         </td>
//         <td>%</td>
//         <td>40-80</td>
//         </tr>

//         <tr>
//         <td>Total Leucocyte Count</td>
//         <td>
//             <input type="checkbox" name="" id="" />
//             <input type="text" placeholder='Calculated' />
//         </td>
//         <td>%</td>
//         <td>40-80</td>
//         </tr>
        
//         <tr><strong>Absolute Leucocyte Count</strong></tr>

//         <tr>
//         <td>Total Leucocyte Count</td>
//         <td>
//             <input type="checkbox" name="" id="" />
//             <input type="text" placeholder='Calculated' />
//         </td>
//         <td>/cumm</td>
//         <td>300-400</td>
//         </tr>

//         <tr>
//         <td>Total Leucocyte Count</td>
//         <td>
//             <input type="checkbox" name="" id="" />
//             <input type="text" placeholder='Calculated' />
//         </td>
//         <td>/cumm</td>
//         <td>200-800</td>
//         </tr>

//         <tr>
//         <td>Total Leucocyte Count</td>
//         <td>
//             <input type="checkbox" name="" id="" />
//             <input type="text" placeholder='Calculated' />
//         </td>
//         <td>/cumm</td>
//         <td>140-180</td>
//         </tr>

//         <tr>
//         <td>Total Leucocyte Count</td>
//         <td>
//             <input type="checkbox" name="" id="" />
//             <input type="text" placeholder='Calculated' />
//         </td>
//         <td>/cumm</td>
//         <td>150-200</td>
//         </tr>
//        </table>
//     </div>
//    </section>


//     </div>
             
//   )
// }

// export default ResultEntry


import React, { useState, useEffect } from 'react';
import { Search, Clipboard, User } from 'lucide-react'; // Import Lucide icons

function ResultEntry() {
  const [searchTerm, setSearchTerm] = useState('');
  const [pathologyCenter, setPathologyCenter] = useState('');
  const [patientDetails, setPatientDetails] = useState(null);
  const [testResults, setTestResults] = useState({});
  const [patients, setPatients] = useState([]);
  const [selectedTest, setSelectedTest] = useState('');
  const [analyteValues, setAnalyteValues] = useState({}); // Store input values by analyte name
  const [showInterpretation, setShowInterpretation] = useState({}); // Store checkbox values for show interpretation

  useEffect(() => {
    // Load patients from localStorage
    const storedPatients = JSON.parse(localStorage.getItem('patients')) || [];
    setPatients(storedPatients);
  }, []);

  const handleSearch = () => {
    if (!patients || patients.length === 0) {
      alert('No patients found in the system.');
      setPatientDetails(null);
      return;
    }

    // Search for patient based on first name
    const patient = patients.find((p) =>
      p.firstname.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (patient) {
      setPatientDetails(patient);
      setTestResults(patient.selectedTests.reduce((acc, test) => {
        acc[test] = ''; // Initialize the test result value
        return acc;
      }, {}));
    } else {
      alert('Patient not found.');
      setPatientDetails(null);
    }
  };

  const handlePathologyChange = (e) => {
    setPathologyCenter(e.target.value);
  };

  const handleCheckboxChange = (testName, analyteName) => {
    setShowInterpretation((prev) => ({
      ...prev,
      [`${testName}-${analyteName}`]: !prev[`${testName}-${analyteName}`], // Toggle the checkbox for that analyte
    }));
  };

  const handleInputChange = (e, testName, analyteName) => {
    const value = e.target.value;
    setAnalyteValues((prev) => ({
      ...prev,
      [`${testName}-${analyteName}`]: value, // Store the analyte value with the test and analyte name as key
    }));
  };

  const handleTestSelect = (testName) => {
    setSelectedTest(testName);
  };

  const handleSave = () => {
    // Validate that all analyte values for the selected test are filled in
    const missingValues = Object.keys(analyteValues).filter(
      (key) => !analyteValues[key]
    );

    if (missingValues.length > 0) {
      alert('Please fill in all required values.');
      return;
    }

    if (patientDetails) {
      const updatedPatient = {
        ...patientDetails,
        analyteResults: analyteValues,
        showInterpretation,
        status: 'In Progress', // Change status to "In Progress"
      };

      // Update the patients list with new data and store in localStorage
      localStorage.setItem(
        'patients',
        JSON.stringify([
          ...patients.filter((p) => p.id !== patientDetails.id),
          updatedPatient,
        ])
      );

      alert('Results saved successfully!');
      
      // Clear all form data after saving
      setAnalyteValues({});
      setShowInterpretation({});
      setSelectedTest('');
      setPathologyCenter('');
      setSearchTerm('');
      setPatientDetails(null);
    }
  };

  // Dummy data for tests and analytes based on selected tests
  const testData = {
    bloodtest: [
      { name: 'Hemoglobin', unit: 'g/dl', normalRange: '13-17' },
      { name: 'Total Leucocyte Count', unit: '/cumm', normalRange: '4000-10000' },
      { name: 'Platelets', unit: '×10³/µL', normalRange: '150-450' },
    ],
    ecg: [
      { name: 'Heart Rate', unit: 'bpm', normalRange: '60-100' },
      { name: 'P-R Interval', unit: 'ms', normalRange: '120-200' },
      { name: 'QRS Duration', unit: 'ms', normalRange: '60-100' },
    ],
    xray: [
      { name: 'Lung Fields', unit: '', normalRange: 'Normal' },
      { name: 'Heart Size', unit: '', normalRange: 'Normal' },
      { name: 'Diaphragm', unit: '', normalRange: 'Normal' },
    ],
  };

  return (
    <div className="container">
      {/* Header with Logo */}
      <header className="d-flex justify-content-between align-items-center py-3 mb-4 shadow rounded">
        <div className="d-flex align-items-center">
          {/* Using Lucide's Clipboard Icon as Logo */}
          <Clipboard size={20} color="#007bff" className='ms-5'/>
          <h4 className="mx-3">Result Entry</h4>
        </div>
      </header>

      {/* Search and Pathology Section */}
      <section>
        <div className="row align-items-center mb-4">
          <div className="col-md-5 p-3">
            <div className="input-group rounded">
              <input
                type="search"
                name="search"
                className="form-control"
                aria-label="Search for patient name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <span
                className="input-group-text border-0"
                style={{ cursor: 'pointer' }}
                onClick={handleSearch}
              >
                <Search className="text-primary fs-5" />
              </span>
            </div>
          </div>

          <div className="col-md-2">
            <select
              name="PH"
              className="form-select"
              value={pathologyCenter}
              onChange={handlePathologyChange}
            >
              <option value="">Pathology</option>
              <option value="Adwani">Adwani PH Center</option>
              <option value="Sai">Sai PH Center</option>
            </select>
          </div>
        </div>
      </section>

      {/* Patient Information */}
      {patientDetails && (
        <section>
          <div className="row p-3 shadow-lg bg-light rounded">
            <div className="col-md-2">
              Name: <strong>{patientDetails.firstname} {patientDetails.lastname}</strong>
            </div>
            <div className="col-md-2">
              Age: <strong>{new Date().getFullYear() - new Date(patientDetails.dob).getFullYear()}</strong>
            </div>
            <div className="col-md-2">
              Gender: <strong>{patientDetails.gender}</strong>
            </div>
            <div className="col-md-2">
              Status: <strong className="text-primary">Ongoing</strong>
            </div>
            <div className="col-md">
              <button type="button" className="btn btn-primary" style={{ borderRadius: '0' }} onClick={handleSave}>
                Save
              </button>
            </div>
            <div className="col-md">
              <button type="button" className="btn btn-outline-primary" style={{ borderRadius: '0' }}>
                View more
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Test Results Section */}
      {patientDetails && patientDetails.selectedTests.length > 0 && (
        <section>
          <div className="row p-3 mt-4 shadow-lg bg-light rounded">
            {/* Display Available Tests */}
            <div className="col-md-12">
              <h5>Select Test to View Results:</h5>
              <div className="btn-group" role="group" aria-label="Test selection">
                {patientDetails.selectedTests.map((test) => (
                  <button
                    key={test}
                    type="button"
                    className={`btn ${test === selectedTest ? 'btn-primary' : 'btn-outline-primary'}`}
                    onClick={() => handleTestSelect(test)}
                  >
                    {test.charAt(0).toUpperCase() + test.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Display Analytes Based on Selected Test */}
          {selectedTest && (
            <div className="col-md-12">
              <h6>{selectedTest.charAt(0).toUpperCase() + selectedTest.slice(1)} Results</h6>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Analyte</th>
                    <th>Observed Value</th>
                    <th>Unit</th>
                    <th>Normal Range</th>
                    <th>Show Interpretation</th>
                  </tr>
                </thead>
                <tbody>
                  {testData[selectedTest].map((analyte, index) => (
                    <tr key={index}>
                      <td>{analyte.name}</td>
                      <td>
                        <input
                          type="text"
                          value={analyteValues[`${selectedTest}-${analyte.name}`] || ''}
                          onChange={(e) =>
                            handleInputChange(e, selectedTest, analyte.name)
                          }
                        />
                      </td>
                      <td>{analyte.unit}</td>
                      <td>{analyte.normalRange}</td>
                      <td>
                        <input
                          type="checkbox"
                          checked={showInterpretation[`${selectedTest}-${analyte.name}`] || false}
                          onChange={() => handleCheckboxChange(selectedTest, analyte.name)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      )}
    </div>
  );
}

export default ResultEntry;
