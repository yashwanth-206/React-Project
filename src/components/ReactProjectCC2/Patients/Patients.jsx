/*import React from 'react';

const Academics = () => {
  const students = [
    { name: 'Abel', rollNo: '201', status:'In Treatment' },
    { name: 'Bob', rollNo: '202', status:'Discharged' },
    { name: 'Smriti', rollNo: '203', status:'Deceased' },
  ];

  return (
    <div style={{ marginLeft: '250px', marginRight: '250px',marginTop:'200px',border:'0px solid #4FB06D',padding:'10px',borderRadius:'10px',boxShadow: '0px 0px 255px 0px rgba(0,0,0,0.6), 0px 45px 26px 0px rgba(0,0,0,0.14)'}}>
      <h2 style={{textAlign:'center'}}>Patient Details</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid #ccc'}}>
            <th style={{ padding: '8px', textAlign: 'Center' }}>Name</th>
            <th style={{ padding: '8px', textAlign: 'Center' }}>Admission No</th>
            <th style={{ padding: '8px', textAlign: 'Center' }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index} style={{ borderBottom: '1px solid #ccc' }}>
              <td style={{ padding: '8px',textAlign: 'Center' }}>{student.name}</td>
              <td style={{ padding: '8px',textAlign: 'Center' }}>{student.rollNo}</td>
              <td style={{ padding: '8px',textAlign: 'Center' }}>{student.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Academics;

import React, { useState } from 'react';

const Academics = () => {
  const [students, setStudents] = useState([
    { name: 'Abel', rollNo: '201', status: 'In Treatment' },
    { name: 'Bob', rollNo: '202', status: 'Discharged' },
    { name: 'Smriti', rollNo: '203', status: 'Deceased' },
  ]);

  const addStudent = () => {
    const newStudent = { name: '', rollNo: '204', status: 'Admitted' };
    setStudents([...students, newStudent]);
  };

  const deleteStudent = (index) => {
    const updatedStudents = [...students];
    updatedStudents.splice(index, 1);
    setStudents(updatedStudents);
  };

  return (
    <div style={{ marginLeft: '250px', marginRight: '250px', marginTop: '200px', border: '0px solid #4FB06D', padding: '10px', borderRadius: '10px', boxShadow: '0px 0px 255px 0px rgba(0,0,0,0.6), 0px 45px 26px 0px rgba(0,0,0,0.14)' }}>
      <h2 style={{ textAlign: 'center' }}>Patient Details</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid #ccc' }}>
            <th style={{ padding: '8px', textAlign: 'center' }}>Name</th>
            <th style={{ padding: '8px', textAlign: 'center' }}>Admission No</th>
            <th style={{ padding: '8px', textAlign: 'center' }}>Status</th>
            <th style={{ padding: '8px', textAlign: 'center' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index} style={{ borderBottom: '1px solid #ccc' }}>
              <td style={{ padding: '8px', textAlign: 'center' }}>{student.name}</td>
              <td style={{ padding: '8px', textAlign: 'center' }}>{student.rollNo}</td>
              <td style={{ padding: '8px', textAlign: 'center' }}>{student.status}</td>
              <td style={{ padding: '8px', textAlign: 'center' }}>
                <button onClick={() => deleteStudent(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ textAlign: 'center', marginTop: '10px' }}>
        <button onClick={addStudent}>Add Student</button>
      </div>
    </div>
  );
};

export default Academics;

import React, { useState } from 'react';
import { Button } from '@mui/material';

const Academics = () => {
  const [students, setStudents] = useState([
    { name: 'Abel', rollNo: '201', status: 'In Treatment' },
    { name: 'Bob', rollNo: '202', status: 'Discharged' },
    { name: 'Smriti', rollNo: '203', status: 'Deceased' },
  ]);

  const addStudent = () => {
    const patientName = window.prompt('Enter patient name:');
    if (patientName) {
      const newStudent = { name: patientName, rollNo: `20${students.length + 1}`, status: 'Admitted' };
      setStudents([...students, newStudent]);
    }
  };

  const deleteStudent = (index) => {
    const updatedStudents = [...students];
    updatedStudents.splice(index, 1);
    setStudents(updatedStudents);
  };

  return (
    <div style={{ marginLeft: '250px', marginRight: '250px', marginTop: '200px', border: '0px solid #4FB06D', padding: '10px', borderRadius: '10px', boxShadow: '0px 0px 255px 0px rgba(0,0,0,0.6), 0px 45px 26px 0px rgba(0,0,0,0.14)' }}>
      <h2 style={{ textAlign: 'center' }}>Patient Details</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid #ccc' }}>
            <th style={{ padding: '8px', textAlign: 'center' }}>Name</th>
            <th style={{ padding: '8px', textAlign: 'center' }}>Admission No</th>
            <th style={{ padding: '8px', textAlign: 'center' }}>Status</th>
            <th style={{ padding: '8px', textAlign: 'center' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index} style={{ borderBottom: '1px solid #ccc' }}>
              <td style={{ padding: '8px', textAlign: 'center' }}>{student.name}</td>
              <td style={{ padding: '8px', textAlign: 'center' }}>{student.rollNo}</td>
              <td style={{ padding: '8px', textAlign: 'center' }}>{student.status}</td>
              <td style={{ padding: '8px', textAlign: 'center' }}>
                <Button variant='outlined' onClick={() => deleteStudent(index)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ textAlign: 'center', marginTop: '10px' }}>
        <Button variant ='contained'onClick={addStudent}>ADD</Button>
      </div>
    </div>
  );
};

export default Academics;*/

