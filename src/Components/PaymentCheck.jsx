import React, { useEffect } from "react";
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

function PaymentCheck() {

  // const style = {
  //   width:1,
    
  // }

  return (
    // <div className="payment">
      <Stack spacing={4} sx={{display:'flex', alignItems:'center', margin:10}}>
      <Typography variant="h4"> Make Payment</Typography>

      <PayPalButton
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
      />
      </Stack>

      // {/* <button onClick={createPayment}>Pay Now</button> */}
      // {/* </div> */}
    // </div>
  );
}

export default PaymentCheck;
