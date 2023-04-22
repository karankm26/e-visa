import React, { useEffect, useState } from "react";
import {
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Checkbox,
  Typography,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormGroup,
} from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { countries, countriesDialCode } from "./CountryList";
import "./Css/ApplyForm.css";
function FormStep1({
  handleChange,
  values,
  errors,
  touched,
  setFormStep1Filled,
}) {
  // const [date_of_birth, setDate_of_birth] = useState("");
  // const [passport_expiry_date, setPassport_expiry_date] = useState("");
  // const [passport_date_of_issue, setPassport_date_of_issue] = useState("");
  // const [expected_date_of_arrival, setExpected_date_of_arrival] = useState("");

  useEffect(() => {
    const objectLength = Object.keys(errors).length;
    setFormStep1Filled(objectLength);
  }, [errors, values]);

  console.log(values);
  // console.log(objectLength);
  return (
    <>
      <div className="">
        <div style={{ background: "#1e8bc3" }} className="p-1">
          <h4 className="text-light text-start ms-3">Personal Details</h4>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <TextField
              sx={{ marginTop: 2 }}
              required
              fullWidth
              label="Family name"
              type="text"
              name="familyName"
              error={errors.first_name && touched.first_name ? true : false}
              value={values.familyName || ""}
              onChange={handleChange}
              helperText="Enter your Surname exactly as shown in your passport"
            />
          </div>
          <div className="col-lg-6">
            {" "}
            <TextField
              sx={{ marginTop: 2 }}
              fullWidth
              label="First/Given Names"
              type="text"
              name="firstGivenName"
              value={values.firstGivenName || ""}
              onChange={handleChange}
              required
              helperText="Enter your First and Middle Name as shown in your passport"
            />
          </div>
        </div>{" "}
        <div className="row">
          <div className="col-lg-6">
            <TextField
              sx={{ marginTop: 2 }}
              required
              fullWidth
              label="Date Of Birth"
              type="date"
              name="date_of_birth"
              placeholder="Date"
              error={
                errors.date_of_birth && touched.date_of_birth ? true : false
              }
              value={values.date_of_birth || ""}
              onChange={handleChange}
            />
          </div>
          {console.log(values.date_of_birth)}

          <div className="col-lg-6">
            {" "}
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
                  <em>None</em>
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
            <TextField
              sx={{ marginTop: 2 }}
              fullWidth
              required
              type="text"
              label="City of Birth"
              name="city_of_birth"
              value={values.city_of_birth || ""}
              onChange={handleChange}
              helperText="Enter your City or State of Birth as shown in your passport"
            />
          </div>
          <div className="col-lg-6">
            {" "}
            <FormControl size="large" fullWidth sx={{ marginTop: 2 }}>
              <InputLabel id="demo-simple-select-label" required>
                Country of Citizenship
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="country_of_citizenship"
                value={values.country_of_citizenship || ""}
                onChange={handleChange}
                label="Country of Birth"
                defaultValue=""
              >
                <MenuItem value="" selected>
                  <em>None</em>
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
            </FormControl>{" "}
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            {" "}
            <FormControl size="large" fullWidth sx={{ marginTop: 2 }}>
              <InputLabel id="demo-simple-select-label" required>
                Gender
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="gender"
                value={values.gender || ""}
                onChange={handleChange}
                label="Gender"
                defaultValue=""
              >
                <MenuItem value="" selected>
                  <em>Select Gender</em>
                </MenuItem>
                <MenuItem value="male"> Male </MenuItem>
                <MenuItem value="female"> Female </MenuItem>
                <MenuItem value="other"> Other </MenuItem>
              </Select>
            </FormControl>{" "}
          </div>
          <div className="col-lg-6">
            <TextField
              sx={{ marginTop: 2 }}
              fullWidth
              required
              label="Visible Identification marks "
              name="visible_identification_marks"
              type="text"
              placeholder="Birth mark, mole, tattoo, none"
              value={values.visible_identification_marks || ""}
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
              label="Email Address"
              name="email"
              type="email"
              value={values.email || ""}
              onChange={handleChange}
            />
          </div>
          <div className="col-lg-6">
            <TextField
              required
              sx={{ marginTop: 2 }}
              fullWidth
              label="Confirm Email Addres"
              name="confirm_email"
              type="email"
              value={values.confirm_email || ""}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div>
        <hr className="hr mt-5" />
        <div style={{ background: "#1e8bc3" }} className=" p-1">
          <h4 className="text-light text-start ms-3">Passport Details</h4>
        </div>{" "}
        <div>
          <p className="p-1 mt-4 text-start">
            Provide details of the passport that you will use to enter India.
            Enter these details exactly as they appear in your passport.
          </p>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <FormControl size="large" fullWidth sx={{ marginTop: 2 }}>
              <InputLabel required id="demo-simple-select-label">
                Country of Passport
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="country_of_passport"
                value={values.country_of_passport || ""}
                onChange={handleChange}
                label="Country of Passport"
                defaultValue=""
                required
              >
                <MenuItem value="" selected>
                  <em>None</em>
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
            </FormControl>{" "}
          </div>
          <div className="col-lg-6">
            <TextField
              sx={{ marginTop: 2 }}
              fullWidth
              required
              label="Passport Number"
              name="passport_number"
              type="text"
              value={values.passport_number || ""}
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
              label="Passport Date of Issue"
              type="date"
              name="passport_date_of_issue"
              error={
                errors.passport_date_of_issue && touched.passport_date_of_issue
                  ? true
                  : false
              }
              value={values.passport_date_of_issue || ""}
              onChange={handleChange}
            />
            {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]} fullWidth>
                <DatePicker
                  label={<FormLabel required>Passport Date of Issue</FormLabel>}
                  fullWidth
                  sx={{ marginTop: 2 }}
                  name="passport_date_of_issue"
                  onChange={(e) => setPassport_date_of_issue(e)}
                  slotProps={{ textField: { fullWidth: true } }}
                />
              </DemoContainer>
            </LocalizationProvider> */}
          </div>
          <div className="col-lg-6">
            <TextField
              sx={{ marginTop: 2 }}
              required
              fullWidth
              label="Passort ExpirY Date"
              placeholder="ff"
              type="date"
              name="passport_expiry_date"
              error={
                errors.passport_expiry_date && touched.passport_expiry_date
                  ? true
                  : false
              }
              value={values.passport_expiry_date || ""}
              onChange={handleChange}
            />
            {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]} fullWidth>
                <DatePicker
                  label={<FormLabel required>Passport Expiry Date</FormLabel>}
                  fullWidth
                  sx={{ marginTop: 2 }}
                  name="passport_expiry_date"
                  // label="Date of Birth"
                  onChange={(e) => setPassport_expiry_date(e)}
                  slotProps={{ textField: { fullWidth: true } }}
                />
              </DemoContainer>
            </LocalizationProvider> */}
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <TextField
              sx={{ marginTop: 2 }}
              fullWidth
              label="Place of Issue "
              name="place_of_issue"
              type="text"
              value={values.place_of_issue || ""}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="row mt-4">
          <FormControl>
            <div className="d-flex justify-content-between">
              <FormLabel required className="text-start">
                Have you ever held a Pakistani passport?
              </FormLabel>
              <RadioGroup
                // row
                // aria-labelledby="demo-row-radio-buttons-group-label"
                name="que1"
                onChange={handleChange}
              >
                {" "}
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
          </FormControl>
        </div>
        <div className="row mt-3">
          <div className="d-flex justify-content-between">
            <div className="text-start">
              <FormLabel required className="text-start">
                Does your spouse or either of your parents currently hold a
                Pakistani passport or Pakistani citizenship?
              </FormLabel>
            </div>
            <RadioGroup
              // aria-labelledby="demo-row-radio-buttons-group-label"
              name="que2"
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
      <div>
        <hr className="hr mt-5" />
        <div style={{ background: "#1e8bc3" }} className=" p-1">
          <h4 className="text-light text-start ms-3">
            Address and Contact Details
          </h4>
        </div>{" "}
        <Typography className="fw-bold text-start p-1 mt-4">
          Enter your home address
        </Typography>
        <div className="row">
          <div className="col-lg-12">
            <TextField
              sx={{ marginTop: 2 }}
              fullWidth
              required
              label="Street no, name and address"
              name="address"
              type="text"
              placeholder="House/Flat no, Building name, Street name/number and Area name"
              value={values.address || ""}
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
              label="Town or City of residence"
              name="townOrCity"
              type="text"
              value={values.townOrCity || ""}
              onChange={handleChange}
            />
          </div>
          <div className="col-lg-6">
            <FormControl size="large" fullWidth sx={{ marginTop: 2 }}>
              <InputLabel id="demo-simple-select-label" required>
                Home Country
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="home_country"
                value={values.home_country || ""}
                onChange={handleChange}
                label="Home Country"
                defaultValue=""
              >
                <MenuItem value="" selected>
                  <em>None</em>
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
            </FormControl>{" "}
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <TextField
              sx={{ marginTop: 2 }}
              fullWidth
              label="Postal / ZIP Code"
              name="postalCode"
              required
              type="text"
              value={values.postalCode || ""}
              onChange={handleChange}
            />
          </div>{" "}
          <div className="col-lg-6">
            <TextField
              sx={{ marginTop: 2 }}
              fullWidth
              label="State/Province/District"
              name="state_district"
              type="text"
              value={values.state_district || ""}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-2">
            <FormControl size="large" fullWidth sx={{ marginTop: 2 }}>
              <InputLabel id="demo-simple-select-label" required>
                Country Code
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="country_code"
                value={values.country_code || ""}
                onChange={handleChange}
                label="Country Code"
                defaultValue=""
                required
              >
                <MenuItem value="" selected>
                  <em>Country Code</em>
                </MenuItem>
                {countries.map((country, index) =>
                  countriesDialCode.map(
                    (item) =>
                      country === item.name && (
                        <MenuItem key={index} value={item.dial_code}>
                          {item.name} {""}({item.dial_code})
                        </MenuItem>
                      )
                  )
                )}
              </Select>
            </FormControl>{" "}
          </div>
          <div className="col-lg-10">
            <TextField
              sx={{ marginTop: 2 }}
              fullWidth
              label="Mobile/Phone Number"
              name="phone"
              type="text"
              value={values.phone || ""}
              onChange={handleChange}
              required
            />
          </div>
        </div>
      </div>
      <div>
        <hr className="hr mt-5" />
        <div style={{ background: "#1e8bc3" }} className=" p-1">
          <h4 className="text-light text-start ms-3">Travel Details</h4>
        </div>{" "}
        <div className="row mt-4">
          <div className="col-lg-6 ">
            <FormControl size="large" fullWidth sx={{ marginTop: 2 }}>
              <InputLabel id="demo-simple-select-label" required>
                Purpose of Visit
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="purpose_of_visit"
                value={values.purpose_of_visit || ""}
                onChange={handleChange}
                label="Mobile/Phone Number"
                defaultValue=""
              >
                <MenuItem value="" selected>
                  <em>Select</em>
                </MenuItem>
                <MenuItem value="Tourist Visa">Tourist Visa</MenuItem>
                <MenuItem value="Medical Visa (For Patient)">
                  Medical Visa (For Patient)
                </MenuItem>
                <MenuItem value="Business Visa">Business Visa</MenuItem>
                <MenuItem value="Medical Attendant Visa (Companion Patient)">
                  Medical Attendant Visa (Companion Patient)
                </MenuItem>
                <MenuItem value="Conference Visa (Government of India State Organized)">
                  Conference Visa (Government of India State Organized)
                </MenuItem>
              </Select>
            </FormControl>{" "}
          </div>
          <div className="col-lg-6">
            <TextField
              sx={{ marginTop: 2 }}
              required
              fullWidth
              label="Expected Date of Arrival"
              placeholder="ff"
              type="date"
              name="expected_date_of_arrival"
              error={
                errors.expected_date_of_arrival &&
                touched.expected_date_of_arrival
                  ? true
                  : false
              }
              value={values.expected_date_of_arrival || ""}
              onChange={handleChange}
            />
            {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]} fullWidth>
                <DatePicker
                  label={
                    <FormLabel required>Expected Date of Arrival</FormLabel>
                  }
                  fullWidth
                  sx={{ marginTop: 1 }}
                  name="expectedDateOfArrival"
                  // label="Date of Birth"
                  onChange={(e) => setExpected_date_of_arrival(e)}
                  slotProps={{ textField: { fullWidth: true } }}
                />
              </DemoContainer>
            </LocalizationProvider> */}
          </div>
        </div>
        {/* Conditional */}
        <div
          className="row"
          hidden={values.purpose_of_visit === "Tourist Visa" ? false : true}
        >
          <div className="col-lg-6 ">
            <FormControl size="large" fullWidth sx={{ marginTop: 2 }}>
              <InputLabel id="demo-simple-select-label" required>
                Choose e-Tourist Visa duration
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="tourist_duration"
                value={values.tourist_duration || ""}
                onChange={handleChange}
                label="Choose e-Tourist Visa duration"
                defaultValue=""
              >
                <MenuItem value="" selected>
                  <em>Select</em>
                </MenuItem>
                <MenuItem value="For 30 Days Double Entry">
                  For 30 Days Double Entry
                </MenuItem>
                <MenuItem value="For 1 Year Multiple Entery">
                  For 1 Year Multiple Entery{" "}
                </MenuItem>
                <MenuItem value="For 5 Year Multiple Entery">
                  For 5 Year Multiple Entery{" "}
                </MenuItem>
              </Select>
            </FormControl>{" "}
          </div>{" "}
        </div>
        <div
          className="row mt-3"
          hidden={
            values.purpose_of_visit === "Medical Visa (For Patient)"
              ? false
              : true
          }
        >
          <FormControl>
            <div className="d-flex justify-content-between">
              <div className="text-start">
                <FormLabel required>
                  Are you the patient having the Medical Treatment?
                </FormLabel>
              </div>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="medical_visa"
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
          </FormControl>
        </div>
        <div
          className="alert alert-danger mt-4"
          role="alert"
          hidden={
            values.medical_visa === "no" &&
            values.purpose_of_visit === "Medical Visa (For Patient)"
              ? false
              : true
          }
        >
          The companions of patients having a Medical Treatment must select
          Medical Attendant Visa for purpose of visit. Medical Visa can only be
          selected by the patient.
        </div>
        <div
          className="alert alert-warning mt-4 text-start"
          role="alert"
          hidden={
            values.purpose_of_visit ===
            "Conference Visa (Government of India State Organized)"
              ? false
              : true
          }
        >
          Conference Visa should be applied to attend
          conference/seminar/workshop organized by a ministry or department of
          the Government of India, State Governments or PSUs. If your trip
          involves meeting a private company, apply for a Business Visa instead.
        </div>
      </div>
      {/*  */}
      <>
        <hr className="hr mt-5" />
        <div style={{ background: "#1e8bc3" }} className=" p-1">
          <h4 className="text-light text-start ms-3">
            Additional Question Details
          </h4>
        </div>
        <div className="row mt-4">
          <div className={values.que3 === "yes" ? "col-lg-8" : "col-lg-12"}>
            <div className="d-flex justify-content-between">
              <div className="text-start">
                <FormLabel required sx={{ marginTop: 1 }}>
                  Have you ever been arrested, prosecuted or convicted by Court
                  of Law of any country?
                </FormLabel>
              </div>
              <div>
                <RadioGroup
                  defaultValue="no"
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="que3"
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
          <div
            className={values.que3 === "yes" ? "col-lg-4 col-md-12" : "d-none"}
          >
            <TextField
              fullWidth
              required
              size="small"
              label="Reason"
              name="townOrCity"
              type="text"
              value={values.que3Reason || ""}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row mt-4">
          <div className={values.que4 === "yes" ? "col-lg-8" : "col-lg-12"}>
            <div className="d-flex justify-content-between">
              <div className="text-start">
                <FormLabel required sx={{ marginTop: 1 }}>
                  Have you ever been refused entry or deported by any country
                  including India?
                </FormLabel>
              </div>
              <div>
                <RadioGroup
                  defaultValue="no"
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="que4"
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
          <div
            className={values.que4 === "yes" ? "col-lg-4 col-md-12" : "d-none"}
          >
            <TextField
              fullWidth
              required
              size="small"
              label="Reason"
              name="townOrCity"
              type="text"
              value={values.que4Reason || ""}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row mt-4">
          <div className={values.que5 === "yes" ? "col-lg-8" : "col-lg-12"}>
            <div className="d-flex justify-content-between">
              <div className="text-start">
                <FormLabel required sx={{ marginTop: 1 }}>
                  Have you ever been engaged in human or drug trafficking, child
                  abuse, crime against women, economic offense or financial
                  fraud?
                </FormLabel>
              </div>
              <div>
                <RadioGroup
                  defaultValue="no"
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="que5"
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
          <div
            className={values.que5 === "yes" ? "col-lg-4 col-md-12" : "d-none"}
          >
            <TextField
              fullWidth
              required
              size="small"
              label="Reason"
              name="townOrCity"
              type="text"
              value={values.que3Reason || ""}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row mt-4">
          <div className={values.que6 === "yes" ? "col-lg-8" : "col-lg-12"}>
            <div className="d-flex justify-content-between">
              <div className="text-start">
                <FormLabel required sx={{ marginTop: 1 }}>
                  Have you ever been engaged in terrorist activities, cyber
                  crime, sabotage, espionage, genocide, political killing or
                  similar acts of violence?
                </FormLabel>
              </div>
              <div>
                <RadioGroup
                  defaultValue="no"
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="que6"
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
          <div
            className={values.que6 === "yes" ? "col-lg-4 col-md-12" : "d-none"}
          >
            <TextField
              fullWidth
              required
              size="small"
              label="Reason"
              name="townOrCity"
              type="text"
              value={values.que6Reason || ""}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row mt-4">
          <div className={values.que7 === "yes" ? "col-lg-8" : "col-lg-12"}>
            <div className="d-flex justify-content-between">
              <div className="text-start">
                <FormLabel required sx={{ marginTop: 1 }}>
                  Have you ever by any means or medium, expressed views that
                  justify or glorify terrorist violence or that may encourage
                  others to terrorist acts or other serious criminal acts?
                </FormLabel>
              </div>
              <div>
                <RadioGroup
                  defaultValue="no"
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="que7"
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
          <div
            className={values.que7 === "yes" ? "col-lg-4 col-md-12" : "d-none"}
          >
            <TextField
              fullWidth
              required
              size="small"
              label="Reason"
              name="townOrCity"
              type="text"
              value={values.que7Reason || ""}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row mt-4">
          <div className={values.que8 === "yes" ? "col-lg-8" : "col-lg-12"}>
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
          <div
            className={values.que8 === "yes" ? "col-lg-4 col-md-12" : "d-none"}
          >
            <TextField
              fullWidth
              required
              size="small"
              label="Reason"
              name="townOrCity"
              type="text"
              value={values.que8Reason || ""}
              onChange={handleChange}
            />
          </div>
        </div>
      </>
      <div>
        <hr className="hr mt-5" />
        <div style={{ background: "#1e8bc3" }} className=" p-1">
          <h4 className="text-light text-start ms-3">
            Declaration of Applicant
          </h4>
        </div>{" "}
        <div className="mt-3">
          <FormGroup>
            <FormControlLabel
              control={<Checkbox required />}
              label={
                <FormLabel className="text-start mt-2 text-form" required>
                  I declare that the information I have given in this
                  application is truthful, complete and correct.
                </FormLabel>
              }
            />
            <FormControlLabel
              control={<Checkbox required />}
              label={
                <FormLabel className="text-start mt-2 text-form" required>
                  I have read and understood the terms and conditions and
                  privacy policy.
                </FormLabel>
              }
            />
          </FormGroup>
        </div>
      </div>
    </>
  );
}

export default FormStep1;
