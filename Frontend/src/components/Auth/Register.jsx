
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { GiConfirmed } from "react-icons/gi";
import { useEffect, useRef } from "react";
import axios from 'axios'
import { useState } from "react";

const Regester = () =>{
 
    const username = useRef()
    const email = useRef()
    const password = useRef()
    const ConfirmPassword = useRef()

    const [msg , setMag] = useState("")

    const navigate = useNavigate()

    const handelOnSingUpClicked = async(e) =>{
         e.preventDefault()
        const registerData = {
            username :username.current.value,
            email:email.current.value,
            password:password.current.value,
            ConfirmPassword:ConfirmPassword.current.value
        }
        
        try {
            const response = await axios.post('http://localhost:3000/api/auth/register' , registerData)
            console.log('Register successfully!');
            console.log(response.data)
            navigate('/api/auth/login')
            
            username.current.value = ""
            email.current.value = ""
            password.current.value = ""
            ConfirmPassword.current.value = ""
        
        } catch (error) {
            const errorMsg = error.response?.data?.message || error.message;
            setMag(errorMsg)
        }

    }

    const onChange = (e)=>{
        setMag("")
    }
  
    return(
        <>
            <div className=" md:flex  ">
                        
                        <div>
                            <div className="mt-15 mx-35">
                                    <form action="" onSubmit={(e)=>handelOnSingUpClicked(e)}>
                                        <div className="flex flex-col gap-10 relative">
                                            <h1 className="uppercase mx-36 text-3xl font-bold">sing up</h1>

                                            <span className='absolute top-23 left-5 opacity-60'><FaUser /></span>
                                            <input type="text" placeholder="Username " className="w-110 h-12 border  rounded-2xl
                                            outline-none hover:border-gray-950 hover:border-2  placeholder-gray-500 pl-10 font-medium
                                            focus:border-blue-500 focus:bg-transparent focus:shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                                            ref={username}
                                            onChange={onChange}/>
                                            
                                            <span className='absolute top-45 left-5 opacity-60'><MdMarkEmailUnread /></span>
                                            <input type="email" placeholder="Email " className="w-110 h-12 border rounded-2xl
                                            outline-none hover:border-gray-950 hover:border-2  placeholder-gray-500 pl-10 font-medium
                                            focus:border-blue-500 focus:bg-transparent focus:shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                                            ref={email}
                                            onChange={onChange}/>

                                            <span className='absolute top-67 left-5 opacity-60'><FaLock /></span>
                                            <input type="password" placeholder="Password" className="w-110 h-12 border  rounded-2xl
                                            outline-none hover:border-gray-950 hover:border-2 placeholder-gray-500 pl-10 font-medium
                                            focus:border-blue-500 focus:bg-transparent focus:shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                                            ref={password}
                                            onChange={onChange}/>

                                            <span className='absolute top-89 left-5 opacity-60'><GiConfirmed /></span>
                                            <input type="password" placeholder="Confirm Password" className="w-110 h-12 border  rounded-2xl
                                            outline-none hover:border-gray-950 hover:border-2 placeholder-gray-500 pl-10 font-medium
                                            focus:border-blue-500 focus:bg-transparent focus:shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                                            ref={ConfirmPassword}
                                            onChange={onChange}/>

                                            <button className="w-40 h-12 bg-transparent rounded-2xl mx-35 font-bold border uppercase cursor-pointer
                                            hover:bg-blue-400 hover:text-white hover:transition-all duration-400 ease-in-out"
                                            type="sumit">Sing up</button>
                                            <p className="text-red-600 font-sans font-medium text-md p-0 my-0 ms-5 capitalize">{msg}</p>
                                        </div>
                                    </form>
                            </div>

                            <div className='flex justify-center mt-10'>
                                <div className='border-t border-gray-600/80 mt-3 w-full'></div>
                                <span className='mx-4 text-md font-medium text-gray-400 font-sans uppercase'>home!</span>
                                <div className='border-t border-gray-600/80 mt-3 w-full'></div>
                            </div>

                            <div>
                                <Link to='/'><div className='flex justify-center items-center mt-5 mx-65 text-4xl gap-10 rounded-2xl w-60 h-20 
                                hover:shadow-[0_0_15px_rgba(107,114,128,0.3)] hover:transition-all duration-500 ease-in-out cursor-pointer'>
                                <div className=' rounded-2xl cursor-pointer hover:shadow-[0_0_18px_rgba(0,0,0,0.25)]'><FaHome /></div>
                                <h1 className="text-[20px] uppercase font-sans font-medium hover:text-shadow-[0_0_25px_rgba(0,0,0,0.25)]">home</h1>
                                </div>
                                </Link>
                            </div>

                        </div> 
      
                        <div className="bg-blue-500 md:w-1/2 h-screen rounded-bl-[500px] text-center text-white"> 
                        <h1 className='text-3xl font-bold mt-15 font-serif'>Take Control of Your Money!</h1>
                            <div>
                                <p className="text-lg font-medium font-sans py-5 text-gray-300 ">Sign up in seconds to start tracking,<br />
                                 <span className='text-cyan-400/90 font-semibold ' >budgeting</span> , and saving smarter every day.</p>
                            </div >
                            <div className=" h-80 flex justify-end w-full mt-35">
                                <img src="https://expense-tracker-system.netlify.app/images/signup%20images/signup.svg" alt="" className='hidden md:block object-contain' />
                            </div>
                        </div>   
                </div>
        </>
    )
}

export default Regester