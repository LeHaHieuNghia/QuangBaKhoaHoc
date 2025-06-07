import { Backdrop, CircularProgress, Typography } from "@mui/material";
import { useState } from "react";

export const LoadingPopup = ({ open }) => {
  return (
    <Backdrop
      sx={{ color: "#ddd", zIndex: (theme) => theme.zIndex.modal + 1 }}
      open={open}
    >
      <CircularProgress color="inherit" />
      <Typography>Vui lòng đợi</Typography>
    </Backdrop>
  );
};
