import React, { useEffect, useState } from "react";
import {
  stack,
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
  Stack,
} from "@mui/material";

import { PayPalButton } from "react-paypal-button-v2";
import "../Components/Css/payCheck.css";
import { Payment } from "../utils";
import Loading from "./Loading";
import Loader from "./Loader";

function PaymentCheck() {
  const [isLoading, setIsLoading] = useState(false)

 const handleClik = async (e)=>{
  e.preventDefault()
  setIsLoading(true)
  const result = await Payment().then((res)=>{
    setIsLoading(false)
    console.log(res)
  }).catch((err)=>{
    setIsLoading(false)
    console.log("Error")
  })
  
 }
 useEffect(()=>{
  console.log(isLoading)
 },isLoading)

  return (
    // <div className="payment">
      <Stack spacing={4} sx={{display:'flex', alignItems:'center', margin:10}}>
         {isLoading && (<Loader/>)}
      <Typography variant="h4"> Make Payment</Typography>

      {/* <PayPalButton
        amount="0.01"
        // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
        currency="USD"
        // onSuccess={handleSuccess}
        // onError={handleError}
        // options={{
        //   clientId: "YOUR_PAYPAL_CLIENT_ID",
        // }}
        onSuccess={(details, data) => {
          alert("Transaction completed by " + details.payer.name.given_name);

          // OPTIONAL: Call your server to save the transaction
          return fetch("/paypal-transaction-complete", {
            method: "post",
            body: JSON.stringify({
              orderID: data.orderID,
            }),
          });
        }}
      /> */}

      <Button variant="contained" size="large" onClick={handleClik}>Pay</Button>

      </Stack>

      // {/* <button onClick={createPayment}>Pay Now</button> */}
      // {/* </div> */}
    // </div>
  );
}

export default PaymentCheck;
