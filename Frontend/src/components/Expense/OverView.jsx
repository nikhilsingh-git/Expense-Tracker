import { useContext } from 'react';
import { PieChart, Pie, Label } from 'recharts';
import { ExpenseContext } from '../context/ExpenseContext';

import { FcIdea } from "react-icons/fc";
import { RiDoubleQuotesL } from "react-icons/ri";



const OverView = () =>{

const {expense} = useContext(ExpenseContext)
const {income} = useContext(ExpenseContext)

 const MyPie = () => (
  <Pie data={expense} dataKey="amount" nameKey="category " outerRadius="80%" innerRadius="50%" isAnimationActive={false} />
);
    return(
        <>
        <div className="flex justify-around w-full text-white px-20 pt-5 pb-15 ">
            <div className="bg-[#071321] 0 w-90 h-80 rounded-md border border-[#132739] relative ">
                    <div className='absolute w-90 h-80 bottom-45 '>
                        <PieChart
                        responsive
                        className="w-60 h-60 mt-50"
                         >
                        <MyPie />
                        
                        <Label position="center" fill="#666">
                        Totel Expense
                       </Label>
                        </PieChart>
                    </div>
            </div>
                <div className="w-90 h-80 border border-[#132739] rounded-lg overflow-scroll scrollbar-hide bg-[#071321]">
                    <div>
                        <h1 className="text-gray-200 font-sans text-xl font-medium px-8 pt-3">Recent Transctions</h1>
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
            <div className="bg-[#071321] w-70 h-80 rounded-md border border-[#132739]">
                    <div className="mt-3 flex justify-center gap-2">
                       <h1 className='text-4xl'><FcIdea /></h1>
                       <h1 className='text-2xl font-medium font-sans pe-15'>Smart Tips</h1>
                    </div>
                    <hr className='text-[#132739] mt-2 mx-5'/>
                    <div className='ms-6  me-7 pb-2 text-gray-300'>
                        <ol className='list-disc ms-5 text-md font-sans font-medium'>
                            <li className='px-2 py-1'>Avoid unnecessary subscriptions.</li>
                            <li className='px-2 py-1'>Save at last 20% every month.</li>
                            <li className='px-2 py-1'>Track every expense daily.</li>
                            <li className='px-2 py-1'>Build an emergency fund for unexpected expenses.</li>
                            <li className='px-2 py-1'>Pay bills on time to avoid late fees.</li>
                        </ol>
                    </div>
            </div>
        </div>
        <div className=" h-20 bg-[#071321] rounded-2xl mb-4 text-gray-400 mx-5 flex justify-between items-center">
        <div className="">
            <h1 className='ms-12 text-2xl text-cyan-500'><RiDoubleQuotesL /></h1>
            <h1 className='ms-10 pl-10 font-sans font-medium'>A budget is telling your money where to go instead of wondering where it went.</h1>
        </div>
        <div className='h-25 w-25 pe-8 pt-3'>
            <img src="https://static.vecteezy.com/system/resources/thumbnails/020/954/110/small/business-chart-with-arrow-free-png.png" alt="" className='w-100% h-100%'/>
        </div>
        </div>
        </>
    )
}


export default OverView