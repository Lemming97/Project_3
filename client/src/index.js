import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
<<<<<<< HEAD
// import reportWebVitals from './reportWebVitals';
import { SnackbarProvider } from "notistack";
=======
>>>>>>> develop

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SnackbarProvider
      variant="success"
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
    >
      <App />
    </SnackbarProvider>
  </React.StrictMode>
);
