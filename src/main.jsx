import "./index.css";

import React from "react";

import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./App";
import CalenderPage from "./pages/CalenderPage";
import DashboardPage from "./pages/DashboardPage";
import DocumentationPage from "./pages/DocumentationPage";

import("preline");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='/home' element={<DashboardPage />} />
          <Route path='/calendar' element={<CalenderPage />} />
          <Route path='/documentation' element={<DocumentationPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
