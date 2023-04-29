import React, { useEffect, useState } from "react";
import {
  Button,
  Box,
  Typography,
  Card,
  FormLabel,
  Container,
  Alert,
} from "@mui/material";
import { UploadDocuments } from "../utils";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import Loader from "./Loader";

function DocumentsUpload() {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isloading, setIsloading] = useState(false);
  const [UploadSuccess, setUploadSuccess] = useState(false);
  const [passportPhoto, setPassportPhoto] = useState([]);
  const [addhhar, setAddhhar] = useState([]);

  // const handleFileUploadChange = (event) => {
  //   console.log(event.target.files);
  //   setSelectedFile(event.target.files[0]);
  //   const formData = new FormData();
  //   formData.append("file", event.target.files[0], event.target.files[0].name);
  //   setSelectedFile(formData);
  // };

  const handleFileUpload = async () => {
    console.log(passportPhoto);
    console.log(addhhar);
    console.log(id);

    setIsloading(true);
    const formData = new FormData();
    formData.append("files", passportPhoto[0], passportPhoto[0].name);
    formData.append("files", addhhar[0], addhhar[0].name);
    const res = await UploadDocuments(formData, id);
    console.log(res);
    if (res.status === 200) {
      setUploadSuccess(true);
      setIsloading(false);
      setTimeout(() => {
        setUploadSuccess(false);
        navigate(`/payment/${id}`);
      }, 5000);
    }
  };
  return (
    <>
      {isloading && <Loader />}
      <Container>
        <Card sx={{ width: "100%" }} className="card-form mt-5">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              // alignItems: "center",
              padding: "0 70px 0 70px ",
              boxSizing: "border-box",
              marginBottom: "60px",
              marginTop: "50px",
            }}
          >
            {UploadSuccess && (
              <Alert severity="success">Documents Uploaded Successfully</Alert>
            )}
            <Typography>
              <h2>Document Upload</h2>{" "}
            </Typography>

            <div className="row mt-4">
              <div className="col-lg-6">
                <div className="text-start">
                  <FormLabel required>Passport Size Photo</FormLabel>
                </div>
                <input
                  type="file"
                  className="form-control"
                  onChange={(e) => setPassportPhoto(e.target.files)}
                />
                <small>Note: Upload in jgp or jpeg</small>
              </div>
              <div className="col-lg-6">
                <div className="text-start">
                  <FormLabel required> Addhhar Card</FormLabel>
                </div>
                <input
                  type="file"
                  className="form-control"
                  onChange={(e) => setAddhhar(e.target.files)}
                />{" "}
                <small>Note: Upload in pdf</small>
              </div>
            </div>
            {/* <div className="row mt-4">
            <div className="col-lg-6">
              <div className="text-start">
                <FormLabel required> Pancard Card</FormLabel>
              </div>
              <input
                type="file"
                className="form-control"
                onChange={handleFileUploadChange}
              />
            </div>
            <div className="col-lg-6">
              <div className="text-start">
                <FormLabel required> Voter ID Card</FormLabel>
              </div>
              <input
                type="file"
                className="form-control"
                onChange={handleFileUploadChange}
              />
            </div>
          </div> */}
            <Button
              className="px-5 mt-3"
              variant="contained"
              size="large"
              type="submit"
              onClick={handleFileUpload}
            >
              Upload
            </Button>
          </Box>
        </Card>
      </Container>
    </>
  );
}

export default DocumentsUpload;
