import { Box, Typography } from "@mui/material";
import React from "react";
import certificate from "../assets/certificate.jfif";

const Certificate = () => {
  return (
    <Box
      mt={5}
      display="flex"
      flexDirection="column"
      alignItems="center"
      textAlign="center"
    >
      <Box
        component="img"
        src={certificate}
        alt="Chứng nhận kiến thức nền tảng về AI – Theo chuẩn kiểm định kỹ thuật của OpenAI Foundation"
        sx={{
          width: {
            xs: "90%", // nhỏ hơn ở thiết bị di động
            sm: "80%",
            md: "70%",
          },
          borderRadius: 4,
          boxShadow: 3,
          mb: 2,
        }}
      />

      <Typography
        variant="body1"
        sx={{
          maxWidth: "800px",
          fontSize: "1rem",
          lineHeight: 1.6,
          color: "text.primary",
          fontStyle: "italic",
        }}
      >
        Chứng nhận kiến thức nền tảng về AI – Theo chuẩn kiểm định kỹ thuật của
        OpenAI Foundation
      </Typography>
    </Box>
  );
};

export default Certificate;
