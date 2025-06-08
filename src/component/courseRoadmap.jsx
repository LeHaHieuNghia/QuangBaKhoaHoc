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
            <Timeline
              position="right"
              sx={{
                // Trên mobile, đặt timeline về bên trái và giảm padding
                [`@media (max-width: 768px)`]: {
                  position: "left",
                  padding: 0,
                  margin: 0,
                },
              }}
            >
              {roadmapData.map((item, index) => (
                <TimelineItem
                  key={index}
                  sx={{
                    // Trên mobile, giảm khoảng cách giữa các item
                    [`@media (max-width: 768px)`]: {
                      minHeight: "auto",
                      "&::before": {
                        display: "none", // Ẩn line connector trên mobile nếu cần
                      },
                    },
                  }}
                >
                  <TimelineSeparator>
                    <TimelineDot
                      sx={{
                        bgcolor: "#FFB800",
                        // Trên mobile, làm nhỏ dot lại
                        width: { xs: 12, md: 16 },
                        height: { xs: 12, md: 16 },
                      }}
                    />
                    {index < roadmapData.length - 1 && (
                      <TimelineConnector sx={{ bgcolor: "#FFB800" }} />
                    )}
                  </TimelineSeparator>
                  <TimelineContent
                    sx={{
                      // Trên mobile, giảm padding bên trái
                      paddingLeft: { xs: 1, md: 2 },
                      paddingRight: { xs: 0, md: 2 },
                    }}
                  >
                    <Paper
                      elevation={3}
                      sx={{
                        // Sửa lại padding - giá trị 12 quá lớn cho mobile
                        p: { xs: 2, md: 3 },
                        mb: { xs: 1.5, md: 2 },
                        transition: "transform 0.3s ease-in-out",
                        "&:hover": {
                          transform: {
                            xs: "translateX(4px)",
                            md: "translateX(8px)",
                          },
                          boxShadow: 4,
                        },
                        // Trên mobile, giảm border radius
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
                          // Sửa lại margin bottom - giá trị 6 quá lớn
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
                      <Typography
                        variant="caption"
                        sx={{
                          color: "#FFB800",
                          fontWeight: "bold",
                          display: "block",
                          fontSize: { xs: "0.75rem", md: "0.875rem" },
                        }}
                      >
                        {/* Thời lượng: {item.duration} */}
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
