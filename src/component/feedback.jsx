import { Box, Button, Grid, keyframes, Typography } from "@mui/material";
import React from "react";
import TapHuanTieuThuong from "../assets/Tap-huan-tieu-thuong-Q5.jpg";
import AI_HTV from "../assets/AI-HTV-4.jpg";
import BaoNguoiLaoDong from "../assets/Bao-Nguoi-Lao-Dong.jpg";
import DoanhNhan from "../assets/Doanh-Nhan.jpg";
import VNPT from "../assets/Lop-Content-VNPT-h3.jpg";
import { UserData } from "../data/userData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import hero_bg from "../assets/hero-bg.jpg";
import Background1 from "../assets/Background1.jpg";
const Feedback = () => {
  return (
    <Box
      p={4}
      sx={{
        width: "100%",
        backgroundImage: `
      linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 100%),
      url(${hero_bg}),
      linear-gradient(to left, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,0) 100%),
      url(${Background1})
    `,
        backgroundSize: "cover, cover, cover, cover",
        backgroundRepeat: "no-repeat, no-repeat, no-repeat, no-repeat",
        backgroundPosition: "center, center, center, center",
        backgroundBlendMode: "screen, normal, screen, normal",
      }}
    >
      <Box maxWidth="1200px" mx="auto" mt={0}>
        <Typography
          textAlign="center"
          variant="h4"
          fontWeight={600}
          textTransform="uppercase"
          color="white"
          pb={2}
        >
          🌟 Phản hồi học viên sau khoá học AI 🌟
        </Typography>

        <Box display="flex" justifyContent="center" flexWrap="wrap" gap={1}>
          {UserData.map((item, id) => (
            <Box
              key={id}
              sx={{
                width: { xs: "100%", sm: "45%", md: "30%" },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "justify",
                border: "1px solid #ddd",
                borderRadius: 4,
                bgcolor: "#fff",
                boxShadow: 2,
              }}
            >
              <img
                src={item.img}
                alt={item.name}
                width="150px"
                height="150px"
                style={{
                  borderRadius: "50%",
                  objectFit: "cover",
                  marginBottom: "1rem",
                }}
              />
              <Typography variant="body1" m={2}>
                {item.description}
              </Typography>
              <Box
                sx={{
                  margin: 2,
                  display: "flex",

                  flexDirection: { xs: "column", md: "row" },
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  //   gap: "4px",
                }}
              >
                <Typography
                  variant="subtitle1"
                  component="span"
                  fontWeight={700}
                >
                  {item.name}
                </Typography>
                <Typography variant="subtitle1" component="span">
                  {item.position}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Feedback;
