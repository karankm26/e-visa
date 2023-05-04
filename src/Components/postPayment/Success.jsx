import { Stack } from "@mui/material";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { PaymentValidate } from "../../utils";

import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Success = () => {
  const location = useLocation();
  const payment_information = location.search.split("?")[1].split("&");
  const paymentId = payment_information[0].split("=")[1];
  const PayerID = payment_information[1].split("=")[1];
  console.log(payment_information);
  useEffect(() => {
    const validatePayment = async () => {
      if (paymentId && PayerID) {
        console.log(paymentId, PayerID);
        const body = {
          payer_id: PayerID,
          payment_id: paymentId,
        };

        const res = await PaymentValidate(body);
        if (res.response.data.message === "Payment not validated") {
          alert("Payment Failed");
        }
        if (res.response.data.message === "Payment validated!") {
          alert("Payment validated Successfully!");
        }
        if (res.response.data.message === "application is already paid") {
          alert("Application is already paid");
        }
        console.log(res);
      }
    };
    validatePayment();
  }, []);

  return (
    <Stack
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        // bgcolor: "primary.main",
      }}
    >
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h4">Payment successfull</Typography>
        </CardContent>
        <CardContent className="d-flex justify-content-center">
          <img
            src="https://i.pinimg.com/originals/90/13/f7/9013f7b5eb6db0f41f4fd51d989491e7.gif"
            height={"100px"}
            width={"200px"}
          />
        </CardContent>
        <CardActions className="d-flex justify-content-center">
          <Button size="small">Go Back To Home Page</Button>
        </CardActions>
      </Card>
    </Stack>
  );
};

export default Success;
