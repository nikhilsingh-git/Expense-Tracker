import { AiOutlineSecurityScan } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";

import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6"
import { TfiHeadphoneAlt } from "react-icons/tfi";

import contect from "../../assets/contect.png"
import contect_1 from "../../assets/contect-1.png"
import { useRef } from "react";
import emailjs from "@emailjs/browser"


const Contect = ()=>{

const form = useRef()
    const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_f65utw1', 'template_yb21de6', form.current, 'Bmf3ElP_F58wKrRNy')
      .then((result) => {
          alert("Message bhej diya gaya hai! 👍");
          form.current.reset()
      }, (error) => {
          alert("Kuch galti hui, phir se try karein. ❌");
      });
  };

return(
<>  
    <div className="pb-20 bg-[#131c28]">
    <div className="md:flex justify-around pr-10  w-full pb-10 text-gray-200"> 
    <div className=" md:ms-25 mx-8">
        
        <div className=" bg-[#131c28] text-gray-200 pt-10 pb-12 relative ">
            <div className="w-15 h-0 border-t-2 border-green-400 absolute left-15 top-8"></div>
            <h1 className="text-5xl font-sans font-semibold  capitalize ms-10">Contect <span className="text-green-400">Us</span></h1>
            <p className="text-sm font-sans font-light leading-6 mt-2 ms-12">We'd love to hear from you! Whether you have a question feedback, <br />
             or need support, we're here to help</p>
        </div>
        <div>
            <form ref={form} onSubmit={sendEmail}>
                <div className="flex flex-col px-5 py-5 border-3 border-[#1329] rounded-2xl">
                    <h1 className="text-2xl font-bold font-sans ">Send Us a Message</h1>
                    <p className="text-sm font-sans font-light mt-0.5 mb-5">Fill out the form below and we'll get back to you as soon possible.</p>
                <label>Your Name:</label>
                <input type="text" placeholder="Your name" 
                className="pl-4  w-full h-10 mb-6 mt-2 rounded  outline-none border border-[#132] focus:ring-1 focus:ring-blue-600 focus:outline-1 focus:outline-blue-600
                focus:shadow-[0_0_10px rgba(50,135,255,0.4)]"/>
                <label >Your Email:</label>
                <input type="email" placeholder="you@u.com"
                className="pl-4  w-full h-10 mb-6 mt-2 rounded outline-none border border-[#132] focus:ring-1 focus:ring-blue-600 focus:outline-1 focus:outline-blue-600 "/>
                <label>Subject:</label>
                <input type="text" placeholder="Subject"
                className="pl-4  w-full h-10 mb-6 mt-2 rounded outline-none border border-[#132] focus:ring-1 focus:ring-blue-600 focus:outline-1 focus:outline-blue-600 "/>
                <label >Message:</label>
                <textarea placeholder="Message..."
                className="pl-4  w-full  mb-6 mt-2 rounded outline-none border border-[#132] focus:ring-1 focus:ring-blue-600 focus:outline-1 focus:outline-blue-600 "
                rows={4}></textarea>
                <button className="text-md md:mx-30 mx-14 border border-gray-300 rounded-xl font-sans font-medium text-gray-100 bg-transparent w-45 h-10 text-center cursor-pointer
                hover:bg-emerald-600 hover:text-gray-950 hover:border-[#132736]">Send Message</button>

                <div className="relative">
                    <h1 className="absolute text-2xl text-green-500 top-4.5 left-4"><AiOutlineSecurityScan className="text-green-500"/></h1>
                    <p className="text-sm font-sans font-medium  py-5 ps-12">We usually respond within 24 hours.</p>
                </div>
                </div>
            </form> 
        </div>
    </div>
    <div >
        <div className="w-40 h-45 ms-110 flex justify-around ">
           <img src={contect} alt="" />
           <img src={contect_1} alt="" />
        </div>
        <div className="border-3 rounded-2xl px-5 py-2 border-[#1329] my-10 mx-8 md:my-0 md:mx-0">
        <div className="md:w-180 md:mx-10 cursor-pointer hover:translate-y-2">
            <div className="w-full h-26 border-2 border-[#1329] rounded-2xl my-12 relative flex flex-col justify-center ">
                <div className="absolute w-15 h-15  text-3xl left-5 top-5 bg-green-400 rounded-full flex justify-center items-center font-bold text-black ">
                    <MdEmail />
                </div>
                <div className="ms-25 font-sans pt-2">
                <h1 className="md:text-2xl text-lg font-bold">Email</h1>
                <p className="md:text-sm text-xs pb-5 pt-1" >nikhilsingh811528@gmail.com</p>
                </div>
            </div>
        </div>

         <div className="md:w-180 md:mx-10 cursor-pointer hover:translate-y-2">
            <div className="w-full h-26 border-2 border-[#1329] rounded-2xl my-12 relative flex flex-col justify-center">
                <div className="absolute w-15 h-15  text-3xl left-5 top-5 bg-green-400 rounded-full flex justify-center items-center font-bold text-black ">
                    <FaPhone />
                </div>
                <div className="ms-25 font-sans pt-2">
                <h1 className="md:not-[]:text-2xl text-lg font-bold">Phone & Whatsapp</h1>
                <p className="md:text-sm text-xs pb-5 pt-1" >+91 6388919519</p>
                </div>
            </div>
        </div>

         <div className="md:w-180 md:mx-10 cursor-pointer hover:translate-y-2">
            <div className="w-full h-26 border-2 border-[#1329] rounded-2xl my-12 relative flex flex-col justify-center">
                <div className="absolute w-15 h-15  text-3xl left-5 top-5 bg-green-400 rounded-full flex justify-center items-center font-bold text-black ">
                    <FaLocationDot />
                </div>
                <div className="ms-25 font-sans pt-2">
                <h1 className="md:text-2xl text-lg font-bold">Address</h1>
                <p className="md:text-sm text-xs pb-5 pt-1" >Unwal, Gorakhpur <br />U.P , India - 273406</p>
                </div>
            </div>
        </div>

         <div className="md:w-180 md:mx-10 cursor-pointer hover:translate-y-2 ">
            <div className="w-full h-26 border-2 border-[#1329] rounded-2xl my-12 relative flex flex-col justify-center">
                <div className="absolute w-15 h-15  text-3xl left-5 top-5 bg-green-400 rounded-full flex justify-center items-center font-bold text-black ">
                    <IoMdTime />
                </div>
                <div className="ms-25 font-sans pt-2">
                <h1 className="md:text-2xl text-lg font-bold">Working Time</h1>
                <p className="md:text-sm text-xs pb-5 pt-1" >Monday - Friday <br /> 
                 11:00 AM - 7:00 PM
                </p>
                </div>
            </div>
        </div>
        </div>
    </div>
    </div>
    <div className="md:px-40 px-8">
         <div className="w-full  border-2 border-[#1329] rounded-2xl flex justify-between">
            <div className="w-full h-26 relative">
                <div className="absolute w-15 h-15 text-3xl md:left-5 left-3 top-5 bg-green-400 rounded-full flex justify-center items-center font-bold text-black ">
                    <TfiHeadphoneAlt />
                </div>
                <div className="md:ms-25 ms-22  font-sans pt-2 text-gray-200 md:mt-2 mt-5">
                <h1 className="md:text-2xl text-xs font-bold">Contect with me</h1>
                <p className="md:text-sm text-[8px] pb-5 pt-1" >I'm available for freelance projects and collaborations.</p>
                </div>
            </div>
            <div className="flex justify-around items-center md:gap-8 gap-4 md:text-4xl text-lg pr-10 text-gray-200">
                <a href="https://www.instagram.com/ii_nikhil_x07_ii?utm_source=qr&igsh=MmFwOTVlemQ5Zm14" target="_blank" rel="noopener noreferrer"
                className="cursor-pointer hover:font-bold font-sans hover:translate-y-1 hover:shadow-[0_0_10px_rgba(150,150,150,0.5)]">
                    <FaInstagram />
                </a>
                  <a href="https://github.com/nikhilsingh-git"  target="_blank" rel="noopener noreferrer"
                className="cursor-pointer hover:font-bold font-sans hover:translate-y-1 hover:shadow-[0_0_10px_rgba(150,150,150,0.5)]">
                    <FaGithub />
                </a>
                  <a href="https://www.instagram.com/ii_nikhil_x07_ii?utm_source=qr&igsh=MmFwOTVlemQ5Zm14" target="_blank" rel="noopener noreferrer"
                className="cursor-pointer hover:font-bold font-sans hover:translate-y-1 hover:shadow-[0_0_10px_rgba(150,150,150,0.5)]">
                    <FaLinkedin />
                </a>
            </div>
        </div>
    </div>
    </div>
</>
)

}

export default Contect