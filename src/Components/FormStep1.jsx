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
            <FormControl size="large" fullWidth sx={{ marginTop: 2 }}>
              <InputLabel id="demo-simple-select-label" required>
                Nationality/Region
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="nationality"
                value={values.nationality || ""}
                onChange={handleChange}
                label="Nationality"
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
            <FormControl size="large" fullWidth sx={{ marginTop: 2 }}>
              <InputLabel id="demo-simple-select-label" required>
                Passport Type
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="passport_type"
                value={values.passport_type || ""}
                onChange={handleChange}
                label="Country of Birth"
                defaultValue=""
              >
                <MenuItem value="" selected>
                  <em>Select Passport Type</em>
                </MenuItem>
                <MenuItem value="ORDINARY PASSPORT">ORDINARY PASSPORT</MenuItem>
                <MenuItem value="OFFICIAL PASSPORT">OFFICIAL PASSPORT</MenuItem>
                <MenuItem value="DIPLOMATIC PASSPORT">
                  DIPLOMATIC PASSPORT
                </MenuItem>
                <MenuItem value="SERVICE PASSPORT">SERVICE PASSPORT</MenuItem>
                <MenuItem value="SPECIAL PASSPORT">SPECIAL PASSPORT</MenuItem>
              </Select>
            </FormControl>{" "}
          </div>
        </div>{" "}
        <div className="row">
          <div className="col-lg-6">
            <FormControl size="large" fullWidth sx={{ marginTop: 2 }}>
              <InputLabel id="demo-simple-select-label" required>
                Port of Arrival
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="port_of_arrival"
                value={values.port_of_arrival || ""}
                onChange={handleChange}
                label="Port of Arrival"
                defaultValue=""
              >
                <MenuItem value="" selected>
                  <em>Select Port of Arrival</em>
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
        <div className="row">
          <div className="col-lg-6">
            <FormControl size="large" fullWidth sx={{ marginTop: 2 }}>
              <InputLabel id="demo-simple-select-label" required>
                Visa Service
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="visa_service"
                value={values.visa_service || ""}
                onChange={handleChange}
                label="Country of Birth"
                defaultValue=""
              >
                <MenuItem value="" selected>
                  <em>Select Visa Service</em>
                </MenuItem>
                <MenuItem value={"eTOURIST VISA"}>eTOURIST VISA</MenuItem>
                <MenuItem value={"eMEDICAL VISA"}>eMEDICAL VISA</MenuItem>
                <MenuItem value={"eBUSINESS VISA"}>eBUSINESS VISA</MenuItem>
                <MenuItem value={"eCONFERENCE ATTENDANT VISA"}>
                  eCONFERENCE VISA
                </MenuItem>
                <MenuItem value={"eMEDICAL ATTENDANT VISA"}>
                  {" "}
                  eMEDICAL ATTENDANT VISA
                </MenuItem>
              </Select>
            </FormControl>{" "}
          </div>

          <div className="col-lg-6">
            <TextField
              required
              sx={{ marginTop: 2 }}
              fullWidth
              label="Expected Date of Arrival"
              name="confirm_email"
              type="date"
              value={values.expected_date_of_arrival || ""}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <FormControlLabel
              control={<Checkbox required />}
              label={
                <FormLabel className="text-start mt-2 text-form" required>
                  I have read and understood the terms and conditions and
                  privacy policy.
                </FormLabel>
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default FormStep1;
