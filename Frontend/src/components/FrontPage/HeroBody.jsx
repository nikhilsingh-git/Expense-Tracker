import { CiLogin } from "react-icons/ci";
import { FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

const HeroBody = () => {
  return (
    <>
      <hr className="border-[rgb(0,212,255)]" />
      <div className="w-full h-auto bg-[#131c28] text-gray-400 text-center  ">
        <div>
          <h1 className="text-5xl pt-20 px-10 font-serif font-bold text-[rgb(0,212,255)]">
            Smart Expense Tracking System
          </h1>
          <p className="text-md pt-5 px-10">
            {" "}
            Manage your income, expenses, and full transaction history in one
            secure place. Built like a modern <br />
            fintech dashboard with real-time tracking and structured data
            control.
          </p>
          <Link to="/api/auth/login">
            <div
              className="bg-[rgb(0,212,255)] w-35 h-10 text-black m-auto flex justify-around px-3 mt-10 mb-25 rounded-xl
             hover:cursor-pointer hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:transition-all duration-700 ease-in-out hover:text-white"
            >
              <h1>
                <CiLogin className="mt-3 text-xl " />
              </h1>
              <h1 className="mt-2 font-sans font-semibold">Get Started</h1>
            </div>
          </Link>
        </div>
        <div className="border-t border-cyan-400/20 hover:border-cyan-500/50">
          <div className=" mt-17 relative">
            <FaLock className="text-[rgb(0,212,255)] text-3xl  absolute left-[5%] sm:left-[8%] md:left-[15%] lg:left-[25%] top-1" />
            <h1 className="text-4xl font-serif font-bold text-[rgb(0,212,255)] mt-7 px-10">
              &nbsp;Built for Real Finance Control
            </h1>
          </div>
          <p className="mt-3 pb-20 px-10">
            Every transaction is tracked with unique IDs, secure user accounts,
            and full history logging just like real banking systems.
          </p>
        </div>
        <hr className="border-[rgb(4,52,61)]" />
      </div>
    </>
  );
};

export default HeroBody;
