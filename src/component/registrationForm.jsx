import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  MenuItem,
  Stack,
  useTheme,
  keyframes, // Keep useTheme if you plan to use it for global theme access later
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

  // Khai báo animation shake
  const shake = keyframes`
  0% { transform: translateX(0); }
  20% { transform: translateX(-5px); }
  40% { transform: translateX(5px); }
  60% { transform: translateX(-5px); }
  80% { transform: translateX(5px); }
  100% { transform: translateX(0); }
`;

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
          }}
        >
          <Box
            sx={{
              flex: 1,
              p: { xs: 3, sm: 5 },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Box
              sx={{
                animation: `${shake} 0.9s ease-in-out infinite`,
                display: "inline-block",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  color: "#5C4033",
                  mb: 2,
                }}
                fontSize={{ xs: "1.2rem", md: "1.6rem" }}
              >
                VẬY CÒN CHẦN CHỪ GÌ NỮA?
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  color: "#5C4033",
                  mb: 4,
                }}
              >
                NHẬN NGAY ƯU ĐÃI NHÉ
              </Typography>
            </Box>
            <Box
              sx={{
                backgroundColor: "#FFB800",
                width: "100%",
                p: { xs: 2, sm: 3 },
                borderRadius: "5px",
                mb: 3,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Box backgroundColor="red" width="30%" height="100%">
                ầ
              </Box>
              <Box backgroundColor="blue" width="70%" height="100%">
                ádasd
              </Box>
            </Box>
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
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Form;
