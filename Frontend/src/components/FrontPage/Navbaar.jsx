import { IoReorderThree } from "react-icons/io5";
import expenseTracker from "../../assets/expenseTracker.png"
import { Link } from "react-router-dom";

const Navbaar = () => {

    return (
    
        <div className="flex justify-between px-15 w-100% h-20 items-center font-serif font-semibold 
        text-md bg-gray-900 text-cyan-400/50">
            <div className="flex w-50 h-10 gap-3">
                <img src={expenseTracker} alt="Hader image"
                className="w-100% h-100%" />
            <Link to='/api/auth/login'><h1 className="mt-3 cursor-pointer hover:text-[rgb(0,212,255)] underline">Expense Tracker</h1></Link>
            </div>
            <div className="md:flex justify-around gap-8 hidden text-xl ">
                <h2 className="cursor-pointer hover:text-[rgb(0,212,255)] underline">Trams & conditions</h2>
                <h2 className="cursor-pointer hover:text-[rgb(0,212,255)] underline">Contect</h2>
                <h2 className="cursor-pointer hover:text-[rgb(0,212,255)] underline">About</h2>
            </div>
            <div className="md:flex justify-around gap-5 hidden cursor-pointer hover:text-[rgb(0,212,255)]">
                <Link to='/api/auth/login'><h1 className="text-[15px] hover:underline">Login</h1></Link>
                <Link to='/api/auth/register'><h1 className="md:text-sm text-[15px] hover:underline">Sing up</h1></Link>
            </div>
            <div className="md:hidden">
                <h1 className="text-3xl"><IoReorderThree /></h1>
            </div>
        </div>

    )
}

export default Navbaar


// bg-[#38353d]