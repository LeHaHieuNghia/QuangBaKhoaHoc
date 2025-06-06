import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  MenuItem,
  Stack,
} from "@mui/material";

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

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Cập nhật giá trị
    setData((prev) => ({ ...prev, [name]: value }));

    // Validation theo từng field
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
    (data.name = ""),
      (data.phone = ""),
      (data.email = ""),
      (data.position = "");
  }
  return (
    <>
      <LoadingPopup open={isLoading} />
      <Box display="flex" justifyContent="center" py={4}>
        <Card
          sx={{ maxWidth: 500, width: "100%", boxShadow: 3, borderRadius: 2 }}
        >
          <CardContent>
            <Typography variant="h5" fontWeight={600} mb={2} textAlign="center">
              Đăng ký ngay hôm nay <br />
              Nhận ưu đãi 50% hôm nay!
            </Typography>

            <form onSubmit={handleSubmit}>
              <Stack spacing={2}>
                <TextField
                  label="Họ tên"
                  name="name"
                  required
                  fullWidth
                  value={data.name}
                  onChange={handleChange}
                  error={!!error.name}
                  helperText={error.name}
                />
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
                />
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
                />
                <TextField
                  select
                  label="Vị trí công việc"
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
                  sx={{ bgcolor: "#1976d2", color: "#fff", fontWeight: "bold" }}
                >
                  Đăng ký ngay
                </Button>
              </Stack>
            </form>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default Form;
