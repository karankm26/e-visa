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
  Button,
} from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { countries, countriesDialCode } from "./CountryList";
import "./Css/ApplyForm.css";
import { CreateForm } from "../utils";
import Loader from "../Admin/src/Components/Loader";

import { useSelector,useDispatch } from "react-redux";
import {add1} from '../redux/formStep2Slicer/formStep2Slicer'

function FormStep1({
  // handleChange,
  values,
  errors,
  touched,
  setFormStep1Filled,
  submitTab1,
  setActiveStep,
}) {
  // const [formData, setFormData] = useState({
  //   nationality: "",
  //   passport_type: "",
  //   port_of_arrival: "",
  //   date_of_birth: "",
  //   email: "",
  //   confirm_email: "",
  //   visa_service: "",
  //   visa_service_for_eTourist: "",
  //   expected_date_of_arrival: "",
  //   surname: "",
  //   givenName: "",
  //   gender: "",
  //   city_of_birth: "",
  //   country_of_birth: "",
  //   national_id_no: "",
  //   religion: "",
  //   other_religion: "",
  //   visible_indetification_marks: "",
  //   education_qualification: "",
  //   accquire_nationlity_by_birth: "",
  // });
  const [formData, setFormData] = useState({});
  const [submitForm, setSubmitForm] = useState();
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch()
  const {formStep2} = useSelector((state)=>state)

  console.log(submitTab1);
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    dispatch(add1(formData))
  }


  useEffect(() => {
    const objectLength = Object.keys(formData).length;
    setFormStep1Filled(objectLength);

    if (
      typeof formData.other_religion === "undefined" &&
      typeof formData.visa_service_for_eTourist === "undefined" &&
      objectLength === 22
    ) {
      console.log("??????????");
      setFormStep1Filled(objectLength);
    }
    if (formData?.other_religion?.length > 0 && objectLength > 22) {
      console.log(">>>>>>>>>>>");
      setFormStep1Filled(objectLength);
    }

    if (!formData?.visa_service_for_eTourist?.length > 0 && objectLength > 22) {
      console.log("<<<<<<<<<<<<<<");
      setFormStep1Filled(objectLength);
    }
  }, [formData, Object.keys(formData).length]);

  // console.log(values);

  console.log(formData);
  console.log(Object.keys(formData).length);
  console.log(formStep2)

  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 4);
  const maxMonth = maxDate.getMonth();
  const maxYear = maxDate.getFullYear();
  const maxDaysInMonth = new Date(maxYear, maxMonth + 1, 0).getDate();
  if (maxDate.getDate() > maxDaysInMonth) {
    maxDate.setDate(maxDaysInMonth);
  }

  const handleSubmit = async () => {
    const res = await CreateForm(formData, 1);
    console.log(res.data.result.application_id);
    localStorage.setItem("application_id", res.data.result.application_id);
    if (res) {
      setTimeout(() => {
        setLoading(false);
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      }, 2000);
    }
  };
  useEffect(() => {
    if (submitTab1) {
      console.log("first");
      setLoading(true);
      handleSubmit();
    }
  }, [submitTab1]);

  const dateLimit = ()=>{
    let date = new Date
    date.setDate(date.getDate() + 4)
    let dd = ("0" + date.getDate()).slice(-2)
    let mm = "0" + (date.getMonth() +1).toString().slice(-2)
    let yyyy = date.getFullYear().toString()
    console.log(yyyy+"-"+mm+"-"+dd)
    return (yyyy+"-"+mm+"-"+dd)
  }

  return (
    <>
      {loading && <Loader />}
      <div className="">
        <div style={{ background: "#1e8bc3" }} className="p-1">
          <h4 className="text-light text-start ms-3">Personal Details</h4>
        </div>
        {/* <Button
          onClick={() => {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
          }}
        >
          SKIP
        </Button> */}
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
                value={formData.nationality || ""}
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
                value={formData.passport_type || ""}
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
                value={formData.port_of_arrival || ""}
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
              InputLabelProps={{ shrink: true }}
              // placeholder="Date"
              // error={
              //   errors.date_of_birth && touched.date_of_birth ? true : false
              // }
              value={formData.date_of_birth || ""}
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
              value={formData.email || ""}
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
              value={formData.confirm_email || ""}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div
            className="col-lg-6"
            hidden={formData.nationality === "" ? true : false}
          >
            <FormControl size="large" fullWidth sx={{ marginTop: 2 }}>
              <InputLabel id="demo-simple-select-label" required>
                Visa Service
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="visa_service"
                value={formData.visa_service || ""}
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
                <MenuItem value={"eCONFERENCE VISA"}>eCONFERENCE VISA</MenuItem>
                <MenuItem value={"eMEDICAL ATTENDANT VISA"}>
                  eMEDICAL ATTENDANT VISA
                </MenuItem>
                <MenuItem value={"G20 eCONFERENCE VISA"}>
                  G20 eCONFERENCE VISA"{" "}
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
              name="expected_date_of_arrival"
              type="date"
              value={formData.expected_date_of_arrival || ""}
              onChange={handleChange}
              defaultValue={new Date().toISOString().slice(0, 16)}
              InputLabelProps={{shrink:true}}
              inputProps={{
                // min: new Date().toISOString().slice(0, 16).split("T")[0],
                min: dateLimit()
                // max: maxDate.toISOString().slice(0, 16).split("T")[0],
              }}
            />
          </div>
        </div>
        {/* eTOURIST VISA */}
        <div
          className="row"
          hidden={formData.visa_service === "eTOURIST VISA" ? false : true}
        >
          <div className="col-lg-12">
            <FormControl size="large" fullWidth sx={{ marginTop: 2 }}>
              <InputLabel id="demo-simple-select-label" required>
                Visa Service For Days/Years
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="visa_service_for_eTourist"
                value={formData.visa_service_for_eTourist || ""}
                onChange={handleChange}
                label="Visa Service For Days/Years"
                defaultValue=""
              >
                <MenuItem value="" selected>
                  <em>Select Visa Service</em>
                </MenuItem>
                <MenuItem value={"eTOURIST VISA (for 30 Days)"}>
                  eTOURIST VISA (for 30 Days)
                </MenuItem>
                <MenuItem value={"eTOURIST VISA (for 1 Year)"}>
                  eTOURIST VISA (for 1 Year)
                </MenuItem>
                <MenuItem value={"eTOURIST VISA (for 5 Years)"}>
                  eTOURIST VISA (for 5 Years)
                </MenuItem>
              </Select>
            </FormControl>{" "}
          </div>

          <div hidden={formData.visa_service_for === "" ? true : false}>
            <div className="row">
              <div className="col-lg-12">
                <div className="d-flex justify-content-between">
                  <div>
                    <RadioGroup
                      defaultValue="no"
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="visa_service_for_eTourist_reason"
                      onChange={handleChange}
                    >
                      <FormControlLabel
                        value="TOURISM,RECREATION,SIGHT-SEEING"
                        control={<Radio size="small" />}
                        label={
                          <FormLabel className="text-lowercase">
                            TOURISM,RECREATION,SIGHT-SEEING
                          </FormLabel>
                        }
                      />
                      <FormControlLabel
                        value="MEETING FRIENDS/RELATIVES"
                        control={<Radio size="small" />}
                        label={
                          <FormLabel className="text-lowercase">
                            MEETING FRIENDS/RELATIVES
                          </FormLabel>
                        }
                      />
                      <FormControlLabel
                        value="SHORT TERM YOGA PROGRAMME"
                        label={
                          <FormLabel className="text-lowercase">
                            SHORT TERM YOGA PROGRAMME
                          </FormLabel>
                        }
                        control={<Radio size="small" />}
                      />
                      <FormControlLabel
                        value="SHORT TERM COURSES ON LOCAL LANGUAGES, MUSIC, DANCE, ARTS & CRAFTS, COOKING, MEDICINE ETC. WHICH SHOULD NOT BE A FORMAL OR STRUCTURED COURSE/PROGRAMME (COURSES NOT EXCEEDING 6 MONTHS DURATION AND NOT ISSUED WITH A QUALIFYING CERTIFICATE/ DIPLOMA ETC)"
                        control={<Radio size="small" />}
                        label={
                          <FormLabel className="text-lowercase">
                            SHORT TERM COURSES ON LOCAL LANGUAGES, MUSIC, DANCE,
                            ARTS & CRAFTS, COOKING, MEDICINE ETC. WHICH SHOULD
                            NOT BE A FORMAL OR STRUCTURED COURSE/PROGRAMME
                            (COURSES NOT EXCEEDING 6 MONTHS DURATION AND NOT
                            ISSUED WITH A QUALIFYING CERTIFICATE/ DIPLOMA ETC)
                          </FormLabel>
                        }
                      />
                      <FormControlLabel
                        value="VOLUNTARY WORK OF SHORT DURATION (FOR A MAXIMUM PERIOD OF ONE MONTH, WHICH DO NOT INVOLVE ANY MONETARY PAYMENT OR CONSIDERATION OF ANY KIND IN RETURN)"
                        control={<Radio size="small" />}
                        label={
                          <FormLabel className="text-lowercase">
                            VOLUNTARY WORK OF SHORT DURATION (FOR A MAXIMUM
                            PERIOD OF ONE MONTH, WHICH DO NOT INVOLVE ANY
                            MONETARY PAYMENT OR CONSIDERATION OF ANY KIND IN
                            RETURN).
                          </FormLabel>
                        }
                      />
                    </RadioGroup>
                  </div>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
        {/* eMEDICAL VISA */}
        <div hidden={formData.visa_service === "eMEDICAL VISA" ? false : true}>
          <div className="row">
            <div className="col-lg-12">
              <div className="d-flex justify-content-between">
                <div>
                  <RadioGroup
                    defaultValue="no"
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="emedical_visa_reason"
                    onChange={handleChange}
                  >
                    <FormControlLabel
                      value="TOURISM,RECREATION,SIGHT-SEEING"
                      control={<Radio size="small" />}
                      label={
                        <FormLabel className="text-lowercase">
                          SHORT TERM MEDICAL TREATMENT OF SELF
                        </FormLabel>
                      }
                    />
                  </RadioGroup>
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
        {/* eMEDICAL VISA */}
        <div hidden={formData.visa_service === "eBUSINESS VISA" ? false : true}>
          <div className="row">
            <div className="col-lg-12">
              <div className="d-flex justify-content-between">
                <div>
                  <RadioGroup
                    defaultValue="no"
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="ebusiness_visa_reason"
                    onChange={handleChange}
                  >
                    <FormControlLabel
                      value="TO SET UP INDUSTRIAL/BUSINESS VENTURE
"
                      control={<Radio size="small" />}
                      label={
                        <FormLabel className="text-lowercase">
                          TO SET UP INDUSTRIAL/BUSINESS VENTURE
                        </FormLabel>
                      }
                    />
                    <FormControlLabel
                      value=" SALE/PURCHASE/TRADE"
                      control={<Radio size="small" />}
                      label={
                        <FormLabel className="text-lowercase">
                          SALE/PURCHASE/TRADE
                        </FormLabel>
                      }
                    />
                    <FormControlLabel
                      value="ATTEND TECHNICAL/BUSINESS MEETINGS"
                      control={<Radio size="small" />}
                      label={
                        <FormLabel className="text-lowercase">
                          ATTEND TECHNICAL/BUSINESS MEETINGS
                        </FormLabel>
                      }
                    />
                    <FormControlLabel
                      value="TO RECRUIT MANPOWER"
                      control={<Radio size="small" />}
                      label={
                        <FormLabel className="text-lowercase">
                          TO RECRUIT MANPOWER
                        </FormLabel>
                      }
                    />
                    <FormControlLabel
                      value="PARTICIPATION IN EXHIBITIONS,BUSINESS/TRADE FAIRS"
                      control={<Radio size="small" />}
                      label={
                        <FormLabel className="text-lowercase">
                          PARTICIPATION IN EXHIBITIONS,BUSINESS/TRADE FAIRS
                        </FormLabel>
                      }
                    />
                    <FormControlLabel
                      value="EXPERT/SPECIALIST IN CONNECTION WITH AN ONGOING PROJECT"
                      control={<Radio size="small" />}
                      label={
                        <FormLabel className="text-lowercase">
                          EXPERT/SPECIALIST IN CONNECTION WITH AN ONGOING
                          PROJECT TO SET UP INDUSTRIAL/BUSINESS VENTURE
                        </FormLabel>
                      }
                    />
                    <FormControlLabel
                      value="CONDUCTING TOURS"
                      control={<Radio size="small" />}
                      label={
                        <FormLabel className="text-lowercase">
                          CONDUCTING TOURS
                        </FormLabel>
                      }
                    />
                    <FormControlLabel
                      value="TO DELIVER LECTURE/S UNDER GLOBAL INITIATIVE FOR ACADEMIC NETWORKS (GIAN)"
                      control={<Radio size="small" />}
                      label={
                        <FormLabel className="text-lowercase">
                          TO DELIVER LECTURE/S UNDER GLOBAL INITIATIVE FOR
                          ACADEMIC NETWORKS (GIAN)
                        </FormLabel>
                      }
                    />
                    <FormControlLabel
                      value="PLI/SPECS/EMC 2.0 SCHEME"
                      control={<Radio size="small" />}
                      label={
                        <FormLabel className="text-lowercase">
                          PLI/SPECS/EMC 2.0 SCHEME
                        </FormLabel>
                      }
                    />
                    <FormControlLabel
                      value="SPORTS RELATED ACTIVITY"
                      control={<Radio size="small" />}
                      label={
                        <FormLabel className="text-lowercase">
                          SPORTS RELATED ACTIVITY{" "}
                        </FormLabel>
                      }
                    />
                    <FormControlLabel
                      value="TO JOIN THE VESSEL"
                      control={<Radio size="small" />}
                      label={
                        <FormLabel className="text-lowercase">
                          TO JOIN THE VESSEL
                        </FormLabel>
                      }
                    />
                  </RadioGroup>
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
        {/* eCONFERENCE Visa */}
        <div
          hidden={formData.visa_service === "eCONFERENCE VISA" ? false : true}
        >
          <div className="row">
            <div className="col-lg-12">
              <div className="d-flex justify-content-between">
                <div>
                  <RadioGroup
                    defaultValue="no"
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="econference_visa_reason"
                    onChange={handleChange}
                  >
                    <FormControlLabel
                      value="TO ATTEND A CONFERENCE/SEMINAR/WORKSHOP ORGANIZED BY A MINISTRY OR DEPARTMENT OF THE GOVERNMENT OF INDIA,STATE GOVERNMENTS OR UT ADMINISTRATIONS AND THEIR SUBORDINATE/ ATTACHED ORGANIZATIONS AND PSUS AND PRIVATE CONFERENCES ORGANIZED BY PRIVATE PERSONS/COMPANIES/ORGANIZATIONS."
                      control={<Radio size="small" />}
                      label={
                        <FormLabel className="text-lowercase">
                          TO ATTEND A CONFERENCE/SEMINAR/WORKSHOP ORGANIZED BY A
                          MINISTRY OR DEPARTMENT OF THE GOVERNMENT OF
                          INDIA,STATE GOVERNMENTS OR UT ADMINISTRATIONS AND
                          THEIR SUBORDINATE/ ATTACHED ORGANIZATIONS AND PSUS AND
                          PRIVATE CONFERENCES ORGANIZED BY PRIVATE
                          PERSONS/COMPANIES/ORGANIZATIONS.
                        </FormLabel>
                      }
                    />
                  </RadioGroup>
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
        {/* G20 eConference visa*/}
        <div
          hidden={
            formData.visa_service === "G20 eCONFERENCE VISA" ? false : true
          }
        >
          <div className="row">
            <div className="col-lg-12">
              <div className="d-flex justify-content-between">
                <div>
                  <RadioGroup
                    defaultValue="no"
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="g20_econference_visa_reason"
                    onChange={handleChange}
                  >
                    <FormControlLabel
                      value="TO ATTEND G20 CONFERENCE/MEETINGS"
                      control={<Radio size="small" />}
                      label={
                        <FormLabel className="text-lowercase">
                          TO ATTEND G20 CONFERENCE/MEETINGS
                        </FormLabel>
                      }
                    />
                  </RadioGroup>
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
        {/* eMEDICAL ATTENDANT VISA*/}
        <div
          hidden={
            formData.visa_service === "eMEDICAL ATTENDANT VISA" ? false : true
          }
        >
          <div className="row">
            <div className="col-lg-12">
              <div className="d-flex justify-content-between">
                <div>
                  <RadioGroup
                    defaultValue="no"
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="emedical_attendant_visa_reason"
                    onChange={handleChange}
                  >
                    <FormControlLabel
                      value="TO ACCOMPANY PATIENT TRAVELLING TO INDIA ON EMEDICAL VISA"
                      control={<Radio size="small" />}
                      label={
                        <FormLabel className="text-lowercase">
                          TO ACCOMPANY PATIENT TRAVELLING TO INDIA ON EMEDICAL
                          VISA
                        </FormLabel>
                      }
                    />
                  </RadioGroup>
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <FormControlLabel
              control={
                <Checkbox
                  name="terms_and_condition"
                  onChange={handleChange}
                  required
                />
              }
              label={
                <FormLabel className="text-start mt-2 text-form" required>
                  I have read and understood the terms and conditions and
                  privacy policy.
                </FormLabel>
              }
            />
          </div>
        </div>
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
              value={formData.surname || ""}
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
              value={formData.givenName || ""}
              onChange={handleChange}
            />
          </div>
        </div>{" "}
        <div className="row">
          <div className="col-lg-12">
            <FormControlLabel
              control={
                <Checkbox
                  required
                  onChange={handleChange}
                  name="name_changed"
                />
              }
              label={
                <FormLabel className="text-start mt-2 text-form" >
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
                name="gender"
                value={formData.gender || ""}
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
              InputLabelProps={{shrink:true}}
              value={formData.date_of_birth}
              disabled
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
              value={formData.city_of_birth || ""}
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
              value={formData.national_id_no || ""}
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
                value={formData.religion || ""}
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
                <MenuItem value={"OTHER"}>OTHER</MenuItem>
              </Select>
            </FormControl>{" "}
          </div>
          <div
            className="col-lg-12"
            hidden={formData.religion === "OTHER" ? false : true}
          >
            <TextField
              required
              sx={{ marginTop: 2 }}
              fullWidth
              label="If Religion is not in the list"
              name="other_religion"
              type="text"
              value={formData.other_religion || ""}
              onChange={handleChange}
            />
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
              value={formData.visible_indetification_marks || ""}
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
                name="education_qualification"
                value={formData.education_qualification || ""}
                onChange={handleChange}
                label="Education Qualification"
                defaultValue=""
              >
                <MenuItem value="" selected>
                  <em>Select Religion</em>
                </MenuItem>
                <MenuItem value={"POST_GRADUATE"}>POST-GRADUATE</MenuItem>
                <MenuItem value={"GRADUATE"}>GRADUATE</MenuItem>
                <MenuItem value={"UDER-GRADUATE"}>UDER-GRADUATE</MenuItem>
                <MenuItem value={"DIPLOMA"}>DIPLOMA</MenuItem>
                <MenuItem value={"MATARICULATION"}>MATARICULATION</MenuItem>
                <MenuItem value={"UNDER MATARICULATION"}>
                  UNDER MATARICULATION
                </MenuItem>
              </Select>
            </FormControl>{" "}
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <TextField
              sx={{ marginTop: 2 }}
              fullWidth
              label="Nationality"
              name="nationality"
              value={formData.nationality}
              InputLabelProps={{shrink:true}}
              inputProps={{
                readOnly: true,
              }}
              disabled
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
                value={formData.accquire_nationlity_by_birth || ""}
                onChange={handleChange}
                label="  Did you acquire nationality by birth or by naturalization?"
                defaultValue=""
              >
                <MenuItem value="" selected>
                  <em>-Select-</em>
                </MenuItem>
                <MenuItem value={"By Birth"}>By Birth</MenuItem>
                <MenuItem value={"Naturalisation"}>Naturalisation</MenuItem>
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
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="Have_you_ever_sought_asylum"
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
    </>
  );
}

export default FormStep1;
