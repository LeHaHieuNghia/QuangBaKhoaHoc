import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./component/header.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
  </StrictMode>
);
