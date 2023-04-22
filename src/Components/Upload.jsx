import React, { useEffect } from "react";
import {
  Button,
  Box,
  Typography,
  Card,
  FormLabel,
  Container,
} from "@mui/material";

function DocumentsUpload() {
  return (
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
          <Typography>
            <h2>Document Upload</h2>{" "}
          </Typography>

          <div className="row mt-4">
            <div className="col-lg-6">
              <div className="text-start">
                <FormLabel required> Addhhar Card</FormLabel>
              </div>
              <input type="file" className="form-control" />
            </div>
            <div className="col-lg-6">
              <div className="text-start">
                <FormLabel required> Pancard Card</FormLabel>
              </div>
              <input type="file" className="form-control" />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-6">
              <div className="text-start">
                <FormLabel required> Voter ID Card</FormLabel>
              </div>
              <input type="file" className="form-control" />
            </div>
            <div className="col-lg-6">
              <div className="text-start">
                <FormLabel required>Passport Size Photo</FormLabel>
              </div>
              <input type="file" className="form-control" />
            </div>
          </div>
          <Button
            className="px-5 mt-3"
            variant="contained"
            size="large"
            type="submit"
            // onClick={handleClick}
          >
            Upload
          </Button>
        </Box>
      </Card>
    </Container>
  );
}

export default DocumentsUpload;
