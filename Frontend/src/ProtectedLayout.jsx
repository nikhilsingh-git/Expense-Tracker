import { Outlet } from "react-router-dom";
import ContextData from "./components/context/ProfileContext";
import WalletData from "./components/context/WalletContext";
import ExpenseData from "./components/context/ExpenseContext";

import { useEffect } from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import api from "./components/Api/axios";



const ProtectedLayout = () =>{

  const [login , setLogin] = useState(null)
  const [loading , setLoading] = useState(true)

  const isUserLogin = async()=>{
      try {
        const response = await api.get('/api/auth/isUserLogin')
        setLogin(response?.data?.success)
      } catch (error) {
        setLogin(false)
        const errorMsg = error.response?.data?.message || error.message
      }finally{
        setLoading(false)
      }
  }
useEffect(()=>{
  isUserLogin()
},[])

if (login === false) {
    return <Navigate to='/' replace />;
}

if(loading === true) {
  return(
   <div className="fixed inset-0 bg-[#0F172A]/90 flex items-center justify-center z-50">
  <div className="text-center">

    <div className="relative w-20 h-20 mx-auto">
      <div className="absolute inset-0 rounded-full border-4 border-cyan-500/20"></div>

      <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-cyan-400 border-r-cyan-400 animate-spin"></div>
    </div>

    <h2 className="text-white text-2xl font-bold mt-6">
      Expense Tracker
    </h2>
  </div>
</div>
  )
}
  return (

    <ContextData>
      <WalletData>
        <ExpenseData>
          <Outlet />
        </ExpenseData>
      </WalletData>
    </ContextData>

  );

}



export default ProtectedLayout