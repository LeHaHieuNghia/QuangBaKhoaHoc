import { Box, Button, Grid, keyframes, Typography } from "@mui/material";
import React from "react";
import TapHuanTieuThuong from "../assets/Tap-huan-tieu-thuong-Q5.jpg";
import AI_HTV from "../assets/AI-HTV-4.jpg";
import BaoNguoiLaoDong from "../assets/Bao-Nguoi-Lao-Dong.jpg";
import DoanhNhan from "../assets/Doanh-Nhan.jpg";
import VNPT from "../assets/Lop-Content-VNPT-h3.jpg";
import { UserData } from "../data/userData";
import Form from "./registrationForm";
const Testimonials = () => {
  // Tạo animation "bounce shake"
  const bounceShake = keyframes`
  0% { transform: translateX(0); }
  20% { transform: translateX(-5px); }
  40% { transform: translateX(5px); }
  60% { transform: translateX(-5px); }
  80% { transform: translateX(5px); }
  100% { transform: translateX(0); }
`;
  const listOrg = [
    "Liên Đoàn Lao Động Bình Dương",
    "Hiệp Hội Doanh nhân Bình Phước",
    "Báo Người Lao Động",
    "Tập đoàn Thế Giới Di Động",
    "Vietlott",
    "Khu công nghiệp Viet Sing",
  ];

  const listImgOrg = [
    TapHuanTieuThuong,
    AI_HTV,
    BaoNguoiLaoDong,
    DoanhNhan,
    VNPT,
  ];

  // Lặp lại để auto-scroll nhìn tự nhiên hơn
  const repeatedListOrg = [...listOrg, ...listOrg];

  return (
    <Box
      mt={4}
      sx={{
        backgroundColor: "rgb(255 184 0 / 20%)",
        opacity: 1,
        py: 4,
        px: 2,
      }}
    >
      <Typography
        variant="h5"
        fontWeight={600}
        textTransform="uppercase"
        mb={3}
        textAlign="center"
      >
        Doanh nghiệp đã học
      </Typography>

      {/* Hình ảnh tổ chức */}
      <Grid container spacing={3} justifyContent="center">
        {listImgOrg.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Box display="flex" justifyContent="center">
              <img
                src={item}
                alt={`org-${index}`}
                style={{
                  width: "60vw",
                  maxWidth: "100%",
                  height: "auto",
                  borderRadius: "8px",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Danh sách tên tổ chức auto-scroll */}
      <Box
        sx={{
          width: "100%",
          overflow: "hidden",
          mt: 4,
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 2,
            animation: "scrollLeft 20s linear infinite",
            width: "max-content",
          }}
        >
          {repeatedListOrg.map((item, index) => (
            <Box
              key={index}
              sx={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "8px 16px",
                bgcolor: "#f9f9f9",
                boxShadow: 1,
                whiteSpace: "nowrap",
                flex: "0 0 auto",
              }}
            >
              <Typography variant="body1" fontWeight={500}>
                {item}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Keyframes CSS for scrolling */}
      <style>
        {`
          @keyframes scrollLeft {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          /* Ẩn scrollbar (Chrome, Safari, Edge) */
          ::-webkit-scrollbar {
            display: none;
          }

          /* Firefox */
          * {
            scrollbar-width: none;
          }
        `}
      </style>

      <Box mt={5} maxWidth="1200px" mx="auto">
        <Typography
          textAlign="center"
          variant="h6"
          fontWeight={600}
          textTransform="uppercase"
        >
          🌟 Phản hồi học viên sau khoá học AI cùng Suri Technologies 🌟
        </Typography>

        <Box
          display="flex"
          justifyContent="center"
          flexWrap="wrap"
          gap={4}
          mt={4}
        >
          {UserData.map((item, id) => (
            <Box
              key={id}
              sx={{
                width: { xs: "100%", sm: "45%", md: "30%" }, // responsive: 1 -> 2 -> 3 item
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                border: "1px solid #ddd",
                borderRadius: 4,
                padding: 2,
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
              <Typography variant="h4" mb={1}>
                💬
              </Typography>
              <Typography variant="body1" mb={2}>
                {item.description}
              </Typography>
              <Typography variant="subtitle1" fontWeight={600}>
                {item.name}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
      <Box mt={5} display="flex" justifyContent="center">
        <Button
          sx={{
            backgroundColor: "#FFB800",
            color: "#fff",
            fontWeight: "bold",
            px: 4,
            py: 1.5,
            borderRadius: 2,
            animation: `${bounceShake} 1s ease-in-out`,
            "&:hover": {
              backgroundColor: "#00d600",
              animation: `${bounceShake} 01s ease-in-out`,
            },
            animationIterationCount: "infinite",
          }}
        >
          Đăng ký ngay
        </Button>
      </Box>
    </Box>
  );
};

export default Testimonials;
