import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "suneditor/dist/css/suneditor.min.css";
import AppRoutes from "./Routes";
import { store } from "./app/store";
import ContextsProvider from "./contexts";
import "./stylesheets/custom.css";
import "./stylesheets/tailwind.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ContextsProvider>
          <ToastContainer />
          <Routes>
            <Route path="/*" element={<AppRoutes />} />
          </Routes>
        </ContextsProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
