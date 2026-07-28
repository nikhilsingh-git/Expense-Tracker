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
     const[singleExpense , setSingleExpense] = useState() 
     const[singleIncome , setSingleIncome] = useState() 
    const [page , setPage] = useState("view")

    const [expenseId , setExpenseId] = useState(null)
    const [incomeId , setIncomeId] = useState(null)

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
        setPage("expense")
        
        const getSingleExpense = await expense.find((item)=>item._id === expenseId)
        setSingleExpense(getSingleExpense)
    }

    const haldelOnIncomeEdit = async() =>{
        setPage("income")
        const getSingleIncome = await income.find((item)=> item._id === incomeId)
        setSingleIncome(getSingleIncome)
       
    }

    const handelOnExpenseDelete = async() =>{
    try {
            const response = await axios.delete(`http://localhost:3000/api/expense/deleteExpense/${getExpenseId}` , {withCredentials:true})
            alert('You want to Expense Delete')
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
              alert('You want to Income Delete')
            console.log(response.data)
        } catch (error) {
            const errorMsg = error.response?.data?.message || error.message
            console.log(errorMsg)
        }
    } 

    const editExpenseData = async(ExpenseData) =>{
        try {
            console.log(ExpenseData)
            const response = await axios.patch(`http://localhost:3000/api/expense/edit/${expenseId}` , ExpenseData , {withCredentials : true})
            console.log(response.data)
        } catch (error) {
            const errMsg = error.response?.data?.error || error.message
            console.log(errMsg)
        }
    }

    const editIncomeData = async(incomeData) =>{
        try {
            console.log(incomeData)
            console.log(incomeId)
            const response = await axios.patch(`http://localhost:3000/api/auth/editIncome/${incomeId}` , incomeData , {withCredentials:true})
            console.log(response.data)
        } catch (error) {
            const errMsg = error.response?.data?.error || error.message
            console.log(errMsg)
        }
    }
  
    return(
        <ExpenseContext.Provider value={{
            expense,
            loading,
            income,
            getIncomeId,
            getExpenseId,
            page,
            singleIncome,
            singleExpense,
            editIncomeData,
            setPage,
            setExpenseId,
            setIncomeId,
            handelOnBack,
            setGetExpenseId,
            setGetIncomeId,
            handelOnExpenseEdit,
            handelOnExpenseDelete,
            handelOnIncomeDelete,
            haldelOnIncomeEdit,
            editExpenseData
            
        }}>
            {children}
        </ExpenseContext.Provider>
    )
}

export default ExpenseData