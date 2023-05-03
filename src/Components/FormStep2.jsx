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
import { CreateForm } from "../utils";
import Loader from "./Loader";

import { useSelector,useDispatch } from "react-redux";
import {add} from '../redux/formStep2Slicer/formStep2Slicer'

function FormStep2({
  setFormStep2Filled,
  submitTab2,
  setActiveStep,
}) {


  const dispatch = useDispatch()
  const {formStep2} = useSelector((state)=>state)

  const [isChecked, setIsChecked] = useState(false);
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const handleCheck = (event) => {
    setIsChecked(event.target.checked);
  };
  // console.log(formStep2Filled);
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    dispatch(add(formData))
  }
  console.log(formData);
  console.log(Object.keys(formData).length);

  console.log(formStep2)
  useEffect(() => {
    const objectLength = Object.keys(formData).length;
    setFormStep2Filled(objectLength);
  }, [formData]);

  const handleSubmit = async () => {
    const res = await CreateForm(
      formData,
      2,
      localStorage.getItem("application_id")
    );
    console.log(localStorage.getItem("application_id"));
    if (res) {
      setTimeout(() => {
        setLoading(false);
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      }, 2000);
    }
  };
  useEffect(() => {
    if (submitTab2) {
      console.log("first");
      setLoading(true);
      handleSubmit();
    }
  }, [submitTab2]);
  return (
    <>
      {loading && <Loader />}
      <div className="">
        {" "}
        {/* <Button
          onClick={() => {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
          }}
        >
          SKIP
        </Button> */}
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
              value={formData.passport_number}
              onChange={handleChange}
            />
          </div>
          <div className="col-lg-6">
            <TextField
              required
              sx={{ marginTop: 2 }}
              fullWidth
              label="Place of Issue"
              name="place_of_issue"
              value={formData.place_of_issue}
              onChange={handleChange}
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
              InputLabelProps={{ shrink: true }}
              value={formData.date_of_issue}
              onChange={handleChange}
            />
          </div>
          <div className="col-lg-6">
            <TextField
              required
              sx={{ marginTop: 2 }}
              fullWidth
              type="date"
              label="Date of Expire"
              InputLabelProps={{ shrink: true }}
              name="date_of_expire"
              value={formData.date_of_expire}
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
                  // defaultValue="no"
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="passport_indetify_certificate"
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
        <div
          hidden={
            formData.passport_indetify_certificate === "yes" ? false : true
          }
        >
          <div className="row">
            <div className="col-lg-6">
              {" "}
              <FormControl size="large" fullWidth sx={{ marginTop: 2 }}>
                <InputLabel id="demo-simple-select-label" required>
                  Country of Issue
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="IC_country_of_issue"
                  value={formData.IC_country_of_issue || ""}
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
                type="text"
                name="IC_passport_IC_number"
                value={formData.IC_passport_IC_number}
                onChange={handleChange}
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
                type="text"
                name="IC_place_of_issue"
                value={formData.IC_place_of_issue}
                onChange={handleChange}
              />
            </div>

            <div className="col-lg-6">
              <TextField
                required
                sx={{ marginTop: 2 }}
                fullWidth
                type="date"
                label="Date of Issue"
                name="IC_date_of_issue"
                value={formData.IC_date_of_issue}
                onChange={handleChange}
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
                  name="IC_nationality_mentioned"
                  value={formData.IC_nationality_mentioned || ""}
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
        </div>{" "}
      </div>

      <div className=" mt-4">
        <div style={{ background: "#1e8bc3" }} className="p-1">
          <h4 className="text-light text-start ms-3">
            Applicant's Address Details
          </h4>
        </div>
        <div className="fw-bold mt-2 text-center ">Present Address</div>
        <div className="row">
          <div className="col-lg-6">
            <TextField
              sx={{ marginTop: 2 }}
              required
              fullWidth
              label="House No./Street"
              type="text"
              name="house_no"
              value={formData.house_no || ""}
              onChange={handleChange}
            />
          </div>
          <div className="col-lg-6">
            <TextField
              sx={{ marginTop: 2 }}
              required
              fullWidth
              label="Village/Town/City"
              type="text"
              name="village_town_city"
              value={formData.village_town_city || ""}
              onChange={handleChange}
            />
          </div>
        </div>{" "}
        <div className="row">
          <div className="col-lg-6">
            <FormControl size="large" fullWidth sx={{ marginTop: 2 }}>
              <InputLabel id="demo-simple-select-label" required>
                Country of Birth
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="country_of_birth"
                value={formData.country_of_birth || ""}
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
              sx={{ marginTop: 2 }}
              required
              fullWidth
              label="State/Province/District"
              type="text"
              name="state_province_district"
              value={formData.state_province_district || ""}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <TextField
              sx={{ marginTop: 2 }}
              required
              fullWidth
              label="Postal/Zip Code"
              type="number"
              name="postal_zip_code"
              value={formData.postal_zip_code || ""}
              onChange={handleChange}
            />
          </div>
          <div className="col-lg-6">
            <TextField
              sx={{ marginTop: 2 }}
              required
              fullWidth
              type="number"
              label="Mobile No."
              name="mobile_no"
              value={formData.mobile_no || ""}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <TextField
              required
              sx={{ marginTop: 2 }}
              type="number"
              fullWidth
              label="Phone No."
              name="phone"
              value={formData.phone || ""}
              onChange={handleChange}
            />
          </div>
          <div className="col-lg-6">
            <TextField
              required
              sx={{ marginTop: 2 }}
              fullWidth
              label="Email Address."
              name="email"
              type="text"
              value={formData.email}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    required
                    checked={isChecked}
                    onChange={handleCheck}
                    inputProps={{ "aria-label": "controlled-checkbox" }}
                    name="if_address_same"
                    // onChange={handleChange}
                  />
                }
                label={
                  <FormLabel className="text-start mt-2 text-form" required>
                    Check here for same Address
                  </FormLabel>
                }
              />
            </FormGroup>{" "}
          </div>
        </div>{" "}
        <div className="fw-bold mt-2 text-center ">Permanent Address</div>
        <div className="row">
          <div className="col-lg-6">
            {" "}
            <TextField
              required
              sx={{ marginTop: 2 }}
              fullWidth
              label="House no./Street"
              name="permanent_house_no"
              type="text"
              value={
                isChecked
                  ? formData.house_no
                  : formData.permanent_house_no || ""
              }
              onChange={handleChange}
            />
          </div>
          <div className="col-lg-6">
            {" "}
            <TextField
              required
              sx={{ marginTop: 2 }}
              fullWidth
              label="Village/Town/City"
              name="permanent_village_town_city"
              type="text"
              value={
                isChecked
                  ? formData.village_town_city
                  : formData.permanent_village_town_city || ""
              }
              onChange={handleChange}
            />
          </div>
        </div>
        {/* {console.log(/.if_address_same?.[0].toString())} */}
        <div className="row">
          <div className="col-lg-12">
            {" "}
            <TextField
              required
              sx={{ marginTop: 2 }}
              fullWidth
              label="State/Province/District"
              name="permanent_state_province_district"
              type="text"
              value={
                isChecked
                  ? formData.state_province_district
                  : formData.permanent_state_province_district || ""
              }
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className="mt-3">
        <div style={{ background: "#1e8bc3" }} className="p-1">
          <h4 className="text-light text-start ms-3">Family Details</h4>
        </div>

        <div className="fw-bolder text-center">Father Details</div>
        <div className="row">
          <div className="col-lg-6">
            {" "}
            <TextField
              required
              sx={{ marginTop: 2 }}
              fullWidth
              label="Name"
              name="father_name"
              type="text"
              value={formData.father_name || ""}
              onChange={handleChange}
            />
          </div>
          <div className="col-lg-6">
            <FormControl size="large" fullWidth sx={{ marginTop: 2 }}>
              <InputLabel id="demo-simple-select-label" required>
                Nationality/Region
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="father_nationality"
                value={formData.father_nationality || ""}
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
            <FormControl size="large" fullWidth sx={{ marginTop: 2 }}>
              <InputLabel id="demo-simple-select-label" required>
                Previous Nationality/Region
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="father_previous_nationality"
                value={formData.father_previous_nationality || ""}
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
              sx={{ marginTop: 2 }}
              fullWidth
              label="Place of Birth"
              name="father_place_of_birth"
              type="text"
              value={formData.father_place_of_birth || ""}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <FormControl size="large" fullWidth sx={{ marginTop: 2 }}>
              <InputLabel id="demo-simple-select-label" required>
                Country/Region of Birth
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="father_counrty_of_birth"
                value={formData.father_counrty_of_birth || ""}
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
              sx={{ marginTop: 2 }}
              fullWidth
              label="Name"
              name="mother_name"
              type="text"
              value={formData.mother_name || ""}
              onChange={handleChange}
            />
          </div>
          <div className="col-lg-6">
            <FormControl size="large" fullWidth sx={{ marginTop: 2 }}>
              <InputLabel id="demo-simple-select-label" required>
                Nationality/Region
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="mother_nationality"
                value={formData.mother_nationality || ""}
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
            <FormControl size="large" fullWidth sx={{ marginTop: 2 }}>
              <InputLabel id="demo-simple-select-label" required>
                Previous Nationality/Region
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="mother_previous_nationality"
                value={formData.mother_previous_nationality || ""}
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
              sx={{ marginTop: 2 }}
              fullWidth
              label="Place of Birth"
              name="mother_place_of_birth"
              type="text"
              value={formData.mother_place_of_birth || ""}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <FormControl size="large" fullWidth sx={{ marginTop: 2 }}>
              <InputLabel id="demo-simple-select-label" required>
                Country/Region of Birth
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="mother_counrty_of_birth"
                value={formData.mother_counrty_of_birth || ""}
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
            <FormControl size="large" fullWidth sx={{ marginTop: 2 }}>
              <InputLabel id="demo-simple-select-label" required>
                Applicant's Marital Status
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="marital_status"
                value={formData.marital_status || ""}
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
        <div hidden={formData.marital_status == "Married" ? false : true}>
          <div className="fw-bolder text-center">Spouse's Details</div>
          <div className="row">
            <div className="col-lg-6">
              {" "}
              <TextField
                required
                sx={{ marginTop: 2 }}
                fullWidth
                label="Name"
                name="spouse_name"
                type="text"
                value={formData.spouse_name || ""}
                onChange={handleChange}
              />
            </div>
            <div className="col-lg-6">
              <FormControl size="large" fullWidth sx={{ marginTop: 2 }}>
                <InputLabel id="demo-simple-select-label" required>
                  Nationality/Region
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="spouse_nationality"
                  value={formData.spouse_nationality || ""}
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
              <FormControl size="large" fullWidth sx={{ marginTop: 2 }}>
                <InputLabel id="demo-simple-select-label" required>
                  Previous Nationality/Region
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="spouse_previous_nationality"
                  value={formData.spouse_previous_nationality || ""}
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
                sx={{ marginTop: 2 }}
                fullWidth
                label="Place of Birth"
                name="spouse_place_of_birth"
                type="text"
                value={formData.spouse_place_of_birth || ""}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <FormControl size="large" fullWidth sx={{ marginTop: 2 }}>
                <InputLabel id="demo-simple-select-label" required>
                  Country/Region of Birth
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="spouse_counrty_of_birth"
                  value={formData.spouse_counrty_of_birth || ""}
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
          hidden={formData.pakistani_grandparents == "yes" ? false : true}
        >
          <div className="col-lg-12">
            {" "}
            <TextField
              required
              sx={{ marginTop: 2 }}
              fullWidth
              label="If Yes, Give Details "
              name="pakistan_belong"
              type="text"
              value={formData.pakistan_belong || ""}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default FormStep2;
