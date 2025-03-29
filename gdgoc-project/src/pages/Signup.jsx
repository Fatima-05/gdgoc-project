import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="bg-[#305f65] p-6 w-96 rounded-lg shadow-lg">
        <h2 className="text-[#eae2d5] text-2xl font-semibold text-center mb-4">Sign Up</h2>
        <form>
            <input type="text" placeholder="Full Name" className="w-full px-3 py-2 mb-3 border rounded"/>
            <input type="email" placeholder="Email" className="w-full px-3 py-2 mb-3 border rounded" />
            <input type="password" placeholder="Password" className="w-full px-3 py-2 mb-3 border rounded"/>
            <button className="w-full bg-[#549fa9] text-[#eae2d5] py-2 rounded hover:bg-[#112528]">Sign Up</button>
        </form>
        <p className="text-[#eae2d5] text-center text-sm mt-3">Already have an account?{""}
            <Link to="/" className="text-[#eae2d5]"> Login</Link>    
        </p>      
    </div>
  );
};

export default Signup;
