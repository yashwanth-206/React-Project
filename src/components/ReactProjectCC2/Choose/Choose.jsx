
import React from 'react';

const Choose = () => {
  const chooseStyles = {
    border: '1px solid #ccc',
    borderRadius: '10px',
    marginLeft: '100px',
    marginTop: '100px',
    padding: '20px',
  };

  return (
    <div className="col-sm-3 other-links" style={chooseStyles}>
      <h1>Booking Methods</h1>
      <ul className="list-unstyled">
        <li>
          <p>In Person Booking - from 10.00 AM to 2.00 PM</p>
        </li>
        <li>
          <p>Book through Phone : +91 98765 43210</p>
        </li>
        <li>
          <p>Online Booking - Available </p>
        </li>
      </ul>
    </div>
  );
};

export default Choose;
