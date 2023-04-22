import React, { useState } from "react";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js";
import { stripePaymentMethodHandler } from "./script";
import {
  Button,
  Grid,
  TextField,
  Typography,
  Box,
  CircularProgress,
} from "@mui/material";

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      lineHeight: "27px",
      color: "#212529",
      fontSize: "1.1rem",
      "::placeholder": {
        color: "#C8D7DE00",
      },
    },

    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a",
    },
  },
};

export default function CheckoutForm(props) {
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setLoading(true);
    setErrorMsg("");

    const paymentMethodObj = {
      type: "card",
      card: elements.getElement(CardNumberElement),
      billing_details: {
        name,
        email,
      },
    };
    const paymentMethodResult = await stripe.createPaymentMethod(
      paymentMethodObj
    );

    stripePaymentMethodHandler(
      {
        result: paymentMethodResult,
        amount: props.amount,
      },
      handleResponse
    );
  };

  // callback method to handle the response
  const handleResponse = (response) => {
    setLoading(false);
    if (response.error) {
      setErrorMsg(
        typeof response.error === "string"
          ? response.error
          : response.error.message
      );
      return;
    }
    props.setPaymentCompleted(response.success ? true : false);
  };

  return (
    // <React.Fragment>
    //   <h4 className="d-flex justify-content-between align-items-center mb-3">
    //     <span className="text-muted">Pay with card</span>
    //   </h4>
    //   <form onSubmit={handleSubmit}>
    //     <div className="row">
    //       <div className="col-md-6 mb-3">
    //         <label htmlFor="cc-name" className="text-start">
    //           Name on card
    //         </label>
    //         <input
    //           id="cc-name"
    //           type="text"
    //           className="form-control"
    //           value={name}
    //           onChange={(e) => setName(e.target.value)}
    //         />
    //       </div>
    //       <div className="col-md-6 mb-3">
    //         <label htmlFor="cc-email">Email</label>
    //         <input
    //           id="cc-email"
    //           type="text"
    //           className="form-control"
    //           value={email}
    //           onChange={(e) => setEmail(e.target.value)}
    //         />
    //       </div>
    //     </div>

    //     <div className="row">
    //       <div className="col-md-12 mb-3">
    //         <label htmlFor="cc-number">Card Number</label>
    //         <CardNumberElement
    //           id="cc-number"
    //           className="form-control"
    //           options={CARD_ELEMENT_OPTIONS}
    //         />
    //       </div>
    //     </div>

    //     <div className="row">
    //       <div className="col-md-6 mb-3">
    //         <label htmlFor="expiry">Expiration Date</label>
    //         <CardExpiryElement
    //           id="expiry"
    //           className="form-control"
    //           options={CARD_ELEMENT_OPTIONS}
    //         />
    //       </div>
    //       <div className="col-md-6 mb-3">
    //         <label htmlFor="cvc">CVC</label>
    //         <CardCvcElement
    //           id="cvc"
    //           className="form-control"
    //           options={CARD_ELEMENT_OPTIONS}
    //         />
    //       </div>
    //     </div>

    //     <hr className="mb-4" />
    //     <Button
    //       variant="contained"
    //       className=" w-100"
    //       type="submit"
    //       disabled={loading}
    //     >
    //       {loading ? (
    //         <div
    //           className="spinner-border spinner-border-sm text-light"
    //           role="status"
    //         ></div>
    //       ) : (
    //         `PAY ₹${props.amount}`
    //       )}
    //     </Button>
    //     {errorMsg && <div className="text-danger mt-2">{errorMsg}</div>}
    //   </form>
    // </React.Fragment>
    <React.Fragment>
      <Typography variant="h4" component="h4" className="mb-3">
        <span className="text-muted">Pay with card</span>
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id="cc-name"
              label="Name on card"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id="cc-email"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3} sx={{ marginTop: -0.9 }}>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              // size="small"
              id="cc-number"
              label="Card Number"
              InputProps={{
                inputComponent: CardNumberElement,
                inputProps: { options: CARD_ELEMENT_OPTIONS },
              }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3} sx={{ marginTop: -0.9 }}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              // size="small"
              id="expiry"
              label="Expiration Date"
              InputProps={{
                inputComponent: CardExpiryElement,
                inputProps: { options: CARD_ELEMENT_OPTIONS },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id="cvc"
              label="CVC"
              InputProps={{
                inputComponent: CardCvcElement,
                inputProps: { options: CARD_ELEMENT_OPTIONS },
              }}
            />
          </Grid>
        </Grid>
        <Box mt={2} mb={2}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            type="submit"
            fullWidth
            disabled={loading}
          >
            {loading ? (
              <CircularProgress size={24} color="secondary" />
            ) : (
              `PAY ₹${props.amount}`
            )}
          </Button>
          {errorMsg && (
            <Typography variant="body2" color="error" className="mt-2">
              {errorMsg}
            </Typography>
          )}
        </Box>
      </form>
    </React.Fragment>
  );
}
