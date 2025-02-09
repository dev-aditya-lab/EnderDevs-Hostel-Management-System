import { Routes, Route } from "react-router-dom";
import Login from "@/pages/Auth/Login";
import SignUp from "@/pages/Auth/SignUp";
import Home from "@/pages/Home/Home";
import ResetPassword from "@/pages/Auth/ResetPassword.jsx";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/ResetPassword" element={<ResetPassword />} />
    </Routes>
  );
}
