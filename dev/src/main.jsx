import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./pages/home";
import MealInfo from "./pages/MealInfo";
import { BrowserRouter, Routes, Route } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meal/:mealID" element={<MealInfo />} />
      </Routes>
    </BrowserRouter>
  </>,
);
