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
  const [stage1, setStage1] = useState(true);
  const [stage2, setStage2] = useState(true);
  const [stage3, setStage3] = useState(true);
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
      console.log(res.data);
      if (res.status === 200) {
        setOpen(true);
        setLoading(false);
        setData(res.data);
        localStorage.setItem(
          "application_id",
          res.data.application.application_id
        );
        setApplicationNotFound(false);
        setLoading(false);
      } else if (res.response.status === 404) {
        setLoading(false);
        setApplicationNotFound(true);
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log(data);
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
                data?.status === "incomplete" ? (
                  <WarningAmberIcon
                    fontSize="inherit"
                    sx={{ marginTop: 3.5 }}
                  />
                ) : data?.status === "rejected" ? (
                  <ErrorIcon fontSize="inherit" sx={{ marginTop: 3.5 }} />
                ) : (
                  <CheckCircleOutlineIcon
                    fontSize="inherit"
                    sx={{ marginTop: 3.5 }}
                  />
                )
              }
              severity={
                data?.status === "incomplete"
                  ? "info"
                  : data?.status === "rejected"
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
              Your Application Status is {data && data?.status}
            </Alert>
            <Button
              onClick={() => {
                navigate(
                  data?.currentTab === 2 || data?.currentTab === 3
                    ? `/apply/${unique_id}`
                    : data?.currentTab === 4
                    ? `/upload/${unique_id}`
                    : data?.currentTab === 5 &&
                      data?.application?.uploads?.status === "complete"
                    ? `/payment/${unique_id}`
                    : "",
                  // stage3 && uploadDocuments && !paymentDone
                  //   ? `/payment/${unique_id}`
                  //   : stage1 && !stage2 && !stage3
                  //   ? `/apply/${unique_id}`
                  //   : stage1 && stage2 && !stage3
                  //   ? `/apply/${unique_id}`
                  //   : stage3 && !uploadDocuments && !paymentDone
                  //   ? `/upload/${unique_id}`
                  //   : "",
                  {
                    state:
                      data?.currentTab === 2
                        ? 1
                        : data?.currentTab === 3
                        ? 2
                        : 3,
                  }
                );
              }}
            >
              {data?.currentTab === 2 || data?.currentTab === 3
                ? `Continue to Complete your application`
                : data?.currentTab === 4
                ? `Continue to upload Documents`
                : data?.currentTab === 5 &&
                  data?.application?.uploads?.status === "complete"
                ? `Continue for Processing Fees`
                : data?.application?.approved_visa_url !== ""
                ? "Download Your Visa Here"
                : "Your Application is under evaluation"}
            </Button>
            {data?.application?.approved_visa_url !== "" && (
              <Button variant="contained">
                <a
                  href={data?.application?.approved_visa_url}
                  download
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Download
                </a>
              </Button>
            )}
          </Dialog>
        </div>
      </Container>{" "}
    </>
  );
}
export default Status;
