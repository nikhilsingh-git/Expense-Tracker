
import {useContext, useEffect, useRef, useState } from "react"
import { ExpenseContext } from "../context/ExpenseContext"

const EditExpense = () =>{

const amount = useRef()
const category = useRef()
const paymentMode = useRef()
const date = useRef()
const description = useRef()

const {editExpenseData} = useContext(ExpenseContext)
const {singleExpense} = useContext(ExpenseContext)
const {setPage} = useContext(ExpenseContext)
const[errMsg , setErrmsg] = useState("")

useEffect(()=>{
        amount.current.value = singleExpense?.amount
        category.current.value = singleExpense?.category
        paymentMode.current.value = singleExpense?.paymentMode
        date.current.value = singleExpense?.date ? new Date(singleExpense?.date).toISOString().split("T")[0] : ""
        description.current.value = singleExpense?.description  
} ,[singleExpense])

    const expenseFormSubmit = async(e) =>{
          e.preventDefault()
        const expenseData = {
          
        }

    if (amount.current.value.trim())
    expenseData.amount = amount.current.value;

    if (category.current.value.trim())
    expenseData.category = category.current.value;

    if (paymentMode.current.value.trim())
    expenseData.paymentMode = paymentMode.current.value;

    if (date.current.value)
    expenseData.date = date.current.value;

    if (description.current.value.trim())
    expenseData.description = description.current.value;

        editExpenseData(expenseData)
        setPage("view")
        
        amount.current.value = ""
        category.current.value=""
        paymentMode.current.value=""
        date.current.value=""
        Description.current.value=""
    }

    return (
        <>
        <div className="text-gray-300">
            <div className="text-center mt-15 ">
                <h1 className=" text-3xl font-sans font-bold underline">Edit Expense</h1>
                <p>Review and update your expense details before saving.</p>
            </div>
            <div className="w-200 m-auto mt-5 ">
                <form onSubmit={(e)=>expenseFormSubmit(e)}>
                         
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
                        placeholder="Category"
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
                        ref={description}
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