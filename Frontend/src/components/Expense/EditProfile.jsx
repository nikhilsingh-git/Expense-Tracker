import { Profiler, useContext} from "react"
import { useRef } from "react"
import { ProfileContext } from "../context/ProfileContext"
import { useNavigate } from "react-router-dom"
import { useState } from "react";
import { useEffect } from "react";

const EditProfile = () =>{

const [errorMsg , setErrorMsg] = useState("")
const [image , setImage] = useState (null)
const {profileData} =useContext(ProfileContext)
const {editProfile} = useContext(ProfileContext)

const navigate = useNavigate()

const inputFile = useRef()
const fullName = useRef()
const email = useRef()
const gender = useRef()
const dob = useRef()
const occupation = useRef()
const currency = useRef()
const monthlyBudget = useRef()
const address = useRef()
const bio = useRef()


const haldelFileChange = (e) =>{
    const file = e.target.files[0]
    if(file){
        const reader = new FileReader() 
        reader.onloadend = ()=>{
        setImage(reader.result)
        }
        reader.readAsDataURL(file)
    }
}

useEffect(() => {
  if (!profileData) return;

  fullName.current.value = profileData?.fullName || "";
  email.current.value = profileData?.email || "";
  gender.current.value = profileData?.gender || "";
  dob.current.value = profileData?.dob ? new Date(profileData.dob).toISOString().split("T")[0]  : ""
  occupation.current.value = profileData?.occupation || "";
  currency.current.value = profileData?.currency || "";
  monthlyBudget.current.value = profileData?.monthlyBudget || "";
  address.current.value = profileData?.address || "";
  bio.current.value = profileData?.bio || "";

  if (profileData.inputFile) {
    setImage(profileData.inputFile);
  }
}, [profileData]);

const updateProfile =(e)=>{
    e.preventDefault()

      const formData = new FormData(e.target) 

    editProfile(formData)
    navigate('/api/auth/client-handel')

}

const backClicked = () =>{
    e.preventDefault()
    navigate('/api/auth/client-handel')
}
    return(
        <>
        <div className="min-h-screen bg-slate-300 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="m-auto  bg-slate-200 w-1/2 h-auto shadow-lg rounded-4xl">
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold capitalize pt-5 font-sans text-slate-800">Edit Your Profile</h1>
                    <p className="text-sm pt-1 font-sans text-slate-500">Personalize your profile by updating the details that matter.</p>
                </div>
                <form className="font-sans text-sm py-10"
                onSubmit={(e)=>updateProfile(e)}>
                    <div className="flex flex-col items-center justify-center">
                        <div className="border-2 border-dashed border-slate-500 bg-slate-300 hover:border-indigo-500 cursor-pointer rounded-full w-30 h-30 text-center
                        flex items-center justify-center overflow-hidden"
                        onClick={e=>{inputFile.current.click(e)}}>
                            {image? <img src={image} alt="preview image" className="w-full h-full object-cover border-0"/> :
                            <h1 className="text-xs font-sm text-gray-500">uploade image</h1>
                            }
                        </div>
                        <input type="file" name="inputFile" id="" 
                         className="hidden"
                         ref={inputFile}
                         accept="image/*"
                         onChange={(e)=>haldelFileChange(e)}/>
                        <button className="py-2 text-md cursor-pointer font-sans font-stretch-semi-condensed border-0 text-slate-900 hover:text-indigo-600"
                        onClick={e=>{inputFile.current.click(e)}}>
                            choose file
                        </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-3 px-15">
                        
                         <div>
                            <label className="block text-sm font-medium text-slate-700">Full Name</label>
                            <input type="text" className="outline-0 mt-1 border w-full h-9 rounded-lg bg-transparent border-slate-800 
                            focus:ring-1 focus:outline-1 focus:outline-blue-600 focus:ring-blue-600 pl-3 placeholder:text-sm placeholder:text-gray-400"
                            placeholder="Enter Full Name"
                            ref={fullName}
                            name="fullName"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700">Email Address</label>
                            <input type="text" className="outline-0 mt-1 border w-full h-9 rounded-lg bg-transparent border-slate-800 
                            focus:ring-1 focus:outline-1 focus:outline-blue-600 focus:ring-blue-600 pl-3 placeholder:text-sm placeholder:text-gray-400"
                            placeholder="you@example.com"
                            ref={email}
                            name="email"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700">Gender</label>
                            <select type="text" className="outline-0 mt-1 border w-full h-9 rounded-lg  border-slate-800 cursor-pointer
                            focus:ring-1 focus:outline-1 focus:outline-blue-600 focus:ring-blue-600 pl-3 placeholder:text-sm placeholder:text-gray-400"
                            ref={gender}
                            name="gender"
                            >
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>   
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700">Date of Birth</label>
                            <input type="date" className="outline-0 mt-1 border w-full h-9 rounded-lg bg-transparent border-slate-800 cursor-pointer
                            focus:ring-1 focus:outline-1 focus:outline-blue-600 focus:ring-blue-600 pl-3 placeholder:text-sm placeholder:text-gray-400"
                            placeholder="Enter Your Age"
                            ref={dob}
                            name="dob"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700">Occupation</label>
                            <input type="text" className="outline-0 mt-1 border w-full h-9 rounded-lg bg-transparent border-slate-800 
                            focus:ring-1 focus:outline-1 focus:outline-blue-600 focus:ring-blue-600 pl-3 placeholder:text-sm placeholder:text-gray-400"
                            placeholder="Software Engineer,Student etc."
                            ref={occupation}
                            name="occupation"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700">Preferred Currency</label>
                            <select  className="outline-0 mt-1 border w-full h-9 rounded-lg bg-transparent border-slate-800 cursor-pointer
                            focus:ring-1 focus:outline-1 focus:outline-blue-600 focus:ring-blue-600 pl-3 placeholder:text-sm placeholder:text-gray-400"
                            ref={currency}
                            name="currency"
                            >
                                <option value="INR">INR (₹)</option>
                                <option value="USD">USD ($)</option>
                                <option value="EUR">EUR (€)</option>
                                 <option value="GBP">GBP (£)</option>
                            </select>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-4 px-15 mt-3">
                        <div>
                            <label className="block text-sm font-medium text-slate-700">Monthly Budget Target</label>
                            <input type="text" className="outline-0 mt-1 border w-full h-9 rounded-lg bg-transparent border-slate-800 
                            focus:ring-1 focus:outline-1 focus:outline-blue-600 focus:ring-blue-600 pl-3 placeholder:text-sm placeholder:text-gray-400"
                            placeholder="e.g. 50000"
                            ref={monthlyBudget}
                            name="monthlyBudget"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700">Address</label>
                            <input type="text" className="outline-0 mt-1 border w-full h-9 rounded-lg bg-transparent border-slate-800 
                            focus:ring-1 focus:outline-1 focus:outline-blue-600 focus:ring-blue-600 pl-3 placeholder:text-sm placeholder:text-gray-400"
                            placeholder="e.g. Apartment, Street, City, State"
                            ref={address}
                            name="address"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700">Bio</label>
                            <textarea type="text" className="outline-0 mt-1 border w-full rounded-lg bg-transparent border-slate-800 scrollbar-hide
                            focus:ring-1 focus:outline-1 focus:outline-blue-600 focus:ring-blue-600 pl-3 placeholder:text-sm placeholder:text-gray-400"
                            placeholder="tell us a bit about yourself or your finanial goals..."
                            rows="6"
                            ref={bio}
                            name="bio"
                            >
                            </textarea>
                        </div>
                    </div >
                    <div className="px-15 font-sans font-medium "> 
                       <button type="submit" className="w-50 h-9 mt-5  bg-emerald-500 cursor-pointer text-slate-950 rounded-lg ms-10
                       hover:text-white">Update Profile</button>
                       <button className=" w-50 h-9 border border-[#132639] bg-transparent cursor-pointer text-slate-950  rounded-lg ms-30"
                       onClick={backClicked}>Back</button>
                    </div>
                   
                </form>
            </div>
        </div>
        </>
    )
}


export default EditProfile
