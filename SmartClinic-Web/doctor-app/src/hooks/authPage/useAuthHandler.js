import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { request } from '../../utils/request.js'; 
import { useDispatch } from 'react-redux';
import { setDoctorInfo } from '../../redux/Slices/doctorInfoSlice.js';

export const useAuthHandler = () => {
   
  const dispatch = useDispatch(); 
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const displayMessage = (msg) => {
    setMessage(msg);
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000);
  };

  const handleLogin = async ({ email, password }) => {
    try {
      setLoading(true);
      const response = await request({
        method: "POST",
        route: `/auth/doctor/login`,
        body: { email, password },
        auth: false,
      });

      if (response.success) {
        const { name, email, id } = response.data.doctor;
        dispatch(setDoctorInfo({ name, email, id }));
        localStorage.setItem("access_token", response.data.token);
        navigate("/doctor/dashboard");
      } else {
        displayMessage(response?.message?.error || response?.message?.errors?.[0]?.msg || "Login failed");
      }
    } catch (error) {
      displayMessage(error.message || "An error occurred during login.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSignup = async ({ name, email, password }) => {
    try {
      setLoading(true);
      const response = await request({
        method: "POST",
        route: `/auth/doctor/register`,
        body: { name, email, password, yearsExperience: 0, profilePicture: "null" },
        auth: false,
      });

      if (response.success) {
        const { name, email, id } = response.data.doctor;
        dispatch(setDoctorInfo({ name, email, id }));
        localStorage.setItem("access_token", response.data.token);
        navigate("/doctor/dashboard");
      } else {
        displayMessage(response?.message?.error || response?.message?.errors?.[0]?.msg || "Signup failed");
      }
    } catch (error) {
      displayMessage(error.message || "An error occurred during signup.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    message,
    showMessage,
    handleLogin,
    handleSignup,
  };
};
