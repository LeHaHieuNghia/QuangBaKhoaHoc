// Footer.js
import React from "react";
import { Box, Container, Grid, Typography, Link } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import logoSuri from "../assets/logoSuri.png";
import { contactInfo, officeLocations } from "../data/footer";

const Footer = () => {
  // Mapping function để convert string icon thành component
  const getIconComponent = (iconType) => {
    switch (iconType) {
      case "phone":
        return PhoneIcon;
      case "email":
        return EmailIcon;
      default:
        return EmailIcon;
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: "#0E2148",
        color: "white",
        py: { xs: 4, md: 6 },
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "4px",
          background: "linear-gradient(90deg, #FFB800 0%, #FFD700 100%)",
        },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Logo Section */}
          <Grid item xs={12} md={4}>
            <Box
              component="img"
              src={logoSuri}
              alt="SuriTechs Logo"
              sx={{
                transform: "scale(1)",
                color: "red",
                height: "150px",
              }}
            />
            <Typography
              width={400}
              align="justify"
              variant="body2"
              sx={{ opacity: 0.8, mb: 2 }}
            >
              It's our flexible and holistic approach to driving transformation
              within your business. By leveraging cutting-edge technology,
              guided by industry expertise and an agile work style, our team has
              innovative solutions for your challenges.{" "}
            </Typography>
          </Grid>

          {/* Contact Information */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              sx={{
                mb: 2,
                fontWeight: 600,
                color: "#FFB800",
                fontSize: "1.1rem",
              }}
            >
              Contact Information
            </Typography>
            {contactInfo.map((contact, index) => {
              const IconComponent = getIconComponent(contact.icon);
              return (
                <Box
                  key={contact.id}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mb: index === contactInfo.length - 1 ? 0 : 1.5,
                  }}
                >
                  <IconComponent sx={{ mr: 1, color: "#FFB800" }} />
                  <Typography variant="body2">
                    <Link
                      href={contact.href}
                      sx={{
                        color: "white",
                        textDecoration: "none",
                        "&:hover": { color: "#FFB800" },
                      }}
                    >
                      {contact.text}
                    </Link>
                  </Typography>
                </Box>
              );
            })}
          </Grid>

          {/* Office Locations */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              sx={{
                mb: 2,
                fontWeight: 600,
                color: "#FFB800",
                fontSize: "1.1rem",
              }}
            >
              Our Offices
            </Typography>
            {officeLocations.map((office, index) => (
              <Box
                key={office.id}
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  mb: index === officeLocations.length - 1 ? 0 : 1.5,
                }}
              >
                <LocationOnIcon sx={{ mr: 1, color: "#FFB800", mt: 0.5 }} />
                <Typography variant="body2">{office.address}</Typography>
              </Box>
            ))}
          </Grid>
        </Grid>

        {/* Copyright */}
        <Box
          sx={{
            mt: 4,
            pt: 2,
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            textAlign: "center",
          }}
        >
          <Typography variant="body2" sx={{ opacity: 0.7 }}>
            © {new Date().getFullYear()} SuriTechs
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
