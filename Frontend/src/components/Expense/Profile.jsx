import profile from "../../assets/profile.png"
import { useContext } from "react"
import { ProfileContext } from "../context/ProfileContext"
import { useNavigate } from "react-router-dom"

const Profile = () =>{

    const {profileData} = useContext(ProfileContext)
    const navigate = useNavigate()

   const editProfileChange = (e)=>{
        navigate("/edit-profile")
    }

    return(
        <>
            <div className="flex justify-between py-8 px-10">
                <div className="text-gray-300 px-25 text-center mt-10">
                    <h1 className="text-4xl font-sans font-medium" >Welcome <span className="uppercase font-bold">&nbsp;{profileData?.fullName}👋</span></h1>
                    <p className="pt-3 font-sans text-lg font-light">Track your money smarter.</p>
                    <p>See where your money goes and stay on budget.</p>
                </div>
                <div className="px-25 text-gray-300">
                    <div className=" w-50 h-50 rounded-full overflow-hidden">
                        <img src={profileData?.inputFile} alt="Profile icon" />
                    </div>
                    <div className="pt-5 ps-5  font-sans font-medium">
                        <h1 className="text-lg capitalize">{profileData?.fullName}</h1>
                        <h1 className="text-sm">{profileData?.bio}</h1>
                    </div>
                    
                        <button className="bg-transparent mt-3 w-40 h-12 rounded border border-[#132739]" 
                        onClick={(e)=>editProfileChange(e)}>
                            Edit Profile
                        </button>
                    
                </div>
            </div>
        </>
    )
}

export default Profile