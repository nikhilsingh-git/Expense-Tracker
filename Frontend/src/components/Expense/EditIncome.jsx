import { useContext} from "react"
import { ExpenseContext } from "../context/ExpenseContext"
import { useRef } from "react"
import { useEffect } from "react"
import { WalletContext } from "../context/WalletContext"
import { ProfileContext } from "../context/ProfileContext"

const EditIncome = () =>{

    const addIncome = useRef()
    const title = useRef()
    const paymentMode = useRef()
    const date = useRef()
    const description = useRef()

    const {editIncomeData} = useContext(ExpenseContext)
    const {setPage} = useContext(ExpenseContext)
    const {singleIncome} = useContext(ExpenseContext)

    const {fatchProfile} = useContext(ProfileContext)
    const {fatchMonthlyExpense} = useContext(ProfileContext)
    const {fatchMonthlyIncome} = useContext(ProfileContext)
    const {fatchIncome} = useContext(ExpenseContext)
    const {fatchExpense} = useContext(ExpenseContext)
    const {fatchWalletData} = useContext(WalletContext)

    useEffect(()=>{
            addIncome.current.value = singleIncome?.addIncome
            title.current.value = singleIncome?.title
            paymentMode.current.value = singleIncome?.paymentMode
            date.current.value = singleIncome?.date ? new Date(singleIncome?.date).toISOString().split("T")[0] : ""
            description.current.value = singleIncome?.description  
    } ,[singleIncome])

    const incomeFormSubmit = async(e) =>{
          e.preventDefault()
        const incomeData = {}

        if(addIncome.current.value.trim()){
            incomeData.addIncome = addIncome.current.value
        } 
         if(title.current.value.trim()){
            incomeData.title = title.current.value
        }
        if(paymentMode.current.value.trim()){
            incomeData.paymentMode = paymentMode.current.value
        }  
        if(date.current.value.trim()){
            incomeData.date = date.current.value
        }  
        if(description.current.value.trim()){
            incomeData.description = description.current.value
        }  
        editIncomeData(incomeData)

           await fatchProfile();
    await fatchMonthlyExpense();
      await fatchMonthlyIncome();
      await fatchIncome();
      await fatchExpense();
      await fatchWalletData();
        setPage("view")
    }
    return(
        <>
        <div className="text-gray-300">
            <div className="text-center mt-15 ">
                <h1 className=" text-3xl font-sans font-bold underline">Edit Income</h1>
                <p>Update your income details quickly and keep your financial records accurate.</p>
            </div>
            <div className="w-200 m-auto mt-5 ">
                <form onSubmit={(e)=>incomeFormSubmit(e)}>
                        <div className="flex flex-col font-sans font-medium ms-5 py-10 ">
                        <label  className="my-2 font-sans font-medium text-md">Add Income (₹)</label>
                        <input type="text" name="amount"
                        placeholder="Add Income"
                        className=" h-12 w-full outline-0 border pl-5 bg-transparent focus:ring-1 focus:ring-blue-600  focus:outline-2 focus:outline-blue-600
                        rounded-xl mb-3" 
                        ref={addIncome} />
                        
                        <label  className="my-2 font-sans font-medium text-md">Title</label>
                        <input type="text" name="category"
                        placeholder="Amount"
                        className=" h-12 w-full outline-0 border pl-5 bg-transparent focus:ring-1 focus:ring-blue-600  focus:outline-2 focus:outline-blue-600
                        rounded-xl mb-3"
                        ref={title} />
                        
                        <label className="my-2 font-sans font-medium text-md">Data</label>
                        <input type="date" name="" id=""
                        placeholder="Amount"
                        className=" h-12 w-full outline-0 border pl-5 bg-transparent focus:ring-1 focus:ring-blue-600  focus:outline-2 focus:outline-blue-600
                        rounded-xl mb-3"
                        ref={date}/>

                          <label className="my-2 font-sans font-medium text-md">Payment Method</label>
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

                        
                        <label className="my-2 font-sans font-medium text-md">Description</label>
                        <textarea name="" id="" placeholder="Description..."
                        className="mb-10  w-full outline-0 border pl-5 bg-transparent focus:ring-1 focus:ring-blue-600  focus:outline-2 focus:outline-blue-600
                        rounded-xl  "
                        rows={3}
                        ref={description}></textarea>

                        <div className="flex justify-around">
                            <button type="button" className="bg-transparent border w-45 h-11 rounded-md cursor-pointer"
                            >Back</button>
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


export default EditIncome