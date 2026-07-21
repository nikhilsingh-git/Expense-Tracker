import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export const ProfileContext = createContext();

const ContextData = ({ children }) => {

      const [profileData , setProfileData] = useState()
      const [loading , setLoading] = useState(true)

        useEffect(()=>{
        const getData = async()=>{
            try {
                const response = await axios.get('http://localhost:3000/api/auth/getProfileData' , {withCredentials:true})
                 setProfileData(response.data.profileData)
                  
            } catch (error) {
             const errorMsg = error.response?.data?.message || error.message
            }
            finally{
                setLoading(false)
            }
        }
         getData()
       
    },[])
    

    return (
        <ProfileContext.Provider value={{
            loading,
            profileData
        }}>
            {children}
        </ProfileContext.Provider>
    );
};

export default ContextData;