import React, { useState } from 'react';
import { Link } from "react-router-dom";
const ForgetPassword = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!email) {
        setMessage("Please enter your email.");
    } else {
        setMessage("If an account exist with this email, a reset link will be sent.");
    }
    };
  return (
    <div className="bg-[#305f65] p-6 w-96 rounded-lg shadow-lg">
        <h2 className="text-[#eae2d5] text-2xl font-semibold text-center mb-4">Forgot Password</h2>
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Enter your email" className="w-full px-3 py-2 mb-3 border rounded" value={email} onChange={(e)=> setEmail(e.target.value)} />
            <button type="submit" className="w-full bg-[#4b858d] text-[#eae2d5] py-2 rounded hover:bg-[#112528]">Reset Password</button>
        </form>
      {message && <p className="text-[#eae2d5]text-center text-sm mt-3">{message}</p>}
      <p className="text-[#eae2d5] text-center mt-2"> <Link to="/" className="text-[#eae2d5]">Back to Login</Link>

      </p>
    </div>
  )
}

export default ForgetPassword
