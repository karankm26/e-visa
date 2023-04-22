import React, { useEffect } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  TextField,
  Box,
  Grid,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  FormHelperText,
  Checkbox,
  Typography,
  Card,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormGroup,
  Container,
} from "@mui/material";
import { userData } from "../../utils/data";
import { getAllFormById } from "../../API";
import { useState } from "react";
import { useParams } from "react-router-dom";

const View = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await getAllFormById(id);
      setFormData(res.form);
    };
    getData();
  }, []);
  return (
    <>
      <div className="container d-flex justify-content-center mt-5 mb-5">
        <Card sx={{ width: "100%" }} className="card-form">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "0 25px",
              boxSizing: "border-box",
              marginBottom: "20px",
              marginTop: "50px",
            }}
          >
            <Typography variant="h4">APPLICATION</Typography>
            <div style={{ background: "#1e8bc3" }} className="p-1 w-100">
              <h4 className="text-light text-start ms-3">Personal Details</h4>
            </div>
            <Container>
              <Grid container spacing={3} sx={{ marginTop: 1 }}>
                <Grid item xs={12} sm={6}>
                  <Typography>Name:</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography>
                    {formData?.first_name} {formData?.last_name}
                  </Typography>
                </Grid>
              </Grid>
              <Grid container spacing={3} sx={{ marginTop: -2 }}>
                <Grid item xs={12} sm={6}>
                  <Typography>Email:</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography>{formData?.email}</Typography>
                </Grid>
              </Grid>
              <Grid container spacing={3} sx={{ marginTop: -2 }}>
                <Grid item xs={12} sm={6}>
                  <Typography>Unique ID:</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography>{formData?._id}</Typography>
                </Grid>
              </Grid>
              <Grid container spacing={3} sx={{ marginTop: -2 }}>
                <Grid item xs={12} sm={6}>
                  <Typography>Phone:</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography>{formData?.phone}</Typography>
                </Grid>
              </Grid>
              <Grid container spacing={3} sx={{ marginTop: -2 }}>
                <Grid item xs={12} sm={6}>
                  <Typography>Gender:</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography>{formData?.gender}</Typography>
                </Grid>
              </Grid>
              <Grid container spacing={3} sx={{ marginTop: -2 }}>
                <Grid item xs={12} sm={6}>
                  <Typography>Status:</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography>{formData?.status}</Typography>
                </Grid>
              </Grid>
              <Grid container spacing={3} sx={{ marginTop: -2 }}>
                <Grid item xs={12} sm={6}>
                  <Typography>Passport Type:</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography>{formData?.passport_type}</Typography>
                </Grid>
              </Grid>
              <Grid container spacing={3} sx={{ marginTop: -2 }}>
                <Grid item xs={12} sm={6}>
                  <Typography>Visa Type:</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography>{formData?.visaType}</Typography>
                </Grid>
              </Grid>
              <Grid container spacing={3} sx={{ marginTop: -2 }}>
                <Grid item xs={12} sm={6}>
                  <Typography>Date of Arrival :</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography>
                    {new Date(formData?.dateOfArrival).toLocaleString()}
                  </Typography>
                </Grid>
              </Grid>
              <Grid container spacing={3} sx={{ marginTop: -2 }}>
                <Grid item xs={12} sm={6}>
                  <Typography>Nationality :</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography>{formData?.nationality}</Typography>
                </Grid>
              </Grid>
              <Grid container spacing={3} sx={{ marginTop: -2 }}>
                <Grid item xs={12} sm={6}>
                  <Typography>Date :</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography>
                    {new Date(formData?.createdAt).toLocaleString()}
                  </Typography>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </Card>
      </div>
    </>
  );
};

export default View;
