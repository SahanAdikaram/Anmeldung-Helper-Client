import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  registerUser, 
  loginUser, 
  verifyEmail, 
  forgotPassword, 
  resetPassword,
  refreshAccessToken,
  getCurrentUser
} from '../api/auth';
import { toast } from 'react-toastify';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const initializeAuth = async () => {
      const token = localStorage.getItem('accessToken');
      if (token) {
        try {
          const userData = await getCurrentUser(token);
          setUser(userData.user);
        } catch (err) {
          const refreshToken = localStorage.getItem('refreshToken');
          if (refreshToken) {
            try {
              const { accessToken } = await refreshAccessToken(refreshToken);
              localStorage.setItem('accessToken', accessToken);
              const userData = await getCurrentUser(accessToken);
              setUser(userData.user);
            } catch (refreshError) {
              logout();
            }
          } else {
            logout();
          }
        }
      }
      setLoading(false);
    };

    initializeAuth();
  }, []);

  const register = async (formData) => {
    try {
      await registerUser(formData);
      toast.success('Registration successful! Please check your email for verification.');
      navigate('/verify-email', { state: { email: formData.email } });
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
      toast.error(err.response?.data?.message || 'Registration failed');
    }
  };

  const login = async (formData) => {
    try {
      const { accessToken, refreshToken, user } = await loginUser(formData);
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      setUser(user);
      toast.success('Login successful!');
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
      toast.error(err.response?.data?.message || 'Login failed');
    }
  };

  const verifyUserEmail = async (email, otp) => {
    try {
      await verifyEmail(email, otp);
      toast.success('Email verified successfully!');
      navigate('/login');
    } catch (err) {
      setError(err.response?.data?.message || 'Verification failed');
      toast.error(err.response?.data?.message || 'Verification failed');
    }
  };

  const sendPasswordReset = async (email) => {
    try {
      await forgotPassword(email);
      toast.success('Password reset OTP sent to your email!');
      navigate('/reset-password', { state: { email } });
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to send reset email');
      toast.error(err.response?.data?.message || 'Failed to send reset email');
    }
  };

  const updatePassword = async (resetData) => {
    try {
      await resetPassword(resetData);
      toast.success('Password updated successfully!');
      navigate('/login');
    } catch (err) {
      setError(err.response?.data?.message || 'Password reset failed');
      toast.error(err.response?.data?.message || 'Password reset failed');
    }
  };

  const logout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    setUser(null);
    navigate('/login');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        error,
        register,
        login,
        verifyUserEmail,
        sendPasswordReset,
        updatePassword,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);