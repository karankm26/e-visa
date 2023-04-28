import React, { useState } from "react";
import { useFormik } from "formik";
import { ApplySchema } from "../Schemas";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Box,
  Typography,
  Card,
} from "@mui/material";
import "./Css/ApplyForm.css";
import FormStep1 from "./FormStep1";
import FormStep2 from "./FormStep2";
import FormStep3 from "./FormStep3";
// import FormStep4 from "./FormStep4";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import { CreateForm } from "../utils";
// import FormStep5 from "./FormStep5";
import { useLocation, useParams } from "react-router-dom";

const initialValues = {
  // address: "",
  // city_of_birth: "",
  // confirm_email: "",
  // country_code: "",
  // country_of_birth: "",
  // country_of_citizenship: "",
  // country_of_passport: "",
  // date_of_birth: "",
  // email: "",
  // expected_date_of_arrival: "",
  // expected_date_of_journey: "",
  // familyName: "",
  // firstGivenName: "",
  // first_name: "",
  // gender: "",
  // last_name: "",
  // nationality: "",
  // passport_date_of_issue: "",
  // passport_expiry_date: "",
  // passport_number: "",
  // passport_type: "",
  // phone: "",
  // place_of_issue: "",
  // port_of_arrival: "",
  // postalCode: "",
  // purpose_of_visit: "",
  // state_district: "",
  // tourist_duration: "",
  // townOrCity: "",
  // visible_identification_marks: "",
};

const theme = createTheme({
  components: {
    MuiInputLabel: {
      styleOverrides: {
        asterisk: {
          color: "red",
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        asterisk: {
          color: "red",
        },
      },
    },
  },
});

const MultistepForm = () => {
  const { state } = useLocation();
  // console.log(state);
  const steps = [
    "Personal Details",
    "Applicant and Personal Details",
    "Applicant's Address Details",
    // "Details of Visa Sought",
    // "Additional Questions Details",
  ];

  const [activeStep, setActiveStep] = useState(
    state === 1 ? 1 : state === 2 ? 2 : 0
  );
  const [formData, setFormData] = useState({});
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [selected, setSelected] = useState("");
  const [formStep1Filled, setFormStep1Filled] = useState(false);
  const [submitTab1, setSubmitTab1] = useState(false);
  const [submitTab1Confrim, setSubmitTab1Confrim] = useState(false);

  const handleNextStep = () => {
    setSubmitTab1(true);
    // if (submitTab1Confrim) {
    //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
    // }
  };

  const handlePrevStep = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  console.log(formStep1Filled);
  const handleChangeSelect = (event) => {
    console.log(event.target.value);
    setSelected(event.target.value);
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: ApplySchema,
      onSubmit: (values) => {
        console.log(
          " ~ file: ApplyForm.jsx ~ line 11 ~ apply ~ values",
          values
        );
      },
    });
  // console.log(" ~ file: ApplyForm.jsx ~ line 11 ~ apply ~ values", errors);
  console.log(values);
  const postData = async (e) => {
    e.preventDefault();

    const {
      first_name,
      last_name,
      email,
      phone,
      gender,
      date_of_birth,
      expected_date_of_journey,
      nationality,
      passport_type,
      port_of_arrival,
    } = values;
    const res = await fetch("/ApplyForm", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name,
        last_name,
        email,
        phone,
        gender,
        date_of_birth,
        expected_date_of_journey,
        nationality,
        passport_type,
        port_of_arrival,
      }),
    });

    const data = await res.json();
    console.log(data);

    if (data.status === false || !data) {
      window.alert(`Invalid Registration ${data.msg}`);
      console.log("invalid registration");
    } else {
      window.alert("Registration successfull");
      console.log("successfull registration");
    }
  };
  // console.log(values);
  const handleSubmitFirstForm = async () => {
    console.log(values);

    // const body = ;
    // console.log(body);
    const res = await CreateForm(values);
    console.log(">>>>>>", res);
    // if (res) {
    //   handleNextStep();
    // }
  };
  // console.log(formData);
  const renderStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return (
          <>
            <FormStep1
              handleChange={handleChange}
              values={values}
              errors={errors}
              touched={touched}
              setFormStep1Filled={setFormStep1Filled}
              submitTab1={submitTab1}
              setSubmitTab1Confrim={setSubmitTab1Confrim}
              setActiveStep={setActiveStep}
            />
          </>
        );
      case 1:
        return (
          <>
            <FormStep2
              handleChange={handleChange}
              values={values}
              errors={errors}
              touched={touched}
            />
          </>
        );
      case 2:
        return (
          <>
            <FormStep3
              handleChange={handleChange}
              values={values}
              errors={errors}
              touched={touched}
            />
          </>
        );

      default:
        return null;
    }
  };
  // const handleActive = (stepIndex) => {
  //   setActiveStep(stepIndex);
  // };

  return (
    <ThemeProvider theme={theme}>
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
              marginTop: "30px",
            }}
          >
            <Typography variant="h4" sx={{ marginTop: 3 }}>
              E-VISA APPLICATION
            </Typography>
            <Stepper
              activeStep={activeStep}
              alternativeLabel
              sx={{ width: "100%", marginTop: "20px" }}
            >
              {steps.map((label, index) => (
                <Step
                  key={label}
                  // onClick={() => handleActive(index)}
                >
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            {activeStep < steps.length && (
              <Box sx={{ marginTop: "2rem", width: "100%" }}>
                <Typography variant="h5">
                  {localStorage.getItem("application_id")
                    ? `Application ID : ${localStorage.getItem(
                        "application_id"
                      )}`
                    : ""}
                </Typography>
                {renderStepContent(activeStep)}
                <Box
                  className="d-flex justify-content-between "
                  sx={{ marginTop: 2 }}
                >
                  <div>
                    {""}
                    {(state === 1 && activeStep === 1) ||
                      (state === 2 && activeStep === 2) ||
                      (activeStep !== 0 && (
                        <Button
                          variant="outlined"
                          className="px-5"
                          onClick={handlePrevStep}
                          size="large"
                        >
                          Back
                        </Button>
                      ))}
                  </div>
                  {/* {console.log(activeStep)} */}
                  <div className="flex-end">
                    {activeStep !== steps.length - 1 && (
                      <Button
                        className="px-5"
                        variant="contained"
                        // onClick={handleSubmitFirstForm}
                        onClick={handleNextStep}
                        size="large"
                        disabled={
                          activeStep === 0 && formStep1Filled >= 22
                            ? false
                            : true
                        }
                      >
                        Continue
                      </Button>
                    )}
                    {activeStep === steps.length - 1 && (
                      <Button
                        // onClick={postData}
                        variant="contained"
                        type="submit"
                        className="px-5"
                        onClick={postData}
                        size="large"

                        // onClick={() => {
                        //   postData();
                        //   handleNextStep();
                        // }}
                      >
                        Submit
                      </Button>
                    )}
                  </div>
                </Box>
              </Box>
            )}
          </Box>
        </Card>
      </div>
    </ThemeProvider>
  );
};
export default MultistepForm;
