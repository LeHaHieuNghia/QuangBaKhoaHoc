import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  Container,
  Grid,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../assets/logoSuri.png";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
    }
  };

  // Lắng nghe cuộn trang
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const pages = [
    { name: "Giới thiệu", id: "intro" },
    { name: "Nội dung học", id: "content" },
    { name: "Giảng viên", id: "instructor" },
    { name: "Chứng chỉ", id: "certificate" },
    { name: "Câu hỏi thường gặp", id: "faq" },
    { name: "Đăng ký", id: "register" },
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <List>
        {pages.map((page) => (
          <ListItem key={page.name} sx={{ justifyContent: "center" }}>
            <Button
              onClick={() => scrollToSection(page.id)}
              sx={{
                fontSize: { xs: "1rem", sm: "0.9375rem" },
                fontWeight: "bold",
                color: page.name === "Đăng ký" ? "#FFB800" : "#0E2148",
                cursor: "pointer",
                width: "100%",
                py: 1.5,
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "rgba(255, 184, 0, 0.1)",
                  transform: "translateY(-2px)",
                },
              }}
            >
              {page.name}
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box
      sx={{
        width: "100%",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1000,
        boxShadow: isScrolled ? "0 2px 6px rgba(0,0,0,0.15)" : "none",
        transition: "all 0.3s linear",
        backgroundColor: isScrolled ? "white" : "transparent",
        backdropFilter: isScrolled ? "blur(8px)" : "none",
      }}
    >
      <Container maxWidth={false} sx={{ px: { xs: 2, sm: 4, md: 1 } }}>
        <Grid
          container
          display={"flex"}
          justifyContent={"space-between"}
          // spacing={15}
          sx={{
            margin: 0,
            padding: { xs: 1, sm: 2 },
            minHeight: { xs: "60px", sm: "80px" },
            alignItems: "center",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              display: { sm: "none" },
              position: "absolute",
              right: 16,
              top: "40px",
              transform: "translateY(-50%)",
              zIndex: 1000,
            }}
          >
            <MenuIcon />
          </IconButton>

          <Grid
            item
            xs={6}
            sm={2}
            sx={{
              display: "flex",
              justifyContent: { xs: "flex-start", sm: "flex-start" },
            }}
          >
            <Box
              component={"img"}
              ml={2}
              src={Logo}
              sx={{
                width: { xs: 60, sm: 80 },
                transform: "scale(1.5)",
                transformOrigin: "center",
              }}
            />
          </Grid>

          <Grid item xs={6} sm={5}>
            <Box
              sx={{
                display: { xs: "none", sm: "flex" },
                justifyContent: "flex-end",
                alignItems: "center",
                height: "100%",
                gap: { sm: 1, xs: 1, lg: 1, xl: 1, md: 1 },
              }}
            >
              {pages.map((page) => (
                <Button
                  justifyContent="center"
                  key={page.name}
                  onClick={() => scrollToSection(page.id)}
                  sx={{
                    fontSize: { sm: "1rem", md: "1.4rem" },
                    fontWeight: "bold",
                    color: page.name === "Đăng ký" ? "#FFB800" : "#0E2148",
                    cursor: "pointer",
                    px: { sm: 1, md: 2 },
                    whiteSpace: "nowrap",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: "rgba(255, 184, 0, 0.1)",
                      borderRadius: "4px",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  {page.name}
                </Button>
              ))}
            </Box>
          </Grid>

          <Drawer
            variant="temporary"
            anchor="right"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: 240,
                backgroundColor: "white",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Grid>
      </Container>
    </Box>
  );
};

export default Header;
