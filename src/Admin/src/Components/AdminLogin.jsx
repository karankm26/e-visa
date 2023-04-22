import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  Container,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  CircularProgress,
} from "@mui/material";
import "./Css/AdminLogin.css";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { login } from "../API";
import Loader from "./Loader";
const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isloading, setIsloading] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleLogin = async () => {
    console.log(email, password);
    setIsloading(true);
    const res = await login({ email: email, password: password });
    console.log(res);
    if (res) {
      localStorage.setItem("token", res.token);
      localStorage.setItem("loggedIn", true);
      setIsloading(false);
      navigate("/admin/customers");
    }
  };

  return (
    <>
      {isloading && <Loader />}
      <Container sx={{ marginTop: 8 }}>
        <Card
          sx={{ width: "100%", boxShadow: "0 20px 75px rgba(0, 0, 0, 0.15)" }}
          className="mt-5"
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "0 25px",
              boxSizing: "border-box",
              marginBottom: 5,
              marginTop: 5,
            }}
          >
            <Typography variant="h4">ADIMIN LOGIN</Typography>

            <Box
              sx={{
                marginTop: "2rem",
              }}
            >
              <div className="row d-flex -justify-content-center">
                <div className="col-lg-12">
                  <TextField
                    sx={{ marginTop: 2 }}
                    required
                    fullWidth
                    label="Username or Email"
                    type="text"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="col-lg-12">
                  <TextField
                    sx={{ marginTop: 2 }}
                    required
                    fullWidth
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>
                <div className="col-lg-12 mt-3 d-flex justify-content-center">
                  <Button
                    variant="contained"
                    size="large"
                    className="px-5"
                    onClick={() => handleLogin()}
                    type="submit"
                  >
                    Submit
                  </Button>
                </div>
              </div>
            </Box>
          </Box>
        </Card>
      </Container>
    </>
  );
};

export default AdminLogin;
