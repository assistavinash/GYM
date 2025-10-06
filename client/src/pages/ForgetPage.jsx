import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleError, handleSuccess } from '../utils';

const ForgetPage = () => {
  const navigate = useNavigate();
  const [contactInfo, setContactInfo] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1); // 1: contact info, 2: otp + new password
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const isEmail = (value) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const isPhoneNumber = (value) => {
    return /^[0-9]{10}$/.test(value);
  };

  const handleInitialSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    if (!isEmail(contactInfo) && !isPhoneNumber(contactInfo)) {
      setMessage("Please enter a valid email or 10-digit phone number");
      setIsLoading(false);
      return;
    }

    try {
      // First attempt with the original method
      const method = isEmail(contactInfo) ? "email" : "phone";
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/request-reset`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: isEmail(contactInfo) ? contactInfo : undefined,
          phone: isPhoneNumber(contactInfo) ? contactInfo : undefined,
          method: method
        })
      });

      const result = await response.json();
      const { success, message, error, otp } = result;

      if (success) {
        // Show OTP in alert for testing
        if (otp) {
          alert(`Your OTP is: ${otp}`);
        }
        handleSuccess(message);
        setMessage(message);
        setStep(2);
      } else if (error && method === "phone" && error.message?.includes("SMS failed")) {
        // If phone method failed, automatically try email
        setMessage("SMS delivery failed. Attempting to send OTP via email...");
        try {
          const emailResponse = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/request-reset`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              method: "email",
              phone: contactInfo, // Send phone number so backend can lookup associated email
              useEmailFallback: true // Signal backend to use email fallback
            })
          });

          const emailResult = await emailResponse.json();
          const { success: emailSuccess, message: emailMessage, error: emailError } = emailResult;

          if (emailSuccess) {
            handleSuccess(emailMessage);
            setMessage(emailMessage);
            setStep(2);
          } else {
            handleError(emailError?.details?.[0]?.message || emailMessage);
            setMessage(emailError?.details?.[0]?.message || emailMessage);
          }
        } catch (emailError) {
          handleError("Both SMS and email delivery failed. Please try again later.");
          setMessage("Both SMS and email delivery failed. Please try again later.");
        }
      } else if (error) {
        const details = error?.details?.[0]?.message;
        handleError(details || message);
        setMessage(details || message);
      } else if (!success) {
        handleError(message || 'Failed to send reset request');
        setMessage(message || 'Failed to send reset request');
      }
    } catch (error) {
      handleError(error.message || "Something went wrong");
      setMessage(error.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/reset-password`, {
        email: isEmail(contactInfo) ? contactInfo : undefined,
        phone: isPhoneNumber(contactInfo) ? contactInfo : undefined,
        otp,
        newPassword
      });
      
      setMessage("Password reset successful!");
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (error) {
      setMessage(error.response?.data?.message || "Password reset failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-100/95 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-xl w-96 relative border border-gray-200">
        <button 
          onClick={() => navigate('/login')} 
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-center mb-6 text-gray-900">
          {step === 1 ? "Forgot Password" : "Reset Password"}
        </h2>

        {message && (
          <div className={`p-3 rounded-lg text-sm mb-4 ${
            message.includes("successful") 
              ? "bg-green-100 text-green-700" 
              : "bg-red-100 text-red-700"
          }`}>
            {message}
          </div>
        )}

        {step === 1 ? (
          <form onSubmit={handleInitialSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Enter email or phone number"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900 transition-colors bg-gray-50 text-gray-900"
              value={contactInfo}
              onChange={(e) => {
                setContactInfo(e.target.value);
                setMessage("");
              }}
              required
            />

            <button 
              type="submit"
              disabled={isLoading}
              className="w-full bg-gray-900 text-white p-3 rounded-lg hover:bg-gray-800 transform hover:scale-[1.02] transition-all duration-200 font-semibold shadow-sm disabled:opacity-50"
            >
              {isLoading ? "Sending..." : "Send OTP"}
            </button>
          </form>
        ) : (
          <form onSubmit={handleResetSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Enter OTP"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900 transition-colors bg-gray-50 text-gray-900"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Enter new password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900 transition-colors bg-gray-50 text-gray-900"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />

            <button 
              type="submit"
              disabled={isLoading}
              className="w-full bg-gray-900 text-white p-3 rounded-lg hover:bg-gray-800 transform hover:scale-[1.02] transition-all duration-200 font-semibold shadow-sm disabled:opacity-50"
            >
              {isLoading ? "Resetting..." : "Reset Password"}
            </button>
          </form>
        )}

        <p className="text-center text-gray-700 mt-4">
          Remember your password?{" "}
          <button
            type="button"
            onClick={() => navigate('/login')}
            className="text-gray-900 hover:text-gray-800 font-medium hover:underline"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default ForgetPage;
