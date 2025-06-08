import React from "react";
import { FaqData } from "../data/faqData";
import { Box, Card, Typography } from "@mui/material";

const Faq = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center", // Nếu muốn căn giữa theo chiều dọc nữa
        width: "100%",
        py: 2, // padding top/bottom để không bị dính sát
      }}
    >
      <Card
        sx={{
          p: 5,
          backgroundColor: "#0E2148",
          color: "#d9d9d9",
          width: "100%",
          maxWidth: 720,
          fontFamily: "'Roboto', sans-serif",
          borderRadius: "30px",
        }}
      >
        <Typography variant="h5" fontWeight={900} mb={2} textAlign="center">
          FAQ - CÂU HỎI THƯỜNG GẶP
        </Typography>

        {FaqData.map((item) => (
          <Box
            key={item.id}
            sx={{
              display: "flex",
              alignItems: "flex-start",
              gap: 2,
              mb: 3,
            }}
          >
            <Box
              sx={{
                width: "3rem",
                height: "3rem",
                backgroundColor: "white",
                borderRadius: "8px",
                fontWeight: "bold",
                fontSize: "2rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "monospace",
                boxShadow: 1,
                flexShrink: 0,
                position: "relative",
                overflow: "hidden",
                "&::after": {
                  content: `"${item.id}"`,
                  position: "absolute",
                  color: "gray",
                },
              }}
            />

            <Box>
              <Typography variant="subtitle1" fontWeight={600}>
                {item.title}
              </Typography>
              {item.description.split("\n").map((line, idx) => (
                <Typography
                  key={idx}
                  variant="body2"
                  sx={{ mt: 0.5, lineHeight: 1.6 }}
                >
                  {line}
                </Typography>
              ))}
            </Box>
          </Box>
        ))}
      </Card>
    </Box>
  );
};

export default Faq;
