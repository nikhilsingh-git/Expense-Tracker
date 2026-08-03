import profile from "../../assets/profile.png"
import { FaHome } from "react-icons/fa";
import { IoIosAddCircleOutline } from "react-icons/io";
import { VscGraph } from "react-icons/vsc";
import { RiFocus3Fill } from "react-icons/ri";
import { CiViewTimeline } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { ProfileContext } from "../context/ProfileContext";

const Sidebaar = () =>{

    const {profileData} = useContext(ProfileContext)
    const [showSide , setShowSide] = useState(false)

    const menuOnClicked = () =>{
      setShowSide((prev)=> !prev)
    }
    const clicked = () =>{
      setShowSide((prev)=> !prev)
    }
    return(
        <>
          <div className="text-cyan-300/50 bg-black py-3  font-bold font-sans text-md underline uppercase hover:text-cyan-300/90 cursor-pointer px-10 md:hidden">
            <div className="w-20 h-10"
            onClick={menuOnClicked}>
              menu
            </div>
          </div>
            <div className={`w-full md:w-sm resize-x md:h-screen h-100 md:border md:border-r-cyan-400/20 flex flex-col bg-[#131c28] overflow-hidden ${showSide ? "block" :"hidden"} md:block`}>  
              <div className="md:px-8 mt-8">
                    <div className="text-cyan-500 flex flex-col gap-8 md:mt-20 md:mx-2 mx-15">
                        <Link to='/api/auth/client-handel'>
                        <div className="relative md:h-13 h-10 w-60 flex items-center justify-between font-medium font-sans bg-cyan-500/20 rounded-2xl
                        hover:bg-cyan-400/60 hover:text-gray-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] cursor-pointer hover:transition-all duration-500 ease-in-out">  
                            <h1 className="absolute left-8 text-xl font-medium"><FaHome /></h1>
                            <h1 className="absolute left-15"
                            onClick={clicked}>Dashboard</h1>
                        </div>
                        </Link>
                        <Link to='create-expence'>
                        <div className="relative md:h-13 h-10 w-60 flex items-center justify-between font-medium font-sans bg-cyan-500/20 rounded-2xl
                        hover:bg-cyan-400/60 hover:text-gray-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] cursor-pointer hover:transition-all duration-500 ease-in-out ">  
                            <h1 className="absolute left-8 text-xl font-medium"><IoIosAddCircleOutline /></h1>
                            <h1 className="absolute left-15"
                            onClick={clicked}>Add Transactions</h1>
                        </div>
                        </Link> 
                        <Link to='view-transactions'>
                         <div className="relative md:h-13 h-10 w-60 flex items-center justify-between font-medium font-sans bg-cyan-500/20 rounded-2xl
                        hover:bg-cyan-400/60 hover:text-gray-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] cursor-pointer hover:transition-all duration-500 ease-in-out ">  
                            <h1 className="absolute left-8 text-xl font-medium"><CiViewTimeline /></h1>
                            <h1 className="absolute left-15"
                            onClick={clicked}>view Transactions</h1>
                        </div>
                        </Link>
                        <Link to='analytics'>
                        <div className="relative md:h-13 h-10 w-60 flex items-center justify-between font-medium font-sans bg-cyan-500/20 rounded-2xl
                        hover:bg-cyan-400/60 hover:text-gray-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] cursor-pointer hover:transition-all duration-500 ease-in-out">  
                            <h1 className="absolute left-8 text-xl font-medium"><VscGraph /></h1>
                            <h1 className="absolute left-15"
                            onClick={clicked}>Analytics</h1>
                        </div>
                        </Link>
                    </div>
                </div >  
                     <div className="px-5 flex text-gray-300 relative my-10 mx-7">
                      <div className="w-10 h-10 md:mt-65 ms-0 rounded-full overflow-hidden ">
                        <img src={profileData?.inputFile ? profileData.inputFile : profile } alt="" />
                      </div>
                      <div className="absolute md:top-65 left-19">
                        <h1 className="capitalize">{profileData?.fullName}</h1>
                      </div>
                      <div className="absolute md:top-70 top-4.5 left-19">
                        <h1 className="font-sm text-sm">{profileData?.email}</h1>
                      </div>
                    </div>
                </div>
               

        </>
    )

}

export default Sidebaar