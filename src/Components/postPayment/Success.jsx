import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { PaymentValidate } from "../../utils";

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
    <Box
      sx={{
        width: "100%",
        height: "30vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "primary.main",
      }}
    >
      <Typography variant="h1" color="text.orimary">
        Payment successfull
      </Typography>
    </Box>
  );
};

export default Success;
