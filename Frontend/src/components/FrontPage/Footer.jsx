const Footer = () =>{

return(   
<>
    <div className="text-center bg-[#131c28] py-6 border-t border-cyan-500/20
                shadow-[0_-10px_20px_rgba(6,182,212,0.15)] 
                transition-all duration-500 ease-in-out
                hover:shadow-[0_-15px_30px_rgba(6,182,212,0.3)] hover:border-cyan-400/50">
     <h1 className="text-gray-400 font-sans text-sm tracking-wide transition-colors duration-300">
        &copy; 2026 Expense Tracker is created by {" "}
        <span className="text-cyan-400 font-semibold cursor-pointer no-underline 
                   inline-block transition-all duration-300 ease-in-out
                   hover:text-cyan-300 hover:scale-105 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]">
            Nikhil Singh
      </span>
     </h1>
    </div>
</>

)
    
}

export default Footer