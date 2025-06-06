import { Box, Grid, Stack } from "@mui/material";
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
    <Stack
      spacing={{ xs: 1, sm: 2 }}
      direction="column"
      useFlexGap
      sx={{ flexWrap: "wrap" }}
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
  );
};
