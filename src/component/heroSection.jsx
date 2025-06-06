import { Grid, Typography, Box } from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";
import Background from "../assets/Background1.jpg"; // Đảm bảo đường dẫn đúng

const HeroSection = () => {
  const title = [
    { id: 1, text: "Ứng Dụng AI" },
    { id: 2, text: "Để Làm Việc Thông Minh Hơn" },
  ];
  const subtitle = [
    {
      id: 1,
      text: "Khóa học dành riêng cho chủ doanh nghiệp & nhân sự văn phòng ",
    },
    {
      id: 2,
      text: "cấp chứng chỉ chuẩn OpenAI",
    },
  ];
  return (
    <Grid>
      <Box sx={{ position: "relative", width: "100vw", height: "100vh" }}>
        {/* Hình nền */}
        <Box
          component="img"
          src={Background}
          alt="Background"
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 1,
          }}
        />

        {/* Nội dung đè lên */}
        <Box
          sx={{
            position: "absolute",
            top: "35%",
            left: "28%",
            transform: "translate(-50%, -50%)",
            zIndex: 2,
            color: "white",
            textAlign: "center",
          }}
        >
          {title.map((item) => (
            <Typography color="#FFB800" variant="h2" fontWeight="bold">
              {item.text}
            </Typography>
          ))}
          {subtitle.map((item) => (
            <Typography
              key={item.id}
              variant="h5"
              sx={{ marginTop: 2, color: "white" }}
            >
              {item.text}
            </Typography>
          ))}
          <Button
            sx={{
              top: 220,
              right: 100,
              width: 300,
              height: 70,
              backgroundColor: "#FFB800",
            }}
            variant="contained"
            disableElevation
          >
            Học thử miễn phí
          </Button>
        </Box>
        <Box></Box>
      </Box>
    </Grid>
  );
};

export default HeroSection;
