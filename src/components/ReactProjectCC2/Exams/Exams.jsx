/*import React from 'react';
import {exams}   from '../../SharedData';
import { Button } from '@mui/material';
const Appointment = () => {
  return (
    <>
        <div style={{ marginLeft: '100px', marginRight: '100px',boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', padding: '20px' ,borderRadius:'10px',marginTop:'100px'}}>
        <p style={{fontSize:'20px'}}><strong>Welcome to the Appointments section.</strong> Here, you can view your upcoming appointments.
        If you have booked an appointment but haven't seen any in this section, Please Proceed to "Book an Appointment"
        section to verify your login status.</p>
      <h2>Your Appointments</h2>
      <ul>
        {exams.map((exam) => (
          <li key={exam.id} style={{marginTop:'10px'}}>
            <span>{exam.name}</span>
            <Button style={{marginLeft:'20px'}} variant='contained'>CANCEL</Button>
          </li>
        ))}
      </ul>
    </div>
      </>
  );
};

export default Appointment;

import React from 'react';
import { exams } from '../../SharedData';
import { Button } from '@mui/material';
import {useNavigate} from 'react-router-dom';
import { useState } from 'react';

const Appointment = (exam) => {
  const[name,setName]=useState(exam);
  const navigate = useNavigate();
  const cancelAppointment = (id) => {
    // Implement your logic to cancel the appointment with the given id
    alert(`Appointment with ID ${id} cancelled`);
    setName(
      exam.Map(()=>{
        if(exam.id===id)
        {
          exam.id="",
          exam.name="";
        }
      })
    )
  };

  return (
    <>
      <div style={{ marginLeft: '100px', marginRight: '100px', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', padding: '20px', borderRadius: '10px', marginTop: '100px' }}>
        <p style={{ fontSize: '20px' }}>
          <strong>Welcome to the Appointments section.</strong> Here, you can view your upcoming appointments.
          If you have booked an appointment but haven't seen any in this section, Please Proceed to "Book an Appointment"
          section to verify your login status.
        </p>
        <h2>Your Appointments</h2>
        <ul>
          {exams.map((exam) => (
            <li key={exam.id} style={{ marginTop: '10px' }}>
              <span>{exam.name}</span>
              <Button style={{ marginLeft: '20px' }} variant='contained' onClick={() => cancelAppointment(exam.id)}>
                CANCEL
              </Button>
            </li>
          ))}
        </ul>


          <Button variant='contained' style={{ marginTop: '20px' }} onClick={()=>{navigate('/go')}}>
            ADD APPOINTMENT
          </Button>
      </div>
    </>
  );
};

export default Appointment;*/

import React from 'react';
import { exams } from '../../SharedData';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Appointment = () => {
  const navigate = useNavigate();
  const [appointments, setAppointments] = useState(exams);

  const cancelAppointment = (id) => {
    // Implement your logic to cancel the appointment with the given id
    alert(`Appointment with ID ${id} cancelled`);

    // Update the state to remove the cancelled appointment
    setAppointments((prevAppointments) => {
      return prevAppointments.map((appointment) => {
        if (appointment.id === id) {
          return { ...appointment, id: '', name: '' };
        } else {
          return appointment;
        }
      });
    });
  };

  return (
    <>
      <div style={{ marginLeft: '100px', marginRight: '100px', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', padding: '20px', borderRadius: '10px', marginTop: '100px' }}>
        <p style={{ fontSize: '20px' }}>
          <strong>Welcome to the Appointments section.</strong> Here, you can view your upcoming appointments.
          If you have booked an appointment but haven't seen any in this section, please proceed to the "Book an Appointment"
          section to verify your login status.
        </p>
        <h2>Your Appointments</h2>
        <ul style={{listStyleType:'none'}}>
          {appointments.map((appointment) => (
            <li key={appointment.id} style={{ marginTop: '10px' }}>
              <span>{appointment.name}</span>
              <Button style={{ marginLeft: '20px' }} variant='contained' onClick={() => cancelAppointment(appointment.id)}>
                CANCEL
              </Button>
            </li>
          ))}
        </ul>

        {/* Add Appointment Button */}
        <Button variant='contained' style={{ marginTop: '20px' }} onClick={() => navigate('/go')}>
          ADD APPOINTMENT
        </Button>
      </div>
    </>
  );
};

export default Appointment;

