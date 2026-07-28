import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export const ProfileContext = createContext();

const ContextData = ({ children }) => {

      const [profileData , setProfileData] = useState()
      const [loading , setLoading] = useState(true)

      const [monthlyExpense , setMonthlyExpense] = useState()
      const [monthlyIncome , setMonthlyIncome] = useState()

        useEffect(()=>{
        const getData = async()=>{
            try {
                const response = await axios.get('http://localhost:3000/api/auth/getProfileData' , {withCredentials:true})
                 setProfileData(response.data.profileData)
                  
            } catch (error) {
             const errorMsg = error.response?.data?.message || error.message
            }
            finally{
                setLoading(false)
            }
        }
         getData()
       
    },[])

     useEffect(()=>{
        const getMonthlyExpense = async()=>{
            try {
                const response = await axios.get('http://localhost:3000/api/details/monthlyExpense' , {withCredentials:true})
                setMonthlyExpense(response.data.monthlyExpenseAmount)
            } catch (error) {
                const errorMsg = error.response?.data?.messagge || error.messagge
             
            }
        }

         getMonthlyExpense()
    } ,[])

      useEffect(()=>{
        const getMonthlyIncome = async()=>{
            try {
                const response = await axios.get('http://localhost:3000/api/auth/monthlyIncome', {withCredentials:true})
                setMonthlyIncome(response.data.monthlyIncomeAmount)
            } catch (error) {
                const errorMsg = error.response?.data?.messagge || error.messagge
            }
        }

         getMonthlyIncome()
    } ,[])

    

    return (
        <ProfileContext.Provider value={{
            loading,
            profileData,
            monthlyExpense,
            monthlyIncome,
        }}>
            {children}
        </ProfileContext.Provider>
    );
};

export default ContextData;