import "preline/dist/preline.js";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "suneditor/dist/css/suneditor.min.css";
import AppRoutes from "./Routes";
import ContextsProvider from "./contexts";
import "./tailwind.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextsProvider>
        <ToastContainer />
        <Routes>
          <Route path="/*" element={<AppRoutes />} />
        </Routes>
      </ContextsProvider>
    </BrowserRouter>
  </React.StrictMode>
);
