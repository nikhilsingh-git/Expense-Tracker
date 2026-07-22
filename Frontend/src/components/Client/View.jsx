import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { ExpenseContext } from "../context/ExpenseContext"

import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { IoChevronBackCircle } from "react-icons/io5";

const View = () =>{

    const {loading} = useContext(ExpenseContext)
    const {expense} = useContext(ExpenseContext)
    const {income} = useContext(ExpenseContext)

     const [getExpenseId , setGetExpenseId] = useState(null)
     const [getIncomeId , setGetIncomeId] = useState(null)
    if (loading) {
    return (
        <div className="flex h-screen items-center justify-center bg-gray-950 text-cyan-400 text-xl font-bold">
            Loading Transaction...
        </div>
        )
    }

    return(<>
       <div>
           <div className="ms-10 mt-10">
            <h1 className="text-cyan-400/60 text-4xl font-sans font-bold">
                View Transaction
            </h1>
            <p className="text-gray-400 text-xl">See and manage all transactions.</p>
         </div>

         <div>
            <div className=" text-gray-200 bg-[#071321] h-140 my-20 mx-20 overflow-scroll scrollbar-hide rounded-2xl shadow-[0_0_20px_rgba(100,102,50,0.3)]">
                {expense.length === 0 && income.length === 0? <div className="text-center m-auto mt-53 h-30 w-60 border border-[#132739] flex justify-center items-center
                flex-col rounded-2xl shadow-[0_0_20px_rgba(100,102,50,0.3)] cursor-pointer" >
                   <h1 className="text-2xl text-gray-300 ">No Expense Yet!</h1>
                   <p className="text-md text-gray-400 ">Add Expense...</p>
                </div>:
                 <table className="w-full table-fixed border border-[#132739] ">
                    <thead className="h-15 px-8 bg-slate-700 border-b border-[#132739] sticky top-0 z-100 ">
                      <tr>
                        <th className="text-left px-10">Date</th>
                        <th className="text-left px-10">Category</th>
                        <th className="text-left px-10">Amount</th>
                        <th className="text-left px-10">Payment</th>
                        <th className="text-left px-10">Description</th>
                      </tr>
                    </thead>

                    <tbody className="cursor-grabbing">
                        
                        {expense.map((item)=>
                          <tr className="border-b border-[#132739] hover:bg-[#132230] px-8 h-15 rounded-2xl transition duration-500 ease-in-out
                        cursor-pointer"
                          key={item._id}
                          onClick={()=>{
                             setGetExpenseId(getExpenseId === item._id ? null : item._id)
                        }
                          } > 
                            <td className="text-left px-10">
                                {new Date(item.date).toLocaleDateString("en-IN", {
                                    day: "2-digit",
                                    month: "short",
                                    year: "numeric",
                                })}</td>
                            <td className="text-left px-10">{item.category}</td>
                            <td className="text-left px-10 text-red-400">-{item.amount}</td>
                            <td className="text-left px-10">{item.paymentMode}</td>
                            <td className="text-left px-10 relative">
                                {item.discription}

                            {getExpenseId === item._id && (
                           <div className="absolute text-gray-950 bg-gray-300 w-30 h-49 rounded-2xl text-center text-xl font-medium font-sans">
                            <ul className="">
                                <li className="my-7 relative">
                                <h1 className="absolute top-1 left-3 text-2xl"> <IoChevronBackCircle /></h1>
                                <h1>back</h1>
                                </li>
                                <li className="my-7 relative text-blue-500">
                                  <h1 className="absolute top-1 left-3 text-2xl"><CiEdit /></h1>
                                 <h1>Edit</h1>
                                </li>
                                <li className="my-7 relative text-red-500">
                                    <h1 className="absolute top-0.5 left-2 text-2xl"><MdDelete /></h1>
                                    <h1>Delete</h1>
                                </li>
                            </ul>
                            </div>
                            )}
                            </td>
                        </tr> 
                        )}

                        {income.map((value)=>
                          <tr className="border-b border-[#132739] hover:bg-[#132230] px-8 h-15 rounded-2xl transition duration-500 ease-in-out
                        cursor-pointer "
                          key={value._id}
                          onClick={()=>{
                            setGetIncomeId(getIncomeId === value._id ? null : value._id)
                          }
                          }>
                            <td className="text-left px-10">
                                {new Date(value.date).toLocaleDateString("en-IN", {
                                    day: "2-digit",
                                    month: "short",
                                    year: "numeric",
                                })}</td>
                            <td className="text-left px-10">{value.title}</td>
                            <td className="text-left px-10 text-emerald-400">
                                +{value.addIncome}
                            
                            </td>
                            <td className="text-left px-10">{value.paymentMode}</td>
                            <td className="text-left px-10 relative ">
                                {value.discription}
                            {getIncomeId === value._id && (
                            <div className="absolute text-gray-950 bg-gray-300 w-30 h-49 rounded-2xl text-center text-xl font-medium font-sans">
                            <ul className="">
                             <li className="my-7 relative">
                                <h1 className="absolute top-1 left-3 text-2xl"> <IoChevronBackCircle /></h1>
                                <h1> back</h1>
                             </li>
                             <li className="my-7 relative text-blue-500">
                                <h1 className="absolute top-1 left-3 text-2xl"><CiEdit /></h1>
                                <h1>Edit</h1>
                             </li>
                            <li className="my-7 relative text-red-500" >
                              <h1 className="absolute top-0.5 left-2 text-2xl"><MdDelete /></h1>
                                <h1>Delete</h1>
                            </li>
                          </ul>
                            </div>
                            )}
                            </td>
                        </tr> 
                        )}
                        
                    </tbody>
                </table>}
                 
            </div>    
         </div>
       </div>

    </>)
}

export default View