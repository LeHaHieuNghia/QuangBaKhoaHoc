import { Grid, Stack, useTheme, Box } from "@mui/material";
import Header from "./component/header.jsx";
import HeroSection from "./component/heroSection.jsx";
import Benefit from "./component/benefitsOfLearning.jsx";
import CourseRoadmap from "./component/courseRoadmap.jsx";
import Certificate from "./component/certificate.jsx";
import Faq from "./component/faq.jsx";
import Form from "./component/registrationForm.jsx";
import Testimonials from "./component/testimonials.jsx";
import Feedback from "./component/feedback.jsx";
import Footer from "./component/footer.jsx";

export const App = () => {
  const theme = useTheme();
  return (
    <Grid justifyContent="center" margin={0}>
      <Grid item xs={6} sm={10} md={8} lg={6}>
        <Stack
          direction="column"
          sx={{ background: theme.palette.grey[100], width: "100%" }}
        >
          <Header />

          <Box id="intro">
            <HeroSection />
          </Box>

          <Box id="content">
            <Benefit />
          </Box>

          <Box>
            <CourseRoadmap />
          </Box>

          <Box id="certificate">
            <Certificate />
          </Box>

          <Box id="instructor">
            <Testimonials />
          </Box>

          <Box>
            <Feedback />
          </Box>

          <Box id="register">
            <Form />
          </Box>

          <Box id="faq">
            <Faq />
          </Box>

          <Footer />
        </Stack>
      </Grid>
    </Grid>
  );
};
