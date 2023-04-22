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
} from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";
import { countries } from "./CountryList";
function FormStep2({ handleChange, values, errors, touched }) {
  console.log(countries);
  return (
    <>
      <div className="">
        <div style={{ background: "#1e8bc3" }} className="p-1">
          <h4 className="text-light text-start ms-3">Applicant Details</h4>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <TextField
              sx={{ marginTop: 2 }}
              required
              fullWidth
              label="Surname"
              type="text"
              name="surname"
              error={errors.surname && touched.surname ? true : false}
              value={values.surname || ""}
              onChange={handleChange}
            />
          </div>
          <div className="col-lg-6">
            <TextField
              sx={{ marginTop: 2 }}
              required
              fullWidth
              label="Given Name"
              type="text"
              name="givenName"
              error={errors.givenName && touched.givenName ? true : false}
              value={values.givenName || ""}
              onChange={handleChange}
            />
          </div>
        </div>{" "}
        <div className="row">
          <div className="col-lg-12">
            <FormControlLabel
              control={<Checkbox required />}
              label={
                <FormLabel className="text-start mt-2 text-form" required>
                  Have you ever changed you name? If yes, click the box
                </FormLabel>
              }
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <FormControl size="large" fullWidth sx={{ marginTop: 2 }}>
              <InputLabel id="demo-simple-select-label" required>
                Gender
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="Gender"
                value={values.gender || ""}
                onChange={handleChange}
                label="Gender"
                defaultValue=""
              >
                <MenuItem value="" selected>
                  <em>Select Gender</em>
                </MenuItem>
                <MenuItem value={"Male"}>Male</MenuItem>
                <MenuItem value={"Female"}>Female</MenuItem>
                <MenuItem value={"Other"}>Other</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="col-lg-6">
            <TextField
              sx={{ marginTop: 2 }}
              required
              fullWidth
              label="Date Of Birth"
              type="date"
              value={values.date_of_birth}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <TextField
              required
              sx={{ marginTop: 2 }}
              fullWidth
              label="Town/City of Birth"
              name="city_of_birth"
              type="text"
              value={values.city_of_birth || ""}
              onChange={handleChange}
            />
          </div>
          <div className="col-lg-6">
            <FormControl size="large" fullWidth sx={{ marginTop: 2 }}>
              <InputLabel id="demo-simple-select-label" required>
                Country of Birth
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="country_of_birth"
                value={values.country_of_birth || ""}
                onChange={handleChange}
                label="Country of Birth"
                defaultValue=""
              >
                <MenuItem value="" selected>
                  <em>Select Country of Birth</em>
                </MenuItem>
                {countries.map((country, index) => {
                  return (
                    <MenuItem key={index} value={country}>
                      {country}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="row">
          {" "}
          <div className="col-lg-6">
            <TextField
              required
              sx={{ marginTop: 2 }}
              fullWidth
              label="Citizenship/National Id No."
              name="national_id_no"
              type="text"
              value={values.city_of_birth || ""}
              onChange={handleChange}
            />
          </div>
          <div className="col-lg-6">
            <FormControl size="large" fullWidth sx={{ marginTop: 2 }}>
              <InputLabel id="demo-simple-select-label" required>
                Religion
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="religion"
                value={values.religion || ""}
                onChange={handleChange}
                label="Religion"
                defaultValue=""
              >
                <MenuItem value="" selected>
                  <em>Select Religion</em>
                </MenuItem>
                <MenuItem value={"HINDU"}>HINDU</MenuItem>
                <MenuItem value={"SIKH"}>SIKH</MenuItem>
                <MenuItem value={"BUDDHISM"}>BUDDHISM</MenuItem>
                <MenuItem value={"ISLAM"}>ISLAM</MenuItem>
                <MenuItem value={"CHRISTIANITY"}>CHRISTIANITY</MenuItem>
              </Select>
            </FormControl>{" "}
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            {" "}
            <TextField
              required
              sx={{ marginTop: 2 }}
              fullWidth
              label="Visible Identification marks"
              name="visible_indetification_marks"
              type="text"
              value={values.visible_indetification_marks || ""}
              onChange={handleChange}
            />
          </div>
          <div className="col-lg-6">
            {" "}
            <FormControl size="large" fullWidth sx={{ marginTop: 2 }}>
              <InputLabel id="demo-simple-select-label" required>
                Education Qualification
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="religion"
                value={values.education_qualification || ""}
                onChange={handleChange}
                label="Education Qualification"
                defaultValue=""
              >
                <MenuItem value="" selected>
                  <em>Select Religion</em>
                </MenuItem>
                <MenuItem value={"GRADUATE"}>GRADUATE</MenuItem>
                <MenuItem value={"UDER-GRADUATE"}>UDER-GRADUATE</MenuItem>
                <MenuItem value={"DIPLOMA"}>DIPLOMA</MenuItem>
              </Select>
            </FormControl>{" "}
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <TextField
              required
              sx={{ marginTop: 2 }}
              fullWidth
              label="Nationality"
              name="nationality"
              value={values.nationality}
            />
          </div>
          <div className="col-lg-6">
            <FormControl size="large" fullWidth sx={{ marginTop: 2 }}>
              <InputLabel id="demo-simple-select-label" required>
                Did you acquire nationality by birth or by naturalization?
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="accquire_nationlity_by_birth"
                value={values.accquire_nationlity_by_birth || ""}
                onChange={handleChange}
                label="  Did you acquire nationality by birth or by naturalization?"
                defaultValue=""
              >
                <MenuItem value="" selected>
                  <em>Select Religion</em>
                </MenuItem>
                <MenuItem value={"YES"}>YES</MenuItem>
                <MenuItem value={"NO"}>NO</MenuItem>
              </Select>
            </FormControl>{" "}
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="d-flex justify-content-between">
              <div className="text-start">
                <FormLabel required sx={{ marginTop: 1 }}>
                  Have you ever sought asylum (political or otherwise) in any
                  country?
                </FormLabel>
              </div>
              <div>
                <RadioGroup
                  defaultValue="no"
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="que8"
                  onChange={handleChange}
                >
                  <div className="d-flex">
                    <FormControlLabel
                      value="yes"
                      control={<Radio size="small" />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value="no"
                      control={<Radio size="small" />}
                      label="No"
                      defaultChecked
                    />
                  </div>
                </RadioGroup>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
      <div>
        <div style={{ background: "#1e8bc3" }} className="p-1">
          <h4 className="text-light text-start ms-3">Passport Details</h4>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <TextField
              required
              sx={{ marginTop: 2 }}
              fullWidth
              label="Passport Number"
              name="passport_number"
              value={values.passport_number}
            />
          </div>
          <div className="col-lg-6">
            <TextField
              required
              sx={{ marginTop: 2 }}
              fullWidth
              label="Place of Issue"
              name="place_of_issue"
              value={values.place_of_issue}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <TextField
              required
              sx={{ marginTop: 2 }}
              fullWidth
              type="date"
              label="Date of Issue"
              name="date_of_issue"
              value={values.date_of_issue}
            />
          </div>
          <div className="col-lg-6">
            <TextField
              required
              sx={{ marginTop: 2 }}
              fullWidth
              type="date"
              label="Date of Expire"
              name="date_of_expire"
              value={values.date_of_expire}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="d-flex justify-content-between">
              <div className="text-start">
                <FormLabel required sx={{ marginTop: 1 }}>
                  Any other valid Passport/Indetify Certificate(IC) held,
                </FormLabel>
              </div>
              <div>
                <RadioGroup
                  defaultValue="no"
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="que8"
                  onChange={handleChange}
                >
                  <div className="d-flex">
                    <FormControlLabel
                      value="yes"
                      control={<Radio size="small" />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value="no"
                      control={<Radio size="small" />}
                      label="No"
                      defaultChecked
                    />
                  </div>
                </RadioGroup>
              </div>
            </div>{" "}
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            {" "}
            <FormControl size="large" fullWidth sx={{ marginTop: 2 }}>
              <InputLabel id="demo-simple-select-label" required>
                Country of Birth
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="country_of_issue"
                value={values.country_of_issue || ""}
                onChange={handleChange}
                label="Country of Issue"
                defaultValue=""
              >
                <MenuItem value="" selected>
                  <em>Select Country of Issue</em>
                </MenuItem>
                {countries.map((country, index) => {
                  return (
                    <MenuItem key={index} value={country}>
                      {country}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </div>
          <div className="col-lg-6">
            <TextField
              required
              sx={{ marginTop: 2 }}
              fullWidth
              label="Passport I/C No."
              name="passport_I/C_number"
              value={values.date_of_expire}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <TextField
              required
              sx={{ marginTop: 2 }}
              fullWidth
              label="Place of Issue"
              name="place_of_issue"
              value={values.place_of_issue}
            />
          </div>

          <div className="col-lg-6">
            <TextField
              required
              sx={{ marginTop: 2 }}
              fullWidth
              type="date"
              label="Date of Issue"
              name="date_of_issue"
              value={values.date_of_issue}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            {" "}
            <FormControl size="large" fullWidth sx={{ marginTop: 2 }}>
              <InputLabel id="demo-simple-select-label" required>
                Nationality mentioned therein
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="nationality_mentioned"
                value={values.nationality_mentioned || ""}
                onChange={handleChange}
                label="Nationality mentioned therein"
                defaultValue=""
              >
                <MenuItem value="" selected>
                  <em>Select Nationlity</em>
                </MenuItem>
                {countries.map((country, index) => {
                  return (
                    <MenuItem key={index} value={country}>
                      {country}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormStep2;
