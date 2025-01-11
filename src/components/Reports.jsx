import React, { useEffect, useState } from 'react';

function Reports() {
  const [patients, setPatients] = useState([]); // To store the list of in-progress patients
  const [selectedPatient, setSelectedPatient] = useState(null); // To store the selected patient details
  const [analyteValues, setAnalyteValues] = useState({});
  const [selectedTests, setSelectedTests] = useState([]);
  const [showInterpretation, setShowInterpretation] = useState({});

  useEffect(() => {
    // Fetching all patients from localStorage
    const allPatients = JSON.parse(localStorage.getItem('patients')) || [];
    const inProgressPatients = allPatients.filter(patient => patient.status === 'In Progress');
    setPatients(inProgressPatients);
  }, []);

  const handlePatientClick = (patientId) => {
    // When a patient is clicked, fetch their details from localStorage
    const allPatients = JSON.parse(localStorage.getItem('patients')) || [];
    const selected = allPatients.find(patient => patient.id === patientId);
    if (selected) {
      setSelectedPatient(selected);
      setAnalyteValues(selected.analyteResults);
      setSelectedTests(selected.selectedTests);
      setShowInterpretation(selected.showInterpretation);
    }
  };

  const printReport = () => {
    window.print(); // This will trigger the print dialog
  };

  const generateConclusion = () => {
    // A simple function to generate a conclusion based on the tests
    let conclusion = 'Patient Report Summary:\n\n';
    if (selectedTests.includes("bloodtest")) {
      conclusion += 'CBC Report is as follows:\n- Hemoglobin: ' + analyteValues["bloodtest-Hemoglobin"] + '\n- Leucocyte Count: ' + analyteValues["bloodtest-Total Leucocyte Count"] + '\n- Platelets: ' + analyteValues["bloodtest-Platelets"] + '\n\n';
    }
    if (selectedTests.includes("ecg")) {
      conclusion += 'ECG Report indicates:\n- Heart Rate: ' + analyteValues["ecg-Heart Rate"] + ' bpm\n- P-R Interval: ' + analyteValues["ecg-P-R Interval"] + ' sec\n\n';
    }
    if (selectedTests.includes("xray")) {
      conclusion += 'X-Ray Report:\n- Chest X-Ray: ' + analyteValues["xray-Chest"] + '\n- Abdomen X-Ray: ' + analyteValues["xray-Abdomen"] + '\n';
    }
    return conclusion;
  };

  return (
    <div className="container mt-4">
      {/* Patient List */}
      <section>
        <h5 className="mx-4 mb-4">Report</h5>
        <ul className="list-group">
          {patients.map(patient => (
            <li key={patient.id} className="list-group-item d-flex justify-content-between align-items-center" onClick={() => handlePatientClick(patient.id)}>
              <span>{patient.firstname} {patient.lastname}</span>
              <span className="badge bg-info">{patient.status}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Patient Details */}
      {selectedPatient && (
        <section className="mt-4">
          <div className="row align-items-center shadow-lg p-3 mb-4 bg-light rounded">
            <div className="col-md-3"><strong>Patient Name: </strong>{selectedPatient.firstname} {selectedPatient.lastname}</div>
            <div className="col-md-3"><strong>Patient ID: </strong>{selectedPatient.phonenumber}</div>
            <div className="col-md-3"><strong>Birth Date: </strong>{selectedPatient.dob}</div>
            <div className="col-md-3"><strong>Age: </strong>{new Date().getFullYear() - new Date(selectedPatient.dob).getFullYear()} years</div>
            <div className="col-md-3"><strong>Gender: </strong>{selectedPatient.gender}</div>
            <div className="col-md-3"><strong>Receiving Date: </strong>{new Date().toLocaleDateString()}</div>
            <div className="col-md-3"><strong>Reference By: </strong>Dr. Chavan</div>
            {/* <div className="col-md-3"><strong>Reg. No.: </strong>5376</div> */}
          </div>

          {/* Displaying Reports for Multiple Tests */}
          {selectedTests.includes("bloodtest") && (
            <section>
              <h5 className="text-center border p-2 shadow-lg bg-primary text-white">DEPARTMENT OF HEMATOLOGY - CBC</h5>
              <table className="table table-bordered table-striped shadow-lg">
                <thead>
                  <tr>
                    <th>TEST NAME</th>
                    <th>RESULT</th>
                    <th>UNITS</th>
                    <th>NORMAL RANGE</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Hemoglobin</td>
                    <td>{analyteValues["bloodtest-Hemoglobin"] || 'N/A'}</td>
                    <td>gm/dl</td>
                    <td>11.0-14.0 gm/dl</td>
                  </tr>
                  <tr>
                    <td>Total Leucocyte Count</td>
                    <td>{analyteValues["bloodtest-Total Leucocyte Count"] || 'N/A'}</td>
                    <td>/cu.mm</td>
                    <td>4000-11000 /cu.mm</td>
                  </tr>
                  <tr>
                    <td>Platelets</td>
                    <td>{analyteValues["bloodtest-Platelets"] || 'N/A'}</td>
                    <td>cells/cumm</td>
                    <td>150,000 - 400,000 cells/cumm</td>
                  </tr>
                </tbody>
              </table>
            </section>
          )}

          {/* Displaying ECG Report */}
          {selectedTests.includes("ecg") && (
            <section>
              <h5 className="text-center border p-2 shadow-lg bg-success text-white">ECG REPORT</h5>
              <table className="table table-bordered table-striped shadow-lg">
                <thead>
                  <tr>
                    <th>TEST NAME</th>
                    <th>RESULT</th>
                    <th>UNITS</th>
                    <th>INTERPRETATION</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Heart Rate</td>
                    <td>{analyteValues["ecg-Heart Rate"] || 'N/A'}</td>
                    <td>beats per minute</td>
                    <td>{parseInt(analyteValues["ecg-Heart Rate"]) < 60 ? "Low" : (parseInt(analyteValues["ecg-Heart Rate"]) > 100 ? "High" : "Normal")}</td>
                  </tr>
                  <tr>
                    <td>P-R Interval</td>
                    <td>{analyteValues["ecg-P-R Interval"] || 'N/A'}</td>
                    <td>seconds</td>
                    <td>{parseFloat(analyteValues["ecg-P-R Interval"]) < 0.12 ? "Short" : (parseFloat(analyteValues["ecg-P-R Interval"]) > 0.20 ? "Long" : "Normal")}</td>
                  </tr>
                  <tr>
                    <td>QRS Duration</td>
                    <td>{analyteValues["ecg-QRS Duration"] || 'N/A'}</td>
                    <td>seconds</td>
                    <td>{parseFloat(analyteValues["ecg-QRS Duration"]) > 0.10 ? "Prolonged" : "Normal"}</td>
                  </tr>
                  <tr>
                    <td>QT Interval</td>
                    <td>{analyteValues["ecg-QT Interval"] || 'N/A'}</td>
                    <td>seconds</td>
                    <td>{parseFloat(analyteValues["ecg-QT Interval"]) > 0.44 ? "Prolonged" : "Normal"}</td>
                  </tr>
                  <tr>
                    <td>ST Segment</td>
                    <td>{analyteValues["ecg-ST Segment"] || 'N/A'}</td>
                    <td>---</td>
                    <td>{analyteValues["ecg-ST Segment"] === "Elevated" ? "Abnormal" : "Normal"}</td>
                  </tr>
                </tbody>
              </table>
            </section>
          )}

          {/* Displaying X-Ray Report */}
          {selectedTests.includes("xray") && (
            <section>
              <h5 className="text-center border p-2 shadow-lg bg-warning text-white">X-RAY REPORT</h5>
              <table className="table table-bordered table-striped shadow-lg">
                <thead>
                  <tr>
                    <th>TEST NAME</th>
                    <th>RESULT</th>
                    <th>INTERPRETATION</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Chest X-Ray</td>
                    <td>{analyteValues["xray-Chest"] || 'N/A'}</td>
                    <td>{analyteValues["xray-Chest"] === "Normal" ? "No issues detected" : "Further examination required"}</td>
                  </tr>
                  <tr>
                    <td>Abdomen X-Ray</td>
                    <td>{analyteValues["xray-Abdomen"] || 'N/A'}</td>
                    <td>{analyteValues["xray-Abdomen"] === "Normal" ? "No abnormalities detected" : "Consult with specialist"}</td>
                  </tr>
                </tbody>
              </table>
            </section>
          )}

          {/* Conclusion Section */}
          <section>
            <h5 className="text-center mt-4">Conclusion</h5>
            <p>{generateConclusion()}</p>
          </section>

          {/* Print Button */}
          <section className="text-center mt-4">
            <button onClick={printReport} className="btn btn-primary">Print Report</button>
          </section>
        </section>
      )}
    </div>
  );
}

export default Reports;
