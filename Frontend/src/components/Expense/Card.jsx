import { useContext } from "react"
import { ProfileContext } from "../context/ProfileContext"
import { WalletContext } from "../context/WalletContext"


import { IoWallet } from "react-icons/io5";
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import { GoGoal } from "react-icons/go";

const Card = () =>{
   const {profileData} = useContext(ProfileContext)
   const {wallet} = useContext(WalletContext)
   const {monthlyExpense} = useContext(ProfileContext)
    return( 
        <>
        <div className="flex justify-around items-center text-center  w-full h-60 px-20 font-serif">
            <div className="bg-[#071321] w-60 h-40 rounded-2xl text-gray-300 border border-[#132739] ">
                
                <h1 className="text-xl mt-3 font-sans">Total Balance</h1>
                <h1 className="text-lg font-sans ">{"\u20B9"}<span>{wallet?.totalWallet}</span></h1>
            </div>
            <div className="bg-[#071321] w-60 h-40 rounded-2xl text-gray-300 border border-[#132739]">
                <h1 className="text-xl mt-3 font-sans">This Month Income</h1>
                <h1 className="text-lg font-sans ">{"\u20B9"}<span>{profileData?.monthlyBudget}</span></h1>
                
            </div>
            <div className="bg-[#071321] w-60 h-40 rounded-2xl text-gray-300  border border-[#132739]">
                <h1 className="text-xl  mt-3 font-sans">This month Expenses</h1>
                <h1 className="text-lg font-sans ">{"\u20B9"}<span>{monthlyExpense}</span></h1>
                {/* <img src="" alt="" /> */}
            </div>
            <div className="bg-[#071321] w-60 h-40 rounded-2xl text-gray-300  border border-[#132739]">
                <GoGoal />
                <h1 className="text-xl mt-3 font-sans">Savings</h1>
                <h1 className="text-lg font-sans ">{"\u20B9"}<span>00.00</span></h1>
                {/* <img src="" alt="" /> */}
            </div>
        </div>
        </>
    )
}

export default Card 