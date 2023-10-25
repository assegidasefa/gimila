import React from "react";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import {  Route, Routes } from 'react-router-dom';
import SignUpScreen from "../screens/SignupScreen/SignupScreen";
import LandingScreen from "../screens/LandingScreen/LandingScreen";
import OTPVerificationScreen from "../screens/OTPVerificationScreen/OTPVerificationScreen";
import SignUpWholeSalerScreen from "../screens/SignUpWholeSalerScreen/SignUpWholeSalerScreen";
import SingupRetailerScreen from "../screens/Singup0RetailerScreen/SingupRetailerScreen";

const Routing = () => {
  return (
    
      <Routes className="overflow-y-auto">
        <Route exact path="/login" element={<LoginScreen />} />
        <Route exact path="/signup" element={<SignUpScreen />} />
        <Route exact path="/verificationPhone" element={<OTPVerificationScreen />} />
        <Route exact path="/SignUpWholeSaler" element={<SignUpWholeSalerScreen />} />
        <Route exact path="/SignUpRetailer" element={<SingupRetailerScreen />} />

        
        <Route exact path="/" element={<LandingScreen />} />
      </Routes>
  );
};

export default Routing;
