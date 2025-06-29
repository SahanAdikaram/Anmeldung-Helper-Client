import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const registerUser = async (userData) => {
  const response = await axios.post(`${API_BASE_URL}/auth/register`, userData);
  return response.data;
};

export const verifyEmail = async (email, otp) => {
  const response = await axios.post(`${API_BASE_URL}/auth/verify-email`, { email, otp });
  return response.data;
};

export const loginUser = async (credentials) => {
  const response = await axios.post(`${API_BASE_URL}/auth/login`, credentials);
  return response.data;
};

export const forgotPassword = async (email) => {
  const response = await axios.post(`${API_BASE_URL}/auth/forgot-password`, { email });
  return response.data;
};

export const resetPassword = async (resetData) => {
  const response = await axios.post(`${API_BASE_URL}/auth/reset-password`, resetData);
  return response.data;
};

export const refreshAccessToken = async (refreshToken) => {
  const response = await axios.post(`${API_BASE_URL}/auth/refresh-token`, { refreshToken });
  return response.data;
};

export const getCurrentUser = async (token) => {
  const response = await axios.get(`${API_BASE_URL}/auth/me`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data;
};