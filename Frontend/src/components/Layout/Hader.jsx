import { useContext } from "react"
import expenseTracker from "../../assets/expenseTracker.png"
import { WalletContext } from "../context/WalletContext"

const Hader = () =>{
  
   const {loading} = useContext(WalletContext)
   const {wallet} = useContext(WalletContext)

   if (loading) {
    return (
        <div className="flex h-screen items-center justify-center bg-gray-950 text-cyan-400 text-xl font-bold">
            Loading Dashboard...
        </div>
        )
    }

    return(
        <>
            <div className="flex justify-between items-center md:px-15 px-5 bg-[#19283b] w-full h-14 text-white">
                <div className="flex w-50 h-10 gap-3">
                    <img src={expenseTracker} alt="Hader image"
                    className="w-100% h-100%" />
                    <h1 className="mt-2 cursor-pointer underline md:text-md text-sm">Expense Tracker</h1>
                </div>
                <div>
                    <h1 className="md:text-lg text-[13.5px]">
                       <span className="font-medium font-sans">Total Wallet</span>&nbsp;:&nbsp;&nbsp;<span className="text-emerald-400 font-sans font-bold cursor-pointer">{"\u20B9"}{wallet?.totalWallet || 0}</span>
                    </h1>
                </div>
            </div>
        </>
    )
}

export default Hader