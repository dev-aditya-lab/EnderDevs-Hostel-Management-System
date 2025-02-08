import React from 'react'

import { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, Lock } from "lucide-react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
  
    const handleLogin = (e) => {
      e.preventDefault();
      if (!email || !password) {
        setError("Invalid email or password. Please try again.");
        return;
      }
      console.log("Logging in with:", email, password);
    };
  
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#dadada] px-4">
        <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-center text-black">🔑 Welcome Back!</h2>
          <p className="text-gray-600 text-center mt-2">
            Log in to manage your hostel, track room availability, or check your student details.
          </p>
  
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
  
          <form onSubmit={handleLogin} className="mt-6 space-y-4">
            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Email Address</label>
              <div className="relative mt-1">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10"
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">Use your college or personal email.</p>
            </div>
  
            {/* Password Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <div className="relative mt-1">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
                <Input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10"
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Must be at least 8 characters with a mix of letters & numbers.
              </p>
            </div>
  
            {/* Forgot Password */}
            <div className="flex justify-end">
              <Link to="/forgot-password" className="text-blue-600 text-sm hover:underline">
                Forgot Password?
              </Link>
            </div>
  
            {/* Login Button */}
            <Button type="submit" className="w-full bg-[#BFDEFF] text-black hover:bg-[#BFF5DC]">
              Login
            </Button>
  
            {/* Signup Link */}
            <p className="text-center text-sm text-gray-600">
              Don't have an account?{" "}
              <Link to="/signup" className="text-blue-600 font-medium hover:underline">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    );
  }
  

export default Login