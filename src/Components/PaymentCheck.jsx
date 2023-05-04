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
import {useNavigate, Navigate} from "react-router-dom";

function PaymentCheck() {
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate();

 const handleClik = async (e)=>{
  e.preventDefault()
  setIsLoading(true)
  const result = await Payment()
  // .then((res)=>{
  //   setIsLoading(false)
  //   console.log(res)
  //   navigate("/payment-success")
  // }).catch((err)=>{
  //   setIsLoading(false)
  //   console.log("Error")
  //   navigate("/payment-error")
  // })
  if(result.name === "AxiosError"){
    setIsLoading(false)
    console.log("Error")
    navigate("/payment-error")
  }else{
    setIsLoading(false)
    console.log(result)
    // navigate("/payment-success")
    // navigate("https://www.sandbox.paypal.com/cgi-bin/webscr?cmd=_express-checkout&token=EC-55E28852KG3459042")
    window.location.replace(result.data.approverUrl)
  }
  // console.log(result)
  
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
      <div style={{marginTop:"400px"}}>
      <Button variant="contained" size="large" onClick={handleClik}>Pay</Button>
      </div>
      </Stack>

      // {/* <button onClick={createPayment}>Pay Now</button> */}
      // {/* </div> */}
    // </div>
  );
}

export default PaymentCheck;
