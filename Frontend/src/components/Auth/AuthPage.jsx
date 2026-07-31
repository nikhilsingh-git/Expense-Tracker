import taskhub from '../../assets/taskhub.svg'
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import axios from 'axios'
import { useContext } from 'react';
import {ProfileContext} from '../context/ProfileContext'
import {ExpenseContext} from '../context/ExpenseContext'
import { WalletContext } from '../context/WalletContext';

const AuthPage = () =>{

    const userOrEmail = useRef()
    const password = useRef()

    const [errorMsg , setErrorMsg] = useState("")

    // const {fatchProfile} = useContext(ProfileContext)
    // const {fatchMonthlyExpense} = useContext(ProfileContext)
    // const {fatchMonthlyIncome} = useContext(ProfileContext)

    // const {fatchIncome} = useContext(ExpenseContext)
    // const {fatchExpense} = useContext(ExpenseContext)

    // const {fatchWalletData} = useContext(WalletContext)

    const navigate = useNavigate()

    const handelOnLoginClick = async(e) =>{
        e.preventDefault()
      const loginData ={
            userOrEmail:userOrEmail.current.value,
            password:password.current.value
      }
      try {
            const response = await axios.post('http://localhost:3000/api/auth/login' , loginData ,{withCredentials:true})
            if(response.data.user.isProfileCreated){
                // await fatchProfile()
                // await fatchMonthlyExpense()
                // await fatchMonthlyIncome()
                // await fatchIncome()
                // await fatchExpense()
                // await fatchWalletData()
                
                navigate('/api/auth/client-handel' ,{
                    replace:true
                })
            }
            if(!response.data.user.isProfileCreated){
                navigate('/api/auth/create-profile')
            }
            
            userOrEmail.current.value = ""
            password.current.value =""
      } catch (error) {
         const errorMsg = error.response?.data?.message || error.message;
         setErrorMsg(errorMsg)
      }

    }

    const onChange = () =>{
        setErrorMsg('')
    }

    return(
        <>
    <div className=" md:flex  ">
            <div className="bg-blue-500 md:w-1/2 h-screen rounded-br-[500px] text-center text-white"> 
                <h1 className="text-3xl font-bold mt-30">New Here ?</h1>
                <div>
                    <p className="text-sm font-semibold font-sans mt-5">Sing Up To 'EXPENSE TRACKER SYSTRM' For Better Experince!</p>
                    <Link to='/api/auth/register'><button className="w-40 cursor-pointer h-12 bg-transparent mt-4 rounded-4xl font-bold border text-lg uppercase
                    hover:bg-white hover:text-blue-500 hover:transition-all duration-300 ease-in-out">Sing up</button></Link>
                </div >
                <div className=" h-80 w-80 ms-20 mt-15">
                    <img src="https://expense-tracker-system.netlify.app/images/login%20images/login.svg" alt="" className='hidden md:block' />
                </div>
            </div>
            
            <div>
                <div className="mt-30 mx-35">
                        <form action="">
                            <div className="flex flex-col gap-10 relative">
                                <h1 className="uppercase mx-35 text-3xl font-bold">sing in</h1>
                                <span className='absolute top-23 left-5 opacity-60'><FaUser /></span>
                                <input type="text" placeholder="Username or Email" className="w-110 h-12 border  rounded-2xl
                                outline-none hover:border-gray-950 hover:border-2  placeholder-gray-500 pl-10 font-medium
                                focus:border-blue-500 focus:bg-transparent focus:shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                                ref={userOrEmail} 
                                onChange={onChange}/>
                                <span className='absolute top-45 left-5 opacity-60'><FaLock /></span>
                                <input type="password" placeholder="Password" className="w-110 h-12 border  rounded-2xl
                                outline-none hover:border-gray-950 hover:border-2 placeholder-gray-500 pl-10 font-medium
                                focus:border-blue-500 focus:bg-transparent focus:shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                                ref={password} 
                                onChange={onChange}/>
                                <button className="w-40 h-12 bg-transparent rounded-2xl mx-35 font-bold border uppercase cursor-pointer
                                hover:bg-blue-400 hover:text-white hover:transition-all duration-400 ease-in-out" 
                                onClick={e =>handelOnLoginClick(e)}>Login</button>
                                <div className='text-rose-600 ms-5 font-sans font-medium text-md'>{errorMsg}</div> 
                            </div>
                    
                        </form>
                </div>
                    
                <div className='flex justify-center mt-20'>
                        <div className='border-t border-gray-600/80 mt-3 w-full'></div>
                        <span className='ms-4 text-md font-medium w-70 text-gray-400 font-sans'>Or Login With!</span>
                        <div className='border-t border-gray-600/80 mt-3 w-full'></div>
                </div>

                <div className=''>
                        <div className='flex justify-center items-center mt-15 mx-65 text-4xl gap-10 rounded-2xl w-60 h-20 
                        hover:shadow-[0_0_15px_rgba(107,114,128,0.3)] hover:transition-all duration-500 ease-in-out'>
                            <div className=' rounded-2xl cursor-pointer hover:shadow-[0_0_18px_rgba(0,0,0,0.25)]'><FaGithub /></div>
                            <div className='rounded-2xl cursor-pointer hover:shadow-[0_0_20px_rgba(244,63,94,0.4)]'><FcGoogle /></div>
                            <div className='rounded-2xl cursor-pointer hover:shadow-[0_0_20px_rgba(24,119,242,0.4)]'><FaFacebook /></div>
                        </div>
                </div>
            </div>    
    </div>
        </>
    )
}

export default AuthPage