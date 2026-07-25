import { FaHome } from "react-icons/fa";
import { IoIosAddCircleOutline } from "react-icons/io";
import { VscGraph } from "react-icons/vsc";
import { RiFocus3Fill } from "react-icons/ri";
import { CiViewTimeline } from "react-icons/ci";
import profile from "../../assets/profile.png"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ProfileContext } from "../context/ProfileContext";

const Sidebaar = () =>{

    const {profileData} = useContext(ProfileContext)

    return(
        <>
            <div className="w-sm resize-x h-screen md:border md:border-r-cyan-400/20 flex flex-col bg-[#131c28] overflow-hidden">
              <div className="px-8">
                    <div className="text-cyan-300/50 py-10 font-bold font-sans text-xl underline uppercase hover:text-cyan-300/90 cursor-pointer ms-20">
                        <h1>Menu</h1>
                    </div>
                    <div className="text-cyan-500 flex flex-col gap-8 md:mt-20 ms-10 md:ms-0">
                        <Link to='/api/auth/client-handel'>
                        <div className="relative h-13 w-60 flex items-center justify-between font-medium font-sans bg-cyan-500/20 rounded-2xl
                        hover:bg-cyan-400/60 hover:text-gray-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] cursor-pointer hover:transition-all duration-500 ease-in-out">  
                            <h1 className="absolute left-8 text-xl font-medium"><FaHome /></h1>
                            <h1 className="absolute left-15">Dashboard</h1>
                        </div>
                        </Link>
                        <Link to='create-expence'>
                        <div className="relative h-13 w-60 flex items-center justify-between font-medium font-sans bg-cyan-500/20 rounded-2xl
                        hover:bg-cyan-400/60 hover:text-gray-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] cursor-pointer hover:transition-all duration-500 ease-in-out ">  
                            <h1 className="absolute left-8 text-xl font-medium"><IoIosAddCircleOutline /></h1>
                            <h1 className="absolute left-15">Add Transactions</h1>
                        </div>
                        </Link> 
                        <Link to='view-transactions'>
                         <div className="relative h-13 w-60 flex items-center justify-between font-medium font-sans bg-cyan-500/20 rounded-2xl
                        hover:bg-cyan-400/60 hover:text-gray-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] cursor-pointer hover:transition-all duration-500 ease-in-out ">  
                            <h1 className="absolute left-8 text-xl font-medium"><CiViewTimeline /></h1>
                            <h1 className="absolute left-15">view Transactions</h1>
                        </div>
                        </Link>
                        <Link to='analytics'>
                        <div className="relative h-13 w-60 flex items-center justify-between font-medium font-sans bg-cyan-500/20 rounded-2xl
                        hover:bg-cyan-400/60 hover:text-gray-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] cursor-pointer hover:transition-all duration-500 ease-in-out">  
                            <h1 className="absolute left-8 text-xl font-medium"><VscGraph /></h1>
                            <h1 className="absolute left-15">Analytics</h1>
                        </div>
                        </Link>
                    </div>
                </div >  
                     <div className="px-5 flex text-gray-300 relative">
                      <div className="w-10 h-10 mt-65 ms-0 rounded-full overflow-hidden ">
                        <img src={profileData?.inputFile} alt="" />
                      </div>
                      <div className="absolute top-65 left-19">
                        <h1 className="capitalize">{profileData?.fullName}</h1>
                      </div>
                      <div className="absolute top-70 left-19">
                        <h1 className="font-sm text-sm">{profileData?.email}</h1>
                      </div>
                    </div>
                </div>
               

        </>
    )

}

export default Sidebaar