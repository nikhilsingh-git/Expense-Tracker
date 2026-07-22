 import { createContext } from "react";
 import { useState } from "react";
 import { useEffect } from "react";
 import axios from "axios";

export const ExpenseContext = createContext()

const ExpenseData = ({children}) =>{

     const [expense , setExpense] = useState([])
     const [loading , setLoading] = useState(true)

     const [income , setIncome] = useState()

      useEffect(()=>{
      const getExpense = async()=>{
        try {
           const response = await axios.get('http://localhost:3000/api/details/getExpense' , {withCredentials:true}) 
           setExpense(response.data.expense)
        } catch (error) {
            const errorMsg = error.response?.data?.message || error.message
        }
        finally{
            setLoading(false)
        }
       }

       getExpense()
    },[])

    useEffect(()=>{
        const getAllIncome = async()=>{
          
            try {
                const response = await axios.get('http://localhost:3000/api/auth/getAllIncome' , {withCredentials:true})
                setIncome(response.data.allIncome)
            } catch (error) {
                const errorMsg = error.response?.data?.message || error.message
            }
        }

        getAllIncome()
    })


    return(
        <ExpenseContext.Provider value={{
            expense,
            loading,
            income
        }}>
            {children}
        </ExpenseContext.Provider>
    )
}

export default ExpenseData