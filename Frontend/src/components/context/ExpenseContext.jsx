 import { createContext } from "react";
 import { useState } from "react";
 import { useEffect } from "react";
 import axios from "axios";
import { useNavigate } from "react-router-dom";

export const ExpenseContext = createContext()

const ExpenseData = ({children}) =>{

     const [expense , setExpense] = useState([])
     const [loading , setLoading] = useState(true)

     const [income , setIncome] = useState()
     const [togel , setTogel] = useState(false)
     const [getExpenseId , setGetExpenseId] = useState(null)
     const [getIncomeId , setGetIncomeId] = useState(null)

     const navigate = useNavigate()

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

    const handelOnBack = () =>{
        setGetExpenseId(null)
        setGetIncomeId(null)
     }

    const handelOnExpenseEdit = async() =>{
        navigate('/expenseEdit')
    }

    const haldelOnIncomeEdit = async() =>{
        navigate('/incomeEdit')
    }

    const handelOnExpenseDelete = async() =>{
    try {
            const response = await axios.delete(`http://localhost:3000/api/expense/deleteExpense/${getExpenseId}` , {withCredentials:true})
            console.log(response.data)
        } catch (error) {
            const errorMsg = error.response?.data?.message || error.message
            console.log(errorMsg)
        }
    } 

    const handelOnIncomeDelete = async() =>{
    try {
            console.log("Income delete Click!")
            const response = await axios.delete(`http://localhost:3000/api/auth/deleteIncome/${getIncomeId}` , {withCredentials:true})
            console.log(response.data)
        } catch (error) {
            const errorMsg = error.response?.data?.message || error.message
            console.log(errorMsg)
        }
    } 
  
    return(
        <ExpenseContext.Provider value={{
            expense,
            loading,
            income,
            getIncomeId,
            getExpenseId,
            togel,
            handelOnBack,
            setGetExpenseId,
            setGetIncomeId,
            handelOnExpenseEdit,
            handelOnExpenseDelete,
            handelOnIncomeDelete,
            haldelOnIncomeEdit
            
        }}>
            {children}
        </ExpenseContext.Provider>
    )
}

export default ExpenseData