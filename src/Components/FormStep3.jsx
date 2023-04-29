import React, { useEffect } from "react";
import {
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Checkbox,
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
import { Navigate, useNavigate } from "react-router-dom";
function FormStep3({ setFormStep3Filled, submitTab3, setActiveStep }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const id = localStorage.getItem("application_id");
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  console.log(formData);
  console.log(Object.keys(formData).length);

  useEffect(() => {
    const objectLength = Object.keys(formData).length;
    setFormStep3Filled(objectLength);
  }, [formData, Object.keys(formData).length]);

  const handleSubmit = async () => {
    const res = await CreateForm(
      formData,
      3,
      localStorage.getItem("application_id")
    );
    console.log(localStorage.getItem("application_id"));
    if (res) {
      setTimeout(() => {
        setLoading(false);
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        navigate("/upload/" + id);
      }, 2000);
    }
  };
  useEffect(() => {
    if (submitTab3) {
      setLoading(true);
      handleSubmit();
    }
  }, [submitTab3]);
  return (
    <>
      {loading && <Loader />}
      <div className="">
        <div style={{ background: "#1e8bc3" }} className="p-1">
          <h4 className="text-light text-start ms-3">Details of Visa Sought</h4>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <TextField
              sx={{ marginTop: 2 }}
              required
              fullWidth
              label="Type of Visa"
              value="eVisa"
              disabled
            />
          </div>
          <div className="col-lg-6">
            <TextField
              sx={{ marginTop: 2 }}
              required
              fullWidth
              label="Visa Service"
              value={formData.visa_service}
              disabled
            />
          </div>
        </div>{" "}
        <div className="row">
          <div className="col-lg-6">
            <TextField
              sx={{ marginTop: 2 }}
              required
              fullWidth
              label="Place to be Visited"
              name="place_to_be_visited"
              value={formData.place_to_be_visited}
              onChange={handleChange}
            />
          </div>
          <div className="col-lg-6">
            <TextField
              sx={{ marginTop: 2 }}
              fullWidth
              required
              label="Place to be Visited line 2"
              name="place_to_be_visited_line_2"
              value={formData.place_to_be_visited_line_2}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="d-flex justify-content-between">
              <div className="text-start">
                <FormLabel required sx={{ marginTop: 1 }}>
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
              sx={{ marginTop: 2 }}
              fullWidth
              label="Visa Duration"
              name="visa_duration"
              value={formData.visa_duration}
              onChange={handleChange}
            />
          </div>
          <div className="col-lg-6">
            <TextField
              required
              sx={{ marginTop: 2 }}
              fullWidth
              label="No. Of Enteries"
              name="no_of_enteries"
              value={formData.no_of_enteries}
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
              label="Port of Arrival in India"
              type="text"
              name="port_of_arrival_in_india"
              value={formData.port_of_arrival_in_india}
              onChange={handleChange}
            />
          </div>
          <div className="col-lg-6">
            <TextField
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="exit_port_from_india"
              value={formData.exit_port_from_india || ""}
              onChange={handleChange}
              label="Exit Port From India"
              fullWidth
              sx={{ marginTop: 2 }}
              defaultValue=""
              required
            />
          </div>
        </div>
      </div>
      <div className="mt-3">
        <div style={{ background: "#1e8bc3" }} className="p-1">
          <h4 className="text-light text-start ms-3">
            Previous Visa/Currentlt Valid Visa Details
          </h4>
        </div>
        <div className="row mt-3">
          <div className="col-lg-12">
            <div className="d-flex justify-content-between">
              <div className="text-start">
                <FormLabel required sx={{ marginTop: 1 }}>
                  Have you ever visited India before?
                </FormLabel>
              </div>
              <div>
                <RadioGroup
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
          hidden={formData.have_you_ever_visted_india === "yes" ? false : true}
        >
          <div className="row">
            <div className="col-lg-6">
              <TextField
                required
                sx={{ marginTop: 2 }}
                fullWidth
                label="Address"
                name="previously_visited_address"
                onChange={handleChange}
                value={formData.previously_visited_address || ""}
              />
            </div>
            <div className="col-lg-6">
              <TextField
                required
                sx={{ marginTop: 2 }}
                fullWidth
                label="Cities previously visited in India"
                name="previously_visited_cities"
                onChange={handleChange}
                value={formData.previously_visited_cities}
              />
            </div>
          </div>
          {/*  */}
          <div className="row">
            <div className="col-lg-6">
              <TextField
                required
                sx={{ marginTop: 2 }}
                fullWidth
                label="Last Indian Visa No/Currently Valid Indian Visa No."
                name="last_current_india_visit_number"
                onChange={handleChange}
                value={formData.last_current_india_visit_number}
              />
            </div>

            <div className="col-lg-6">
              <FormControl size="large" fullWidth sx={{ marginTop: 2 }}>
                <InputLabel id="demo-simple-select-label" required>
                  Type of Visa{" "}
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="previous_visited_passport_type"
                  value={formData.previous_visited_passport_type || ""}
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
                sx={{ marginTop: 2 }}
                fullWidth
                label="Place of Issue"
                name="previous_current_place_of_issue"
                onChange={handleChange}
                value={formData.previous_current_place_of_issue}
              />
            </div>
            <div className="col-lg-6">
              <TextField
                required
                sx={{ marginTop: 2 }}
                fullWidth
                label="Date of Issue"
                name="previous_current_date_of_issue"
                onChange={handleChange}
                value={formData.previous_current_date_of_issue}
              />
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
                  name="previous_current_country_of_issue"
                  value={formData.previous_current_country_of_issue || ""}
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
                value={formData.date_of_expire}
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
                name="place_of_issue"
                value={formData.place_of_issue}
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
                name="date_of_issue"
                value={formData.date_of_issue}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-lg-12">
            <div className="d-flex justify-content-between">
              <div className="text-start">
                <FormLabel required sx={{ marginTop: 1 }}>
                  Has permission to visit or to extend stay in India previously
                  been refused?
                </FormLabel>
              </div>
              <div>
                <RadioGroup
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
              sx={{ marginTop: 2 }}
              fullWidth
              label="If so, when and by whom (mention Control No. and date also"
              name="reason_of_refused"
              value={formData.reason_of_refused_control_no_and_date}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className="mt-4">
        <div style={{ background: "#1e8bc3" }} className="p-1">
          <h4 className="text-light text-start ms-3">Other Information </h4>
        </div>
        <div className="col-lg-12">
          <TextField
            type="text"
            name="countries_visited_in_last_10_years"
            value={formData.countries_visited_in_last_10_years || ""}
            onChange={handleChange}
            label="Countries Visited in Last 10 Years"
            sx={{ marginTop: 2 }}
            fullWidth
          />
        </div>
      </div>
      <div className="mt-4">
        <div style={{ background: "#1e8bc3" }} className="p-1">
          <h4 className="text-light text-start ms-3">
            SAARC Country Visit Details
          </h4>
        </div>
        <div className="row mt-3">
          <div className="col-lg-12">
            <div className="d-flex justify-content-between">
              <div className="text-start">
                <FormLabel required sx={{ marginTop: 1 }}>
                  Have you ever visited SAARC countries (except your own
                  country) during last 3 years?
                </FormLabel>
              </div>
              <div>
                <RadioGroup
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="have_you_ever_saarc_country"
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
        <div style={{ background: "#1e8bc3" }} className="p-1">
          <h4 className="text-light text-start ms-3">Reference</h4>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <TextField
              required
              sx={{ marginTop: 2 }}
              fullWidth
              label="Reference Name in India"
              name="reference_name_in_india"
              value={formData.reference_name_in_india}
              onChange={handleChange}
            />
          </div>
          <div className="col-lg-6">
            <TextField
              required
              sx={{ marginTop: 2 }}
              fullWidth
              label="Address"
              name="reference_in_india_address"
              value={formData.reference_address}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <TextField
              required
              sx={{ marginTop: 2 }}
              fullWidth
              label="Phone"
              name="reference_in_india_phone_no"
              value={formData.reference_phone_no}
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
              label={"Reference Name in" + " " + formData.nationality}
              name="reference_name_in_albania"
              value={formData.reference_name_in_nationality}
              onChange={handleChange}
            />
          </div>
          <div className="col-lg-6">
            <TextField
              required
              sx={{ marginTop: 2 }}
              fullWidth
              label={"Address in " + " " + formData.nationality}
              name="reference_address"
              value={formData.reference_address_in_nationality}
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
              label={"Reference Name in" + " " + formData.nationality}
              name="reference_phone_in_nationality"
              value={formData.reference_phone_in_nationality}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className="mt-3">
        <div style={{ background: "#1e8bc3" }} className="p-1">
          <h4 className="text-light text-start ms-3">
            Please provide below given details,Please give details if marked Yes
          </h4>
        </div>
        <div className="row mt-4">
          <div className={formData.que1 === "yes" ? "col-lg-8" : "col-lg-12"}>
            <div className="d-flex justify-content-between">
              <div className="text-start">
                <FormLabel required sx={{ marginTop: 1 }}>
                  Have you ever been arrested/prosected convicted by Court of
                  Law of any Country ?
                </FormLabel>
              </div>
              <div>
                <RadioGroup
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
            className={
              formData.que1 === "yes" ? "col-lg-4 col-md-12" : "d-none"
            }
          >
            <TextField
              fullWidth
              required
              size="small"
              label="Reason"
              name="que1Reason"
              type="text"
              value={formData.que1Reason || ""}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row mt-4">
          <div className={formData.que2 === "yes" ? "col-lg-8" : "col-lg-12"}>
            <div className="d-flex justify-content-between">
              <div className="text-start">
                <FormLabel required sx={{ marginTop: 1 }}>
                  Have you ever been refused entry/deported by any country
                  including India ?
                </FormLabel>
              </div>
              <div>
                <RadioGroup
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
            className={
              formData.que2 === "yes" ? "col-lg-4 col-md-12" : "d-none"
            }
          >
            <TextField
              fullWidth
              required
              size="small"
              label="Reason"
              name="que2Reason"
              type="text"
              value={formData.que2Reason || ""}
              onChange={handleChange}
            />
          </div>
        </div>{" "}
        <div className="row mt-4">
          <div className={formData.que3 === "yes" ? "col-lg-8" : "col-lg-12"}>
            <div className="d-flex justify-content-between">
              <div className="text-start">
                <FormLabel required sx={{ marginTop: 1 }}>
                  Have you ever been Engaged in Human trafficking?/Drug
                  trafficking/Child abuse/Crime against women/ Economic offense
                  / Financial fraud?
                </FormLabel>
              </div>
              <div>
                <RadioGroup
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
            className={
              formData.que3 === "yes" ? "col-lg-4 col-md-12" : "d-none"
            }
          >
            <TextField
              fullWidth
              required
              size="small"
              label="Reason"
              name="que3Reason"
              type="text"
              value={formData.que3Reason || ""}
              onChange={handleChange}
            />
          </div>
        </div>{" "}
        <div className="row mt-4">
          <div className={formData.que4 === "yes" ? "col-lg-8" : "col-lg-12"}>
            <div className="d-flex justify-content-between">
              <div className="text-start">
                <FormLabel required sx={{ marginTop: 1 }}>
                  Have you ever been engaged in Cyber Crime/Terrorist activites/
                  sabotage/ Espionage/Genocide/Political killing/other act of
                  violence ?
                </FormLabel>
              </div>
              <div>
                <RadioGroup
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
            className={
              formData.que4 === "yes" ? "col-lg-4 col-md-12" : "d-none"
            }
          >
            <TextField
              fullWidth
              required
              size="small"
              label="Reason"
              name="que4Reason"
              type="text"
              value={formData.que4Reason || ""}
              onChange={handleChange}
            />
          </div>
        </div>{" "}
        <div className="row mt-4">
          <div className={formData.que5 === "yes" ? "col-lg-8" : "col-lg-12"}>
            <div className="d-flex justify-content-between">
              <div className="text-start">
                <FormLabel required sx={{ marginTop: 1 }}>
                  Have you ever by any means or medium ,expresed views that
                  justify or glorify terrorist violence or that may encourage
                  others to terrorist act or other serious criminal acts?
                </FormLabel>
              </div>
              <div>
                <RadioGroup
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
            className={
              formData.que5 === "yes" ? "col-lg-4 col-md-12" : "d-none"
            }
          >
            <TextField
              fullWidth
              required
              size="small"
              label="Reason"
              name="que5Reason"
              type="text"
              value={formData.que5Reason || ""}
              onChange={handleChange}
            />
          </div>
        </div>{" "}
        <div className="row mt-4">
          <div className={formData.que6 === "yes" ? "col-lg-8" : "col-lg-12"}>
            <div className="d-flex justify-content-between">
              <div className="text-start">
                <FormLabel required sx={{ marginTop: 1 }}>
                  Have you ever been sought asyium (political or otherwise) in
                  any country?
                </FormLabel>
              </div>
              <div>
                <RadioGroup
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
            className={
              formData.que6 === "yes" ? "col-lg-4 col-md-12" : "d-none"
            }
          >
            <TextField
              fullWidth
              required
              size="small"
              label="Reason"
              name="que6Reason"
              type="text"
              value={formData.que6Reason || ""}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="mt-3">
          <FormGroup>
            <FormControlLabel
              control={<Checkbox required sx={{ marginTop: -4 }} />}
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
