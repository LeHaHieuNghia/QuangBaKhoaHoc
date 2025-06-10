import React from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Background1 from "../assets/Background1.jpg";

const roadmapData = [
  {
    title: "Tư duy nền tảng về AI – Lý do AI thay đổi cuộc chơi",
    description:
      "Tìm hiểu về lịch sử, khái niệm và ứng dụng của AI trong thực tế",
    // duration: "2 tuần",
  },
  {
    title: "Làm chủ ChatGPT trong công việc",
    description: "Làm quen với ChatGPT, Midjourney và các công cụ AI phổ biến",
    // duration: "3 tuần",
  },
  {
    title: "AI cho Marketing, Content, HR, Sales",
    description: "Học cách tích hợp AI vào quy trình làm việc hàng ngày",
    // duration: "4 tuần",
  },
  {
    title: "Tự động hóa công việc với công cụ AI miễn phí",
    description: "Áp dụng kiến thức vào các dự án thực tế và nhận chứng chỉ",
    // duration: "3 tuần",
  },
  {
    title: "Dự án cuối khóa + Nhận chứng chỉ OpenAI Foundation Knowledge",
    description: "Áp dụng kiến thức vào các dự án thực tế và nhận chứng chỉ",
    // duration: "3 tuần",
  },
];

const CourseRoadmap = () => {
  return (
    <Box
      sx={{
        py: { xs: 4, md: 8 },
        position: "relative",
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${Background1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "linear-gradient(45deg, rgba(14, 33, 72, 0.9) 0%, rgba(0, 0, 0, 0.8) 100%)",
          zIndex: 1,
        },
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h3"
          align="center"
          sx={{
            mb: { xs: 4, md: 6 },
            fontSize: { xs: "1.75rem", sm: "2.25rem", md: "3rem" },
            fontWeight: "bold",
            color: "#FFB800",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
          }}
        >
          Lộ trình khóa học
        </Typography>

        <Grid container justifyContent="center">
          <Grid item xs={12} md={8}>
            <Timeline
              position="alternate"
              sx={{
                [`@media (max-width: 768px)`]: {
                  padding: 0,
                  margin: 0,
                },
              }}
            >
              {roadmapData.map((item, index) => (
                <TimelineItem
                  key={index}
                  sx={{
                    [`@media (max-width: 768px)`]: {
                      minHeight: "auto",
                    },
                  }}
                >
                  <TimelineSeparator>
                    <TimelineDot
                      sx={{
                        bgcolor: "#FFB800",
                        width: { xs: 12, md: 16 },
                        height: { xs: 12, md: 16 },
                        boxShadow: "0 0 10px rgba(255, 184, 0, 0.5)",
                      }}
                    />
                    {index < roadmapData.length - 1 && (
                      <TimelineConnector
                        sx={{
                          bgcolor: "#FFB800",
                          opacity: 0.5,
                        }}
                      />
                    )}
                  </TimelineSeparator>
                  <TimelineContent
                    sx={{
                      paddingLeft: { xs: 1, md: 2 },
                      paddingRight: { xs: 0, md: 2 },
                    }}
                  >
                    <Paper
                      elevation={3}
                      sx={{
                        p: { xs: 2, md: 3 },
                        mb: { xs: 1.5, md: 2 },
                        transition: "all 0.3s ease-in-out",
                        background: "rgba(255, 255, 255, 0.95)",
                        backdropFilter: "blur(10px)",
                        "&:hover": {
                          transform: {
                            xs: "translateX(4px)",
                            md: "translateX(8px)",
                          },
                          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                          background: "#fff",
                        },
                        borderRadius: { xs: 2, md: 3 },
                      }}
                    >
                      <Typography
                        variant="h6"
                        component="h3"
                        sx={{
                          fontWeight: "bold",
                          color: "#0E2148",
                          fontSize: { xs: "1rem", md: "1.25rem" },
                          mb: { xs: 1, md: 1.5 },
                          lineHeight: { xs: 1.3, md: 1.4 },
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          fontSize: { xs: "0.875rem", md: "1rem" },
                          mb: { xs: 0.5, md: 1 },
                          lineHeight: { xs: 1.4, md: 1.5 },
                        }}
                      >
                        {item.description}
                      </Typography>
                    </Paper>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CourseRoadmap;
