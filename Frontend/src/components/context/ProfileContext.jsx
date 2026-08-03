import { createContext, useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const ProfileContext = createContext();

const ContextData = ({ children }) => {
  const navigate = useNavigate();

  const [profileData, setProfileData] = useState();
  const [loading, setLoading] = useState(true);

  const [showDetails, setShowDetails] = useState(false);

  const [monthlyExpense, setMonthlyExpense] = useState();
  const [monthlyIncome, setMonthlyIncome] = useState();

  const fatchProfile = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/auth/getProfileData",
        { withCredentials: true },
      );
      setProfileData(response.data.profileData);
    } catch (error) {
      const errorMsg = error.response?.data?.message || error.message;
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fatchProfile();
  }, []);

  const fatchMonthlyExpense = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/details/monthlyExpense",
        { withCredentials: true },
      );
      setMonthlyExpense(response.data.monthlyExpenseAmount);
    } catch (error) {
      const errorMsg = error.response?.data?.messagge || error.messagge;
    }
  };
  useEffect(() => {
    fatchMonthlyExpense();
  }, []);

  const fatchMonthlyIncome = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/auth/monthlyIncome",
        { withCredentials: true },
      );
      setMonthlyIncome(response.data.monthlyIncomeAmount);
    } catch (error) {
      const errorMsg = error.response?.data?.messagge || error.messagge;
    }
  };
  useEffect(() => {
    fatchMonthlyIncome();
  }, []);

  const editProfile = async (formData) => {
    try {
      const response = await axios.patch(
        "http://localhost:3000/api/auth/editProfile",
        formData,
        { withCredentials: true },
      );
    } catch (error) {
      const errorMsg = error.response?.data?.message || error.message;
    }
  };

  const logoutOnClick = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/logout",
        {},
        { withCredentials: true },
      );

      navigate("/", {
        replace: true,
      });
    } catch (error) {
      const errorMsg = error.response?.data?.message || error.message;
    }
  };

  const backOnClick = () => {
    setShowDetails(false);
  };

  return (
    <ProfileContext.Provider
      value={{
        loading,
        profileData,
        monthlyExpense,
        monthlyIncome,
        showDetails,

        fatchProfile,
        fatchMonthlyExpense,
        fatchMonthlyIncome,

        setShowDetails,
        editProfile,
        logoutOnClick,
        backOnClick,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export default ContextData;
