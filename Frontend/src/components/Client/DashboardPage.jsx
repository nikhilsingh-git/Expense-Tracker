import Profile from "../Expense/Profile"
import Card from "../Expense/Card"
import OverView from "../Expense/OverView"
import { useContext, useEffect, useState } from "react"
import axios from 'axios'
import { ProfileContext } from "../context/ProfileContext"

const DashboardPage = () =>{
   
    const {loading} = useContext(ProfileContext) 
    
    if (loading) {
    return (
        <div className="flex h-screen items-center justify-center bg-gray-950 text-cyan-400 text-xl font-bold">
            Loading Dashboard...
        </div>
        )
    }

    return(
        <>
        <Profile></Profile>
        <Card ></Card>
        <OverView ></OverView>
        </>
    )
}

export default DashboardPage