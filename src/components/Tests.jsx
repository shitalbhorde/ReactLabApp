import React from 'react';

function Tests({ tests, onTestSelect }) {
  return (
    <div className="">
      <h6 className="text-danger text-center fw-bold">Tests</h6>
      <ul className="list-group">
        {tests.length > 0 ? (
          tests.map((test, index) => (
            <li
              key={index}
              className="list-group-item list-group-item-action"
              onClick={() => onTestSelect(test)}
              style={{ cursor: 'pointer' }}
            >
              {test}
            </li>
          ))
        ) : (
          <p className="text-muted text-center">No tests available</p>
        )}
      </ul>
    </div>
  );
}

export default Tests;
