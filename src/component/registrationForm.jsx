import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  MenuItem,
  Grid, // Import Grid component
  Stack,
  useTheme,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { SendMail } from "../services/sendMail";
import { LoadingPopup } from "./popup/LoadingPopup";
import { PositionData } from "../data/positionData";

const jobOptions = PositionData;

const Form = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    position: "",
  });

  const [error, setError] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
  });

  const theme = useTheme();

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
      case "position":
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
    const hasEmptyField = Object.values(data).some((val) => val === "");

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
      position: "",
    });
  }

  return (
    <>
      <LoadingPopup open={isLoading} />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          pt: 4,
          pb: 4,
        }}
      >
        <Box
          sx={{
            maxWidth: 740,
            width: "100%",
            p: { xs: 2, sm: 4 },
            borderRadius: 3,
            boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
            background: "linear-gradient(145deg, #ffffff, #f0f0f0)",
          }}
        >
          <Typography
            variant="h4"
            fontWeight={700}
            mb={1}
            textAlign="center"
            sx={{
              background:
                "linear-gradient(270deg, #ff0000, #00ff00, #0000ff, #ff0000)",
              backgroundSize: "600% 600%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animation: "rainbow 6s ease infinite",
              "@keyframes rainbow": {
                "0%": { backgroundPosition: "0% 50%" },
                "50%": { backgroundPosition: "100% 50%" },
                "100%": { backgroundPosition: "0% 50%" },
              },
            }}
          >
            Khám Phá Cơ Hội Mới!
          </Typography>
          <Typography
            variant="h6"
            mb={3}
            textAlign="center"
            color={theme.palette.text.secondary}
          >
            Đăng ký ngay để nhận ưu đãi <strong>ĐẶC BIỆT 50%</strong> chỉ trong
            hôm nay!
          </Typography>
          <Box display="flex" justifyContent="center">
            <form onSubmit={handleSubmit}>
              <Grid container spacing={4}>
                {/* Bên trái: Họ tên, email, điện thoại */}
                <Grid item xs={12} md={6}>
                  <Stack spacing={3}>
                    <TextField
                      label="Họ và tên của bạn"
                      name="name"
                      required
                      fullWidth
                      value={data.name}
                      onChange={handleChange}
                      error={!!error.name}
                      helperText={error.name}
                    />
                    <TextField
                      label="Email của bạn"
                      name="email"
                      type="email"
                      required
                      fullWidth
                      value={data.email}
                      onChange={handleChange}
                      error={!!error.email}
                      helperText={error.email}
                    />
                    <TextField
                      label="Số điện thoại liên hệ"
                      name="phone"
                      type="tel"
                      required
                      fullWidth
                      value={data.phone}
                      onChange={handleChange}
                      error={!!error.phone}
                      helperText={error.phone}
                    />
                  </Stack>
                </Grid>

                {/* Bên phải: chọn job + submit */}
                <Grid item xs={12} md={6}>
                  <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                    height="100%"
                  >
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
                    >
                      {jobOptions.map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </TextField>

                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      fullWidth
                      endIcon={<CheckCircleOutlineIcon />}
                      sx={{
                        py: 1.5,
                        fontSize: "1.1rem",
                        fontWeight: "bold",
                        bgcolor: theme.palette.success.main,
                        mt: 4,
                        "&:hover": {
                          bgcolor: theme.palette.success.dark,
                        },
                        borderRadius: 2,
                      }}
                    >
                      Đăng ký ngay
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Form;
