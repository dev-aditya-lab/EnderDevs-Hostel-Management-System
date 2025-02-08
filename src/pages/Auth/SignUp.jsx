import React from 'react'

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Lock, Mail, User } from "lucide-react";


const SignUp = () => {
  const [role, setRole] = useState("student");

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#BFDEFF] px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-900">🆕 Create Your Account</h2>
        <p className="text-gray-600 text-center mt-2">
          Join us and simplify hostel management. Choose your role below.
        </p>

        {/* Role Selection */}
        <RadioGroup className="mt-4 flex gap-4 justify-center" value={role} onValueChange={setRole}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="college" id="college" />
            <Label htmlFor="college">For Colleges</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="student" id="student" />
            <Label htmlFor="student">For Students</Label>
          </div>
        </RadioGroup>

        <form className="mt-6 space-y-4">
          {/* Full Name */}
          <div>
            <Label htmlFor="fullName">Full Name</Label>
            <div className="relative">
              <User className="absolute left-3 top-3 text-gray-500" size={18} />
              <Input id="fullName" type="text" placeholder="Enter your full name" className="pl-10" required />
            </div>
          </div>

          {/* Email */}
          <div>
            <Label htmlFor="email">Email Address</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-gray-500" size={18} />
              <Input id="email" type="email" placeholder="Enter your email" className="pl-10" required />
            </div>
          </div>

          {/* Password */}
          <div>
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-500" size={18} />
              <Input id="password" type="password" placeholder="Create a strong password" className="pl-10" required />
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-500" size={18} />
              <Input id="confirmPassword" type="password" placeholder="Re-enter your password" className="pl-10" required />
            </div>
          </div>

          {/* Dynamic College Selection */}
          {role === "student" ? (
            <div>
              <Label htmlFor="college">Select College</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Choose your college" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="college1">College A</SelectItem>
                  <SelectItem value="college2">College B</SelectItem>
                  <SelectItem value="college3">College C</SelectItem>
                </SelectContent>
              </Select>
            </div>
          ) : (
            <div>
              <Label htmlFor="collegeName">College Name</Label>
              <Input id="collegeName" type="text" placeholder="Enter official college name" required />
            </div>
          )}

          {/* Signup Button */}
          <Button className="w-full bg-[#FED5E3] hover:bg-[#FFB5C8] text-black">
            Sign Up & Get Started
          </Button>

          {/* Login Redirect */}
          <p className="text-center text-gray-600 text-sm mt-2">
            Already have an account?{" "}
            <a href="/login" className="text-blue-600 hover:underline">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
}


export default SignUp