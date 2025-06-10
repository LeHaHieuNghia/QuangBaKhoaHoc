import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  MenuItem,
  Stack,
  useTheme, // Keep useTheme if you plan to use it for global theme access later
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { SendMail } from "../services/sendMail";
import { LoadingPopup } from "./popup/LoadingPopup";
import { PositionData } from "../data/positionData"; // Keep this for the 'position' field

const jobOptions = PositionData; // Keep this for the 'position' field

const Form = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    position: "", // Retained from your original code
  });

  const [error, setError] = useState({
    name: "",
    email: "",
    phone: "",
    position: "", // Retained from your original code
  });

  const theme = useTheme(); // You can still use the theme if needed for other styles

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => ({ ...prev, [name]: value }));

    switch (name) {
      case "name":
        setError((prev) => ({
          ...prev,
          name: value.length > 30 ? "Họ tên không được quá 30 ký tự" : "",
        }));
        break;
      case "email":
        setError((prev) => ({
          ...prev,
          email: !/\S+@\S+\.\S+/.test(value) ? "Email không hợp lệ" : "",
        }));
        break;
      case "phone":
        setError((prev) => ({
          ...prev,
          phone: !/^[0-9]{10}$/.test(value)
            ? "Số điện thoại phải từ 10 chữ số"
            : "",
        }));
        break;
      case "position": // Retained from your original code
        setError((prev) => ({
          ...prev,
          position: jobOptions.includes(value) ? "" : "Vị trí không hợp lệ",
        }));
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const hasError = Object.values(error).some((err) => err !== "");
    const hasEmptyField = Object.values(data).some((val) => val === ""); // Check all retained fields

    if (hasError || hasEmptyField) {
      alert("Vui lòng điền đầy đủ và đúng thông tin.");
      return;
    }
    setIsLoading(true);
    const result = await SendMail(data);
    setIsLoading(false);
    if (result.success) {
      alert(result?.message);
      clearData();
    } else {
      alert(`${result?.message} ${result?.error}`);
    }
  };

  function clearData() {
    setData({
      name: "",
      phone: "",
      email: "",
      position: "", // Retained from your original code
    });
  }

  return (
    <>
      <LoadingPopup open={isLoading} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          p: 2,
          boxSizing: "border-box",
          backgroundColor: "#D9D1C5", // Background color from image
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            maxWidth: 1000,
            width: "100%",
            borderRadius: "10px",
            overflow: "hidden",
            boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
          }}
        >
          {/* Left Section - Flash Sale */}
          <Box
            sx={{
              flex: 1,
              backgroundColor: "#EBD09C", // Background color from image
              p: { xs: 3, sm: 5 },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontFamily: "serif", // Closest font-family from image
                fontWeight: 700,
                color: "#5C4033", // Text color from image
                mb: 2,
              }}
            >
              VẬY CÒN CHẦN CHỪ GÌ NỮA?
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontFamily: "serif", // Closest font-family from image
                fontWeight: 700,
                color: "#5C4033", // Text color from image
                mb: 4,
              }}
            >
              NHẬN NGAY ƯU ĐÃI NHÉ ANH CHỊ
            </Typography>
            <Box
              sx={{
                backgroundColor: "#E67F6A", // Orange-red color from image
                width: "100%",
                p: { xs: 2, sm: 3 },
                borderRadius: "5px",
                mb: 3,
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  color: "#FFFFFF",
                  fontWeight: "bold",
                  fontSize: { xs: "3rem", sm: "4rem" },
                  textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
                }}
              >
                FLASH SALE
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#FFFFFF",
                  fontWeight: "bold",
                  mt: 1,
                }}
              >
                CHỈ 10 SLOT NHANH NHẤT
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                width: "100%",
                mb: 3,
                alignItems: "flex-end",
              }}
            >
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  variant="body1"
                  sx={{ color: "#5C4033", fontWeight: "bold" }}
                >
                  Giá niêm yết
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    color: "#5C4033",
                    fontWeight: "bold",
                    textDecoration: "line-through",
                    fontSize: { xs: "1.5rem", sm: "2rem" },
                  }}
                >
                  499.000 VNĐ
                </Typography>
              </Box>
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  variant="body1"
                  sx={{ color: "#5C4033", fontWeight: "bold" }}
                >
                  chỉ còn
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    color: "#EE1B24", // Red color from image
                    fontWeight: "bold",
                    fontSize: { xs: "2rem", sm: "3rem" },
                  }}
                >
                  149.000 VNĐ
                </Typography>
              </Box>
            </Box>
            <Typography
              variant="body1"
              sx={{ color: "#5C4033", fontWeight: "bold", mb: 2 }}
            >
              Khuyến mãi sắp kết thúc
            </Typography>
            <Stack
              direction="row"
              spacing={{ xs: 1, sm: 2 }}
              justifyContent="center"
              sx={{ width: "100%" }}
            >
              {/* These are static based on the image; for a real timer, you'd use state */}
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  variant="h4"
                  sx={{
                    color: "#5C4033",
                    fontWeight: "bold",
                    fontSize: { xs: "2rem", sm: "2.5rem" },
                  }}
                >
                  00
                </Typography>
                <Typography variant="caption" sx={{ color: "#5C4033" }}>
                  Ngày
                </Typography>
              </Box>
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  variant="h4"
                  sx={{
                    color: "#5C4033",
                    fontWeight: "bold",
                    fontSize: { xs: "2rem", sm: "2.5rem" },
                  }}
                >
                  10
                </Typography>
                <Typography variant="caption" sx={{ color: "#5C4033" }}>
                  Giờ
                </Typography>
              </Box>
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  variant="h4"
                  sx={{
                    color: "#5C4033",
                    fontWeight: "bold",
                    fontSize: { xs: "2rem", sm: "2.5rem" },
                  }}
                >
                  15
                </Typography>
                <Typography variant="caption" sx={{ color: "#5C4033" }}>
                  Phút
                </Typography>
              </Box>
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  variant="h4"
                  sx={{
                    color: "#5C4033",
                    fontWeight: "bold",
                    fontSize: { xs: "2rem", sm: "2.5rem" },
                  }}
                >
                  41
                </Typography>
                <Typography variant="caption" sx={{ color: "#5C4033" }}>
                  Giây
                </Typography>
              </Box>
            </Stack>
          </Box>

          {/* Right Section - Form */}
          <Box
            sx={{
              flex: 1,
              backgroundColor: "#B09680", // Brownish background from image
              p: { xs: 3, sm: 5 },
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontFamily: "serif",
                fontWeight: 700,
                color: "#FFFFFF",
                mb: 3,
                textAlign: "center",
              }}
            >
              ĐĂNG KÝ MUA NGAY
            </Typography>
            <form onSubmit={handleSubmit} style={{ width: "100%" }}>
              <Stack spacing={2.5}>
                {/* Họ và tên */}
                <TextField
                  label="Họ và tên"
                  name="name"
                  required
                  fullWidth
                  value={data.name}
                  onChange={handleChange}
                  error={!!error.name}
                  helperText={error.name}
                  InputLabelProps={{
                    style: { color: "#5C4033" }, // Label color
                  }}
                  InputProps={{
                    style: { backgroundColor: "#FFFFFF", borderRadius: "5px" }, // Input background
                  }}
                />
                {/* Số điện thoại */}
                <TextField
                  label="Số điện thoại"
                  name="phone"
                  type="tel"
                  required
                  fullWidth
                  value={data.phone}
                  onChange={handleChange}
                  error={!!error.phone}
                  helperText={error.phone}
                  InputLabelProps={{
                    style: { color: "#5C4033" },
                  }}
                  InputProps={{
                    style: { backgroundColor: "#FFFFFF", borderRadius: "5px" },
                  }}
                />
                {/* Email */}
                <TextField
                  label="Email"
                  name="email"
                  type="email"
                  required
                  fullWidth
                  value={data.email}
                  onChange={handleChange}
                  error={!!error.email}
                  helperText={error.email}
                  InputLabelProps={{
                    style: { color: "#5C4033" },
                  }}
                  InputProps={{
                    style: { backgroundColor: "#FFFFFF", borderRadius: "5px" },
                  }}
                />
                {/* Chọn vị trí công việc (original field) */}
                <TextField
                  select
                  label="Chọn vị trí công việc"
                  name="position"
                  required
                  fullWidth
                  value={data.position}
                  onChange={handleChange}
                  error={!!error.position}
                  helperText={error.position}
                  InputLabelProps={{
                    style: { color: "#5C4033" },
                  }}
                  InputProps={{
                    style: { backgroundColor: "#FFFFFF", borderRadius: "5px" },
                  }}
                >
                  {jobOptions.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
              </Stack>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                endIcon={<CheckCircleOutlineIcon />}
                sx={{
                  mt: 4,
                  py: 1.5,
                  fontSize: "1.1rem",
                  fontWeight: "bold",
                  backgroundColor: "#5C4033", // Dark brown button color
                  color: "#FFFFFF",
                  "&:hover": {
                    backgroundColor: "#4A352A", // Darker brown on hover
                  },
                  borderRadius: "5px",
                }}
              >
                Đăng ký ngay
              </Button>
            </form>
            {/* Removed QR code and payment info section */}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Form;
