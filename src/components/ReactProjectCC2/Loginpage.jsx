/*import React, { useState } from "react";
import "./Loginpage.css";
import { Button, Snackbar, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Loginpage = () => {
  const [username, setUsername] = useState("");
  const [pass, setpass] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const navigate = useNavigate();

  const onHandleRegister = () => {
    navigate("/register");
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios.get("http://localhost:3005/patients").then((result) => {
      let validCredentials = false;
      result.data.map((user) => {
        if (user.username === username && user.password === pass) {
          validCredentials = true;
        }
      });

      if (validCredentials) {
        navigate("/home");
      } else {
        // Show Snackbar for invalid credentials
        setSnackbarOpen(true);
      }
    });
  };

  return (
    <>
      <div className="Bodylogin">
        <form onSubmit={handleSubmit}>
          <div className="containerlogin" style={{ borderRadius: "25px" }}>
            <p style={{ textAlign: "center", fontWeight: "bold", fontSize: "20px" }}>LOGIN</p>
            <div>
              <TextField
                variant="outlined"
                label="Username"
                style={{ width: "280px" }}
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
              />
            </div>
            <div>
              <TextField
                variant="outlined"
                label="Password"
                onChange={(event) => {
                  setpass(event.target.value);
                }}
                style={{ width: "280px" }}
              />
            </div>
            <div>
              <Button
                variant="contained"
                type="button"
                style={{ width: "280px", borderRadius: "25px" }}
                onClick={handleSubmit}
              >
                Login
              </Button>
            </div>
            <div>
              <p style={{ textAlign: "center" }}>Don't have an account ?</p>
              <Button
                variant="outlined"
                style={{ marginLeft: "5px", width: "280px", borderRadius: "25px" }}
                onClick={onHandleRegister}
              >
                Register
              </Button>
            </div>
          </div>
        </form>

        <Snackbar
          open={snackbarOpen}
          autoHideDuration={6000}
          onClose={handleSnackbarClose}
          message="Invalid username/password"
        />
      </div>
    </>
  );
};

export default Loginpage;
import React, { createContext, useContext, useState } from "react";
import "./Loginpage.css";
import { Button, Snackbar, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// Create a context for managing Snackbar state
const SnackbarContext = createContext();

// Custom hook to access the Snackbar context
const useSnackbar = () => {
  const context = useContext(SnackbarContext);
  if (!context) {
    throw new Error("useSnackbar must be used within a SnackbarProvider");
  }
  return context;
};

// Provider component to wrap the entire application
const SnackbarProvider = ({ children }) => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const openSnackbar = () => {
    setSnackbarOpen(true);
  };

  const closeSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <SnackbarContext.Provider value={{ openSnackbar, closeSnackbar }}>
      {children}
    </SnackbarContext.Provider>
  );
};

const Loginpage = () => {
  const [username, setUsername] = useState("");
  const [pass, setpass] = useState("");
  const { openSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const onHandleRegister = () => {
    navigate("/register");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios.get("http://localhost:3005/patients").then((result) => {
      let validCredentials = false;
      result.data.map((user) => {
        if (user.username === username && user.password === pass) {
          validCredentials = true;
        }
      });

      if (validCredentials) {
        navigate("/home");
      } else {
        // Show Snackbar for invalid credentials using context
        openSnackbar();

      }
    });
  };

  return (
    <>
      <div className="Bodylogin">
        <form onSubmit={handleSubmit}>
          <div className="containerlogin" style={{ borderRadius: "25px" }}>
            <p style={{ textAlign: "center", fontWeight: "bold", fontSize: "20px" }}>LOGIN</p>
            <div>
              <TextField
                variant="outlined"
                label="Username"
                style={{ width: "280px" }}
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
              />
            </div>
            <div>
              <input type="password"
                label="Password"
                placeholder="Password"
                onChange={(event) => {
                  setpass(event.target.value);
                }}
                style={{ width: "280px",height:'60px'}}
              />
            </div>
            <div>
              <Button
                variant="contained"
                type="button"
                style={{ width: "280px", borderRadius: "25px" }}
                onClick={handleSubmit}
              >
                Login
              </Button>
            </div>
            <div>
              <p style={{ textAlign: "center" }}>Don't have an account ?</p>
              <Button
                variant="outlined"
                style={{ marginLeft: "5px", width: "280px", borderRadius: "25px" }}
                onClick={onHandleRegister}
              >
                Register
              </Button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

const App = () => {
  return (
    <SnackbarProvider>
      <Loginpage />
    </SnackbarProvider>
  );
};

export default App;*/

import React, { useState, createContext, useContext } from "react";
import "./Loginpage.css";
import { Button, Snackbar, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AuthenticationContext = createContext();

const AuthenticationProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);

  const login = () => {
    setAuthenticated(true);
  };

  const logout = () => {
    setAuthenticated(false);
  };

  return (
    <AuthenticationContext.Provider value={{ authenticated, login, logout }}>
      {children}
    </AuthenticationContext.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthenticationContext);
};

const Loginpage = () => {
  const [username, setUsername] = useState("");
  const [pass, setpass] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const { login } = useAuth(); // Access the login function from the context
  const navigate = useNavigate();

  const onHandleRegister = () => {
    navigate("/register");
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios.get("http://localhost:3005/patients").then((result) => {
      let validCredentials = false;
      result.data.map((user) => {
        if (user.username === username && user.password === pass) {
          validCredentials = true;
        }
      });

      if (validCredentials) {
        login(); // Call the login function from the context
        navigate("/home");
      } else {
        // Show Snackbar for invalid credentials
        setSnackbarOpen(true);
      }
    });
  };

  return (
    <>
      <div className="Bodylogin">
        <form onSubmit={handleSubmit}>
          <div className="containerlogin" style={{ borderRadius: "25px" }}>
            <p style={{ textAlign: "center", fontWeight: "bold", fontSize: "20px" }}>LOGIN</p>
            <div>
              <TextField
                variant="outlined"
                label="Username"
                style={{ width: "280px" }}
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
              />
            </div>
            <div>
              <TextField
                variant="outlined"
                label="Password"
                
                onChange={(event) => {
                  setpass(event.target.value);
                }}
                style={{ width: "280px" }}
              />
            </div>
            <div>
              <Button
                variant="contained"
                type="button"
                style={{ width: "280px", borderRadius: "25px" }}
                onClick={handleSubmit}
              >
                SIGN IN
              </Button>
            </div>
            <div>
              <p style={{ textAlign: "center" }}>Don't have an account ?</p>
              <Button
                variant="outlined"
                style={{ marginLeft: "5px", width: "280px", borderRadius: "25px" }}
                onClick={onHandleRegister}
              >
                SIGN UP
              </Button>
            </div>
          </div>
        </form>

        {/* Snackbar for displaying error message */}
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={6000}
          onClose={handleSnackbarClose}
          message="The Username or password entered is Invalid."
        />
      </div>
    </>
  );
};

const App = () => {
  return (
    <AuthenticationProvider>
      <Loginpage />
    </AuthenticationProvider>
  );
};

export default App;



