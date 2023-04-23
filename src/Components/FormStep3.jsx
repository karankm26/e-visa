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
function FormStep3({handleChange, values, errors, touched}) {
  // console.log(countries);
  return (
    <>
      <div className="">
        <div style={{background: "#1e8bc3"}} className="p-1">
          <h4 className="text-light text-start ms-3">Details of Visa Sought</h4>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <TextField
              sx={{marginTop: 2}}
              required
              fullWidth
              label="Type of Visa"
              value="eVisa"
              disabled
            />
          </div>
          <div className="col-lg-6">
            <TextField
              sx={{marginTop: 2}}
              required
              fullWidth
              label="Visa Service"
              value={values.visa_service}
              disabled
            />
          </div>
        </div>{" "}
        <div className="row">
          <div className="col-lg-6">
            <TextField
              sx={{marginTop: 2}}
              required
              fullWidth
              label="Place to be Visited"
              value={values.place_to_be_visited}
              onChange={handleChange}
            />
          </div>
          <div className="col-lg-6">
            <TextField
              sx={{marginTop: 2}}
              fullWidth
              label="Place to be Visited line 2"
              value={values.place_to_be_visited_line_2}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="d-flex justify-content-between">
              <div className="text-start">
                <FormLabel required sx={{marginTop: 1}}>
                  Have you booked any room in Hotel/Resort etc. through any Tour
                  Operator?
                </FormLabel>
              </div>
              <div>
                <RadioGroup
                  defaultValue="no"
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="have_you booked_any_room"
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
            <TextField
              required
              sx={{marginTop: 2}}
              fullWidth
              label="Visa Duration"
              name="visa_duration"
              value={"365 days"}
            />
          </div>
          <div className="col-lg-6">
            <TextField
              required
              sx={{marginTop: 2}}
              fullWidth
              label="No. Of Enteries"
              name="national_id_no"
              value={"Multiple"}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <TextField
              required
              sx={{marginTop: 2}}
              fullWidth
              label="Port of Arrival"
              type="text"
              value={values.port_of_arrival}
              // onChange={handleChange}
            />
          </div>
          <div className="col-lg-6">
            <FormControl size="large" fullWidth sx={{marginTop: 2}}>
              <InputLabel id="demo-simple-select-label" required>
                Expected Port of Exit from India
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="expected_port_from_india"
                value={values.expected_port_from_india || ""}
                onChange={handleChange}
                label="Education Qualification"
                defaultValue=""
              >
                <MenuItem value="" selected>
                  <em>Select Religion</em>
                </MenuItem>
                <MenuItem value={"indai"}>india</MenuItem>
                <MenuItem value={"UDER-GRADUATE"}>UDER-GRADUATE</MenuItem>
                <MenuItem value={"DIPLOMA"}>DIPLOMA</MenuItem>
              </Select>
            </FormControl>{" "}
          </div>
        </div>
      </div>
      <div className="mt-3">
        <div style={{background: "#1e8bc3"}} className="p-1">
          <h4 className="text-light text-start ms-3">
            Previous Visa/Currentlt Valid Visa Details
          </h4>
        </div>
        <div className="row mt-3">
          <div className="col-lg-12">
            <div className="d-flex justify-content-between">
              <div className="text-start">
                <FormLabel required sx={{marginTop: 1}}>
                  Have you ever visited India before?
                </FormLabel>
              </div>
              <div>
                <RadioGroup
                  defaultValue="no"
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="have_you_ever_visted_india"
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
          hidden={values.have_you_ever_visted_india === "yes" ? false : true}
        >
          <div className="row">
            <div className="col-lg-6">
              <TextField
                required
                sx={{marginTop: 2}}
                fullWidth
                label="Address"
                name="previously_visited_address"
                onChange={handleChange}
                value={values.previously_visited_address || ""}
              />
            </div>
            <div className="col-lg-6">
              <TextField
                required
                sx={{marginTop: 2}}
                fullWidth
                label="Cities previously visited in India"
                name="previously_visited_cities"
                onChange={handleChange}
                value={values.previously_visited_cities}
              />
            </div>
          </div>
          {/*  */}
          <div className="row">
            <div className="col-lg-6">
              <TextField
                required
                sx={{marginTop: 2}}
                fullWidth
                label="Last Indian Visa No/Currently Valid Indian Visa No."
                name="last_current_india_visit_number"
                onChange={handleChange}
                value={values.last_current_india_visit_number}
              />
            </div>

            <div className="col-lg-6">
              <FormControl size="large" fullWidth sx={{marginTop: 2}}>
                <InputLabel id="demo-simple-select-label" required>
                  Type of Visa{" "}
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="previous_visited_passport_type"
                  value={values.previous_visited_passport_type || ""}
                  onChange={handleChange}
                  label="Type of Visa"
                  defaultValue=""
                >
                  <MenuItem value="" selected>
                    <em>Select Passport Type</em>
                  </MenuItem>
                  <MenuItem value="ORDINARY PASSPORT">
                    ORDINARY PASSPORT
                  </MenuItem>
                  <MenuItem value="OFFICIAL PASSPORT">
                    OFFICIAL PASSPORT
                  </MenuItem>
                  <MenuItem value="DIPLOMATIC PASSPORT">
                    DIPLOMATIC PASSPORT
                  </MenuItem>
                  <MenuItem value="SERVICE PASSPORT">SERVICE PASSPORT</MenuItem>
                  <MenuItem value="SPECIAL PASSPORT">SPECIAL PASSPORT</MenuItem>
                </Select>
              </FormControl>{" "}
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <TextField
                required
                sx={{marginTop: 2}}
                fullWidth
                label="Place of Issue"
                name="previous_current_place_of_issue"
                onChange={handleChange}
                value={values.previous_current_place_of_issue}
              />
            </div>
            <div className="col-lg-6">
              <TextField
                required
                sx={{marginTop: 2}}
                fullWidth
                label="Date of Issue"
                name="previous_current_date_of_issue"
                onChange={handleChange}
                value={values.previous_current_date_of_issue}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              {" "}
              <FormControl size="large" fullWidth sx={{marginTop: 2}}>
                <InputLabel id="demo-simple-select-label" required>
                  Country of Birth
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="previous_current_country_of_issue"
                  value={values.previous_current_country_of_issue || ""}
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
                name="passport_I/C_number"
                value={values.date_of_expire}
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
        </div>
        <div className="row mt-3">
          <div className="col-lg-12">
            <div className="d-flex justify-content-between">
              <div className="text-start">
                <FormLabel required sx={{marginTop: 1}}>
                  Has permission to visit or to extend stay in India previously
                  been refused?
                </FormLabel>
              </div>
              <div>
                <RadioGroup
                  defaultValue="no"
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="has_permission_to_stay_indian_refused"
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
          <div className="col-lg-12">
            <TextField
              required
              sx={{marginTop: 2}}
              fullWidth
              label="If so, when and by whom (mention Control No. and date also"
              name="date_of_issue"
              value={values.reason_of_refused}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className="mt-4">
        <div style={{background: "#1e8bc3"}} className="p-1">
          <h4 className="text-light text-start ms-3">Other Information </h4>
        </div>
        <div className="col-lg-6">
          {" "}
          <FormControl size="large" fullWidth sx={{marginTop: 2}}>
            <InputLabel id="demo-simple-select-label" required>
              Countries Visited in Last 10 Years
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="countries_visited_in_last_10_years"
              value={values.countries_visited_in_last_10_years || ""}
              onChange={handleChange}
              label="Countries Visited in Last 10 Years"
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
      </div>
      <div className="mt-4">
        <div style={{background: "#1e8bc3"}} className="p-1">
          <h4 className="text-light text-start ms-3">
            SAARC Country Visit Details
          </h4>
        </div>
        <div className="row mt-3">
          <div className="col-lg-12">
            <div className="d-flex justify-content-between">
              <div className="text-start">
                <FormLabel required sx={{marginTop: 1}}>
                  Have you ever visited SAARC countries (except your own
                  country) during last 3 years?
                </FormLabel>
              </div>
              <div>
                <RadioGroup
                  defaultValue="no"
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="have_you booked_any_room"
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
            </div>
          </div>
        </div>{" "}
      </div>
      <div className="mt-3">
        <div style={{background: "#1e8bc3"}} className="p-1">
          <h4 className="text-light text-start ms-3">Reference</h4>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <TextField
              required
              sx={{marginTop: 2}}
              fullWidth
              label="Reference Name in India"
              name="reference_name_in_india"
              value={values.reference_name_in_india}
              onChange={handleChange}
            />
          </div>
          <div className="col-lg-6">
            <TextField
              required
              sx={{marginTop: 2}}
              fullWidth
              label="Address"
              name="reference_in_india_address"
              value={values.reference_address}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <TextField
              required
              sx={{marginTop: 2}}
              fullWidth
              label="Phone"
              name="reference_in_india_phone_no"
              value={values.reference_phone_no}
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
              label="Reference Name in ALBANIA"
              name="reference_name_in_albania"
              value={values.reference_name_in_albania}
              onChange={handleChange}
            />
          </div>
          <div className="col-lg-6">
            <TextField
              required
              sx={{marginTop: 2}}
              fullWidth
              label="Address"
              name="reference_address"
              value={values.reference_address_in_albania}
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
              label="Reference Name in ALBANIA"
              name="reference_phone_in_albania"
              value={values.reference_phone_in_albania}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className="mt-3">
        <div style={{background: "#1e8bc3"}} className="p-1">
          <h4 className="text-light text-start ms-3">
            Please provide below given details,Please give details if marked Yes
          </h4>
        </div>
        <div className="row mt-4">
          <div className={values.que1 === "yes" ? "col-lg-8" : "col-lg-12"}>
            <div className="d-flex justify-content-between">
              <div className="text-start">
                <FormLabel required sx={{marginTop: 1}}>
                  Have you ever been arrested/prosected convicted by Court of
                  Law of any Country ?
                </FormLabel>
              </div>
              <div>
                <RadioGroup
                  defaultValue="no"
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="que1"
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
            className={values.que1 === "yes" ? "col-lg-4 col-md-12" : "d-none"}
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
          <div className={values.que2 === "yes" ? "col-lg-8" : "col-lg-12"}>
            <div className="d-flex justify-content-between">
              <div className="text-start">
                <FormLabel required sx={{marginTop: 1}}>
                  Have you ever been refused entry/deported by any country
                  including India ?
                </FormLabel>
              </div>
              <div>
                <RadioGroup
                  defaultValue="no"
                  aria-labelledby="demo-row-radio-buttons-group-label"
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
                      defaultChecked
                    />
                  </div>
                </RadioGroup>
              </div>
            </div>{" "}
          </div>
          <div
            className={values.que2 === "yes" ? "col-lg-4 col-md-12" : "d-none"}
          >
            <TextField
              fullWidth
              required
              size="small"
              label="Reason"
              name="townOrCity"
              type="text"
              value={values.que2Reason || ""}
              onChange={handleChange}
            />
          </div>
        </div>{" "}
        <div className="row mt-4">
          <div className={values.que3 === "yes" ? "col-lg-8" : "col-lg-12"}>
            <div className="d-flex justify-content-between">
              <div className="text-start">
                <FormLabel required sx={{marginTop: 1}}>
                  Have you ever been Engaged in Human trafficking?/Drug
                  trafficking/Child abuse/Crime against women/ Economic offense
                  / Financial fraud?
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
              name="que3Reason"
              type="text"
              value={values.que3Reason || ""}
              onChange={handleChange}
            />
          </div>
        </div>{" "}
        <div className="row mt-4">
          <div className={values.que4 === "yes" ? "col-lg-8" : "col-lg-12"}>
            <div className="d-flex justify-content-between">
              <div className="text-start">
                <FormLabel required sx={{marginTop: 1}}>
                  Have you ever been engaged in Cyber Crime/Terrorist activites/
                  sabotage/ Espionage/Genocide/Political killing/other act of
                  violence ?
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
              name="que4Reason"
              type="text"
              value={values.que4Reason || ""}
              onChange={handleChange}
            />
          </div>
        </div>{" "}
        <div className="row mt-4">
          <div className={values.que5 === "yes" ? "col-lg-8" : "col-lg-12"}>
            <div className="d-flex justify-content-between">
              <div className="text-start">
                <FormLabel required sx={{marginTop: 1}}>
                  Have you ever by any means or medium ,expresed views that
                  justify or glorify terrorist violence or that may encourage
                  others to terrorist act or other serious criminal acts?
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
              name="que5Reason"
              type="text"
              value={values.que5Reason || ""}
              onChange={handleChange}
            />
          </div>
        </div>{" "}
        <div className="row mt-4">
          <div className={values.que6 === "yes" ? "col-lg-8" : "col-lg-12"}>
            <div className="d-flex justify-content-between">
              <div className="text-start">
                <FormLabel required sx={{marginTop: 1}}>
                  Have you ever been sought asyium (political or otherwise) in
                  any country?
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
              value={values.que3Reason || ""}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="mt-3">
          <FormGroup>
            <FormControlLabel
              control={<Checkbox required />}
              label={
                <FormLabel
                  className="text-start mt-2 text-form fw-bolder"
                  required
                >
                  I TEST, hereby declare that the information furnished above is
                  correct to the best of my knowledge and belief.In case the
                  information is found false at any stage, i am liable for legal
                  action/deportation/blacklisting or any other action as deemed
                  fit by the Government of India
                </FormLabel>
              }
            />
          </FormGroup>
        </div>
      </div>
    </>
  );
}

export default FormStep3;
