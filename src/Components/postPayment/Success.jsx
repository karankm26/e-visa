import { Stack } from "@mui/material";
import { useEffect,useState } from "react";
import { useLocation } from "react-router-dom";
import { PaymentValidate } from "../../utils";

import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Loader from "../Loader";

const Success = () => {
  const location = useLocation();
  const payment_information = location.search.split("?")[1].split("&");
  const paymentId = payment_information[0].split("=")[1];
  const PayerID = payment_information[2].split("=")[1];
  console.log(payment_information);
  const [res, setRes] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const validatePayment = async () => {
      if (paymentId && PayerID) {
        const body = {
          payer_id: PayerID,
          payment_id: paymentId,
        };
        setLoading(true)
        const res = await PaymentValidate(body);
        setRes(res.response)
        setLoading(false)
      }
    };
    validatePayment();
  }, []);

  return (
    <>
    {loading && <Loader />}
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
      {res.status === 200 ?
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
        </CardActions>
      </Card>
      :
      
      (<Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h4">Payment Unsuccessfull</Typography>
        </CardContent>
        <CardContent className="d-flex justify-content-center">
          <img
            src="https://i.pinimg.com/originals/90/13/f7/9013f7b5eb6db0f41f4fd51d989491e7.gif"
            height={"100px"}
            width={"200px"}
          />
        </CardContent>
        <CardActions className="d-flex justify-content-center">
        </CardActions>
      </Card>)
      }

    </Stack>
  
  </>
  );
};

export default Success;
