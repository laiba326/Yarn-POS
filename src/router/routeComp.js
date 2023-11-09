import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Reports from "../pages/Reports";
import Forms from "../pages/Forms";
export default function RouteComp() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/forms" element={<Forms />} />
    </Routes>
  );
}
