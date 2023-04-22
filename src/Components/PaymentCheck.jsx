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
  Container,
} from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";
import { countries } from "./CountryList";
import StripComponent from "./payment/StripComponent";
// import Payu from "payu-sdk";

function PaymentCheck() {
  // const [payment, setPayment] = useState(null);
  // const payu = new Payu({
  //   merchantId: "your_merchant_id",
  //   key: "your_key",
  //   salt: "your_salt",
  //   debug: true,
  // });

  // async function createPayment() {
  //   const payment = await payu.createPayment({
  //     amount: "10.00",
  //     currency: "INR",
  //     productinfo: "Product Info",
  //     firstname: "John",
  //     email: "john@example.com",
  //   });
  //   setPayment(payment);
  // }

  // function redirect() {
  //   if (payment) {
  //     payu.pay(payment);
  //   }
  // }

  return (
    <div>
      <StripComponent />
      {/* <button onClick={createPayment}>Pay Now</button> */}
    </div>
  );
}

export default PaymentCheck;
