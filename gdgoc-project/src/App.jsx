import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgetPassword from "./pages/ForgetPassword";

const App = () => {
  return (
    <div className="bg-[#437d85] flex justify-center items-center h-screen">
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/forget-password" element={<ForgetPassword />}/>
      </Routes>
    </div>
  );
}
export default App;