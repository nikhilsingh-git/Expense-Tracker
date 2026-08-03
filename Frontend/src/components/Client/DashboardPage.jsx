import Profile from "../Layout/Profile";
import Card from "../Layout/Card";
import OverView from "../Layout/OverView";
import { useContext, useEffect, useState } from "react";
import { ProfileContext } from "../context/ProfileContext";
import PersonalDetails from "../Layout/PersonalDetails";

const DashboardPage = () => {
  const { loading } = useContext(ProfileContext);
  const { showDetails } = useContext(ProfileContext);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-[#0F172A]/90 flex items-center justify-center z-50">
        <div className="text-center">
          <div className="relative w-20 h-20 mx-auto">
            <div className="absolute inset-0 rounded-full border-4 border-cyan-500/20"></div>

            <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-cyan-400 border-r-cyan-400 animate-spin"></div>
          </div>

          <h2 className="text-white text-2xl font-bold mt-6">
            Expense Tracker
          </h2>

          <p className="text-gray-400 mt-2">
            Preparing your financial dashboard...
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      {showDetails === false && <Profile />}
      {showDetails === false && <Card />}
      {showDetails === false && <OverView />}
      {showDetails === true && <PersonalDetails />}
    </>
  );
};

export default DashboardPage;
