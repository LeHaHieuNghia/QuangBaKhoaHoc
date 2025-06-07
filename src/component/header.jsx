import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  Container,
} from "@mui/material";
import { Grid } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../assets/logoSuri.png"; // Assuming you have a logo image

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const pages = [
    "Giới thiệu",
    "Nội dung học",
    "Giảng viên",
    "Chứng chỉ",
    "Câu hỏi thường gặp",
    "Đăng ký",
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <List>
        {pages.map((page) => (
          <ListItem key={page} sx={{ justifyContent: "center" }}>
            <Button
              sx={{
                fontSize: { xs: "1rem", sm: "0.9375rem" },
                fontWeight: "bold",
                color: page === "Đăng ký" ? "#FFB800" : "#0E2148",
                cursor: "pointer",
                width: "100%",
                py: 1.5,
              }}
            >
              {page}
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ backgroundColor: "white", width: "100%" }}>
      <Container maxWidth={false} sx={{ px: { xs: 2, sm: 4, md: 6 } }}>
        <Grid
          container
          sx={{
            margin: 0,
            padding: { xs: 1, sm: 2 },
            minHeight: { xs: "60px", sm: "80px" },
            alignItems: "center",
          }}
        >
          {/* Mobile menu button */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              display: { sm: "none" },
              position: "absolute",
              right: 16,
              top: "7%",
              transform: "translateY(-50%)",
              zIndex: 1000,
            }}
          >
            <MenuIcon />
          </IconButton>

          {/* Logo */}
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
              src={Logo}
              sx={{
                width: { xs: 60, sm: 80 },
                transform: "scale(1.5)",
                transformOrigin: "center",
              }}
            />
          </Grid>

          {/* CTA highlight */}
          <Grid
            item
            xs={12}
            sm={5}
            sx={{
              display: { xs: "none", sm: "flex" },
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              pl: { sm: 4, md: 6 },
            }}
          >
            <Typography
              color="#FFB800"
              sx={{
                fontSize: { sm: "0.875rem", md: "1.1875rem" },
                fontWeight: "bold",
                lineHeight: 1.2,
                whiteSpace: "nowrap",
              }}
            >
              Đăng ký học ngay – Chỉ còn 3,599,000đ!
            </Typography>
          </Grid>

          {/* Desktop menu */}
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
                  key={page}
                  sx={{
                    fontSize: { sm: "0.875rem", md: "0.9375rem" },
                    fontWeight: "bold",
                    color: page === "Đăng ký" ? "#FFB800" : "#0E2148",
                    cursor: "pointer",
                    px: { sm: 1, md: 2 },
                    whiteSpace: "nowrap",
                    "&:hover": {
                      backgroundColor: "rgba(255, 184, 0, 0.1)",
                      borderRadius: "4px",
                    },
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Grid>

          {/* Mobile drawer */}
          <Drawer
            variant="temporary"
            anchor="right"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
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
