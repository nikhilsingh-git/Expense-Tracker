import { IoReorderThree } from "react-icons/io5";
import expenseTracker from "../../assets/expenseTracker.png"
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbaar = () => {
    const navigate = useNavigate()
    const [isShow , setIsShow] = useState(false)

    const handleOnClick = () =>{
        setIsShow((prev)=> !prev)
    }
const contectClicked =() =>{
    navigate('/contect')
}

const aboutClicked = () =>{
    navigate('/about')
}

const ConditionClicked = () =>{
    navigate('/tram-condition')
}

    return (
    <>
        <div className="flex justify-between px-15 w-100% h-20 items-center font-serif font-semibold 
        text-md bg-gray-900 text-cyan-400/50">
            <div className="flex w-50 h-10 gap-3">
                <img src={expenseTracker} alt="Hader image"
                className="w-100% h-100%" />
            <Link to='/api/auth/login'><h1 className="mt-3 cursor-pointer hover:text-[rgb(0,212,255)] underline">Expense Tracker</h1></Link>
            </div>
            <div className="md:flex justify-around gap-8 hidden text-xl ">
                <h2 className="cursor-pointer hover:text-[rgb(0,212,255)] underline"
                onClick={ConditionClicked}>Trams & conditions</h2>
                <h2 className="cursor-pointer hover:text-[rgb(0,212,255)] underline"
                onClick={contectClicked}>Contect</h2>
                <h2 className="cursor-pointer hover:text-[rgb(0,212,255)] underline"
                onClick={aboutClicked}>About</h2>
            </div>
            <div className="hidden md:flex items-center gap-4">
            <Link
                to="/api/auth/login"
                className="px-5 py-2 rounded-lg border border-cyan-400 text-cyan-400 font-medium text-sm transition-all duration-300 hover:bg-cyan-400 hover:text-[#071321]"
                 >
                Login
            </Link>

            <Link
             to="/api/auth/register"
            className="px-5 py-2 rounded-lg bg-cyan-400 text-[#071321] font-semibold text-sm shadow-lg shadow-cyan-400/20 transition-all duration-300 hover:bg-cyan-300 hover:scale-105"
            >
         Sign Up
         </Link>
        </div>
            <div className="md:hidden cursor-pointer" 
            onClick={handleOnClick}>
                <h1 className="text-3xl"><IoReorderThree /></h1>
            </div>
        </div>

        {isShow === true &&
         <div className="bg-[#132c28] w-full py-5 transition-all duration-75 ease-in-out">
          <div className="flex flex-col gap-6 ">
            <Link
                to="/api/auth/login"
                className="px-5 py-2 rounded-lg border border-cyan-400 text-cyan-400 font-medium text-sm transition-all duration-300 hover:bg-cyan-400 hover:text-[#071321]"
                 >
                Login
            </Link>
            <Link
             to="/api/auth/register"
            className="px-5 py-2 rounded-lg bg-cyan-400 text-[#071321] font-semibold text-sm shadow-lg shadow-cyan-400/20 transition-all duration-300 hover:bg-cyan-300 hover:scale-105"
            >
         Sign Up
         </Link>
        </div>
       </div>    
    }
       
     </>

    )
}

export default Navbaar


// bg-[#38353d]