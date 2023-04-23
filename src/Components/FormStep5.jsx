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
function FormStep5({ handleChange, values, errors, touched }) {
  // console.log(countries);
  return (
    <>
      <div className="">
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

export default FormStep5;
