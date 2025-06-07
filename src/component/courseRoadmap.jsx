import React from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

const roadmapData = [
  {
    title: "Tổng quan về AI",
    description:
      "Tìm hiểu về lịch sử, khái niệm và ứng dụng của AI trong thực tế",
    duration: "2 tuần",
  },
  {
    title: "Công cụ AI cơ bản",
    description: "Làm quen với ChatGPT, Midjourney và các công cụ AI phổ biến",
    duration: "3 tuần",
  },
  {
    title: "Ứng dụng AI trong công việc",
    description: "Học cách tích hợp AI vào quy trình làm việc hàng ngày",
    duration: "4 tuần",
  },
  {
    title: "Dự án thực tế",
    description: "Áp dụng kiến thức vào các dự án thực tế và nhận chứng chỉ",
    duration: "3 tuần",
  },
];

const CourseRoadmap = () => {
  return (
    <Box sx={{ py: { xs: 4, md: 8 }, backgroundColor: "#fff" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h2"
          align="center"
          sx={{
            mb: { xs: 4, md: 6 },
            fontSize: { xs: "1.75rem", sm: "2.25rem", md: "2.5rem" },
            fontWeight: "bold",
            color: "#0E2148",
          }}
        >
          Lộ trình khóa học
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Timeline position="right">
              {roadmapData.map((item, index) => (
                <TimelineItem key={index}>
                  <TimelineSeparator>
                    <TimelineDot sx={{ bgcolor: "#FFB800" }} />
                    {index < roadmapData.length - 1 && (
                      <TimelineConnector sx={{ bgcolor: "#FFB800" }} />
                    )}
                  </TimelineSeparator>
                  <TimelineContent>
                    <Paper
                      elevation={3}
                      sx={{
                        p: { xs: 2, md: 3 },
                        mb: 2,
                        transition: "transform 0.3s ease-in-out",
                        "&:hover": {
                          transform: "translateX(8px)",
                          boxShadow: 4,
                        },
                      }}
                    >
                      <Typography
                        variant="h6"
                        component="h3"
                        sx={{
                          fontWeight: "bold",
                          color: "#0E2148",
                          fontSize: { xs: "1.1rem", md: "1.25rem" },
                          mb: 1,
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          fontSize: { xs: "0.875rem", md: "1rem" },
                          mb: 1,
                        }}
                      >
                        {item.description}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{
                          color: "#FFB800",
                          fontWeight: "bold",
                          display: "block",
                        }}
                      >
                        Thời lượng: {item.duration}
                      </Typography>
                    </Paper>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                p: { xs: 2, md: 4 },
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  color: "#0E2148",
                  mb: 3,
                  fontSize: { xs: "1.25rem", md: "1.5rem" },
                }}
              >
                Tại sao nên chọn lộ trình này?
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "text.secondary",
                  mb: 2,
                  fontSize: { xs: "0.875rem", md: "1rem" },
                  lineHeight: 1.6,
                }}
              >
                • Lộ trình được thiết kế bởi các chuyên gia AI hàng đầu
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "text.secondary",
                  mb: 2,
                  fontSize: { xs: "0.875rem", md: "1rem" },
                  lineHeight: 1.6,
                }}
              >
                • Nội dung cập nhật liên tục theo xu hướng mới nhất
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "text.secondary",
                  mb: 2,
                  fontSize: { xs: "0.875rem", md: "1rem" },
                  lineHeight: 1.6,
                }}
              >
                • Thực hành trực tiếp với các dự án thực tế
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "text.secondary",
                  fontSize: { xs: "0.875rem", md: "1rem" },
                  lineHeight: 1.6,
                }}
              >
                • Hỗ trợ 1-1 từ giảng viên trong suốt khóa học
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CourseRoadmap;
