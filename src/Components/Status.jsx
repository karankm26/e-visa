import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  Card,
  Dialog,
  Alert,
  AlertTitle,
  IconButton,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CloseIcon from "@mui/icons-material/Close";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import ErrorIcon from "@mui/icons-material/Error";
import React, { useState } from "react";
import { CreateForm, getStatus } from "../utils";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";
function Status() {
  const navigate = useNavigate();
  const [unique_id, setUnique_id] = useState("");
  const [data, setData] = useState(null);
  const [open, setOpen] = useState(false);
  // const [open, setOpen] = React.useState(true);
  const [loading, setLoading] = useState(false);
  const [uploadDocuments, setUploadDocuments] = useState(false);
  const [paymentDone, setPaymentDone] = useState(false);
  const [tab1filled, setTab1filled] = useState(true);
  const [tab2filled, setTab2filled] = useState(true);
  const [fromComplete, setFromComplete] = useState(true);
  const [applicationNotFound, setApplicationNotFound] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const res = await getStatus(unique_id);
      console.log(res);
      if (res.status === 200) {
        setOpen(true);
        setData(res?.data?.msg);
        setApplicationNotFound(false);
        setLoading(false);
      } else if (res.response.status === 404) {
        setLoading(false);
        setApplicationNotFound(true);
        // alert("Application ID not found");
      }
    } catch (error) {
      console.log(error);
    }
    // try {
    //   const response = await fetch(`/status/${unique_id}`);
    //   const json = await response.json();
    //   setData(json);
    //   console.log(json);

    //   if (json.status === false || !json) {
    //     window.alert(`Invalid Application Id - ${json.msg}`);
    //     console.log("invalid Application Id ");
    //   } else {
    //     console.log("success");
    //   }
    // } catch (error) {
    //   console.error(error);
    // }
  };
  const handleClick = async () => {
    const res = await CreateForm();
    console.log(res);
  };
  return (
    <>
      {loading && <Loader />}
      <Container>
        <Card sx={{ width: "100%" }} className="card-form mt-5">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "0 25px",
              boxSizing: "border-box",
              marginBottom: "20px",
              marginTop: "50px",
            }}
          >
            <Typography variant="h4">APPLICATION STATUS</Typography>

            {applicationNotFound && (
              <Alert severity="error">Application Not Found!</Alert>
            )}

            <TextField
              sx={{ marginTop: 2 }}
              fullWidth
              label="Enter Application id"
              name="application_id"
              type="text"
              // size="small"
              value={unique_id}
              onChange={(event) => setUnique_id(event.target.value)}
            />
            {/* </div> */}
            <div className="row">
              <Button
                className="px-5 mt-3"
                variant="contained"
                size="large"
                type="submit"
                onClick={handleSubmit}
              >
                Get Status
              </Button>
              {/* <Button
              className="px-5 mt-3"
              variant="contained"
              size="large"
              type="submit"
              onClick={handleClick}
            >
              Create Form
            </Button> */}
            </div>
          </Box>
        </Card>
        <div>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <Alert
              icon={
                data?.split(" ").reverse()[0] === "pending" ? (
                  <WarningAmberIcon
                    fontSize="inherit"
                    sx={{ marginTop: 3.5 }}
                  />
                ) : data?.split(" ").reverse()[0] === "rejected" ? (
                  <ErrorIcon fontSize="inherit" sx={{ marginTop: 3.5 }} />
                ) : (
                  <CheckCircleOutlineIcon
                    fontSize="inherit"
                    sx={{ marginTop: 3.5 }}
                  />
                )
              }
              severity={
                data?.split(" ").reverse()[0] === "pending"
                  ? "info"
                  : data?.split(" ").reverse()[0] === "rejected"
                  ? "error"
                  : "success"
              }
              className="p-4"
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  sx={{ marginTop: 2 }}
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
            >
              <AlertTitle className="text-center ">
                {"Application Status"}
              </AlertTitle>
              Your Application Status is {data && data?.split(" ").reverse()[0]}
            </Alert>
            <Button
              onClick={() => {
                navigate(
                  fromComplete && uploadDocuments && !paymentDone
                    ? `/payment/${unique_id}`
                    : tab1filled && !tab2filled && !fromComplete
                    ? `/apply/${unique_id}`
                    : tab1filled && tab2filled && !fromComplete
                    ? `/apply/${unique_id}`
                    : fromComplete && !uploadDocuments && !paymentDone
                    ? `/upload/${unique_id}`
                    : "",
                  {
                    state:
                      tab1filled && !tab2filled && !fromComplete
                        ? 1
                        : tab1filled && tab2filled && !fromComplete
                        ? 2
                        : 3,
                  }
                );
              }}
            >
              {fromComplete && uploadDocuments && !paymentDone
                ? "Continue for Processing Fees"
                : (tab1filled && !tab2filled && !fromComplete) ||
                  (tab2filled && tab1filled && !fromComplete)
                ? "Continue to Complete your application"
                : fromComplete && !uploadDocuments && !paymentDone
                ? "Continue to upload Documents"
                : paymentDone
                ? "Your Application is under evaluation"
                : null}
            </Button>
          </Dialog>
        </div>
      </Container>{" "}
    </>
  );
}
export default Status;
