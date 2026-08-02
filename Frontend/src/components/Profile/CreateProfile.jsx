import { useContext} from "react"
import { useRef } from "react"
import { ProfileContext } from "../context/ProfileContext"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useState } from "react";
import { WalletContext } from "../context/WalletContext"
import { ExpenseContext } from "../context/ExpenseContext"
import { FaArrowRight } from "react-icons/fa"

const CreateProfile = () =>{

const [errorMsg , setErrorMsg] = useState("")
const [image , setImage] = useState (null)

const {fatchProfile} = useContext(ProfileContext)
const {fatchMonthlyExpense} = useContext(ProfileContext)
const {fatchMonthlyIncome} = useContext(ProfileContext)

const {fatchIncome} = useContext(ExpenseContext)
const {fatchExpense} = useContext(ExpenseContext)

const {fatchWalletData} = useContext(WalletContext)

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

  const navigate = useNavigate()
    
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


const haldelFormSubmit = async(e) =>{
 e.preventDefault()
 const profileData={
      inputFile : inputFile.current.files[0],
      fullName :fullName.current.value,
      email : email.current.value,
      gender : gender.current.value,
      dob : dob.current.value,
      occupation : occupation.current.value,
      currency : currency.current.value,
      monthlyBudget : monthlyBudget.current.value,
      address  : address.current.value,
      bio : bio.current.value
 }

    const formData = new FormData(e.target)

        try {
            const response = await axios.post('http://localhost:3000/api/auth/profile' , formData , {withCredentials:true})
                await fatchProfile()
                await fatchMonthlyExpense()
                await fatchMonthlyIncome()
                await fatchIncome()
                await fatchExpense()
                await fatchWalletData()
            navigate('/api/auth/client-handel' , {replace :true})
        } catch (error) {
            const errorMsg = error.response?.data?.message || error.message;
            setErrorMsg(errorMsg)

            fullName.current.value = ""
            inputFile.current.value = ""
            email.current.value = ""
            gender.current.value = ""
            dob.current.value = ""
            occupation.current.value = ""
            currency.current.value = ""
            monthlyBudget.current.value = ""
            address.current.value = ""
            bio.current.value = ""
        }

}

const onChange = () =>{
    setErrorMsg("")
}

const haldelOnSkip = async(e)=>{

    console.log("skip Clicked!")

    const data = {
        inputFile:"",
        fullName: "",
        email: "",
        gender: "",
        dob: "",
        occupation: "",
        currency: "",
        monthlyBudget: 0,
        address: "",
        bio: ""
    };
        try {
            const response = await axios.post('http://localhost:3000/api/auth/profile' , data , {withCredentials:true})
                await fatchProfile()
                await fatchMonthlyExpense()
                await fatchMonthlyIncome()
                await fatchIncome()
                await fatchExpense()
                await fatchWalletData()
            navigate('/api/auth/client-handel' , {replace :true})
        
        } catch (error) {
            const errorMsg = error.response?.data?.message || error.message;
            setErrorMsg(errorMsg)
            console.log(errorMsg)

            fullName.current.value = ""
            inputFile.current.value = ""
            email.current.value = ""
            gender.current.value = ""
            dob.current.value = ""
            occupation.current.value = ""
            currency.current.value = ""
            monthlyBudget.current.value = ""
            address.current.value = ""
            bio.current.value = ""
        }
}

    return(
        <>
        <div className="min-h-screen bg-slate-300 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="m-auto  bg-slate-200 w-1/2 h-auto shadow-lg rounded-4xl">
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold capitalize pt-5 font-sans text-slate-800">Setup your Profile</h1>
                    <p className="text-sm pt-1 font-sans text-slate-500">Let's personalize your Expense Tracker account</p>
                </div>
                <form action="" className="font-sans text-sm py-10"
                onSubmit={(e)=>haldelFormSubmit(e)}
                onChange={onChange}>
                    <p className="text-red-600 font-sans text-md mt-5 ms-15">{errorMsg}</p> 

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
                    <div className="px-15"> 
                       <button
                       type="submit"
                       className="w-full h-9 mt-5 border bg-indigo-500 cursor-pointer text-slate-200 rounded-lg">Create Profile</button>
                    </div>
                     <div className="flex text-md relative hover:font-medium mt-3 hover:text-blue-400 ms-160">
                        <button 
                        type="button"
                        className=" mt-3 font-sans cursor-pointer "
                        onClick={haldelOnSkip}>Skip</button>
                        <h1 className="absolute top-4 left-8 cursor-pointer"><FaArrowRight /></h1>         
                    </div>
                </form>
                
            </div>
        </div>
        </>
    )
}


export default CreateProfile



  // Profile Image change handler

  // const handleImageChange = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();     // FileReader() => FileReader is a function
  //     reader.onloadend = () => {           
  //       setImagePreview(reader.result);
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };
