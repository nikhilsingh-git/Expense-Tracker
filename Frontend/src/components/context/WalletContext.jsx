import { Children } from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

import { createContext } from "react";

export const WalletContext = createContext()

const WalletData = ({children}) =>{

    const [wallet , setWallet] = useState()
    const [loading , setLoading] = useState(true)

     const fatchWalletData = async()=>{
            try {
                const response = await axios.get('http://localhost:3000/api/details/getWalletData' , {withCredentials:true})
                setWallet(response.data.walletData)
            } catch (error) {
             const errorMsg = error.response?.data?.message || error.message
            }
            finally{
                setLoading(false)
            }
        }
     useEffect(()=>{
        fatchWalletData()
    },[])

    return(
        <WalletContext.Provider value={{
            loading,
            wallet,
            fatchWalletData,
            setLoading,
            setWallet
        }}>
            {children}
        </WalletContext.Provider>
    )
}

export default WalletData