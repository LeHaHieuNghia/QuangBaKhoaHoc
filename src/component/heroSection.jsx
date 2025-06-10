import { Grid, Typography, Box, Container } from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";
import Background from "../assets/Background1.jpg"; // Đảm bảo đường dẫn đúng

const HeroSection = () => {
  const title = [
    { id: 1, text: "Ứng Dụng AI - X2 Năng Suất Làm Việc" },
    // { id: 2, text: "Để Làm Việc Thông Minh Hơn" },
  ];
  const subtitle = [
    {
      id: 1,
      text: "Khóa học dành riêng cho chủ doanh nghiệp & nhân sự văn phòng ",
    },
    {
      id: 2,
      text: "Cấp chứng chỉ chuẩn OpenAI",
    },
  ];
  return (
    <Box
      id="intro"
      sx={{
        // position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        scrollMarginTop: "80px", // Add space for fixed header
        scrolled: { backgroundColor: "white" },
      }}
    >
      {/* Background Image */}
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

      {/* Content Overlay */}
      <Container
        sx={{
          position: "relative",
          height: "100%",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          pt: "150px",
          ml: "-30px",
        }}
      >
        <Box
          sx={{
            maxWidth: "100%",
            width: "100%",
            textAlign: "center",
            px: { xs: 2, sm: 3, md: 3 },
          }}
        >
          {title.map((item) => (
            <Typography
              key={item.id}
              sx={{
                width: "100%",
                color: "#FFB800",
                fontSize: { xs: "2rem", sm: "2.5rem", md: "4rem" },
                fontWeight: "bold",
                mb: { xs: 2, sm: 3 },
                lineHeight: 1.2,
              }}
            >
              {item.text}
            </Typography>
          ))}

          {subtitle.map((item) => (
            <Typography
              key={item.id}
              sx={{
                fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
                color: "white",
                mb: { xs: 1, sm: 1.5 },
                lineHeight: 1.5,
              }}
            >
              {item.text}
            </Typography>
          ))}

          <Button
            sx={{
              width: { xs: "90%", sm: "350px", md: "400px" },
              height: { xs: "45px", sm: "60px", md: "70px" },
              backgroundColor: "#FFB800",
              fontSize: { xs: "0.9rem", sm: "1.25rem", md: "1.5rem" },
              fontWeight: "bold",
              mt: { xs: 3, sm: 4, md: 5 },
              borderRadius: "8px",
              mx: "auto",
              display: "block",

              "&:hover": {
                backgroundColor: "#E6A600",
                transform: "scale(1.05)",
                transition: "all 0.3s ease",
              },
            }}
            variant="contained"
            disableElevation
          >
            Đăng ký ngay
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
