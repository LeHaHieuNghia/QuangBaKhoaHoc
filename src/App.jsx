import { Grid, Stack } from "@mui/material";
import Header from "./component/header.jsx";
import HeroSection from "./component/heroSection.jsx";
import Benefit from "./component/benefitsOfLearning.jsx";
import CourseRoadmap from "./component/courseRoadmap.jsx";
import Certificate from "./component/certificate.jsx";
import Faq from "./component/faq.jsx";
import Form from "./component/registrationForm.jsx";
import Testimonials from "./component/testimonials.jsx";

export const App = () => {
  return (
    <Grid justifyContent="center" margin={0}>
      <Grid item xs={12} sm={10} md={8} lg={6}>
        <Stack
          spacing={{ xs: 1, sm: 2 }}
          direction="column"
          useFlexGap
          sx={{ width: "100%" }}
        >
          <Header />
          <HeroSection />
          <Benefit />
          <CourseRoadmap />
          <Certificate />
          <Testimonials />
          <Faq />
          <Form />
        </Stack>
      </Grid>
    </Grid>
  );
};
