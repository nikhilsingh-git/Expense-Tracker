import { useContext, useState } from "react";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { useRef } from "react";
import axios from 'axios'

// recent catogarys
import { PiShoppingCartFill } from "react-icons/pi";
import { MdEmojiTransportation } from "react-icons/md";
import { SlEnergy } from "react-icons/sl";
import { FaShoppingBag } from "react-icons/fa";
import { LuPopcorn } from "react-icons/lu";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { MdCastForEducation } from "react-icons/md";
import { IoWalletSharp } from "react-icons/io5";
import { HiOutlineDotsHorizontal } from "react-icons/hi"
import { ExpenseContext } from "../context/ExpenseContext";


const ExpenseCreate = () =>{

const {expense} = useContext(ExpenseContext)

const {income} = useContext(ExpenseContext)

const [togel , setTogel] = useState(false)
const[errMsg , setErrMsg] = useState("")
const[expenseSuccess , setExpenseSuccess] = useState('')

const [incomeErrMsg , setIncomeErrMsg] = useState("")
const [successMsg , setsuccessMsg] = useState("")

const amount = useRef()
const category = useRef()
const paymentMode = useRef()
const date = useRef()
const description = useRef()

const addIncome = useRef()
const title = useRef()
// const date = useRef()

const handelIncomeClick = (e)=>{
    setTogel(true)
}

const handelExpenseClick = () =>{
    setTogel(false)
}

const onChange = () =>{
        setErrMsg("")
        setIncomeErrMsg("")
}

    const haldelOnExpense = async(e) =>{
         e.preventDefault()
        const expenseData = {
            amount:amount.current.value,
            category:category.current.value,
            paymentMode:paymentMode.current.value,
            date:date.current.value,
            description:description.current.value,
        }

        console.log(expenseData.paymentMode)
       try {

            const response = await axios.post('http://localhost:3000/api/details/expense' ,expenseData ,{withCredentials:true})
            setExpenseSuccess(response.data.message)
            console.log(response.data.message)
            amount.current.value= ""
            category.current.value= ""
            paymentMode.current.value= ""
            date.current.value= ""
            description.current.value= ""  
        } catch (error) {
            const errorMsg = error.response?.data?.message || error.message;
            setErrMsg(errorMsg)

            amount.current.value= ""
            category.current.value= ""
            paymentMode.current.value= ""
            date.current.value= ""
            description.current.value= ""  
        }

    }

    const handelOnCancelClick = (e) =>{
        e.preventDefault()
        
        amount.current.value= ""
        category.current.value= ""
        paymentMethod.current.value= ""
        date.current.value= ""
        discripton.current.value= "" 
    }

    const haldelOnIncome = async(e) =>{
        e.preventDefault()
        const addIncomeData ={
          addIncome:addIncome.current.value,
          title: title.current.value,
          date:date.current.value,
          paymentMode:paymentMode.current.value,
          description:description.current.value
        }

        try {
            const response = await axios.post('http://localhost:3000/api/auth/income' , addIncomeData ,{withCredentials:true})
            setsuccessMsg(response.data.message)
            
            addIncome.current.value=""
            title.current.value=""
            date.current.value=""
            paymentMode.current.value=""
            discription.current.value=""
        } catch (error) {
            const errorMsg = error.response?.data?.message || error.message
            setIncomeErrMsg(errorMsg)
        }
    }

    const handelOnIncomeCancel = (e) =>{
        e.preventDefault()
        addIncome.current.value=""
        title.current.value=""
        date.current.value=""
    }

return(
        <>
        <div> 
         <div className="ms-10 mt-10">
            <h1 className="text-cyan-400/60 text-4xl font-sans font-bold">
                Add Transaction
            </h1>
            <p className="text-gray-400 text-xl">Add a new income or expence</p>
         </div>

         <div className="flex justify-between px-20 mt-10">
            <div className="flex flex-col">
                <div className="flex border justify-around bg-[#071321] border-[#132739] rounded-2xl relative w-130 px-10 py-7">
                    <div onClick={(e)=>{handelExpenseClick()}}>
                    <FaArrowAltCircleDown className="absolute top-11 left-18 text-lg cursor-pointer" />
                    <button className="bg-[#4A2730] w-50 h-12 rounded-xl text-[#FF5B6A] text-lg font-sans font-bold cursor-pointer"> Add Expense</button>
                    </div>
                    <div onClick={ (e)=>handelIncomeClick(e)}>
                    <FaArrowAltCircleUp className="absolute top-11 left-73 text-lg cursor-pointer"/> 
                    <button className="bg-[#123A35] w-50 h-12 rounded-xl text-[#1ED7A5] text-lg font-sans font-bold cursor-pointer">Add incoms</button>
                    </div>
                </div>

                {togel ?
                <div className="bg-[#071321] border border-[#132739] rounded-2xl mt-0.5 pb-6 mb-10 text-gray-200">
                    <form onChange={onChange}>
                         <p className="text-lg font-sans font-medium text-red-400 mt-5 ms-10">
                            {incomeErrMsg}
                        </p>
                        <div className="flex flex-col font-sans font-medium mx-10">

                        <label htmlFor="" className="mt-5">Add Income (₹)</label>
                        <input type="text" name="amount"
                        className="h-10 rounded-md bg-[#112439] mt-2 mb-5 outline-0 px-5"
                        ref={addIncome}/>
                        
                        <label htmlFor="">Title</label>
                        <input type="text" name="category"
                        className="h-10 rounded-md bg-[#112439] mt-2 mb-5 outline-0 px-5" 
                        ref={title}/>
                        
                        <label htmlFor="">Data</label>
                        <input type="date" name="" id="" 
                        className="h-10 rounded-md bg-[#112439] mt-2 mb-5 outline-0 px-5"
                        ref={date}/>

                          <label htmlFor="">Payment Method</label>
                        <select name="" id="" 
                        className="h-10 rounded-md bg-[#112439] mt-2 mb-5 outline-0 px-5"
                        ref={paymentMode}>
                            <option value="">Select Payment Method</option>
                            <option value="Cash">Cash</option>
                            <option value="Credit Card">Credit Card</option>
                            <option value="Debit Card">Debit Card</option>
                            <option value="UPI">UPI</option>
                            <option value="Net Banking">Net Banking</option>
                        </select>

                        
                        <label htmlFor="">Description</label>
                        <textarea name="" id="" className="rounded-md bg-[#112439] mt-2 mb-5 outline-0 px-5"
                        rows={3}
                        ref={description}
                        ></textarea>

                        <div className="flex justify-around ">
                            <button className="bg-[#112439] w-45 h-11 rounded cursor-pointer"
                            onClick={(e)=>handelOnIncomeCancel(e)}>Cancel</button>
                            <button  className="bg-emerald-500 w-45 h-11 rounded cursor-pointer"
                            onClick={(e)=>haldelOnIncome(e)}>Add incom</button>
                        </div>
                        </div>
                    </form>
                </div>
                :<div className="bg-[#071321] border border-[#132739] rounded-2xl mt-0.5 pb-6 mb-10 text-gray-200">
                    <form onChange={onChange}>
                         <p className="text-lg font-sans font-medium text-red-400 mt-5 ms-10">
                            {errMsg}
                        </p>
                        <div className="flex flex-col font-sans font-medium mx-10">

                        <label htmlFor="" className="mt-5">Amount (₹)</label>
                        <input type="text" name="amount"
                        className="h-10 rounded-md bg-[#112439] mt-2 mb-5 outline-0 px-5"
                        ref={amount}/>
                        
                        <label htmlFor="">Category</label>
                        <input type="text" name="category"
                        className="h-10 rounded-md bg-[#112439] mt-2 mb-5 outline-0 px-5"
                        ref={category}/>

                        <label htmlFor="">Payment Method</label>
                        <select name="" id="" 
                        className="h-10 rounded-md bg-[#112439] mt-2 mb-5 outline-0 px-5"
                        ref={paymentMode}>
                            <option value="">Select Payment Method</option>
                            <option value="Cash">Cash</option>
                            <option value="Credit Card">Credit Card</option>
                            <option value="Debit Card">Debit Card</option>
                            <option value="UPI">UPI</option>
                            <option value="Net Banking">Net Banking</option>
                        </select>
                        
                        <label htmlFor="">Date</label>
                        <input type="date" name="" id="" 
                        className="h-10 rounded-md bg-[#112439] mt-2 mb-5 outline-0 px-5"
                        ref={date}/>

                        <label htmlFor="">Description</label>
                        <textarea name="" id="" className="rounded-md bg-[#112439] mt-2 mb-5 outline-0 px-5"
                        rows={3}
                        ref={description}
                        ></textarea>

                        <div className="flex justify-around ">
                            <button className="bg-[#112439] w-45 h-11 rounded cursor-pointer"
                            onClick={(e)=>handelOnCancelClick(e)}>Cancel</button>
                            <button className="bg-emerald-500 w-45 h-11 rounded cursor-pointer"
                            onClick={(e)=>haldelOnExpense(e)}>Add Transaction</button>
                        </div>
                        </div>
                    </form>
                </div> 
                }
            </div>
            <div className=" w-110 mb-10">
                <div className="bg-[#071321] h-100 border border-[#132739]  rounded-2xl px-12 ">
                    <h1 className="text-xl text-gray-300 pt-6 font-sans font-medium">Quick Category</h1>
                <div className=" grid grid-cols-3 grid-rows-3 gap-6 mt-5 ">
                    <div className="h-20 w-20 bg-[rgb(17,36,57)] rounded-xl gap-4 border border-[#132739] flex flex-col justify-center items-center cursor-pointer
                    hover:border- hover:border-emerald-400/50"
                    onClick={()=>category.current.value= "Food"}>
                       <div className="h-10 w-10 rounded-2xl text-gray-200 text-2xl bg-emerald-300/50 relative top-3">
                       <PiShoppingCartFill className="absolute top-2 left-2" />
                       </div>
                       <h1 className="text-xs font-medium font-sans text-gray-200 pb-3">Food</h1> 
                    </div>

                    <div className="h-20 w-20 bg-[#112439] rounded-xl gap-4 border border-[#132739] flex flex-col justify-center items-center cursor-pointer
                    hover:border- hover:border-orange-400"
                    onClick={()=>category.current.value= "Transport"}>
                       <div className="h-10 w-10 rounded-2xl text-gray-200 text-2xl bg-orange-400 relative top-3">
                       <MdEmojiTransportation className="absolute top-2 left-2" />
                       </div>
                       <h1 className="text-xs font-medium font-sans text-gray-200 pb-3">Transport</h1> 
                    </div>

                    <div className="h-20 w-20 bg-[#112439] rounded-xl gap-4 border border-[#132739] flex flex-col justify-center items-center cursor-pointer
                    hover:border- hover:border-blue-400"
                    onClick={()=>category.current.value= "Utilitis"}>
                       <div className="h-10 w-10 rounded-2xl text-gray-200 text-2xl bg-blue-400 relative top-3">
                       <SlEnergy className="absolute top-2 left-2" />
                       </div>
                       <h1 className="text-xs font-medium font-sans text-gray-200 pb-3">Utilitis</h1> 
                    </div>

                    <div className="h-20 w-20 bg-[#112439] rounded-xl gap-4 border border-[#132739] flex flex-col justify-center items-center cursor-pointer
                    hover:border- hover:border-purple-400"
                   onClick={()=>category.current.value= "Shopping"}>
                       <div className="h-10 w-10 rounded-2xl text-gray-200 text-2xl bg-purple-400 relative top-3">
                       <FaShoppingBag className="absolute top-2 left-2" />
                       </div>
                       <h1 className="text-xs font-medium font-sans text-gray-200 pb-3">Shopping</h1> 
                    </div>

                     <div className="h-20 w-20 bg-[#112439] rounded-xl gap-4 border border-[#132739] flex flex-col justify-center items-center cursor-pointer
                     hover:border- hover:border-red-400"
                     onClick={()=>category.current.value= "Entertainment"}>
                       <div className="h-10 w-10 rounded-2xl text-gray-200 text-2xl bg-red-400 relative top-3">
                       <LuPopcorn className="absolute top-2 left-2" />
                       </div>
                       <h1 className="text-xs font-medium font-sans text-gray-200 pb-3">Entertainment</h1> 
                    </div>

                     <div className="h-20 w-20 bg-[#112439] rounded-xl gap-4 border border-[#132739] flex flex-col justify-center items-center cursor-pointer
                     hover:border- hover:border-red-500"
                     onClick={()=>category.current.value= "Health"}>
                       <div className="h-10 w-10 rounded-2xl text-gray-200 text-2xl bg-red-500 relative top-3">
                       <FaHeartCirclePlus className="absolute top-2 left-2" />
                       </div>
                       <h1 className="text-xs font-medium font-sans text-gray-200 pb-3">Health</h1> 
                    </div>

                    <div className="h-20 w-20 bg-[#112439] rounded-xl gap-4 border border-[#132739] flex flex-col justify-center items-center cursor-pointer
                    hover:border- hover:border-cyan-400"
                    onClick={()=>category.current.value= "Education"}>
                       <div className="h-10 w-10 rounded-2xl text-gray-200 text-2xl bg-cyan-400 relative top-3">
                       <MdCastForEducation className="absolute top-2 left-2" />
                       </div>
                       <h1 className="text-xs font-medium font-sans text-gray-200 pb-3">Education</h1> 
                    </div>

                     <div className="h-20 w-20 bg-[#112439] rounded-xl gap-4 border border-[#132739] flex flex-col justify-center items-center cursor-pointer
                    hover:border- hover:border-green-500"
                    onClick={()=>category.current.value= "Salary"}>
                       <div className="h-10 w-10 rounded-2xl text-gray-200 text-2xl bg-green-500 relative top-3">
                       <IoWalletSharp className="absolute top-2 left-2" />
                       </div>
                       <h1 className="text-xs font-medium font-sans text-gray-200 pb-3">Salary</h1> 
                    </div>

                     <div className="h-20 w-20 bg-[#112439] rounded-xl gap-4 border border-[#132739] flex flex-col justify-center items-center cursor-pointer
                      hover:border- hover:border-gray-300/50"
                      onClick={()=>category.current.value="Other"}>
                       <div className="h-10 w-10 rounded-2xl text-gray-200 text-2xl bg-gray-300/50 relative top-3">
                       <HiOutlineDotsHorizontal className="absolute top-2 left-2" />
                       </div>
                       <h1 className="text-xs font-medium font-sans text-gray-200 pb-3">Other</h1> 
                    </div>

                </div>
                </div>

                <div className="w-110 h-70 border text- border-[#132739] rounded-xl mt-2 overflow-scroll scrollbar-hide bg-[#071321]">
                    <div>
                        <h1 className="text-gray-200 font-sans text-xl font-medium px-8 pt-4">Recent Transctions</h1>
                    </div>
                    <hr  className="border border-[#132739] mt-2 mx-6"/>
                    {expense.length === 0 ? 
                    <div className="text-center m-auto mt-15 h-15 w-30 border border-[#132739] flex justify-center items-center
                flex-col rounded-xl shadow-[0_0_20px_rgba(100,102,50,0.3)] cursor-pointer" >
                   <h1 className="text-sm text-gray-300 ">No Expense Yet!</h1>
                </div> :
                     <div className="py-3 px-5 flex flex-col gap-3">
                        {expense.map((item)=>
                         <div className="flex justify-between border border-[#132739] rounded-lg "
                         key={item._id}>
                        <div className="px-5">
                            <h1 className="text-gray-200">{item.category}</h1>
                            <p className="text-gray-400">{new Date (item.date).toLocaleDateString()}</p>
                        </div>
                        <div className=" px-5 text-red-400">
                           -{item.amount}
                        </div>
                    </div>
                        )}
                        {income.map((item)=>
                            <div className="flex justify-between border border-[#132739] rounded-lg "
                               key={item._id}>
                              <div className="px-5">
                               <h1 className="text-gray-200">{item.title}</h1>
                               <p className="text-gray-400">{new Date (item.date).toLocaleDateString()}</p>
                             </div>
                              <div className=" px-5 text-emerald-400">
                                 +{item.addIncome}
                             </div>
                           </div>
                        )}
                      
                    </div>
                    }
                   
                </div>

            </div>
         </div>
        </div>
        </>
    )

}

export default ExpenseCreate