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
function Status() {
  const [unique_id, setUnique_id] = useState("");
  const [data, setData] = useState(null);
  const [open, setOpen] = React.useState(false);
  // const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await getStatus(unique_id);
      if (res.status === 200) {
        setOpen(true);
        setData(res?.data?.msg);
      } else if (res.response.status === 404) {
        alert("Application ID not found");
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
          <Typography>
            <h2>APPLICATION STATUS</h2>{" "}
          </Typography>
          {/* <form onSubmit={handleSubmit}> */}
          {/* <div className="row"> */}
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
            <Button
              className="px-5 mt-3"
              variant="contained"
              size="large"
              type="submit"
              onClick={handleClick}
            >
              Create Form
            </Button>
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
                <WarningAmberIcon fontSize="inherit" sx={{ marginTop: 3.5 }} />
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
        </Dialog>
      </div>
    </Container>
  );
}
export default Status;
