import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Button } from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/images/CompanyLogo.jpg";

const Navbar = ({ toggleSidebar }) => {
  const navigate = useNavigate();
  const onchange = () => {
    navigate("/home");
  };
  const onchoose = () => {
    navigate("./choose");
  };
  const signout = () => {
    navigate("/go");
  };

  return (
    <>
    <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'></link>
      <div style={{ width: "100%" }}>
        <AppBar
          style={{
            width: "100%",
            background: "linear-gradient(to right,#E16E96,#9D2E7D)",
            borderRadius: "0px 0px 25px 25px",
            margin: "0px 5px",
          }}
          position="fixed"
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="menu"
              onClick={toggleSidebar}
              edge="start"
              
            >
              <MenuRoundedIcon style={{margin:'5px',fontSize:'30px'}}/>
            </IconButton>
            <img
              src={Logo}
              alt="Logo"
              width="50px"
              height="50px"
              style={{ borderRadius: "15px",marginBottom:"10px"}}
            />
            <Typography
              variant="h4"
              noWrap
              style={{ fontFamily: "Poppins", paddingLeft: "10px",paddingBottom:'3px'}}
            >
              Global Hospitals
            </Typography>
            <Button
              variant="standard"
              onClick={onchange}
              style={{ color: "white", marginLeft: "650px" }}
            >
              Home
            </Button>
            <Button
              variant="standard"
              onClick={onchoose}
              style={{ color: "white" }}
            >
              BOOKING METHODS
            </Button>
            <Button
              variant="standard"
              onClick={signout}
              style={{ color: "white" }}
            >
              Admin
            </Button>
            <Button variant="contained" style={{background:"rgb(59,40,96)",color: "",fontWeight:"bold",borderRadius:"25px"}} onClick={()=>{navigate('/')}}>
              SIGN OUT
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
};
export default Navbar;
