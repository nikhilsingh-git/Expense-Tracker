import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useContext, useRef, useState } from "react"
import { ExpenseContext } from "../context/ExpenseContext"

const EditExpense = () =>{

const amount = useRef()
const category = useRef()
const paymentMode = useRef()
const date = useRef()
const Description = useRef()

const[errMsg , setErrmsg] = useState("")
const {getExpenseId} = useContext(ExpenseContext)

const navigate = useNavigate()

    const ExpenseFormSubmit = async(e) =>{
          e.preventDefault()
          console.log(getExpenseId)
        const expenseData = {
             amount:amount.current.value,
             category:category.current.value,
             paymentMode:paymentMode.current.value,
             date:date.current.value,
             Description:Description.current.value,
        }

        try {
            const response = await axios.patch(`http://localhost:3000/api/expense/edit/${getExpenseId}` ,expenseData , {withCredentials:true})
            console.log(response.data)
            navigate('/api/auth/client-handel/view-transactions')
        } catch (error) {
            const errorMsg = error.response?.data?.message || error.message
            setErrmsg(errorMsg)
        }
        
        amount.current.value=""
        category.current.value=""
        paymentMode.current.value=""
        date.current.value=""
        Description.current.value=""
    
    }

    return (
        <>
        <div>
            <div className="text-center mt-15 ">
                <h1 className=" text-3xl font-sans font-bold underline">Edit Expense</h1>
                <p>Review and update your expense details before saving.</p>
            </div>
            <div className="w-200 m-auto mt-5 ">
                <form onSubmit={(e)=>ExpenseFormSubmit(e)}>
                         
                        <div className="flex flex-col font-sans font-medium ms-5 py-10 ">
                        <p className="text-lg font-sans font-medium text-red-400 mb-5">
                           {errMsg}
                        </p>
                        <label htmlFor="" className="my-2 font-sans font-medium text-md">Amount (₹)</label>
                        <input type="text" name="amount"
                        placeholder="Amount"
                        className=" h-12 w-full outline-0 border pl-5 bg-transparent focus:ring-1 focus:ring-blue-600  focus:outline-2 focus:outline-blue-600
                        rounded-xl mb-3"
                        ref={amount}  />
                        
                        <label htmlFor="" className="my-2 font-sans font-medium text-md">Category</label>
                        <input type="text" name="category"
                        placeholder="Amount"
                        className=" h-12 w-full outline-0 border pl-5 bg-transparent focus:ring-1 focus:ring-blue-600  focus:outline-2 focus:outline-blue-600
                        rounded-xl mb-3"
                        ref={category} />
                        
                        <label htmlFor="" className="my-2 font-sans font-medium text-md">Data</label>
                        <input type="date" name="" id=""
                        placeholder="Amount"
                        className=" h-12 w-full outline-0 border pl-5 bg-transparent focus:ring-1 focus:ring-blue-600  focus:outline-2 focus:outline-blue-600
                        rounded-xl mb-3"
                        ref={date}/>

                          <label htmlFor="" className="my-2 font-sans font-medium text-md">Payment Method</label>
                        <select name="" id=""
                        className=" h-12 w-full outline-0 border pl-5 bg-transparent focus:ring-1 focus:ring-blue-600  focus:outline-2 focus:outline-blue-600
                        rounded-xl mb-3"
                        ref={paymentMode}>
                            <option value="">Select Payment Method</option>
                            <option value="Cash">Cash</option>
                            <option value="Credit Card">Credit Card</option>
                            <option value="Debit Card">Debit Card</option>
                            <option value="UPI">UPI</option>
                            <option value="Net Banking">Net Banking</option>
                        </select>

                        
                        <label htmlFor="" className="my-2 font-sans font-medium text-md">Description</label>
                        <textarea name="" id="" placeholder="Description..."
                        className="mb-10  w-full outline-0 border pl-5 bg-transparent focus:ring-1 focus:ring-blue-600  focus:outline-2 focus:outline-blue-600
                        rounded-xl  "
                        ref={Description}
                        rows={3}></textarea>

                        <div className="flex justify-around">
                            <button className="bg-transparent border w-45 h-11 rounded-md cursor-pointer"
                            >Cancel</button>
                            <button type="submit" className="bg-emerald-500 w-45 h-11 rounded-lg border cursor-pointer"
                            >Update</button>
                        </div>
                        </div>
                    </form>

            </div>
        </div>
        </>
    )
}

export default EditExpense