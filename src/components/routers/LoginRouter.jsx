import React, { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Loginpage from '../ReactProjectCC2/Loginpage';
import Register from '../ReactProjectCC2/Register';
import Navbar from '../ReactProjectCC2/Navbar';
import Sidebarhome from '../ReactProjectCC2/Sidebarhome';
import Home from '../ReactProjectCC2/Home';
import Studentusername from '../ReactProjectCC2/Studentusername';
import Academics from '../ReactProjectCC2/Patients/Patients';
import Exams from '../ReactProjectCC2/Exams/Exams';
import Aboutus from '../ReactProjectCC2/Aboutus/Aboutus';
import ChooseUs from '../ReactProjectCC2/Choose/Choose';
import Contact from '../ReactProjectCC2/Contact';


const LoginRouting = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const location = useLocation();
  const isHomePage = ['/home', '/gostudentinformation', '/Patients', '/exams', '/admin', '/Aboutus', '/choose', '/Contact','/go']
    .includes(location.pathname);

  return (
    <>
      {isHomePage && (
        <>
          <Navbar toggleSidebar={toggleSidebar} />
          <Sidebarhome isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        </>
      )}

      <Routes>
        <Route path='/' element={<Loginpage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Loginpage />} />
        <Route path='/home' element={<Home />} />
        <Route path='/go' element={<Studentusername />} />
        <Route path='/Patients' element={<Academics />} />
        <Route path='/exams' element={<Exams />} />
        <Route path='/Aboutus' element={<Aboutus />} />
        <Route path='/choose' element={<ChooseUs/>} />
        <Route path='/Contact' element={<Contact/>} />  
      </Routes>
      <>
      <footer/>
      </>
    </>
  );
};

export default LoginRouting;
