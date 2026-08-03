import { useContext } from "react";
import { ProfileContext } from "../context/ProfileContext";
import { WalletContext } from "../context/WalletContext";

import { IoWallet } from "react-icons/io5";
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import { GoGoal } from "react-icons/go";

const Card = () => {
  const { profileData } = useContext(ProfileContext);
  const { wallet } = useContext(WalletContext);
  const { monthlyExpense } = useContext(ProfileContext);
  const { monthlyIncome } = useContext(ProfileContext);

  const savings =
    Number(profileData?.monthlyBudget || 0) - Number(monthlyExpense || 0);

  return (
    <>
      <div className="md:flex justify-around text-center  w-full md:h-50 h-auto px-20  font-serif mt-10">
        <div
          className="bg-[#071321] md:w-50 w-60 my-4 h-30 rounded-2xl text-gray-300 border border-[#132739] relative 
            hover:border hover:border-cyan-400 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(34,200,194,0.35)]
            cursor-pointer"
        >
          <h1 className="text-5xl text-cyan-400 absolute top-8 left-3 [text-shadow:0_0_10px_rgba(34,197,94,0.5)]">
            <IoWallet />
          </h1>
          <h1 className="text-sm font-sans absolute top-8 left-18 font-bold">
            Total Balance
          </h1>
          <h1 className="text-xl font-sans absolute top-13 left-22 text-cyan-500 font-bold hover:[text-shadow:0_0_10px_rgba(34,197,94,0.5)]">
            {"\u20B9"}
            <span>{wallet?.totalWallet || 0}</span>
          </h1>
        </div>

        <div
          className="bg-[#071321] md:w-50 w-60 my-4 h-30 rounded-2xl text-gray-300 border border-[#132739] relative
            hover:border hover:border-green-400 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(34,200,194,0.35)]
            cursor-pointer"
        >
          <h1 className="text-5xl text-green-400 absolute top-8 left-3 [text-shadow:0_0_10px_rgba(34,197,94,0.5)]">
            <FaRegArrowAltCircleUp />
          </h1>
          <h1 className="text-xs font-sans absolute top-8 left-17 font-bold">
            This Month Income
          </h1>
          <h1 className="text-2xl font-sans absolute top-12 left-19 text-green-500 font-bold hover:[text-shadow:0_0_10px_rgba(34,197,94,0.5)]">
            {"\u20B9"}
            <span>{monthlyIncome}</span>
          </h1>
        </div>

        <div
          className="bg-[#071321] md:w-50 my-4 w-60 h-30 rounded-2xl text-gray-300 border border-[#132739] relative
            hover:border hover:border-red-500 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(200,80,0,0.35)]
            cursor-pointer"
        >
          <h1 className="text-5xl text-red-500 absolute top-8 left-3 [text-shadow:0_0_10px_rgba(197,0,0,0.5)]">
            <FaRegArrowAltCircleDown />
          </h1>
          <h1 className="text-xs font-sans absolute top-8 left-17 font-bold">
            This Month Expenses
          </h1>
          <h1 className="text-xl font-sans absolute top-13 left-22 text-red-500 font-bold hover:[text-shadow:0_0_10px_rgba(34,197,94,0.5)]">
            {"\u20B9"}
            <span>{monthlyExpense}</span>
          </h1>
        </div>

        <div
          className="bg-[#071321] md:w-50 my-4 w-60 h-30 rounded-2xl text-gray-300 border border-[#132739] relative
            hover:border hover:border-blue-500 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(100,0,250,0.35)]
            cursor-pointer"
        >
          <h1 className="text-5xl text-blue-500 absolute top-8 left-3 [text-shadow:0_0_10px_rgba(34,197,94,0.5)]">
            <GoGoal />
          </h1>
          <h1 className="text-sm font-sans absolute top-8 left-20 font-bold">
            Savings
          </h1>
          <h1 className="text-xl font-sans absolute top-13 left-20 text-blue-500 font-bold hover:[text-shadow:0_0_10px_rgba(34,197,94,0.5)]">
            {"\u20B9"}
            <span>{savings}</span>
          </h1>
        </div>
      </div>
    </>
  );
};

export default Card;
