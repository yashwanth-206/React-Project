import React from 'react';
import { Box, Drawer, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import NotesRoundedIcon from '@mui/icons-material/NotesRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import PeopleOutlineRoundedIcon from '@mui/icons-material/PeopleOutlineRounded';
import CallRoundedIcon from '@mui/icons-material/CallRounded';

const SidebarHome = ({ isOpen, toggleSidebar }) => {
  const navigate = useNavigate();

  const goInfo = () => {
    navigate('/go');
    toggleSidebar();
  };

  const goacademics = () => {
    navigate('/Patients');
    toggleSidebar();
  }
  const goexams = () => {
    navigate('/exams');
    toggleSidebar();
  }

  const goplacement = () => {
    navigate('/Aboutus');
    toggleSidebar();
  }
  const goabout = () => {
    navigate('/Contact');
    toggleSidebar();
  }
  return (
    <>
      <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'></link>
      <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'></link>
      <div className='sidebar'>
        <Drawer variant='temporary' anchor="left" sx={{width:'300px'}}open={isOpen} onClose={toggleSidebar} >
          <List>
            <div style={{ width: '250px'}}>
              <Box>
                <AccountCircleRoundedIcon style={{ height: '70px', width: '70px', backgroundColor: 'white', borderRadius: '50%', marginLeft: '90px' }} />
              </Box>
              <ListItemButton onClick={goInfo}>
                <ListItemIcon><AddRoundedIcon color='secondary' /></ListItemIcon>
                <ListItemText primary="Book Now" style={{ marginTop: '20px' }} />
              </ListItemButton>
              <ListItemButton onClick={goexams}>
                <ListItemIcon><NotesRoundedIcon color='secondary' /></ListItemIcon>
                <ListItemText primary="Your Appointments" style={{ marginTop: '20px' }} />
              </ListItemButton>
              <ListItemButton onClick={goplacement}>
                <ListItemIcon><InfoRoundedIcon color='secondary' /></ListItemIcon>
                <ListItemText primary="About Us" style={{ marginTop: '20px' }} />
              </ListItemButton>
              <ListItemButton onClick={goacademics}>
                <ListItemIcon><PeopleOutlineRoundedIcon color='secondary' /></ListItemIcon>
                <ListItemText primary="Patients" style={{ marginTop: '20px' }} />
              </ListItemButton>
              <ListItemButton onClick={goabout}>
                <ListItemIcon><CallRoundedIcon color='secondary' /></ListItemIcon>
                <ListItemText primary="Contact us" style={{ marginTop: '20px' }} />
              </ListItemButton>
            </div>
          </List>
        </Drawer>
      </div>
    </>
  );
};

export default SidebarHome;
