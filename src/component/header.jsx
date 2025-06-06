import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Grid } from "@mui/material";
import Logo from "../assets/logoSuri.png"; // Assuming you have a logo image
const Header = () => {
  const pages = [
    "Giới thiệu",
    "Nội dung học",
    "Giảng viên",
    "Chứng chỉ",
    "Câu hỏi thường gặp",
    "Đăng ký",
  ];

  return (
    <Grid
      container
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      sx={{ margin: 0, padding: 0, backgroundColor: "#0E2148" }}
    >
      <Grid size={2} sx={{ display: "flex", justifyContent: "center" }}>
        <Box component={"img"} src={Logo} sx={{ width: 100 }} />
      </Grid>
      <Grid
        size={3}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Typography color="#FFB800">
          Đăng ký học ngay – Chỉ còn 3,599,000đ!
        </Typography>
      </Grid>
      <Grid size={7}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            height: "100%",
          }}
        >
          {pages.map((page) => (
            <Button
              key={page}
              sx={{
                fontWeight: "bold",
                color: page === "Đăng ký" ? "#FFB800" : "white",
                cursor: "pointer",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              {page}
            </Button>
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};

export default Header;
