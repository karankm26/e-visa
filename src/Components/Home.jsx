import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
  Box,
  Container,
  Paper,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import SwiperCore, { Autoplay } from "swiper/core";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/less";
import "swiper/less/navigation";
import "swiper/less/pagination";
import "swiper/css/scrollbar";
import { experimentalStyled as styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import PaymentIcon from "@mui/icons-material/Payment";
import AvTimerIcon from "@mui/icons-material/AvTimer";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
const cardItem = [
  {
    id: 1,
    title: "30 Days validity",
    description: " Tourist eVisa",
  },
  {
    id: 2,
    title: "1 Year validity",
    description: " Tourist eVisa",
  },
  {
    id: 3,
    title: "5 Year validity",
    description: "Tourist eVisa",
  },
  {
    id: 4,
    title: "5 Year validity",
    description: "Tourist eVisa",
  },
];
const Item = styled(Container)(({ theme }) => ({
  backgroundColor: "transparent",
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
  //   marginLeft: 8,
}));
const Home = () => {
  SwiperCore.use([Autoplay, Pagination, Navigation]);
  const swiperRef = useRef(null);
  const navigate = useNavigate();
  return (
    <>
      {" "}
      <div className="bg-image" style={{ maxWidth: "100%" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            px: 2,
          }}
        >
          {" "}
          <Typography
            variant="h3"
            className="text-light text-center "
            sx={{ marginTop: 7 }}
          >
            <div>Indian e-Visa Apply</div>
            <div>Apply Indian Visa Online</div>

            <Button
              variant="contained"
              className="mt-2 "
              size="large"
              onClick={() => {
                navigate("/apply");
              }}
            >
              Indian Visa Application
            </Button>
          </Typography>
        </Box>

        <div className="container">
          {" "}
          <Swiper
            ref={swiperRef}
            spaceBetween={20}
            breakpoints={{
              // 1300: {
              //   slidesPerView: 6,
              // },
              1024: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 2,
              },
              412: {
                slidesPerView: 1,
              },
              320: {
                slidesPerView: 1,
                // width: 20,
              },
            }}
            slidesPerView={6}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            effect={false}
            // autoplay={{
            //   delay: 2000,
            //   disableOnInteraction: false,
            // }}
            grabCursor={true}
            // onSlideChange={handleSlideChange}
          >
            <div>
              {cardItem.map((item, index) => (
                <SwiperSlide key={item.id}>
                  <Item key={index} className="">
                    <Card
                      sx={{
                        maxWidth: 400,
                        minWidth: 250,
                        borderRadius: "10px",
                        marginTop: 3,
                      }}
                    >
                      <CardMedia
                        component="img"
                        alt="green iguana"
                        height="100"
                        image="https://st2.depositphotos.com/1013693/8169/i/600/depositphotos_81695568-stock-photo-chinese-usa-and-shengen-european.jpg"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                          {item.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {item.description}{" "}
                        </Typography>
                      </CardContent>
                      <CardActions
                        sx={{ justifyContent: "center", marginTop: -2 }}
                      >
                        <Button size="small" onClick={() => navigate("/apply")}>
                          Apply Now
                        </Button>
                        <Button size="small">Learn More</Button>
                      </CardActions>
                    </Card>
                  </Item>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
      </div>
      <div className="container">
        <div className="row py-5">
          <div className="col-lg-6">
            <Card sx={{ background: "#e7e7e7", maxWidth: 1000 }}>
              <CardContent>
                <Typography variant="h6" sx={{ textAlign: "left" }}>
                  Online eVisa Application for India
                </Typography>
                <Typography
                  sx={{ fontSize: 14, textAlign: "justify" }}
                  color="text.secondary"
                  gutterBottom
                >
                  <div className="mb-3">
                    {" "}
                    <span className="   fw-bold"> Government of India</span> has
                    launched electronic travel authorisation or e-Visa for India
                    which allows citizens of 180 countries to travel to India
                    without requiring a physical stamping on the passport. Since
                    2014 international
                  </div>
                  travelers who want to visit India no longer have to apply for
                  the traditional paper Indian Visa to make the trip and hence
                  they can avoid the hassle that comes with that application.
                  Instead of having to go the Indian Embassy or Consulate, the
                  Indian Visa can now be obtained online in an electronic
                  format.
                  <div className="mt-3">
                    Apart from the ease of applying for the Visa online the
                    e-Visa for India is also the quickest way to enter India.
                  </div>{" "}
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className="col-lg-6">
            <Card sx={{ maxWidth: 1000 }}>
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{ textAlign: "left", marginBottom: 1 }}
                >
                  What is electronic Indian Visa (India e-Visa)?
                </Typography>
                <Typography
                  sx={{ fontSize: 14, textAlign: "justify" }}
                  color="text.secondary"
                  // gutte    rBottom
                >
                  An e-Visa is a visa issued by the Indian Government to
                  travelers who wish to visit India for both business and
                  tourism.
                  <div className="mt-3">
                    It is an electronic version of the traditional Visa, which
                    will be stored on your mobile device (smartphone or tablet).
                    An e-Visa will allow foreigners into the country without
                    having to go through any hassle at all.{" "}
                  </div>
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="large"
                  variant="contained"
                  onClick={() => navigate("/apply")}
                >
                  APPLY INDIAN VISA ONLINE{" "}
                </Button>
              </CardActions>
            </Card>
          </div>
        </div>

        <div className="row py-5 ">
          <div className="col-lg-3 mt-2">
            <Card
              className="card-form"
              sx={{ borderRadius: 6, cursor: "pointer" }}
              onClick={() => navigate("/apply")}
            >
              <CardContent className="text-center">
                <LibraryBooksIcon sx={{ color: "#1976d2" }} className="fs-2" />
                <Typography variant="h6" sx={{ textAlign: "center" }}>
                  Apply here for eVisa
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className="col-lg-3 mt-2">
            <Card
              className="card-form"
              sx={{ borderRadius: 6, cursor: "pointer" }}
              onClick={() => navigate("/status")}
            >
              <CardContent className="text-center">
                <AvTimerIcon sx={{ color: "#1976d2" }} className="fs-2" />
                <Typography variant="h6" sx={{ textAlign: "center" }}>
                  Check yout status
                </Typography>
              </CardContent>
            </Card>
          </div>{" "}
          <div className="col-lg-3 mt-2">
            <Card
              className="card-form"
              sx={{ borderRadius: 6, cursor: "pointer" }}
              onClick={() => navigate("/payment")}
            >
              <CardContent className="text-center">
                <PaymentIcon sx={{ color: "#1976d2" }} className="fs-2" />
                <Typography variant="h6" sx={{ textAlign: "center" }}>
                  Pay for eVisa Fees
                </Typography>
              </CardContent>
            </Card>
          </div>{" "}
          <div className="col-lg-3 mt-2">
            <Card
              className="card-form"
              sx={{ borderRadius: 6, cursor: "pointer" }}
              onClick={() => navigate("/upload")}
            >
              <CardContent className="text-center">
                <CloudUploadIcon sx={{ color: "#1976d2" }} className="fs-2" />
                <Typography variant="h6">Upload Documents</Typography>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* </div> */}
      </div>
    </>
  );
};
export default Home;
