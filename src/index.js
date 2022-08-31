import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import AuthService from "./service/auth_service";
import { firebaseApp } from "./service/firebase";

const root = ReactDOM.createRoot(document.getElementById("root"));
const authService = new AuthService(firebaseApp);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App authService={authService} />
    </BrowserRouter>
  </React.StrictMode>
);
