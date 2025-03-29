import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const App = () => {
  return (
    <div className="bg-[#1c3a3e] flex justify-center items-center h-screen">
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}
export default App;