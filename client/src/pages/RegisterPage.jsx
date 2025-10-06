import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from '../utils';
import OTPVerification from "../components/OTPVerification";

function RegisterPage() {
  const [registerInfo, setRegisterInfo] = useState({
    name: '',
    email: '',
    password: '',
    role: 'user',
    phone: ''
  });
  const [pendingUserId, setPendingUserId] = useState(null);
  const [devCode, setDevCode] = useState("");
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    const copyRegisterInfo = {...registerInfo};
    copyRegisterInfo[name] = value;
    setRegisterInfo(copyRegisterInfo);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const { name, email, password, phone, role } = registerInfo;

    if (!name || !email || !password || !phone) {
      return handleError("All fields are required");
    }

    // Phone number validation
    if (!/^[0-9]{10}$/.test(phone)) {
      return handleError("Please enter a valid 10-digit phone number");
    }

    try {
      const url = import.meta.env.VITE_API_URL + "/api/auth/register";
      console.log("Registering user with:", registerInfo);
      console.log("API URL:", url);
      
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(registerInfo)
      });

      console.log("Response status:", response.status);
      const result = await response.json();
      console.log("Registration result:", result);
      
      const { success, message, error, verificationPending, userId, devCode } = result;

      if (success) {
        if (verificationPending && userId) {
          handleSuccess("Verification code sent to your email. Please verify to complete registration.");
          setPendingUserId(userId);
          if (devCode) setDevCode(devCode);
        } else {
          handleSuccess(message);
          setTimeout(() => navigate("/login"), 1000);
        }
      } else if (error) {
        const details = error?.details?.[0]?.message;
        console.error("Registration error:", error);
        handleError(details || message);
      } else if (!success) {
        console.error("Registration failed:", message);
        handleError(message);
      }
    } catch (err) {
      console.error("Registration catch error:", err);
      handleError(err.message || "Something went wrong");
    }
  };

  return (
    // Backdrop - Full screen overlay with stronger blur
  <div className="fixed inset-0 backdrop-blur-md bg-white/10 flex items-center justify-center z-50"
         onClick={() => navigate('/')}>
      {/* Modal */}
      <div className="bg-white p-8 rounded-lg shadow-xl w-96 relative border border-gray-200 max-h-[90vh] overflow-y-auto scrollbar-hide"
           onClick={(e) => e.stopPropagation()}
           style={{
             scrollbarWidth: 'none', /* Firefox */
             msOverflowStyle: 'none'  /* Internet Explorer 10+ */
           }}>
        {/* Close button */}
        <button 
          onClick={() => navigate('/')} 
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 z-10 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
        >
          ✕
        </button>

        <form onSubmit={handleRegister} className="space-y-4">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-900">Register</h2>

          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name  
              </label>
              <input
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900 transition-colors bg-gray-50 text-gray-900"
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                autoFocus
                value={registerInfo.name}
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900 transition-colors bg-gray-50 text-gray-900"
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={registerInfo.email}
              />
            </div>
            
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                Phone Number
              </label>
              <input
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900 transition-colors bg-gray-50 text-gray-900"
                id="phone"
                name="phone"
                type="tel"
                placeholder="Enter 10-digit phone number"
                maxLength={10}
                value={registerInfo.phone}
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900 transition-colors bg-gray-50 text-gray-900"
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                value={registerInfo.password}
              />
            </div>
            
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="role">
                Role
              </label>
              <select
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900 transition-colors bg-gray-50 text-gray-900"
                id="role"
                name="role"
                value={registerInfo.role}
              >
                <option value="user">User</option>
                <option value="trainer">Trainer</option>
              </select>
            </div>
          </div>

          <button 
            type="submit" 
            className="w-full bg-gray-900 text-white p-3 rounded-lg hover:bg-gray-800 transform hover:scale-[1.02] transition-all duration-200 font-semibold shadow-sm"
          >
            Register
          </button>

          <p className="text-center text-gray-700 mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-gray-900 hover:text-gray-800 font-medium hover:underline">
              Login
            </Link>
          </p>
        </form>
        <ToastContainer />
      </div>
      {pendingUserId && (
        <OTPVerification
          userId={pendingUserId}
          devCode={devCode}
          onVerificationComplete={(data) => {
            // After verify, backend sets cookie and returns user
            const { user } = data;
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('role', user.role);
            switch (user.role) {
              case 'admin':
                navigate('/admin');
                break;
              case 'trainer':
                navigate('/trainer');
                break;
              default:
                navigate('/user');
            }
          }}
        />
      )}
      
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}

export default RegisterPage;