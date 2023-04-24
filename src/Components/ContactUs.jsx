import React, { useState } from "react";
import {
  Button,
  Box,
  Card,
  Container,
  TextField,
  Typography,
  Grid,
} from "@mui/material";
import { MdLocationOn } from "react-icons/md";
import { AiTwotonePhone, AiFillMessage } from "react-icons/ai";

const ContactUs = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
  console.log(formData);
  return (
    <>
      <Container>
        <Card sx={{ width: "100%" }} className="card-form mt-5">
          <Typography
            variant="h4"
            sx={{ marginTop: 3, marginLeft: 4, textAlign: "center" }}
          >
            Contact Us
          </Typography>
          <Box
            sx={{
              // display: "flex",
              //   flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "0 25px",
              boxSizing: "border-box",
              marginBottom: "20px",
              marginTop: "30px",
            }}
          >
            <div className="row">
              <div className="col-lg-12">
                <div className="row ">
                  <div className="col-lg-6 py-2">
                    {" "}
                    <TextField
                      required
                      fullWidth
                      id="cc-name"
                      label="Your Name"
                      //   value={name}
                      name="name"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-lg-6 py-2">
                    {" "}
                    <TextField
                      required
                      fullWidth
                      id="cc-email"
                      label="Your Email"
                      //   value={email}
                      name="email"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-12 py-2">
                    {" "}
                    <TextField
                      required
                      fullWidth
                      id="cc-name"
                      label="Subject"
                      //   value={name}
                      name="subject"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12 py-2">
                    {" "}
                    <TextField
                      required
                      fullWidth
                      label="Message"
                      multiline
                      name="message"
                      onChange={handleChange}
                      inputProps={{
                        style: {
                          maxHeight: "300px",
                          minHeight: "100px",
                        },
                      }}
                    />
                  </div>
                </div>
                <div className="row text-center">
                  <div className="col-lg-12">
                    {" "}
                    <Button
                      className="mt-3"
                      sx={{ paddingX: 10 }}
                      variant="contained"
                      size="large"
                      type="submit"
                    >
                      Submit{" "}
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="row mt-5 py-3 ">
              <div className="col-lg-4 text-lg-start text-center">
                <MdLocationOn className="text-primary fs-5 me-1" />
                San Francisco, CA 94126, USA
              </div>
              <div className="col-lg-4 text-lg-center  text-center ">
                <AiTwotonePhone className="text-primary fs-5 me-1" />+ 01 234
                567 89
              </div>
              <div className="col-lg-4 text-lg-end text-center">
                <AiFillMessage className="text-primary fs-5 me-1" />
                contact@evisaindia.com
              </div>
            </div>
          </Box>
        </Card>
      </Container>
    </>
  );
};

export default ContactUs;
