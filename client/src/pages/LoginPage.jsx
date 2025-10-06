import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { GoogleLogin } from '@react-oauth/google';
import { handleError, handleSuccess } from '../utils';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:3000';

function LoginPage() {
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo((prev) => ({ ...prev, [name]: value }));
  };

  // Check if user is already authenticated
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem('token');
        if (token && token !== 'cookie') {
          const user = JSON.parse(localStorage.getItem('user') || '{}');
          if (user?.role) {
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
          }
        }
      } catch (_) {
        // not logged in, stay on login page
      }
    };
    checkAuth();
  }, [navigate]);

  const handleGoogleSuccess = async (credentialResponse) => {
    console.log("Google login successful:", credentialResponse);
    console.log("Current origin:", window.location.origin);
    console.log("Client ID in use:", import.meta.env.VITE_GOOGLE_CLIENT_ID);
    
    try {
      setIsLoading(true);
      
      const response = await fetch(`${API_BASE}/api/auth/google`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ credential: credentialResponse.credential }),
      });

      const result = await response.json();
      const { success, message, jwtToken, name, user } = result;

      if (success) {
        handleSuccess(message || "Google login successful");
        localStorage.setItem("token", jwtToken);
        localStorage.setItem("loggedInUser", name);
        localStorage.setItem("userName", name);
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('role', user.role);

        setTimeout(() => {
          switch(user.role) {
            case 'admin':
              navigate('/admin');
              break;
            case 'trainer':
              navigate('/trainer');
              break;
            default:
              navigate('/user');
          }
        }, 1000);
      } else {
        handleError(message || "Google login failed");
      }
    } catch (error) {
      handleError(error.message || "Failed to login with Google");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleError = () => {
    handleError("Google login failed. Please try again.");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = loginInfo;

    if (!email || !password) {
      return handleError("All fields are required");
    }

    try {
      setIsLoading(true);
      
      const url = `${API_BASE}/api/auth/login`;
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginInfo),
      });

      const result = await response.json();
      const { success, message, jwtToken, name, user } = result;

      if (success) {
        handleSuccess(message || "Login successful");
        localStorage.setItem("token", jwtToken);
        localStorage.setItem("loggedInUser", name);
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('role', user.role);

        setTimeout(() => {
          switch(user.role) {
            case 'admin':
              navigate('/admin');
              break;
            case 'trainer':
              navigate('/trainer');
              break;
            default:
              navigate('/user');
          }
        }, 1000);
      } else {
        handleError(message || "Login failed");
      }
    } catch (err) {
      handleError(err.message || "Something went wrong");
    } finally {
      setIsLoading(false);
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

        <form onSubmit={handleLogin} className="space-y-4">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-900">Login</h2>

          <div className="space-y-4">
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900 transition-colors bg-gray-50 text-gray-900"
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={loginInfo.email}
              />
            </div>
            
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900 transition-colors bg-gray-50 text-gray-900"
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                value={loginInfo.password}
              />
            </div>
          </div>

          <button 
            type="submit" 
            disabled={isLoading}
            className="w-full bg-gray-900 text-white p-3 rounded-lg hover:bg-gray-800 transform hover:scale-[1.02] transition-all duration-200 font-semibold shadow-sm disabled:opacity-50"
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>

          <div className="relative my-4 flex items-center justify-center">
            <div className="absolute border-t border-gray-300 w-full"></div>
            <div className="relative bg-white px-4 text-sm text-gray-500">
              OR
            </div>
          </div>

          <div className="flex justify-center">
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={handleGoogleError}
              shape="rectangular"
              theme="filled_black"
              text="signin_with"
              size="large"
              useOneTap={false}
              cookiePolicy={'single_host_origin'}
              auto_select={false}
              cancel_on_tap_outside={true}
              context="signin"
              itp_support={true}
            />
          </div>

          <div className="text-center mt-3">
            <button
              type="button"
              onClick={() => navigate('/forgot-password')}
              className="text-gray-600 text-sm hover:underline cursor-pointer"
            >
              Forgot Password?
            </button>
          </div>

          <p className="text-center text-gray-600 mt-4">
            Don't have an account?{" "}
            <Link to="/register" className="text-gray-900 font-medium hover:underline">
              Register
            </Link>
          </p>
        </form>
        <ToastContainer />
      </div>
      
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}

export default LoginPage;