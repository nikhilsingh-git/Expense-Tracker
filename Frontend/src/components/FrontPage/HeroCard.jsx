import { AiFillCreditCard } from "react-icons/ai";
import { RiSecurePaymentFill } from "react-icons/ri";
import { GrAnalytics } from "react-icons/gr";
import { MdOutlineSystemUpdateAlt } from "react-icons/md";

const HeroCard =()=>{

    return(
        <>
         <div className="w-full h-auto bg-[#0b0f14] md:flex justify-center gap-10 py-20 px-15 font-serif">
                <div className="rounded-xl md:w-100 h-auto text-center relative bg-[#131c28] cursor-pointer shadow-[0_0_20px_rgba(6,182,212,0.5)]
                 animate-pulse hover:border-1 hover:border-[rgb(6,128,152)] my-10">
                    <div className="flex py-5">
                    <h1 className="font-semibold text-xl mt-4 text-[rgb(0,212,255)] absolute md:left-8 left-5"><AiFillCreditCard /></h1>      
                    <h1 className="font-semibold text-xl mt-3 p-0 m-0 text-[rgb(0,212,255)] uppercase ms-5 ">Income & Expense Tracking</h1> 
                    </div> 
                    <p className="pb-6 text-gray-400">Log all financial activities in real time with instant
                         updates and categorization </p>
                </div>
                  <div className="rounded-xl md:w-100 h-auto text-center relative bg-[#131c28] cursor-pointer shadow-[0_0_20px_rgba(6,182,212,0.5)] 
                  animate-pulse hover:border-1 hover:border-[rgb(6,128,152)] my-10">
                    <div className="flex py-5">
                    <h1 className="font-semibold text-xl mt-4 text-[rgb(0,212,255)] absolute md:left-4 left-2"><RiSecurePaymentFill /></h1>      
                    <h1 className="font-semibold text-xl mt-3 p-0 m-0 text-[rgb(0,212,255)] uppercase md:ms-12 ms-8">Secure User System</h1> 
                    </div> 
                    <p className="pb-6 text-gray-400">Each user has a private account ensuring data isolation and security. </p>
                </div>
                  <div className="rounded-xl md:w-100 h-auto text-center relative bg-[#131c28] cursor-pointer shadow-[0_0_20px_rgba(6,182,212,0.5)]
                   animate-pulse hover:border-1 hover:border-[rgb(6,128,152)] my-10">
                    <div className="flex py-5">
                    <h1 className="font-semibold text-xl mt-4 text-[rgb(0,212,255)] absolute md:left-12 left-5"><GrAnalytics /></h1>      
                    <h1 className="font-semibold text-xl mt-3 p-0 m-0 text-[rgb(0,212,255)] uppercase md:ms-20 ms-12 ">Smart Analytics</h1> 
                    </div> 
                    <p className="pb-6 text-gray-400">Understand your spending habits with clear financial insights and summaries.</p>
                </div>
                  <div className="rounded-xl md:w-100 h-auto text-center relative bg-[#131c28] cursor-pointer shadow-[0_0_20px_rgba(6,182,212,0.5)] 
                  animate-pulse hover:border-1 hover:border-[rgb(6,128,152)] my-10">
                    <div className="flex py-5">
                    <h1 className="font-semibold text-xl mt-4 text-[rgb(0,212,255)] absolute md:left-12 left-8 "><MdOutlineSystemUpdateAlt /></h1>      
                    <h1 className="font-semibold text-xl mt-3 p-0 m-0 text-[rgb(0,212,255)] uppercase md:ms-10 ms-6">Transaction ID System</h1> 
                    </div> 
                    <p className="pb-6 text-gray-400">Every record generates a unique TXN-ID for tracking like real fintech platforms. </p>
                </div>
       </div>
        </>
    )

}

export default HeroCard