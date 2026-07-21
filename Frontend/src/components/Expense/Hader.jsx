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
            <div className="flex justify-between items-center px-15 bg-[#19283b] w-full h-14 text-white">
                <div className="flex w-50 h-10 gap-3">
                    <img src={expenseTracker} alt="Hader image"
                    className="w-100% h-100%" />
                    <h1 className="mt-2 cursor-pointer underline text-md">Expense Tracker</h1>
                </div>
                <div>
                    <h1 className="text-xl font-sans font-semibold ">
                        Total Wallet &nbsp;:&nbsp;&nbsp;<span>{"\u20B9"}{wallet?.totalWallet}</span>
                    </h1>
                </div>
            </div>
        </>
    )
}

export default Hader