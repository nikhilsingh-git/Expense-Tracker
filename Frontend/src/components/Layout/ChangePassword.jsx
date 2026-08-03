import { useContext, useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import api from "../Api/axios"

const ChangePassword = () =>{

    const navigate = useNavigate()
    const [showError , setShowError] = useState("")

    const oldPassword = useRef()
    const newPassword = useRef()
    const confirmNewPassword = useRef()

const changePasswordClicked = async(e) =>{
    e.preventDefault()

    const passwordData ={
        oldPassword :oldPassword.current.value,
        newPassword :newPassword.current.value,
        confirmNewPassword:confirmNewPassword.current.value
    }

      try {
            const response = await api.post('/api/auth/changePassword' , passwordData )
           
            alert(response.data.message)
            
            navigate('/api/auth/client-handel')
        } catch (error) {
            const errorMsg = error.response?.data?.message || error.message
            setShowError(errorMsg)
            
            oldPassword.current.value=""
             newPassword.current.value=""
            confirmNewPassword.current.value=""
        }


}

    return(
<>
    <div className="w-full h-screen md:h-auto md:mt-35 md:max-w-lg md:mx-auto bg-[#071321] border border-[#132739] rounded-2xl shadow-[0_0_25px_rgba(34,197,94,0.15)] p-8">
            <div className="mb-8 mt-6 md:mt-0 px-5 md:px-0">
                <h1 className="text-3xl font-bold text-white">
                Change Your Password
                </h1>

                <p className="mt-2 text-sm text-gray-400 leading-6">
                Keep your account secure by creating a strong password. Enter your
                current password and choose a new one that is unique and easy for
                you to remember.
                </p>
            </div>
            <div className="space-y-10 px-5 md:px-0">
                <h1 className="text-red-500 ms-5 font-sans font-medium">{showError}</h1>
                <form>
             <div>
                 <label className="block text-gray-300 mb-2 text-sm font-medium">
                Current Password
                </label>
                <input
                type="password"
                ref={oldPassword}
                onChange={()=>setShowError("")}
                placeholder="Enter your current password"
                className="w-full px-4 py-3 rounded-xl bg-[#0B1C2D] border border-[#1E3A52] text-white placeholder-gray-500 outline-none transition-all duration-300 focus:border-green-500 focus:ring-2 focus:ring-green-500/30"
                />
             </div>

            <div className="mt-8">
                <label className="block text-gray-300 mb-2 text-sm font-medium">
                    New Password
                </label>
                <input
                type="password"
                ref={newPassword}
                onChange={()=>setShowError("")}
                placeholder="Enter your new password"
                className="w-full px-4 py-3 rounded-xl bg-[#0B1C2D] border border-[#1E3A52] text-white placeholder-gray-500 outline-none transition-all duration-300 focus:border-green-500 focus:ring-2 focus:ring-green-500/30"
                />
            </div>

            <div className="mt-8">
                <label className="block text-gray-300 mb-2 text-sm font-medium">
                Confirm New Password
                </label>
                <input
                type="password"
                ref={confirmNewPassword}
                onChange={()=>setShowError("")}
                placeholder="Confirm your new password"
                className="w-full px-4 py-3 rounded-xl bg-[#0B1C2D] border border-[#1E3A52] text-white placeholder-gray-500 outline-none transition-all duration-300 focus:border-green-500 focus:ring-2 focus:ring-green-500/30"
                />
            </div>

            <div className="md:space-x-6 mt-5">
            <button
            className="md:w-50 md:mt-2 md:py-3 w-30 h-9 ms-5 md:ms-0 text-xs md:text-base rounded-xl bg-green-600 hover:bg-green-500 text-white font-semibold tracking-wide transition-all duration-300 shadow-[0_0_20px_rgba(34,197,94,0.35)] hover:scale-[1.02] active:scale-95 cursor-pointer"
            onClick={(e)=>changePasswordClicked(e)}>
            Update Password
            </button>
            
            <Link to={'/api/auth/client-handel'}>
            <button
            className="md:w-50 md:mt-2 md:py-3 w-30 h-9 ms-8 md:ms-0 text-xs md:text-base rounded-xl bg-transparent text-white font-semibold border border-[#132769] hover:bg-gray-300 hover:text-gray-900 cursor-pointer hover:scal-[-1.02] active:scale-95 tracking-wide transition-all duration-300 ease-in-out"
            >
            Back
            </button>
            </Link>
            </div>
            </form>
     </div>

    </div>
</>
    )
}

export default ChangePassword