import React, { useState } from 'react';
import { Button } from '@mui/material';

const Academics = () => {
  const [students, setStudents] = useState([
    { name: 'Abel', rollNo: '201', status: 'In Treatment' },
    { name: 'Bob', rollNo: '202', status: 'Discharged' },
    { name: 'Smriti', rollNo: '203', status: 'Deceased' },
  ]);

  const [admissionCounter, setAdmissionCounter] = useState(204); // Initialize with the next available admission number

  const addStudent = () => {
    const patientName = window.prompt('Enter patient name:');
    if (patientName) {
      const newStudent = { name: patientName, rollNo: `${admissionCounter}`, status: 'Admitted' };
      setAdmissionCounter(admissionCounter + 1); // Increment the admission counter
      setStudents([...students, newStudent]);
    }
  };

  const deleteStudent = (index) => {
    const updatedStudents = [...students];
    updatedStudents.splice(index, 1);
    setStudents(updatedStudents);
  };

  return (
    <div style={{ marginLeft: '250px', marginRight: '250px', marginTop: '200px', border: '0px solid #4FB06D', padding: '10px', borderRadius: '10px', boxShadow: '0px 0px 255px 0px rgba(0,0,0,0.6), 0px 45px 26px 0px rgba(0,0,0,0.14)' }}>
      <h2 style={{ textAlign: 'center' }}>Patient Details</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid #ccc' }}>
            <th style={{ padding: '8px', textAlign: 'center' }}>Name</th>
            <th style={{ padding: '8px', textAlign: 'center' }}>Admission No</th>
            <th style={{ padding: '8px', textAlign: 'center' }}>Status</th>
            <th style={{ padding: '8px', textAlign: 'center' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index} style={{ borderBottom: '1px solid #ccc' }}>
              <td style={{ padding: '8px', textAlign: 'center' }}>{student.name}</td>
              <td style={{ padding: '8px', textAlign: 'center' }}>{student.rollNo}</td>
              <td style={{ padding: '8px', textAlign: 'center' }}>{student.status}</td>
              <td style={{ padding: '8px', textAlign: 'center' }}>
                <Button variant='outlined' onClick={() => deleteStudent(index)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ textAlign: 'center', marginTop: '10px' }}>
        <Button variant='contained' onClick={addStudent}>ADD</Button>
      </div>
    </div>
  );
};

export default Academics;



