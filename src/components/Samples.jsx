import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import Tests from './Tests';

function Samples() {
  const [patients, setPatients] = useState([]); // Store patients from localStorage
  const [searchTerm, setSearchTerm] = useState(''); // Search term for filtering patients
  const [filteredPatient, setFilteredPatient] = useState(null); // Store selected patient
  const [selectedTest, setSelectedTest] = useState(''); // Store selected test
  const [numberOfSamples, setNumberOfSamples] = useState(1); // Store number of samples
  const [sampleRecords, setSampleRecords] = useState([]); // Store dynamically generated samples
  const [sampleRegistered, setSampleRegistered] = useState(false); // To display confirmation message after sample submission

  useEffect(() => {
    // Load patients from localStorage
    const storedPatients = JSON.parse(localStorage.getItem('patients')) || [];
    setPatients(storedPatients);
  }, []);

  const handleSearch = () => {
    if (!patients || patients.length === 0) {
      alert('No patients found in the system.');
      setFilteredPatient(null);
      return;
    }

    const patient = patients.find(
      (p) => p.firstname && p.firstname.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (patient) {
      setFilteredPatient(patient);
    } else {
      alert('Patient not found.');
      setFilteredPatient(null);
    }
  };

  const handleTestSelect = (test) => {
    setSelectedTest(test);
    setSampleRecords([]); // Reset sample records
  };

  // Generate unique sample ID
  const generateSampleId = (index) => {
    const date = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
    return `S-${date}-${index + 1}`;
  };

  // Handle creating the sample records
  const handleCreateSamples = () => {
    const newSampleRecords = [];
    for (let i = 0; i < numberOfSamples; i++) {
      newSampleRecords.push({
        sampleId: generateSampleId(i),
        testName: selectedTest,
        collectionDate: '',
        collectorName: '',
        location: '',
      });
    }
    setSampleRecords(newSampleRecords); // Set the generated sample records
    setSampleRegistered(false); // Reset registered status
  };

  // Handle sample field changes
  const handleSampleFieldChange = (index, field, value) => {
    const updatedSampleRecords = [...sampleRecords];
    updatedSampleRecords[index][field] = value;
    setSampleRecords(updatedSampleRecords);
  };

  // Handle sample submission
  const handleSampleSubmit = () => {
    if (filteredPatient) {
      const updatedPatients = patients.map((p) => {
        if (p.id === filteredPatient.id) {
          return {
            ...p,
            samples: [...(p.samples || []), ...sampleRecords],
            testStatus: 'Draft', // Set test status to 'Draft' when samples are registered
          };
        }
        return p;
      });
      setPatients(updatedPatients);
      localStorage.setItem('patients', JSON.stringify(updatedPatients));
      setSampleRegistered(true); // Show success message
    }
  };

  return (
    <div className="container">
      <header className="text-center my-4">
        <h4>Sample Dashboard</h4>
      </header>

      {/* Search Section */}
      <section>
        <div className="row align-items-center mb-4">
          <div className="col-md-8">
            <div className="input-group shadow rounded">
              <input
                type="search"
                name="search"
                placeholder="Enter patient name"
                className="form-control border-0 shadow-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <span
                className="input-group-text border-0"
                onClick={handleSearch}
                style={{ cursor: 'pointer' }}
              >
                <Search className="text-primary fs-5" />
              </span>
            </div>
          </div>
          <div className="col-md-2 text-md-end mt-3 mt-md-0">
            <button
              type="button"
              className="btn btn-success rounded w-100"
              onClick={handleSearch}
            >
              Details
            </button>
          </div>
        </div>
      </section>

      {/* Patient Information */}
      {filteredPatient ? (
        <section>
          <div className="row my-4 p-3 shadow-lg bg-light rounded">
            <h5 className="text-center text-primary">Patient Information</h5>
            <div className="col-md-2 mb-2">
              <strong>Patient Name:</strong> {filteredPatient.firstname} {filteredPatient.lastname}
            </div>
            <div className="col-md-2 mb-2">
              <strong>Date of birth:</strong> {filteredPatient.dob}
            </div>
            <div className="col-md-2 mb-2">
              <strong>Gender:</strong> {filteredPatient.gender}
            </div>
            <div className="col-md-2 mb-2">
              <strong>Contact:</strong> {filteredPatient.phonenumber}
            </div>
            <div className="col-md-4">
              <strong>Tests:</strong>{' '}
              {filteredPatient.selectedTests ? filteredPatient.selectedTests.join(', ') : 'None'}
            </div>
          </div>
        </section>
      ) : (
        <p className="text-center text-danger">No patient found</p>
      )}

      {/* Tests Section */}
      <div className="row">
        {filteredPatient && (
          <div className="col-md-3 me-4 shadow rounded">
            <Tests
              tests={filteredPatient.selectedTests || []}
              onTestSelect={handleTestSelect}
            />
          </div>
        )}

        {/* Number of Samples Input */}
        {filteredPatient && selectedTest && (
          <div className="col-md-8 shadow rounded p-4 bg-light">
            <h6 className="text-center mb-4">Create Sample Records for {selectedTest}</h6>
            <div className="row mb-5">
              <div className="col-md-6 mb-3">
                <label className="form-label">Number of Samples</label>
                <input
                  type="number"
                  min="1"
                  className="form-control"
                  value={numberOfSamples}
                  onChange={(e) => setNumberOfSamples(parseInt(e.target.value, 10))}
                />
              </div>
            </div>

            {/* Create Samples Button */}
            <div className="text-center mb-3">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleCreateSamples}
              >
                Create Samples
              </button>
            </div>

            {/* Display Generated Sample Records */}
            {sampleRecords.length > 0 && (
              <div className="mt-3">
                <h6>Generated Sample Records:</h6>
                {sampleRecords.map((sample, index) => (
                  <div key={index} className="mb-3">
                    <div>
                      <strong>Sample ID:</strong> {sample.sampleId}
                    </div>
                    <div className="row">
                      <div className="col-md-4">
                        <label className="form-label">Location</label>
                        <input
                          type="text"
                          className="form-control"
                          value={sample.location}
                          onChange={(e) =>
                            handleSampleFieldChange(index, 'location', e.target.value)
                          }
                        />
                      </div>
                      <div className="col-md-4">
                        <label className="form-label">Collector Name</label>
                        <input
                          type="text"
                          className="form-control"
                          value={sample.collectorName}
                          onChange={(e) =>
                            handleSampleFieldChange(index, 'collectorName', e.target.value)
                          }
                        />
                      </div>
                      <div className="col-md-4">
                        <label className="form-label">Collection Date</label>
                        <input
                          type="datetime-local"
                          className="form-control"
                          value={sample.collectionDate}
                          onChange={(e) =>
                            handleSampleFieldChange(index, 'collectionDate', e.target.value)
                          }
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Submit Samples */}
            {sampleRecords.length > 0 && (
              <div className="text-center">
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={handleSampleSubmit}
                >
                  Submit Samples
                </button>
              </div>
            )}

            {sampleRegistered && (
              <div className="alert alert-success mt-3">
                Sample Registered Successfully!
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Samples;
