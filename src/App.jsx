import { Grid, Stack, useTheme, Box } from "@mui/material";
import { useEffect, useRef, useState } from "react";
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
import CoreOfValue from "./component/coreOfValue.jsx";
import Educator from "./component/educator.jsx";

// Component wrapper để handle scroll animation
const ScrollAnimationBox = ({ children, id, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true);
            }, delay);
          }
        });
      },
      {
        threshold: 0.1, // Hiển thị khi 10% element vào viewport
        rootMargin: "0px 0px -50px 0px", // Trigger trước khi element hoàn toàn vào view
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [delay]);

  return (
    <Box
      ref={elementRef}
      id={id}
      sx={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(50px)",
        transition: "all 0.8s ease-out",
        willChange: "opacity, transform",
      }}
    >
      {children}
    </Box>
  );
};

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

          <ScrollAnimationBox id="intro">
            <HeroSection />
          </ScrollAnimationBox>

          <ScrollAnimationBox id="coreOfValue" delay={100}>
            <CoreOfValue />
          </ScrollAnimationBox>

          <ScrollAnimationBox id="content" delay={200}>
            <Benefit />
          </ScrollAnimationBox>

          <ScrollAnimationBox delay={300}>
            <CourseRoadmap />
          </ScrollAnimationBox>

          <ScrollAnimationBox id="educator" delay={100}>
            <Educator />
          </ScrollAnimationBox>

          <ScrollAnimationBox id="certificate" delay={200}>
            <Certificate />
          </ScrollAnimationBox>

          <ScrollAnimationBox id="instructor" delay={300}>
            <Testimonials />
          </ScrollAnimationBox>

          <ScrollAnimationBox delay={100}>
            <Feedback />
          </ScrollAnimationBox>

          <ScrollAnimationBox id="register" delay={200}>
            <Form />
          </ScrollAnimationBox>

          <ScrollAnimationBox id="faq" delay={300}>
            <Faq />
          </ScrollAnimationBox>

          <Footer />
        </Stack>
      </Grid>
    </Grid>
  );
};
