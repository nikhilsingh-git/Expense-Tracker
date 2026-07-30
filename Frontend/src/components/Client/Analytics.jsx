import { useContext } from "react"
import { ExpenseContext } from "../context/ExpenseContext"
import { WalletContext } from "../context/WalletContext"


import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';

const Analytics = () =>{
 const {expense} = useContext(ExpenseContext)
 const {wallet} = useContext(WalletContext)

    return(
        <>
       <div>
           <div className="ms-10 mt-10">
            <h1 className="text-cyan-400/60 text-4xl font-sans font-bold">
                Analytics
            </h1>
            <p className="text-gray-400 text-xl">Insights about your income,expenses and savings.</p>
         </div>
{expense.length === 0 ? 
<div className="m-auto mt-50 w-100 h-10 text-center">
  <h1 className="text-gray-50 text-3xl font-bold font-sans">
    No Expenses
  </h1>
  <p className="text-gray-300 mt-2 text-md leading-6 font-sans font-medium">Your expense list is empty. Add your first expense to begin tracking your spending.</p>
</div>  :

<div className="w-full mt-20 max-h-screen border border-[#132739]  bg-[#071321] ">    
 <AreaChart
     className="w-full max-w-[1149px] max-h-[70vh] aspect-[1.618]"
    responsive
    data={expense}
    margin={{ top:50, right: 30, left: 30, bottom: 30 }}
  >
    <defs>
      <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
        <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
      </linearGradient>
      <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
      </linearGradient>
    </defs>
    <XAxis dataKey="category" />
    <YAxis width="auto" dataKey="amount" />
    <Tooltip />
    <Area
      type="monotone"
      dataKey="category"
      stroke="#8884d8"
      fillOpacity={1}
      fill="url(#colorUv)"
    />
    <Area
      type="monotone"
      dataKey="amount"
      stroke="#82ca9d"
      fillOpacity={1}
      fill="url(#colorPv)"
    />
  </AreaChart>
</div>
}
</div>

</>
    )
}

export default Analytics




   


