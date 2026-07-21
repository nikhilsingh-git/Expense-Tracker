 import { createContext } from "react";
 import { useState } from "react";
 import { useEffect } from "react";
 import axios from "axios";

export const ExpenseContext = createContext()

const ExpenseData = ({children}) =>{

     const [expense , setExpense] = useState([])
     const [loading , setLoading] = useState(true)

      useEffect(()=>{
      const getExpense = async()=>{
        try {
           const response = await axios.get('http://localhost:3000/api/details/getExpense' , {withCredentials:true}) 
           setExpense(response.data.expense)
        } catch (error) {
            const errorMsg = error.response?.data?.message || error.message
            console.log("error" , errorMsg)
        }
        finally{
            setLoading(false)
        }
       }

       getExpense()
    },[])

    return(
        <ExpenseContext.Provider value={{
            expense,
            loading
        }}>
            {children}
        </ExpenseContext.Provider>
    )
}

export default ExpenseData