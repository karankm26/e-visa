import React, {useEffect} from "react";
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
import {DemoContainer} from "@mui/x-date-pickers/internals/demo";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import {useState} from "react";
import {countries} from "./CountryList";
function FormStep2({handleChange, values, errors, touched}) {
  // console.log(countries);
  return (
    <>
      <div className=""></div>
      <div>
        <div style={{background: "#1e8bc3"}} className="p-1">
          <h4 className="text-light text-start ms-3">Passport Details</h4>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <TextField
              required
              sx={{marginTop: 2}}
              fullWidth
              label="Passport Number"
              name="passport_number"
              value={values.passport_number}
              onChange={handleChange}
            />
          </div>
          <div className="col-lg-6">
            <TextField
              required
              sx={{marginTop: 2}}
              fullWidth
              label="Place of Issue"
              name="place_of_issue"
              value={values.place_of_issue}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <TextField
              required
              sx={{marginTop: 2}}
              fullWidth
              type="date"
              label="Date of Issue"
              name="date_of_issue"
              value={values.date_of_issue}
              onChange={handleChange}
            />
          </div>
          <div className="col-lg-6">
            <TextField
              required
              sx={{marginTop: 2}}
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
                <FormLabel required sx={{marginTop: 1}}>
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
            <FormControl size="large" fullWidth sx={{marginTop: 2}}>
              <InputLabel id="demo-simple-select-label" required>
                Country of Issue
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
              sx={{marginTop: 2}}
              fullWidth
              label="Passport I/C No."
              type="text"
              name="passport_IC_number"
              value={values.passport_IC_number}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <TextField
              required
              sx={{marginTop: 2}}
              fullWidth
              label="Place of Issue"
              type="text"
              name="place_of_issue"
              value={values.place_of_issue}
              onChange={handleChange}
            />
          </div>

          <div className="col-lg-6">
            <TextField
              required
              sx={{marginTop: 2}}
              fullWidth
              type="date"
              label="Date of Issue"
              name="date_of_issue"
              value={values.date_of_issue}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            {" "}
            <FormControl size="large" fullWidth sx={{marginTop: 2}}>
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
      <div className=" mt-4">
        <div style={{background: "#1e8bc3"}} className="p-1">
          <h4 className="text-light text-start ms-3">
            Applicant's Address Details
          </h4>
        </div>
        <div className="fw-bold mt-2 text-center ">Present Address</div>
        <div className="row">
          <div className="col-lg-6">
            <TextField
              sx={{marginTop: 2}}
              required
              fullWidth
              label="House No./Street"
              type="text"
              name="house_no"
              // error={errors.house_no && touched.house_no ? true : false}
              value={values.house_no || ""}
              onChange={handleChange}
            />
          </div>
          <div className="col-lg-6">
            <TextField
              sx={{marginTop: 2}}
              required
              fullWidth
              label="Village/Town/City"
              type="text"
              name="village_town_city"
              error={
                errors.village_town_city && touched.village_town_city
                  ? true
                  : false
              }
              value={values.village_town_city || ""}
              onChange={handleChange}
            />
          </div>
        </div>{" "}
        <div className="row">
          <div className="col-lg-6">
            <FormControl size="large" fullWidth sx={{marginTop: 2}}>
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
          </div>{" "}
          <div className="col-lg-6">
            <TextField
              sx={{marginTop: 2}}
              required
              fullWidth
              label="State/Province/District"
              type="text"
              name="state_province_district"
              error={
                errors.state_province_district &&
                touched.state_province_district
                  ? true
                  : false
              }
              value={values.state_province_district || ""}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <TextField
              sx={{marginTop: 2}}
              required
              fullWidth
              label="Postal/Zip Code"
              type="text"
              name="postal_zip_code"
              error={
                errors.postal_zip_code && touched.postal_zip_code ? true : false
              }
              value={values.postal_zip_code || ""}
              onChange={handleChange}
            />
          </div>
          <div className="col-lg-6">
            <TextField
              sx={{marginTop: 2}}
              required
              fullWidth
              label="Mobile No."
              name="mobile_no"
              value={values.mobile_no || ""}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <TextField
              required
              sx={{marginTop: 2}}
              fullWidth
              label="Phone No."
              name="phone"
              type="text"
              value={values.phone || ""}
              onChange={handleChange}
            />
          </div>
          <div className="col-lg-6">
            <TextField
              required
              sx={{marginTop: 2}}
              fullWidth
              label="Email Address."
              name="email"
              type="text"
              value={values.email}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <FormGroup>
              <FormControlLabel
                control={<Checkbox required />}
                label={
                  <FormLabel className="text-start mt-2 text-form" required>
                    Check her for same Address
                  </FormLabel>
                }
              />
            </FormGroup>
          </div>
        </div>{" "}
        <div className="fw-bold mt-2 text-center ">Permanent Address</div>
        <div className="row">
          <div className="col-lg-6">
            {" "}
            <TextField
              required
              sx={{marginTop: 2}}
              fullWidth
              label="House no./Street"
              name="house_no2"
              type="text"
              value={values.house_no2 || ""}
              onChange={handleChange}
            />
          </div>
          <div className="col-lg-6">
            {" "}
            <TextField
              required
              sx={{marginTop: 2}}
              fullWidth
              label="Village/Town/City"
              name="village_town_city2"
              type="text"
              value={values.village_town_city2 || ""}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            {" "}
            <TextField
              required
              sx={{marginTop: 2}}
              fullWidth
              label="State/Province/District"
              name="state_province_district2"
              type="text"
              value={values.state_province_district2 || ""}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className="mt-3">
        <div style={{background: "#1e8bc3"}} className="p-1">
          <h4 className="text-light text-start ms-3">Family Details</h4>
        </div>

        <div className="fw-bolder text-center">Father Details</div>
        <div className="row">
          <div className="col-lg-6">
            {" "}
            <TextField
              required
              sx={{marginTop: 2}}
              fullWidth
              label="Name"
              name="father_name"
              type="text"
              value={values.father_name || ""}
              onChange={handleChange}
            />
          </div>
          <div className="col-lg-6">
            <FormControl size="large" fullWidth sx={{marginTop: 2}}>
              <InputLabel id="demo-simple-select-label" required>
                Nationality/Region
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="father_nationality"
                value={values.father_nationality || ""}
                onChange={handleChange}
                label="Nationality/Region"
                defaultValue=""
              >
                <MenuItem value="" selected>
                  <em>Select Nationalit</em>
                </MenuItem>
                {countries.map((country, index) => {
                  return (
                    <MenuItem key={index} value={country}>
                      {" "}
                      {country}{" "}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <FormControl size="large" fullWidth sx={{marginTop: 2}}>
              <InputLabel id="demo-simple-select-label" required>
                Previous Nationality/Region
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="father_previous_nationality"
                value={values.father_previous_nationality || ""}
                onChange={handleChange}
                label="Nationality/Region"
                defaultValue=""
              >
                <MenuItem value="" selected>
                  <em>Select Nationalit</em>
                </MenuItem>
                {countries.map((country, index) => {
                  return (
                    <MenuItem key={index} value={country}>
                      {" "}
                      {country}{" "}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </div>
          <div className="col-lg-6">
            {" "}
            <TextField
              required
              sx={{marginTop: 2}}
              fullWidth
              label="Place of Birth"
              name="father_place_of_birth"
              type="text"
              value={values.father_place_of_birth || ""}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <FormControl size="large" fullWidth sx={{marginTop: 2}}>
              <InputLabel id="demo-simple-select-label" required>
                Country/Region of Birth
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="father_counrty_of_birth"
                value={values.father_counrty_of_birth || ""}
                onChange={handleChange}
                label="Country/Region of Birth"
                defaultValue=""
              >
                <MenuItem value="" selected>
                  <em>Select Nationalit</em>
                </MenuItem>
                {countries.map((country, index) => {
                  return (
                    <MenuItem key={index} value={country}>
                      {" "}
                      {country}{" "}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="fw-bolder text-center">Mother Details</div>
        <div className="row">
          <div className="col-lg-6">
            {" "}
            <TextField
              required
              sx={{marginTop: 2}}
              fullWidth
              label="Name"
              name="spouse_name"
              type="text"
              value={values.mother_name || ""}
              onChange={handleChange}
            />
          </div>
          <div className="col-lg-6">
            <FormControl size="large" fullWidth sx={{marginTop: 2}}>
              <InputLabel id="demo-simple-select-label" required>
                Nationality/Region
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="mother_nationality"
                value={values.mother_nationality || ""}
                onChange={handleChange}
                label="Nationality/Region"
                defaultValue=""
              >
                <MenuItem value="" selected>
                  <em>Select Nationalit</em>
                </MenuItem>
                {countries.map((country, index) => {
                  return (
                    <MenuItem key={index} value={country}>
                      {" "}
                      {country}{" "}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <FormControl size="large" fullWidth sx={{marginTop: 2}}>
              <InputLabel id="demo-simple-select-label" required>
                Previous Nationality/Region
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="mother_previous_nationality"
                value={values.mother_previous_nationality || ""}
                onChange={handleChange}
                label="Nationality/Region"
                defaultValue=""
              >
                <MenuItem value="" selected>
                  <em>Select Nationalit</em>
                </MenuItem>
                {countries.map((country, index) => {
                  return (
                    <MenuItem key={index} value={country}>
                      {" "}
                      {country}{" "}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </div>
          <div className="col-lg-6">
            {" "}
            <TextField
              required
              sx={{marginTop: 2}}
              fullWidth
              label="Place of Birth"
              name="mother_place_of_birth"
              type="text"
              value={values.mother_place_of_birth || ""}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <FormControl size="large" fullWidth sx={{marginTop: 2}}>
              <InputLabel id="demo-simple-select-label" required>
                Country/Region of Birth
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="mother_counrty_of_birth"
                value={values.mother_counrty_of_birth || ""}
                onChange={handleChange}
                label="Country/Region of Birth"
                defaultValue=""
              >
                <MenuItem value="" selected>
                  <em>Select Nationalit</em>
                </MenuItem>
                {countries.map((country, index) => {
                  return (
                    <MenuItem key={index} value={country}>
                      {" "}
                      {country}{" "}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <FormControl size="large" fullWidth sx={{marginTop: 2}}>
              <InputLabel id="demo-simple-select-label" required>
                Applicant's Marital Status
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="marital_status"
                value={values.marital_status || ""}
                onChange={handleChange}
                label="Applicant's Marital Status"
                defaultValue=""
              >
                <MenuItem value="" selected>
                  <em>Select Marital Status</em>
                </MenuItem>
                <MenuItem value="Single">Single</MenuItem>
                <MenuItem value="Married">Married</MenuItem>
                <MenuItem value="Divorced">Divorced</MenuItem>
                <MenuItem value="Widow">Widow</MenuItem>
                <MenuItem value="Widow">Widower</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div hidden={values.marital_status == "Married" ? false : true}>
          <div className="fw-bolder text-center">Spouse's Details</div>
          <div className="row">
            <div className="col-lg-6">
              {" "}
              <TextField
                required
                sx={{marginTop: 2}}
                fullWidth
                label="Name"
                name="spouse_name"
                type="text"
                value={values.spouse_name || ""}
                onChange={handleChange}
              />
            </div>
            <div className="col-lg-6">
              <FormControl size="large" fullWidth sx={{marginTop: 2}}>
                <InputLabel id="demo-simple-select-label" required>
                  Nationality/Region
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="spouse_nationality"
                  value={values.spouse_nationality || ""}
                  onChange={handleChange}
                  label="Nationality/Region"
                  defaultValue=""
                >
                  <MenuItem value="" selected>
                    <em>Select Nationalit</em>
                  </MenuItem>
                  {countries.map((country, index) => {
                    return (
                      <MenuItem key={index} value={country}>
                        {" "}
                        {country}{" "}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <FormControl size="large" fullWidth sx={{marginTop: 2}}>
                <InputLabel id="demo-simple-select-label" required>
                  Previous Nationality/Region
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="spouse_previous_nationality"
                  value={values.spouse_previous_nationality || ""}
                  onChange={handleChange}
                  label="Nationality/Region"
                  defaultValue=""
                >
                  <MenuItem value="" selected>
                    <em>Select Nationalit</em>
                  </MenuItem>
                  {countries.map((country, index) => {
                    return (
                      <MenuItem key={index} value={country}>
                        {" "}
                        {country}{" "}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </div>
            <div className="col-lg-6">
              {" "}
              <TextField
                required
                sx={{marginTop: 2}}
                fullWidth
                label="Place of Birth"
                name="spouse_place_of_birth"
                type="text"
                value={values.spouse_place_of_birth || ""}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <FormControl size="large" fullWidth sx={{marginTop: 2}}>
                <InputLabel id="demo-simple-select-label" required>
                  Country/Region of Birth
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="spouse_counrty_of_birth"
                  value={values.spouse_counrty_of_birth || ""}
                  onChange={handleChange}
                  label="Country/Region of Birth"
                  defaultValue=""
                >
                  <MenuItem value="" selected>
                    <em>Select Nationalit</em>
                  </MenuItem>
                  {countries.map((country, index) => {
                    return (
                      <MenuItem key={index} value={country}>
                        {" "}
                        {country}{" "}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-lg-12">
            <div className="d-flex justify-content-between">
              <div className="text-start">
                <FormLabel required className="text-start">
                  Were your Parents/Grandparent (paternal/maternal) Pakistan
                  National or Belong to Pakistan held area?
                </FormLabel>
              </div>
              <RadioGroup
                // aria-labelledby="demo-row-radio-buttons-group-label"
                name="pakistani_grandparents"
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
                  />
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>
        <div
          className="row"
          hidden={values.pakistani_grandparents == "yes" ? false : true}
        >
          <div className="col-lg-12">
            {" "}
            <TextField
              required
              sx={{marginTop: 2}}
              fullWidth
              label="If Yes, Give Details "
              name="pakistan_belong"
              type="text"
              value={values.pakistan_belong || ""}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default FormStep2;
