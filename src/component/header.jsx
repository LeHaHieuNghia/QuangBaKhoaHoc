import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";

import logo from "../assets/logoSuri.png";
const pages = [
  "Giới thiệu",
  "Nội dung học",
  "Giảng viên",
  "Chứng chỉ",
  "Câu hỏi thường gặp",
  "Đăng ký",
];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      sx={{
        margin: 0,
        backgroundColor: "#0E2148",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* display logo company */}
          <Box component={"img"} src={logo} alt="Logo" sx={{ width: 100 }} />
          <Box sx={{ mr: 1, justifyContent: "center" }}>
            <Typography
              sx={{
                flexGrow: 1,
                justifyContent: "center",
                display: { xs: "none", md: "flex" },
                alignItems: "center",
              }}
            >
              Khai Phá Sức Mạnh Trí Tuệ Nhân Tạo
            </Typography>
          </Box>

          {/* display infomation on the mobile */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "flex-end",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                "& .MuiPaper-root": {
                  backgroundColor: "#0E2148",
                  width: "20%",
                },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    justifyContent: "center",
                    py: 1,
                    backgroundColor: "#0E2148",
                    "&:hover": {
                      backgroundColor: "#132c5c",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      color: page === "Đăng ký" ? "#D5451B" : "white",
                      fontWeight: page === "Đăng ký" ? "bold" : "normal",
                      fontSize: page === "Đăng ký" ? "1.1rem" : "1rem",
                      letterSpacing: 1,
                      width: "100%",
                      textAlign: "center",
                      textTransform: "uppercase",
                    }}
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* display infomation on the website */}
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "center",
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 3,
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: page == "Đăng ký" ? "#D5451B" : "white",
                  display: "block",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
