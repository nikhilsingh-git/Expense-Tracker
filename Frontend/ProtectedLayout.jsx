
import { Outlet } from "react-router-dom";
import ContextData from "./src/components/context/ProfileContext";
import WalletData from "./src/components/context/WalletContext";
import ExpenseData from "./src/components/context/ExpenseContext";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";



const ProtectedLayout = () =>{


  const [login , setLogin] = useState(null)
  const [loading , setLoading] = useState(true)

  const isUserLogin = async()=>{
      try {
        const response = await axios.get('http://localhost:3000/api/auth/isUserLogin' , {withCredentials:true})
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
    return <Navigate to='/api/auth/login' replace />;
}

if(loading === true) {
  return <h1 className="text-gray-50">Loading .....</h1>
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